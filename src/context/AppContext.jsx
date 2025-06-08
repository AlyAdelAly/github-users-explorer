import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks';
import { STORAGE_KEYS } from '../utils/constants';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage(STORAGE_KEYS.FAVORITES, []);
  const [darkMode, setDarkMode] = useLocalStorage(
    STORAGE_KEYS.DARK_MODE,
    false
  );

  const addToFavorites = (user) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === user.id)) return prev;
      return [...prev, user];
    });
  };

  const removeFromFavorites = (userId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== userId));
  };

  const isFavorite = (userId) => {
    return favorites.some((fav) => fav.id === userId);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    darkMode,
    toggleDarkMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
