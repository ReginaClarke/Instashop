import React from "react";
import { withRouter } from "react-router-dom";

const toInputLowercase = (e) => {
  e.target.value = ("" + e.target.value).toLowerCase();
};

function CreatePost(props) {
  return (
    <div className="create-form">
      <h3>Create Post</h3>

      <div>
        <form onSubmit={props.newPost}>
          <input
            type="text"
            placeholder="Enter Product Name"
            name="product_name"
            value={props.postForm.product_name}
            onChange={props.handleFormChange}
            onInput={toInputLowercase}
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
            onInput={toInputLowercase}
          />

          <input
            type="text"
            placeholder="Enter Link to Shop"
            name="link_to_product"
            value={props.postForm.link_to_product}
            onChange={props.handleFormChange}
            onInput={toInputLowercase}
          />
          <button>Create Post</button>
        </form>
        <button
          onClick={() => {
            props.resetForm();
          }}
        >
          Reset Form
        </button>
      </div>
    </div>
  );
}

export default withRouter(CreatePost);
