"use client";

import React, { useState, useRef, useEffect } from "react";
import { ListFilter } from "lucide-react";
import styles from "./filter-popover.module.css";

export default function FilterPopover({
  filters,
  selectedYears,
  selectedTags,
  onYearToggle,
  onTagToggle,
  onClearAll,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.filterContainer} ref={popoverRef}>
      <button
        className={styles.filterButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Filter blogs"
      >
        <ListFilter width={50} height={50} />
      </button>

      {isOpen && (
        <div className={styles.popover}>
          <div className={styles.popoverHeader}>
            <h3>Filters</h3>
            <button onClick={onClearAll} className={styles.clearButton}>
              Clear All
            </button>
          </div>

          <div className={styles.filterSection}>
            <h4>Years</h4>
            {filters.years.map((year) => (
              <label key={year} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedYears.includes(year)}
                  onChange={() => onYearToggle(year)}
                />
                <span>{year}</span>
              </label>
            ))}
          </div>

          <div className={styles.filterSection}>
            <h4>Tags</h4>
            {filters.tags.map((tag) => (
              <label key={tag} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => onTagToggle(tag)}
                />
                <span>{tag}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
