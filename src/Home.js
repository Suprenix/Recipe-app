import { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import useFetch from "./useFetch.js";


const Home = () => {
    const {data, isPending} = useFetch('http://localhost:5000/recipes')
    return ( 
        <div>
            {isPending && <div>Loading</div>}
            {data && <RecipeList recipes = {data} /*setRecipes = {data}*/ />}
        </div>  
     );
}
 
export default Home;