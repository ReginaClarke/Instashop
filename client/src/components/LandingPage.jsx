import React from "react";

export default function LandingPage(props) {
  return (
    <>
      <div>
        {props.currentUser ? (
          <>
            <h1>
              {/* <Link to="/" onClick={props.resetForm}>
                School App
              </Link> */}
            </h1>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>logout</button>
          </>
        ) : (
          <button onClick={props.handleLoginButton}>Login/register</button>
        )}
      </div>
    </>
  );
}
