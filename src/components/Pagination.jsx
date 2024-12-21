// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => (
    <div className="flex justify-center mt-6 space-x-4">
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium ${
          currentPage === 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        } transition duration-300 ease-in-out`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium ${
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        } transition duration-300 ease-in-out`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
  
  export default Pagination;
  