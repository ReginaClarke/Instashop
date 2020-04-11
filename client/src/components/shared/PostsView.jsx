import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Search = ({ onChange, onSubmit, name, value }) => {
  return (
    <div className="form-container">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          value={value}
          onChange={(e) => onChange(e)}
          name={name}
          type="text"
          placeholder="Enter Search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

function PostsView(props) {
  return (
    <>
      <Search />
      <div className="post-container">
        {props.posts.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={(e) => {
              props.history.push(`/myposts/${post.id}`);
              window.scrollTo(0, 0);
            }}
          >
            {/* <img alt='see caption' src={post.image} /> */}
            <p>{post.caption}</p>
            <Link src={post.link_to_product}>
              <p>{post.link_to_product}</p>
            </Link>
          </div>
        ))}
        {/* <div
        className="post-card"
        onClick={() => {
          props.history.push("/new/post");
          window.scrollTo(0, 0);
        }}
      ></div> */}
      </div>
    </>
  );
}

export default withRouter(PostsView);
