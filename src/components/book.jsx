import React, { useState, useEffect } from "react";
import { RecipeDetails } from "./recipeDetails";
import { RecipesList } from "./recipeList";
import { SearchRecipe } from "./search";
import "./book.css";

export const Book = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filteredRecipe, setFilteredRecipe] = useState([]);
  const [showBookcover, setShowBookCover] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appId = "9ecddf96";
        const appKey = "e617e32ec8d82fa05ce7be71e91777ed";
        const response = await fetch(
          `https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        setFilteredRecipe(data.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setShowBookCover(false);
  };

  const showRecipeList = () => {
    setShowBookCover(false);
  };

  const search = (query) => {
    const filtered = recipes.filter((recipe) =>
      recipe.recipe.label.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipe(filtered);
    setSelectedRecipe(null);
  };

  return (
    <div className="book">
      {showBookcover && (
        <div className="cover">
          <img
            className="cover-img"
            src="https://i.postimg.cc/7Z5Nkryd/71gyff-EUB-L-AC-UF1000-1000-QL80.jpg"
          />
          <button onClick={showRecipeList} className="cover-button">
            <b>Open</b>
          </button>{" "}
        </div>
      )}
      {!showBookcover && (
        <div className="recipes">
          <div className="one">
            <img
              className="cheif-img"
              src="https://i.postimg.cc/BbXL72FP/chef-cartoon-cooking-beef-isolated-white-background-176170946-removebg-preview.png"
            />
            <SearchRecipe onSearch={search} />
            <RecipesList
              recipes={filteredRecipe}
              onSelectRecipe={selectRecipe}
            />
          </div>
          <div className="book-divider"></div>
          <div className="two">
            <RecipeDetails recipe={selectedRecipe} />
          </div>
        </div>
      )}
    </div>
  );
};
