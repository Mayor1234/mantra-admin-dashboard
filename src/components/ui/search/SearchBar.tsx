import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import TimeAndDate from './TimeAndDate';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  console.log(searchValue);
  return (
    <div className="w-full flex justify-between items-center gap-5 border border-border rounded-full px-4 py-2">
      {/* Search Input */}
      <div className="flex items-center gap-2 text-gray-500 flex-1">
        <FiSearch size={20} />
        <input
          type="text"
          placeholder="Search by name, position"
          className="outline-none border-none bg-transparent text-sm placeholder-gray-500 w-full"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {/* Right Side Icons and Info */}
      <TimeAndDate />
    </div>
  );
};

export default SearchBar;
