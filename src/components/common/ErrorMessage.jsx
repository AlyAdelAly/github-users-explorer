import { AlertCircle } from 'lucide-react';

export const ErrorMessage = ({ message, onRetry, darkMode }) => (
  <div className='flex flex-col items-center justify-center py-12'>
    <AlertCircle
      className={`w-12 h-12 mb-4 ${darkMode ? 'text-red-400' : 'text-red-600'}`}
    />
    <h3
      className={`text-xl font-semibold mb-2 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}
    >
      Oops! Something went wrong
    </h3>
    <p
      className={`text-center mb-4 ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}
    >
      {message}
    </p>
    <button
      onClick={onRetry}
      className='px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors'
    >
      Try Again
    </button>
  </div>
);
