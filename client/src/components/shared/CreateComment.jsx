import React from "react";
import { withRouter } from "react-router-dom";


function CreateComment(props) {
  return (
    <div className="create-form">
      {/* <div className="post-page">
        <h3>{props.post.product_name}</h3>
        <p className="singlepostdate">
          Posted: {new Date(`${props.post.created_at}`).getMonth() + 1}/
          {new Date(`${props.post.created_at}`).getDate()}/
          {new Date(`${props.post.created_at}`).getFullYear()}
        </p>
        <img
          className="postpageimage"
          src={props.post.image_link}
          alt="product"
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
        <p className="singlepostview">{props.post.caption}</p>

        <a className="linktoproduct" href={props.post.link_to_product}>
          Buy Here!
        </a>
      </div>
 */}
      <div>
        <form onSubmit={props.newComment}>
          <textarea
            type="text"
            placeholder="Enter Comment Caption"
            name="caption"
            value={props.commentForm.caption}
            onChange={props.handleCommentFormChange}
          />
          <button>Create Comment</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(CreateComment);
