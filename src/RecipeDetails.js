import { useParams } from "react-router-dom";
import useFetch from "./useFetch.js";

const RecipeDetails = () => {

    const {id} = useParams();
    const {data: recipe, isPending} = useFetch('http://localhost:5000/recipes/' + id)


    return ( 
        <div className="recipe-details">
            {isPending && <div>Loading</div>}
            {recipe &&
            <div className="recipe-deets">
                <h2>{recipe.title}</h2>
                <h3>{recipe.about}</h3>
                <p>{"Written by " + recipe.author}</p>
            </div>
            }
        </div>
     );
}
 
export default RecipeDetails;