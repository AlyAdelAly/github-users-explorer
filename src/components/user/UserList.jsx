import { Users } from 'lucide-react';
import { UserCard } from './UserCard';

export const UserList = ({
  users,
  darkMode,
  emptyMessage = 'No users found',
}) => {
  if (users.length === 0) {
    return (
      <div className='text-center py-12'>
        <Users
          className={`w-16 h-16 mx-auto mb-4 ${
            darkMode ? 'text-gray-600' : 'text-gray-400'
          }`}
        />
        <h3
          className={`text-xl font-semibold mb-2 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          {emptyMessage}
        </h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Try adjusting your search terms
        </p>
      </div>
    );
  }

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
