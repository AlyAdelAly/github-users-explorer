import { EyeIcon, Heart } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export const UserCard = ({ user, showFavoriteButton = true }) => {
  const { addToFavorites, removeFromFavorites, isFavorite, darkMode } =
    useAppContext();
  const isUserFavorite = isFavorite(user.id);

  const handleFavoriteClick = () => {
    if (isUserFavorite) {
      removeFromFavorites(user.id);
    } else {
      addToFavorites(user);
    }
  };

  const handleUserClick = () => {
    window.open(user.html_url, '_blank');
  };

  return (
    <div
      className={`rounded-lg border p-4 transition-all duration-200 hover:shadow-lg ${
        darkMode
          ? 'bg-gray-800 border-gray-700 hover:bg-gray-750'
          : 'bg-white border-gray-200 hover:bg-gray-50'
      }`}
    >
      <div className='flex items-center space-x-4'>
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className='w-16 h-16 rounded-full object-cover ring-2 ring-teal-500'
          loading='lazy'
        />
        <div className='flex-1 min-w-0'>
          <h3
            className={`text-lg font-semibold truncate ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {user.login}
          </h3>
          <p
            className={`text-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            ID: {user.id}
          </p>
          <button
            onClick={handleUserClick}
            className='inline-flex items-center font-medium text-white text-xs bg-teal-500 hover:bg-teal-800 p-2 rounded-md transition-colors'
          >
            <EyeIcon className='w-4 h-4 mr-1' />
            View Profile
          </button>
        </div>
        {showFavoriteButton && (
          <button
            onClick={handleFavoriteClick}
            className={`p-2 rounded-full transition-all duration-200 ${
              isUserFavorite
                ? 'bg-red-400 text-red-100 hover:bg-red-200 hover:text-red-400'
                : darkMode
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={
              isUserFavorite ? 'Remove from favorites' : 'Add to favorites'
            }
          >
            {isUserFavorite ? (
              <Heart className='w-5 h-5 fill-current' />
            ) : (
              <Heart className='w-5 h-5' />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
