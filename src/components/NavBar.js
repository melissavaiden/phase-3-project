import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/food/categories'>Food Categories</NavLink> 
            <NavLink to='/foodform'>Add A Food Item</NavLink>
            </ul>
        </div> 
    )

}

export default NavBar;