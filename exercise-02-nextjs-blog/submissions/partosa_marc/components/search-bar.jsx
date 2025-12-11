import React from "react";
import styles from "./search-bar.module.css";

export default function SearchBar({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search blogs..."
        onChange={handleInputChange}
      />
    </div>
  );
}
