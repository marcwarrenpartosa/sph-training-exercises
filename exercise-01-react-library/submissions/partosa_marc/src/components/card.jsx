/* This card, card header, card body, and card footer are imported from shadcn */

import React from "react";
import { Clock } from "lucide-react";

import isBookOverdue from "../utils/overdueChecker";

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

const BookCard = ({
  book,
  author,
  borrowedBy = null,
  expectedReturnDate = null,
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
          <p className="text-xs text-gray-600 mb-3 h-4 truncate">
            {author?.name || "Unknown Author"}
          </p>
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
                  <span className="text-gray-700 font-medium truncate hover:underline cursor-pointer">
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

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};

//Custom Components
export default BookCard;
