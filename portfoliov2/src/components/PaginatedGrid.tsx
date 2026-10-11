import React, { useState } from "react";

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
      <p className="py-12 text-center text-gray-400">
        {emptyMessage}
      </p>
    );
  }

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
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            onClick={() => goToPage(safePage - 1)}
            disabled={safePage === 1}
            className="rounded-lg border border-purple-500/30 px-4 py-2 text-sm text-gray-300 transition hover:border-sky-400 hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                aria-current={safePage === page ? "page" : undefined}
                aria-label={`Go to page ${page}`}
                className={`h-10 w-10 rounded-lg border text-sm font-medium transition ${
                  safePage === page
                    ? "border-transparent bg-gradient-to-r from-purple-500 via-sky-500 to-indigo-500 text-white shadow-lg shadow-purple-500/20"
                    : "border-purple-500/30 bg-gray-900/60 text-gray-300 hover:border-sky-400 hover:text-sky-300"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            type="button"
            onClick={() => goToPage(safePage + 1)}
            disabled={safePage === totalPages}
            className="rounded-lg border border-purple-500/30 px-4 py-2 text-sm text-gray-300 transition hover:border-sky-400 hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Next
          </button>
        </nav>
      )}

      <p className="mt-4 text-center text-sm text-gray-500">
        Showing {startIndex + 1}–{Math.min(startIndex + itemsPerPage, items.length)} of{" "}
        {items.length} items
      </p>
    </div>
  );
}
