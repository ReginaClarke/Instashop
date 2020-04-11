import React from "react";
import Navigation from "./Navigation";

const Header = (props) => (
  <header>
    <h1>Instashop</h1>
    <Navigation />
    <div className="main">{props.children}</div>
    <hr />
  </header>
);

export default Header;
