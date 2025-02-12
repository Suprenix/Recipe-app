import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateRecipe from "./CreateRecipe";

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <NavBar/>
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element = {<Home/>} />
            <Route path="/create" element = {<CreateRecipe/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
