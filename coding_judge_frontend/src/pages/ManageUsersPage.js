import React, { useState } from 'react';

const ManageUsersPage = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "user1", email: "user1@example.com", role: "admin" },
    { id: 2, username: "user2", email: "user2@example.com", role: "user" },
    { id: 3, username: "user3", email: "user3@example.com", role: "user" },
    // Add more sample users as needed
  ]);

  // State variables to track form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the user details to the backend
    const newUser = { id: users.length + 1, username, email, role };
    setUsers([...users, newUser]);
    // Reset form inputs
    setUsername('');
    setEmail('');
    setRole('');
  };

  // Function to handle editing a user
  const handleEditUser = (userId) => {
    console.log('Edit user:', userId);
    // Implement logic to navigate to the edit user page with the selected user ID
  };

  // Function to handle deleting a user
  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

      {/* User Add Form */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Add New User</h3>
        <form onSubmit={handleSubmit} className="max-w-lg">
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          {/* Role */}
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 font-bold mb-2">Role</label>
            <input type="text" id="role" value={role} onChange={(e) => setRole(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          {/* Submit Button */}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add User</button>
        </form>
      </div>

    {/* Users List */}
<div>
  <h3 className="text-xl font-semibold mb-4">Users List</h3>
  <table className="min-w-full divide-y divide-gray-200">
    {/* Table Header */}
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
      </tr>
    </thead>
    {/* Table Body */}
    <tbody className="bg-white divide-y divide-gray-200">
      {users.map((user) => (
        <tr key={user.id}>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.username}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <button onClick={() => handleEditUser(user.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
            <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-900">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default ManageUsersPage;
