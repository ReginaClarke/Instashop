import React from "react";
import { withRouter, Link } from "react-router-dom";

const toInputLowercase = (e) => {
  e.target.value = ("" + e.target.value).toLowerCase();
};

function EditPost(props) {
  return (
    <div>
      <h3>Edit Post</h3>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="product_name"
          placeholder="Enter Product Name"
          value={props.postForm.product_name}
          onChange={props.handleFormChange}
          onInput={toInputLowercase}
        />

        <input
          type="text"
          name="caption"
          placeholder="Enter Caption"
          value={props.postForm.caption}
          onChange={props.handleFormChange}
        />

        <input
          type="text"
          name="image_link"
          placeholder="Enter Link to Image"
          value={props.postForm.image_link}
          onChange={props.handleFormChange}
        />
        <input
          type="text"
          name="link_to_product"
          placeholder="Enter Link to Buy"
          value={props.postForm.link_to_product}
          onChange={props.handleFormChange}
          onInput={toInputLowercase}
        />

        <button>Submit Change</button>
      </form>
      <Link to="/explorer">
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default withRouter(EditPost);
