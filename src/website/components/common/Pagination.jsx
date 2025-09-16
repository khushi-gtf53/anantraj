import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center space-x-2">
            {pages.map((page, index) => (
                <React.Fragment key={page}>
                    <button
                        onClick={() => onPageChange(page)}
                        className={`px-[2px] text-sm ${currentPage === page
                            ? "font-bold text-black"
                            : "text-gray-500 hover:text-black"
                            }`}
                    >
                        {page}
                    </button>
                    {/* Add divider except for last item */}
                    {index < pages.length - 1 && (
                        <span className="text-gray-400">|</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Pagination;
