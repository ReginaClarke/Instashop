import React from "react";
import { withRouter } from "react-router";


function MyPostsView(props) {

  
  const userPosts = props.currentUser && props.posts.filter(post => {
    return post.user.id === props.currentUser.id
  }) 
  console.log(userPosts)
  return (
    <>
      <div className="post-container">
        
        <h1>hello</h1>
        {userPosts && userPosts.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={(e) => {
              props.history.push(`/myposts/${post.id}`);
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

export default withRouter(MyPostsView);
