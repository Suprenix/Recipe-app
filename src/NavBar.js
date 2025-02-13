import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="nav-bar">
            <div className="nav-name">Nehi's Cocktail Recipes</div>
            <div  className = "drop">
                <div className="pro-pic">
                    <div className="pro-head"></div>
                    <div className="pro-body"></div>
                </div>
                <div className ="dropdown">
                    <Link to = "/" className = "d-a">View Recipes</Link>
                    <Link to = "/edit" className = "d-a">Edit Recipes</Link>
                    <Link to = "/Create" className = "d-a">Add Recipes</Link>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;