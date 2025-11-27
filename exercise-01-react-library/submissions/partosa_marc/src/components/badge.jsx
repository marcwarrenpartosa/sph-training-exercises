import React from "react";

const Badge = ({ status, isOverdue = false }) => {
  const getStatusDisplay = () => {
    if (status === "borrowed" && isOverdue) {
      return "Overdue";
    }
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const getStatusStyles = () => {
    if (status === "borrowed") {
      return isOverdue
        ? "bg-red-600 text-red-100"
        : "bg-yellow-600 text-yellow-100";
    }
    return "bg-green-600 text-green-100";
  };

  return (
    <span
      className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide ${getStatusStyles()}`}
    >
      {getStatusDisplay()}
    </span>
  );
};

export default Badge;
