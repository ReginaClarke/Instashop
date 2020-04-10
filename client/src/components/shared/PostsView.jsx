import React from "react";
import { withRouter } from "react-router";

function PostsView(props) {
  return (
    <div className="post-container">
      {props.posts.map((post) => (
        <div
          key={post.id}
          className="post-card"
          onClick={(e) => {
            debugger;
            props.history.push(`/posts/${post.id}`);
            window.scrollTo(0, 0);
          }}
        >
          <img alt={post.name} src={post.photo} />
          <h3>
            <p>{post.name}</p>
          </h3>
        </div>
      ))}
      <div
        className="post-card"
        onClick={() => {
          props.history.push("/new/post");
          window.scrollTo(0, 0);
        }}
      >
      </div>
    </div>
  );
}

export default withRouter(PostsView);
