/* This card, card header, card body, and card footer are imported from shadcn */

import React from "react";
import { Clock } from "lucide-react";

import isBookOverdue from "../utils/overdueChecker";
import Avatar from "./avatar";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";

// Simple utility function for conditional class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Simple warning icon component
const WarningIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="bg-red-500 text-white rounded-full"
  >
    <circle cx="12" cy="12" r="10" fill="#ef4444" />
    <path
      d="M12 8v4M12 16h.01"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

// Author Avatar component with image handling
const AuthorAvatar = ({ author }) => {
  const defaultImage = "https://via.placeholder.com/40x40?text=?";

  const getAuthorImageUrl = (imagePath) => {
    if (!imagePath) return defaultImage;

    if (imagePath.startsWith("http")) return imagePath;

    try {
      if (imagePath.startsWith("../assets/")) {
        const assetPath = imagePath.replace("../assets/", "/src/assets/");
        return new URL(assetPath, import.meta.url).href;
      }

      return imagePath;
    } catch (error) {
      return defaultImage;
    }
  };

  const handleImageError = (e) => {
    if (e.target.src !== defaultImage) {
      e.target.src = defaultImage;
    }
  };

  return (
    <img
      src={getAuthorImageUrl(author.image)}
      alt={author.name}
      className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
      onError={handleImageError}
    />
  );
};

// Author Popover Component
const AuthorPopover = ({ author, bookCount }) => {
  if (!author) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <p className="text-xs text-gray-600 mb-3 h-4 truncate hover:underline cursor-pointer">
          {author.name || "Unknown Author"}
        </p>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3">
        <div className="flex items-center gap-3">
          <AuthorAvatar author={author} />
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 text-sm truncate">
              {author.name}
            </h4>
            <p className="text-xs text-gray-600">
              {bookCount} {bookCount === 1 ? "book" : "books"} in library
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const BookCard = ({
  book,
  author,
  borrowedBy = null,
  expectedReturnDate = null,
  onMemberClick = null,
  authorBookCount = 0,
}) => {
  const defaultImage = "https://via.placeholder.com/300x400?text=No+Image";

  const getImageUrl = (imagePath) => {
    if (!imagePath) return defaultImage;

    if (imagePath.startsWith("http")) return imagePath;

    try {
      if (imagePath.startsWith("../assets/")) {
        const assetPath = imagePath.replace("../assets/", "/src/assets/");
        return new URL(assetPath, import.meta.url).href;
      }

      return imagePath;
    } catch (error) {
      return defaultImage;
    }
  };

  const bookImage = getImageUrl(book.image);

  const handleImageError = (e) => {
    if (e.target.src !== defaultImage) {
      e.target.src = defaultImage;
    }
  };

  // Check if book is overdue when borrowed
  const isOverdue =
    borrowedBy && expectedReturnDate && isBookOverdue(expectedReturnDate);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden h-full flex flex-col relative">
      {isOverdue && (
        <div
          className="flex  items-center gap-2 absolute top-2 right-2 z-10 bg-red-700 p-1 px-2 rounded-full text-sm text-red-200"
          title="Book is overdue"
        >
          Overdue
          <Clock className="text-white w-4 h-4"></Clock>
        </div>
      )}
      <div className="aspect-3/4 overflow-hidden bg-gray-50 shrink-0">
        <img
          src={bookImage}
          alt={book.title}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>

      <div className="p-4 flex flex-col grow">
        <div className="grow">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1 h-8 line-clamp-2">
            {book.title}
          </h3>
          <AuthorPopover author={author} bookCount={authorBookCount} />
        </div>

        <div className="space-y-1.5 text-xs mt-auto">
          <div className="flex justify-between h-4">
            <span className="text-gray-500">Category:</span>
            <span className="text-gray-700 font-medium truncate ml-2">
              {book.category}
            </span>
          </div>
          <div className="flex justify-between h-4">
            <span className="text-gray-500">ID:</span>
            <span className="text-gray-700 font-mono truncate ml-2">
              {book.id}
            </span>
          </div>
          {borrowedBy && (
            <div className="pt-1 border-t border-gray-100">
              <div className="flex justify-between items-center h-4">
                <span className="text-gray-500">Borrowed by:</span>
                <div className="flex items-center gap-1 ml-2">
                  <span
                    className="text-gray-700 font-medium truncate hover:underline cursor-pointer"
                    onClick={() => onMemberClick && onMemberClick(borrowedBy)}
                  >
                    {borrowedBy.name}
                  </span>
                </div>
              </div>
            </div>
          )}
          {!borrowedBy && <div className="h-6"></div>}
        </div>
      </div>
    </div>
  );
};

const MemberCard = ({ member, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200 cursor-pointer"
      onClick={() => onClick && onClick(member)}
    >
      <Avatar name={member.name} className="mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
        {member.name}
      </h3>
      <div className="space-y-2 text-sm text-gray-600">
        <p className="flex justify-between">
          <span className="font-medium">Member ID:</span>
          <span className="text-gray-600 font-mono">{member.id}</span>
        </p>
        <p className="flex justify-between">
          <span className="font-medium">Joined:</span>
          <span>{new Date(member.membershipDate).toLocaleDateString()}</span>
        </p>
      </div>
    </div>
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  MemberCard,
};

//Custom Components
export default BookCard;
