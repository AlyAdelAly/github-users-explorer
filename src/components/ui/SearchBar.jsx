import { Search } from 'lucide-react';

export const SearchBar = ({
  searchTerm,
  onSearchChange,
  darkMode,
  placeholder = 'Search users...',
}) => {
  return (
    <div className='relative'>
      <Search
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}
      />
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-200 ${
          darkMode
            ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500'
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-200'
        }`}
      />
    </div>
  );
};
