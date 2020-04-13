import React from "react";
import { withRouter } from "react-router";

// const Search = ({ onChange, onSubmit, name, value }) => {
//   return (
//     <div className="form-container">
//       <form onSubmit={(e) => onSubmit(e)}>
//         <input
//           value={value}
//           onChange={(e) => onChange(e)}
//           name={name}
//           type="text"
//           placeholder="Enter Search"
//         />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };

function PostsView(props) {
  return (
    <>
      {/* <Search /> */}
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
            <img
              src={post.link_to_product}
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
