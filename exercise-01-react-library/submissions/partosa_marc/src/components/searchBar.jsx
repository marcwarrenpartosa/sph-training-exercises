import React, { useState } from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

//components
import Button from "./button.jsx";
import Input from "./input.jsx";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./dropdown";

const SearchBar = ({ onSearch, onClear, placeholder = "Search..." }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentDropdownText = () => {
    return location.pathname === "/borrowed" ? "Borrowed" : "All Books";
  };

  const navigateToAllBooks = () => {
    navigate("/");
  };

  const navigateToBorrowedBooks = () => {
    navigate("/borrowed");
  };

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-md transition-colors">
              <div className="flex items-center gap-1 text-gray-700 font-medium">
                <span className="text-sm whitespace-nowrap">
                  {getCurrentDropdownText()}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-700"></ChevronDown>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => navigateToAllBooks()}
            >
              All Books
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => navigateToBorrowedBooks()}
            >
              Borrowed
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
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
        <Button onClick={handleSearch} className="shrink-0 ">
          <Search className="w-5 h-5"></Search>
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
