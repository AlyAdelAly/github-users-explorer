import { useEffect, useMemo, useState } from 'react';
import { ErrorMessage, LoadingSpinner } from '../components/common';
import { Pagination, SearchBar } from '../components/ui';
import { UserList } from '../components/user';
import { useAppContext } from '../context/AppContext';
import { useDebounce, useGitHubUsers } from '../hooks';
import { DEBOUNCE_DELAY, USERS_PER_PAGE } from '../utils/constants';
import { calculateTotalPages } from '../utils/helpers';

const HomePage = () => {
  const { darkMode } = useAppContext();
  const { users, loading, error, refetch } = useGitHubUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Debounced search term
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_DELAY);

  // Filtered users based on search
  const filteredUsers = useMemo(() => {
    if (!debouncedSearchTerm) return users;
    return users.filter((user) =>
      user.login.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [users, debouncedSearchTerm]);

  // Paginated users
  const totalPages = calculateTotalPages(filteredUsers.length, USERS_PER_PAGE);
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * USERS_PER_PAGE;
    return filteredUsers.slice(startIndex, startIndex + USERS_PER_PAGE);
  }, [filteredUsers, currentPage]);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  if (loading) return <LoadingSpinner darkMode={darkMode} />;
  if (error)
    return (
      <ErrorMessage message={error} onRetry={refetch} darkMode={darkMode} />
    );

  return (
    <div className='space-y-6'>
      {/* Search Bar */}
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        darkMode={darkMode}
      />

      {/* Results Info */}
      <div
        className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
      >
        {debouncedSearchTerm ? (
          <span>
            Found {filteredUsers.length} users matching "{debouncedSearchTerm}"
          </span>
        ) : (
          <span>Showing {filteredUsers.length} total users</span>
        )}
      </div>

      {/* Users List */}
      <UserList
        users={paginatedUsers}
        darkMode={darkMode}
        emptyMessage='No users found'
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        darkMode={darkMode}
      />
    </div>
  );
};

export default HomePage;
