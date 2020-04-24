import React from "react";
import { withRouter } from "react-router";

function MyPostsView(props) {
  const userPosts =
    props.currentUser &&
    props.posts.filter((post) => {
      return post.user.id === props.currentUser.id;
    });
  return (
    <>
      <h3>My Posts</h3>

      <div className="post-container">
        {userPosts &&
          userPosts.map((post) => (
            <div
              key={post.id}
              className="post-card"
              onClick={(e) => {
                props.history.push(`/posts/${post.id}`);
              }}
            >
              <p className="postTitle">{post.product_name}</p>
              <p className="singlepostdate">Created By: {post.user.username}</p>

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

export default withRouter(MyPostsView);
