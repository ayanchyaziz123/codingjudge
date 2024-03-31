import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-full w-64 flex flex-col">
      {/* Sidebar header */}
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">Sidebar</h2>
      </div>

      {/* Sidebar links */}
      <div className="flex-grow">
        <ul className="space-y-2">
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Categories</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Tags</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Problems</li>
        </ul>
      </div>

      {/* Sidebar footer */}
      <div className="p-4 text-center">
        <p>© 2024 Your Company</p>
      </div>
    </div>
  );
};

export default Sidebar;
