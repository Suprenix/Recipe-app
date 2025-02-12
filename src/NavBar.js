import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="nav-bar">
            <div className="nav-name">Nehi's Cocktail Recipes</div>
            <div  class = "drop">
                <div className="pro-pic">
                    <div className="pro-head"></div>
                    <div className="pro-body"></div>
                </div>
                <div class ="dropdown">
                    <Link to = "/" class = "d-a">View Recipes</Link>
                    <Link to = "/edit" class = "d-a">Edit Recipes</Link>
                    <Link to = "/Create" class = "d-a">Add Recipes</Link>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;