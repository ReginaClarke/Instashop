import React from "react";
import { withRouter } from "react-router-dom";

function CreatePost(props) {
  return (
    <div className="create-form">
      <h2>Create Post</h2>
      <form onSubmit={props.newPost}>
        <p>Caption:</p>
        <input
          type="text"
          name="caption"
          value={props.postForm.caption}
          onChange={props.handleFormChange}
        />

        <p>Link to Product:</p>
        <input
          type="text"
          name="link_to_product"
          value={props.postForm.link_to_product}
          onChange={props.handleFormChange}
        />
        <button>Create Post</button>
      </form>
    </div>
  );
}

export default withRouter(CreatePost);
