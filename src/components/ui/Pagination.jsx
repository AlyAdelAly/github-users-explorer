import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  darkMode,
}) => {
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const buttonClass = `p-2 rounded-lg transition-all duration-200 ${
    darkMode
      ? 'bg-gray-700 hover:bg-gray-600 text-white disabled:bg-gray-800 disabled:text-gray-500'
      : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 disabled:bg-gray-100 disabled:text-gray-400'
  }`;

  if (totalPages <= 1) return null;

  return (
    <div className='flex items-center justify-center space-x-2 mt-8'>
      <button
        onClick={() => onPageChange(1)}
        disabled={!canGoPrevious}
        className={buttonClass}
        title='First page'
      >
        <ChevronsLeft className='w-4 h-4' />
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canGoPrevious}
        className={buttonClass}
        title='Previous page'
      >
        <ChevronLeft className='w-4 h-4' />
      </button>

      <span
        className={`px-4 py-2 text-sm font-medium ${
          darkMode ? 'text-white' : 'text-gray-700'
        }`}
      >
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        className={buttonClass}
        title='Next page'
      >
        <ChevronRight className='w-4 h-4' />
      </button>

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={!canGoNext}
        className={buttonClass}
        title='Last page'
      >
        <ChevronsRight className='w-4 h-4' />
      </button>
    </div>
  );
};
