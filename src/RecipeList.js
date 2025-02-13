import { useState } from "react";

const RecipeList = ({ recipes }) => {
  const [details, setDetails] = useState(null);

  const showDetails = (selectedRecipe) => {
    setDetails(selectedRecipe);
  };

  const hideDetails = () => {
    setDetails(null);
  };

  const filteredRecipes = details
    ? recipes.filter((recipe) => recipe.id !== details.id)
    : recipes;

  return (
    <div className="recipe-container">
      {details && (
        <div className="recipe-details">
          <div className="recipe-div" key={details.id}>
            <h2>{details.title}</h2>
            <p>{details.about}</p>
            <p>{details.author}</p>
            <button onClick={hideDetails}>Close Details</button>
          </div>
        </div>
      )}
      <div className="recipe-contain">
        {filteredRecipes.map((recipe) => (
          <div className="recipe-div" key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.author}</p>
            <button onClick={() => showDetails(recipe)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
