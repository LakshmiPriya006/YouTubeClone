import React, { useState } from 'react';
import { Menu, Search, Upload, Bell, Mic, User } from 'lucide-react';

export default function Header({ onSearchSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchTerm);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-black border-b border-gray-200 z-50 h-[60px]">
      {/* Left section: Menu and Logo */}
      <div className="flex items-center">
        <button className="p-2 mr-2 rounded-full hover:bg-black-400">
          <Menu size={20} />
        </button>
        <div className="flex items-center cursor-pointer">
          <div className="bg-red-600 text-white px-2 py-1 font-bold rounded-md mr-1 text-[25px]">
            You <span className="font-bold">Tube</span>
          </div>
        </div>
      </div>

      {/* Middle section: Search bar */}
      <div className="hidden md:flex items-center flex-1 max-w-xl mx-4">
        <form onSubmit={handleSubmit} className="flex w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
          />
          <button 
            type="submit" 
            className="px-5 py-2 bg-black-400 border border-l-0 border-gray-300 rounded-r-full hover:bg-black-400"
          >
            <Search size={20} />
          </button>
        </form>
        <button className="p-2 ml-2 bg-black-400 rounded-full hover:bg-black-400">
          <Mic size={20} />
        </button>
      </div>

      {/* Right section: Icons */}
      <div className="flex items-center">
        {/* <button className="p-2 rounded-full text-white hover:bg-gray-100 md:hidden">
          <Search size={20} />
        </button> */}
        <button className="p-2 rounded-full hover:bg-black-400">
          <Upload size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-black-400">
          <Bell size={20} />
        </button>
        <div className="ml-2 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
          <User size={16} />
        </div>
      </div>
    </header>
  );
}