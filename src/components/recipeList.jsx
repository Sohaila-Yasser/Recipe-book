import React, { useState } from "react";
import "./recipeList.css";

export const RecipesList = ({ recipes, onSelectRecipe }) => {
  const [activeRecipe, setActiveRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    onSelectRecipe(recipe);
    setActiveRecipe(recipe.recipe.label);
  };

  return (
    <div className="recipe-list">
      <h1>Recipes</h1>
      <ul className="list">
        {recipes.map((recipe) => (
          <li
            key={recipe.recipe.label}
            onClick={() => handleRecipeClick(recipe)}
            className={`list-items ${
              activeRecipe === recipe.recipe.label ? "active-recipe" : ""
            }`}
          >
            {recipe.recipe.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
