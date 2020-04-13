import React from "react";
import { NavLink} from "react-router-dom";

const Navigation = () => (

  <>
      <nav className="nav">
        <NavLink className="nav" to="/explorer">
          Explorer
        </NavLink>
        <NavLink className="nav" to="/myposts">
         My Product List
        </NavLink>
        <NavLink className="nav" to="/create/mypost">
          Create Product
        </NavLink>
        <NavLink className="nav" to="/explorer">
          Search
        </NavLink>
        <NavLink className="nav" to="/">
          Sign Out
        </NavLink>
      </nav>
  </>
);

export default Navigation;
