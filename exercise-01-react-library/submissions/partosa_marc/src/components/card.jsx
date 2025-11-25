import React from "react";

// Simple utility function for conditional class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

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

const BookCard = ({ book, author }) => {
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

  return (
    <Card className="w-full max-w-sm mx-auto">
      <div className="w-full h-64 overflow-hidden rounded-t-xl bg-gray-200">
        <img
          src={bookImage}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-bold">{book.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          by {author?.name || "Unknown Author"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-sm">
            <span className="font-medium">Category: </span>
            <span className="text-gray-700">{book.category}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">Book ID: </span>
            <span className="text-gray-700">{book.id}</span>
          </div>
        </div>
      </CardContent>
    </Card>
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
