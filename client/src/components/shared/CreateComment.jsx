import React from "react";
import { withRouter, Link } from "react-router-dom";

function CreateComment(props) {
  return (
    <div className="create-form">
      {props.post && (
        <div className="post-page">
          <h3>{props.post.product_name}</h3>
          <p className="singlepostdate">{props.post.user.username}</p>

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
          <p className="singlepostdate">{props.post.caption}</p>

          <a className="linktoproduct" href={props.post.link_to_product}>
            Buy Here!
          </a>
        </div>
      )}

      <div>
        <form onSubmit={(e) => props.newComment(e, props.match.params.id)}>
          <textarea
            type="text"
            placeholder="Enter Comment Caption"
            name="caption"
            value={props.commentForm.caption}
            onChange={props.handleCommentFormChange}
          />
          <button className="addcomment">Create Comment</button>
        </form>
        <Link to={`/posts/${props.match.params.id}`}>
          <button className="addcomment">Back to Post</button>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(CreateComment);
