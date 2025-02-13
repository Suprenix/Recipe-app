import { useState, useEffect } from "react";
import RecipeList from "./RecipeList";


const Home = () => {
    const [recipes, setRecipes] = useState(null);
    



    useEffect(() => {
        fetch('http://localhost:5000/recipes')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setRecipes(data);
        })
    }, []);
    return ( 
        <div>{recipes && <RecipeList recipes = {recipes} setRecipes = {recipes} />}</div>  
     );
}
 
export default Home;