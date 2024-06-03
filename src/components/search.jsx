import React from "react";
import { GrSearch } from "react-icons/gr";
import "./search.css";

export const SearchRecipe = ({ onSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        id="search"
        placeholder="Search a recipe..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <GrSearch size={32} className="search-icon" />
    </div>
  );
};
