import { Heart } from 'lucide-react';
import { UserList } from '../components/user';
import { useAppContext } from '../context/AppContext';

const FavoritesPage = () => {
  const { favorites, darkMode } = useAppContext();

  if (favorites.length === 0) {
    return (
      <div className='text-center py-12'>
        <Heart
          className={`w-16 h-16 mx-auto mb-4 ${
            darkMode ? 'text-gray-600' : 'text-gray-400'
          }`}
        />
        <h3
          className={`text-xl font-semibold mb-2 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          No favorites yet
        </h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Add some users to your favorites from the home page
        </p>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <div
        className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
      >
        {favorites.length} favorite{favorites.length !== 1 ? 's' : ''}
      </div>

      <UserList
        users={favorites}
        darkMode={darkMode}
        emptyMessage='No favorites yet'
      />
    </div>
  );
};

export default FavoritesPage;
