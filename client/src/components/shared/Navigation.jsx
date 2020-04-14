import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => (
  <>
    {props.currentUser ? (
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
        {/* <NavLink className="nav" to="/explorer">
          Search
        </NavLink> */}

{/* <button className="signOut" onClick={props.handleLogout}>
          Sign Out
      </button> */}
      </nav>
    ) : null}

    {props.currentUser ? (
      <div>
      <button className="signOut" onClick={props.handleLogout}>
          Sign Out
      </button>
      </div>
    ) : null}
  </>
);

export default Navigation;
