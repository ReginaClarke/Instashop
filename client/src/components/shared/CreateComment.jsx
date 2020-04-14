import React from "react";
import { withRouter } from "react-router-dom";

function CreateComment(props) {
  return (
    <div className="create-form">
      <div>
        <form onSubmit={props.newComment}>
          <textarea
            type="text"
            placeholder="Enter Comment Caption"
            name="caption"
            value={props.commentForm.caption}
            onChange={props.handleCommentFormChange}  
            // likely need to update/create this
          />
          <button>Create Comment</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(CreateComment);
