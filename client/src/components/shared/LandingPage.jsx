import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      {/* <h1 className="homepageh1">Instashop</h1>
      <hr /> */}

      <div className="homepage">
        <div className="landingpageleft">
          <img className='landingpageimg' src="/images/homepage.png" alt="user example" />
        </div>

        <div className="landingpageright">
          <h4>Shop the look and get a second opinion from friends.</h4>
          <Link to="/login">
            <button className="landingpagebutton">SIGN IN</button>
          </Link>

          <Link to="/register">
            <button className="landingpagebutton">SIGN UP</button>
          </Link>
        </div>
      </div>
    </>
  );
}
