import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../components/Button";

interface PaginatedGridProps<T> {
	items: T[];
	itemsPerPage?: number;
	renderItem: (item: T, index: number) => React.ReactNode;
	getKey: (item: T, index: number) => React.Key;
	emptyMessage?: string;
}

export function PaginatedGrid<T>({
	items,
	itemsPerPage = 6,
	renderItem,
	getKey,
	emptyMessage = "No items to display.",
}: PaginatedGridProps<T>) {
	const [searchParams, setSearchParams] = useSearchParams();

	const totalPages = Math.ceil(items.length / itemsPerPage);
	const page = Number(searchParams.get("page")) || 1;
	const currentPage = Math.min(
		Number.isInteger(page) && page > 0 ? page : 1,
		Math.max(totalPages, 1),
	);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

	const updatePage = (page: number, replace = false) => {
		setSearchParams(
			(params) => {
				const next = new URLSearchParams(params);

				if (page === 1) next.delete("page");
				else next.set("page", String(page));

				return next;
			},
			{ replace, preventScrollReset: !replace },
		);
	};

	useEffect(() => {
		const rawPage = searchParams.get("page");

		if (rawPage !== (currentPage === 1 ? null : String(currentPage))) {
			updatePage(currentPage, true);
		}
	}, [currentPage, searchParams]);

	if (!items.length) {
		return <p className="py-16 text-center text-gray-400">{emptyMessage}</p>;
	}

	const paginationClass =
		"!border-slate-700 !bg-slate-800/60 !text-slate-300 hover:!border-slate-500 hover:!bg-slate-700/70 hover:!text-slate-100 disabled:!opacity-30";

	const pageButton = (page: number) => {
		const active = currentPage === page;

		return (
			<Button
				key={page}
				variant={active ? "active" : "pagination"}
				onClick={() => updatePage(page)}
				ariaLabel={`Go to page ${page}`}
				ariaCurrent={active ? "page" : undefined}
				className={`!h-11 !w-11 !rounded-xl !p-0 ${
					active
						? "!border-slate-500 !bg-slate-600 !text-white !shadow-md"
						: paginationClass
				}`}
			>
				{page}
			</Button>
		);
	};

	const navigationButton = (direction: "previous" | "next") => {
		const previous = direction === "previous";

		return (
			<Button
				variant="pagination"
				onClick={() => updatePage(currentPage + (previous ? -1 : 1))}
				disabled={previous ? currentPage === 1 : currentPage === totalPages}
				ariaLabel={`Go to ${direction} page`}
				className={`!h-11 !w-auto !rounded-xl !px-4 ${paginationClass}`}
			>
				{previous && <FaChevronLeft aria-hidden="true" />}
				<span className="hidden sm:inline">
					{previous ? "Previous" : "Next"}
				</span>
				{!previous && <FaChevronRight aria-hidden="true" />}
			</Button>
		);
	};

	return (
		<div>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
				{currentItems.map((item, index) => {
					const itemIndex = startIndex + index;

					return (
						<React.Fragment key={getKey(item, itemIndex)}>
							{renderItem(item, itemIndex)}
						</React.Fragment>
					);
				})}
			</div>

			{totalPages > 1 && (
				<nav
					aria-label="Pagination"
					className="mt-12 flex flex-col items-center gap-6"
				>
					<p className="text-sm text-slate-400">
						Page{" "}
						<span className="font-semibold text-slate-200">{currentPage}</span>{" "}
						of {totalPages}
					</p>

					<div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
						{navigationButton("previous")}
						<div className="flex items-center gap-2">
							{Array.from({ length: totalPages }, (_, i) => pageButton(i + 1))}
						</div>
						{navigationButton("next")}
					</div>

					<p className="text-sm text-slate-500">
						Showing{" "}
						<span className="font-medium text-slate-300">
							{startIndex + 1}–
							{Math.min(startIndex + itemsPerPage, items.length)}
						</span>{" "}
						of{" "}
						<span className="font-medium text-slate-300">{items.length}</span>{" "}
						items
					</p>
				</nav>
			)}
		</div>
	);
}
