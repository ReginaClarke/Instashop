import React from "react";
import { withRouter, Link } from "react-router-dom";

function EditComment(props) {
  return (
    <div>
      <h3>Edit Comment</h3>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="caption"
          placeholder="Enter Caption"
          value={props.commentForm.caption}
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

export default withRouter(EditComment);
