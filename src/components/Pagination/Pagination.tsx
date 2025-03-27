"use client"
import { useState } from "react";
import ArrowLeft from "../../assets/images/ArrowLeft.png";
import ArrowRight from "../../assets/images/ArrowRight.png";
import Image from "next/image";



export default function Pagination({ totalPages = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 py-4 text-gray-600">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-2 text-sm ${
          currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:text-gray-800"
        }`}
      >
         <Image
                  src={ArrowLeft} // Replace with actual image path
                  alt="Laptop and Mobile UI"
                  className="h-[15px]"
                /> Trang trước
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((page) => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1)
          .map((page, index, array) => (
            <div key={page} className="flex items-center">
              {index > 0 && array[index - 1] !== page - 1 && <span className="text-gray-500">...</span>}
              <button
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-lg ${
                  page === currentPage
                    ? "bg-green-100 text-green-800 font-semibold"
                    : "hover:text-gray-800"
                }`}
              >
                {page}
              </button>
            </div>
          ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-2 text-sm ${
          currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:text-gray-800"
        }`}
      >
        Trang kế tiếp <Image
                  src={ArrowRight} // Replace with actual image path
                  alt="Laptop and Mobile UI"
                  className="h-[15px]"
                />
      </button>
    </div>
  );
}
