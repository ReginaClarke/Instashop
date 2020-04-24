import React, { Component } from "react";
import EditPost from "./EditPost";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }

  componentDidMount() {
    this.props.mountEditForm(this.props.id);
  }

  render() {
    const { post } = this.props;

    const postComments =
      post &&
      this.props.comments &&
      this.props.comments.filter((comment) => {
        return comment.post_id === post.id;
      });

    const comments =
      postComments &&
      postComments.map((comment) => {
        return (
          <div key={comment.id}>
            <p className="comments">
              Posted: {new Date(`${comment.created_at}`).getMonth() + 1}/
              {new Date(`${comment.created_at}`).getDate()}/
              {new Date(`${comment.created_at}`).getFullYear()} :
              {comment.caption}
            </p>
          </div>
        );
      });
    return (
      <div className="post-page">
        {post === undefined ? (
          <h2>Loading . . .</h2>
        ) : (
          <div>
            {this.state.isEdit ? (
              <Route
                path={"/posts/:id/edit"}
                render={() => (
                  <EditPost
                    handleFormChange={this.props.handleFormChange}
                    handleSubmit={(e) => {
                      e.preventDefault();
                      this.props.editPost();
                      this.setState({ isEdit: false });
                      this.props.history.push(
                        `/posts/${this.props.postForm.id}`
                      );
                    }}
                    postForm={this.props.postForm}
                  />
                )}
              />
            ) : (
              <>
                <h3>{post.product_name}</h3>
                <p className="singlepostdate">
                  Created By: {post.user.username}
                </p>

                <p className="singlepostdate">
                  Posted: {new Date(`${post.created_at}`).getMonth() + 1}/
                  {new Date(`${post.created_at}`).getDate()}/
                  {new Date(`${post.created_at}`).getFullYear()}
                </p>

                <img
                  className="postpageimage"
                  src={post.image_link}
                  alt="product"
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
                <p className="singlepostdate">{post.caption}</p>

                <a className="linktoproduct" href={post.link_to_product}>
                  Buy Here!
                </a>

                <button
                  className="addcomment"
                  onClick={() => {
                    this.props.history.push(`/posts/${post.id}/addcomment`);
                  }}
                >
                  Add Comment
                </button>

                {this.props.currentUser.id === post.user_id ? (
                  <div>
                    <button
                      className="addcomment"
                      onClick={() => {
                        this.setState({
                          isEdit: true,
                        });
                        this.props.history.push(`/posts/${post.id}/edit`);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="addcomment"
                      onClick={() => {
                        this.props.deletePost(post.id);
                        this.props.history.push("/explorer");
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="addcomment"
                      onClick={() => {
                        this.props.history.push("/explorer");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : null}

                <div> {comments}</div>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(PostPage);
