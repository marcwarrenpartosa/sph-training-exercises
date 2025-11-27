import React from "react";
import Logo from "../assets/images/logo.png";

import { Plus, MoreHorizontal } from "lucide-react";
import { BookOpenText, Users } from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

//components
import { NavbarTabs, NavbarTabsList, NavbarTabsTrigger } from "./tabs.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active tab based on current route
  const getActiveTab = () => {
    if (location.pathname === "/members") return "members";
    return "books"; // Default to books for "/" and "/borrowed"
  };

  const navigateToAllBooks = () => {
    navigate("/");
  };

  const navigateToBorrowedBooks = () => {
    navigate("/borrowed");
  };

  const navigateToMembers = () => {
    navigate("/members");
  };

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between gap-2 sm:gap-4 lg:px-8 lg:py-2 px-3 sm:px-4 py-3">
        <div className="flex items-center gap-3 sm:gap-6">
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            onClick={() => {
              navigateToAllBooks();
            }}
          >
            <img src={Logo} alt="Logo" className="w-8 sm:w-10" />
            <div className="font-semibold text-gray-900 ">Owla Library</div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:gap-3"></div>
        </div>

        <NavbarTabs value={getActiveTab()} className="flex items-center">
          <NavbarTabsList className="flex gap-2">
            <NavbarTabsTrigger value="books" onClick={navigateToAllBooks}>
              <BookOpenText className="w-4 h-4" />
            </NavbarTabsTrigger>
            <NavbarTabsTrigger value="members" onClick={navigateToMembers}>
              <Users className="w-4 h-4" />
            </NavbarTabsTrigger>
          </NavbarTabsList>
        </NavbarTabs>
      </div>
    </div>
  );
};

export default Navbar;
