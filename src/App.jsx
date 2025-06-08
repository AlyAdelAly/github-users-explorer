import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navigation } from './components/common';
import { AppProvider, useAppContext } from './context/AppContext';
import FavoritesPage from './pages/Favorites';
import HomePage from './pages/Home';

const AppContent = () => {
  const { darkMode } = useAppContext();

  return (
    <div
      className={`min-h-screen transition-all duration-200 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <Navigation />

      <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
};

export default App;
