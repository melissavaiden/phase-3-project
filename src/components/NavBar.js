import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <ul className="links">
            <NavLink className="navlink" to='/'>Home</NavLink>
            <NavLink className="navlink" to='/food/categories'>Food Categories</NavLink> 
            <NavLink className="navlink" to='/foodform'>Add A Food Item</NavLink>
            </ul>
        </div> 
    )

}

export default NavBar;