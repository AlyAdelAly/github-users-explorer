import { Loader2 } from 'lucide-react';

export const LoadingSpinner = ({ darkMode, message = 'Loading users...' }) => (
  <div className='flex items-center justify-center py-12'>
    <div className='flex items-center space-x-2'>
      <Loader2
        className={`w-6 h-6 animate-spin ${
          darkMode ? 'text-teal-400' : 'text-teal-600'
        }`}
      />
      <span className={`text-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>
        {message}
      </span>
    </div>
  </div>
);
