import React from 'react';

const UserList = ({ users, setUsers }) => {
  const handleDelete = (userId) => {
// Perform delete user logic (you would typically send this request to a backend API)
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
