import { useState } from 'react';

export default function UserList() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const users = [
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: false },
    { id: 3, name: 'Charlie', active: true },
  ];

  return (
    <div>
      <h2>Level 3: Conditional Rendering & Lists</h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      {isLoggedIn ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.active ? '🟢 Active' : '🔴 Offline'}
            </li>
          ))}
        </ul>
      ) : (
        <p>Please log in to see users.</p>
      )}
    </div>
  );
}