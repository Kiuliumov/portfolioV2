import React, { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const safePage = Math.min(currentPage, Math.max(totalPages, 1));

  const startIndex = (safePage - 1) * itemsPerPage;
  const currentItems = items.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  if (items.length === 0) {
    return (
      <p className="py-16 text-center text-gray-400">
        {emptyMessage}
      </p>
    );
  }

  const paginationClass =
    "!border-slate-700 !bg-slate-800/60 !text-slate-300 " +
    "hover:!border-slate-500 hover:!bg-slate-700/70 " +
    "hover:!text-slate-100 disabled:!opacity-30";

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
            <span className="font-semibold text-slate-200">
              {safePage}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-400">
              {totalPages}
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Button
              variant="pagination"
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage === 1}
              ariaLabel="Go to previous page"
              className={`!w-auto !h-11 !px-4 !rounded-xl ${paginationClass}`}
            >
              <FaChevronLeft aria-hidden="true" />
              <span className="hidden sm:inline">Previous</span>
            </Button>

            <div className="flex items-center gap-2">
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => {
                const isActive = safePage === page;

                return (
                  <Button
                    key={page}
                    variant={isActive ? "active" : "pagination"}
                    onClick={() => goToPage(page)}
                    ariaLabel={`Go to page ${page}`}
                    ariaCurrent={isActive ? "page" : undefined}
                    className={`!h-11 !w-11 !p-0 !rounded-xl ${
                      isActive
                        ? "!border-slate-500 !bg-slate-600 !text-white !shadow-md !shadow-black/10"
                        : paginationClass
                    }`}
                  >
                    {page}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="pagination"
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage === totalPages}
              ariaLabel="Go to next page"
              className={`!w-auto !h-11 !px-4 !rounded-xl ${paginationClass}`}
            >
              <span className="hidden sm:inline">Next</span>
              <FaChevronRight aria-hidden="true" />
            </Button>
          </div>

          <p className="text-xs sm:text-sm text-slate-500">
            Showing{" "}
            <span className="font-medium text-slate-300">
              {startIndex + 1}–
              {Math.min(startIndex + itemsPerPage, items.length)}
            </span>{" "}
            of{" "}
            <span className="font-medium text-slate-300">
              {items.length}
            </span>{" "}
            items
          </p>
        </nav>
      )}
    </div>
  );
}
