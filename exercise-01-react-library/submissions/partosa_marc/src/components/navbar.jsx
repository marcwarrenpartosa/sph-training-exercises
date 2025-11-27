import React from "react";
import Logo from "../assets/images/logo.png";

import { Plus, MoreHorizontal } from "lucide-react";
import { BookOpenText, Users } from "lucide-react";

import { useNavigate } from "react-router-dom";

//components
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs.jsx";

const Navbar = () => {
  const navigate = useNavigate();

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

        <Tabs defaultValue="books" className="flex items-center">
          <TabsList className="flex gap-2">
            <TabsTrigger value="books" onClick={navigateToAllBooks}>
              <BookOpenText className="w-4 h-4" />
            </TabsTrigger>
            <TabsTrigger value="members" onClick={navigateToMembers}>
              <Users className="w-4 h-4" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Navbar;
