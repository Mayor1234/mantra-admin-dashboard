import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SideNav from './SideNav';
import SearchBar from '../ui/search/SearchBar';

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-white text-gray-800">
      {/* Sidebar */}
      <SideNav isSidebarOpen={isSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-14 flex items-center justify-between px-4 my-2 bg-white">
          <button
            className="sm:hidden"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            {isSidebarOpen ? 'X' : 'Menu'}
          </button>
          <div className="w-full">
            <SearchBar />
          </div>
        </header>

        {/* Page content with animation */}
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="p-4 overflow-y-auto flex-1"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}
