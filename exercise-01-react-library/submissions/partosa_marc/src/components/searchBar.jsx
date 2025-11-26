import React, { useState } from "react";
import { Search, X } from "lucide-react";

//components
import Button from "./button.jsx";
import Input from "./input.jsx";

const SearchBar = ({ onSearch, onClear, placeholder = "Search..." }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery("");
    onClear();
  };

  const handleFocus = () => {
    setIsSearchFocused(true);
  };

  const handleBlur = () => {
    setIsSearchFocused(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mb-4 max-w-md mx-auto">
      <div className="flex gap-2 items-center bg-white rounded-lg shadow-sm border border-gray-200 p-2">
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onKeyPress={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="border-0 shadow-none focus:ring-0"
        />
        {searchQuery && (
          <Button
            onMouseDown={handleClear}
            variant="ghost"
            size="sm"
            className="shrink-0 h-8 w-8 p-0 hover:bg-gray-100"
          >
            <X className="w-4 h-4 text-gray-500" />
          </Button>
        )}
        <Button onClick={handleSearch} className="shrink-0">
          <Search className="w-5 h-5"></Search>
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
