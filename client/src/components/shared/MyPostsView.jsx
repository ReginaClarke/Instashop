import React from "react";
import { withRouter } from "react-router";


function PostsView(props) {
  return (
    <>
      <div className="post-container">
        {props.posts.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={(e) => {
              props.history.push(`/myposts/${user.id}`);
              window.scrollTo(0, 0);
            }}
          >
            <p className="postTitle">{post.product_name}</p>

            <img
              src={post.image_link}
              alt="product"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
            <p className="postCaption">{post.caption}</p>
            <p className="postdate">
              Posted: {new Date(`${post.created_at}`).getMonth() + 1}/
              {new Date(`${post.created_at}`).getDate()}/
              {new Date(`${post.created_at}`).getFullYear()}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default withRouter(PostsView);
