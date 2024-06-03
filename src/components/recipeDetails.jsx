import React from "react";
import "./recipeDetails.css";

export const RecipeDetails = ({ recipe }) => {
  return (
    <div>
      {recipe ? (
        <div>
          <h1>{recipe.recipe.label}</h1>

          {recipe.recipe.image && (
            <img
              src={recipe.recipe.image}
              alt={`${recipe.recipe.label} image`}
              className="recipe-img"
            />
          )}

          <h3 className="ingredient">Ingredients</h3>
          <ul>
            {recipe.recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="recipe-details">
                {ingredient.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>
            <b>Select a recipe to see the details</b>
          </p>
        </div>
      )}
    </div>
  );
};
