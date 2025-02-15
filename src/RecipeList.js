import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  const location = useLocation();
  const isEditMode = location.pathname.endsWith("/edit");
  const isViewMode = location.pathname === ("/");
  const navigate = useNavigate();

  const handleEdit = (recipeId) => {
    navigate("/edit/"+ recipeId);
  };
  const handleDelete = (recipeId) => {     
    fetch('http://localhost:5000/recipes/' + recipeId, {
      method:'DELETE'
    }).then(() =>{
      window.location.reload();
    })
  };  

  return (
    <div className="recipe-container">
      <div className={"recipe-contain" + (isEditMode ? "-edit" : "")}>
        {recipes.map((recipe) => (
          <div className="recipe-div" key={recipe.id}>
            {isViewMode && (
              <Link to={"/recipes/"+ recipe.id}>
                <h2>{recipe.title}</h2>
                <p>{recipe.author}</p>
              </Link>
            )}
            {isEditMode && (
              <div>
                  <h2>{recipe.title}</h2>
                  <p>{recipe.author}</p>
                <div className="edit-buttons">
                  
                  <button onClick={() => handleEdit(recipe.id)}>Edit</button>
                  <button onClick={() => handleDelete(recipe.id)}>Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
