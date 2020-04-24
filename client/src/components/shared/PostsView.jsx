import React from "react";
import { withRouter } from "react-router";

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
      <h3>Explorer</h3>

      <Search />
      {/* Convert Search component to dropdown based on API Call focused on Industry */}

      <div className="post-container">
        {props.posts.map((post) => (
          <div>
            <div
              key={post.id}
              className="post-card"
              onClick={(e) => {
                props.history.push(`/posts/${post.id}`);
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
            <button
              className="addcomment"
              onClick={() => {
                props.history.push(`/posts/${post.id}/addcomment`);
              }}
            >
              Add Comment
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default withRouter(PostsView);
