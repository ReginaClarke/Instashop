import React from "react";
import Navigation from "./Navigation";

const Header = (props) => (
  <header>
    <h1 className="header">Instashop</h1>
    <Navigation
      currentUser={props.currentUser}
    handleLogout={props.handleLogout}
    />
    <div className="main">{props.children}</div>
    <hr />
  </header>
);

export default Header;
