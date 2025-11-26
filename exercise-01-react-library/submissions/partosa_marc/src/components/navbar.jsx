import React from "react";
import Logo from "../assets/images/logo.png";

import { Plus, MoreHorizontal } from "lucide-react";

import { useNavigate } from "react-router-dom";

//components
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./dropdown";
import Button from "./button";
import { ButtonGroup } from "./buttonGroup";

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToAllBooks = () => {
    navigate("/");
  };

  const navigateToBorrowedBooks = () => {
    navigate("/borrowed");
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

        <div className="flex items-center">
          <ButtonGroup>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-1 bg-white border-gray-200 hover:bg-gray-50 px-2 sm:px-3"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Book</DropdownMenuItem>
                <DropdownMenuItem>Author</DropdownMenuItem>
                <DropdownMenuItem>Member</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="outline"
              className="bg-white border-gray-200 hover:bg-gray-50 px-2 sm:px-3"
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
