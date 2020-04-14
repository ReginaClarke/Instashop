import React from "react";
import { withRouter } from "react-router-dom";


function CreatePost(props) {
  return (
    <div className="create-form">
      <div>
        <form onSubmit={props.newPost}>
          <input
            type="text"
            placeholder="Enter Product Name"
            name="product_name"
            value={props.postForm.product_name}
            onChange={props.handleFormChange}
          />

          <textarea
            type="text"
            placeholder="Enter Post Caption"
            name="caption"
            value={props.postForm.caption}
            onChange={props.handleFormChange}
          />

          <input
            type="text"
            placeholder="Enter Link to Image"
            name="image_link"
            value={props.postForm.image_link}
            onChange={props.handleFormChange}
          />

          <input
            type="text"
            placeholder="Enter Link to Shop"
            name="link_to_product"
            value={props.postForm.link_to_product}
            onChange={props.handleFormChange}
          />
          <button>Create Post</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(CreatePost);
