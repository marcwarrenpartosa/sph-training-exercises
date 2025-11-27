import React from "react";

const Avatar = ({ name, size = "md", className = "" }) => {
  // Generate initials from name
  const getInitials = (fullName) => {
    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // Size variants
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-16 h-16 text-xl",
    lg: "w-24 h-24 text-3xl",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full font-bold ${sizeClasses[size]} bg-[#63AE3F] text-white ${className}`}
    >
      <span>{getInitials(name)}</span>
    </div>
  );
};

export default Avatar;
