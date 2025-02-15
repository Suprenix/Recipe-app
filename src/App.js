import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateRecipe from "./CreateRecipe";
import NotFound from "./NotFound";
import EditRecipe from "./EditRecipe";
import RecipeDetails from "./RecipeDetails";
import EditData from "./EditData";


function App() {
  return (
    <Router>
      <div>
        <div className="App" >
          <NavBar/>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/create" element = {<CreateRecipe/>} />
            <Route path="/edit" element = {<EditRecipe/>} />
            <Route path="/recipes/:id" element = {<RecipeDetails/>} />
            <Route path="/edit/:id" element = {<EditData/>} />
            <Route path="*" element = {<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
