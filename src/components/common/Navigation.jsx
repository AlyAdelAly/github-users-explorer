import { Heart, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

export const Navigation = () => {
  const { darkMode, toggleDarkMode, favorites } = useAppContext();
  const location = useLocation();

  const currentPage = location.pathname;

  return (
    <nav
      className={`sticky top-0 z-10 border-b transition-all duration-200 ${
        darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      }`}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center space-x-8'>
            <h1
              className={`text-xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              GitHub Users
            </h1>

            <div className='flex space-x-3'>
              <Link
                to='/'
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === '/'
                    ? 'bg-teal-600 text-white'
                    : darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Home
              </Link>

              <Link
                to='/favorites'
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  currentPage === '/favorites'
                    ? 'bg-teal-600 text-white'
                    : darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Heart className='w-4 h-4' />
                <span>Favorites</span>
                {favorites.length > 0 && (
                  <span className='bg-red-400 text-white text-xs rounded-full px-2 py-1 ml-1'>
                    {favorites.length}
                  </span>
                )}
              </Link>
            </div>
          </div>

          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-all duration-200 ${
              darkMode
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <Sun className='w-5 h-5' />
            ) : (
              <Moon className='w-5 h-5' />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
