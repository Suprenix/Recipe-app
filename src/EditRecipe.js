import RecipeList from "./RecipeList";
import useFetch from "./useFetch.js";

const EditRecipe = () => {

    const {data, isPending} = useFetch('http://localhost:5000/recipes')
    
    return ( 
        <div>
            {isPending && <div>Loading</div>}
            {data && <RecipeList recipes = {data} />}
        </div>
     );
}
 
export default EditRecipe;