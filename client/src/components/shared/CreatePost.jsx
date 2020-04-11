import React from "react";
import { withRouter } from "react-router-dom";

function CreatePost(props) {
  return (
    <div className="create-form">
      <h3 className="createposth3">Create Post</h3>
      <form onSubmit={props.newPost}>
        <textarea
          type="text"
          placeholder="Enter Post Caption"
          name="caption"
          value={props.postForm.caption}
          onChange={props.handleFormChange}
        />

        <input
          type="text"
          placeholder="Enter Link to Product"
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
