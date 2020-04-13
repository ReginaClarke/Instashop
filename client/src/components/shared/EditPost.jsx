import React from "react";
import { withRouter, Link} from "react-router-dom";

function EditPost(props) {
  return (
    <div>
      <h3>Edit Post</h3>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="caption"
          value={props.postForm.caption}
          onChange={props.handleFormChange}
        />

        <input
          type="text"
          name="link_to_product"
          value={props.postForm.link_to_product}
          onChange={props.handleFormChange}
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
