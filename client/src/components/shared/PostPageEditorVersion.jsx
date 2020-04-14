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
        return <div>{comment.caption}</div>;
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
                <p className="singlepostview">{post.caption}</p>

                <a className="linktoproduct" href={post.link_to_product}>
                  Buy Here!
                </a>

                <button
                  onClick={() => {
                    this.props.history.push(`/posts/${post.id}/addcomment`);
                  }}
                >
                  Add Comment
                </button>

                {this.props.currentUser.id === post.user_id ? (
                  <div>
                    <button
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
                      onClick={() => {
                        this.props.deletePost(post.id);
                        this.props.history.push("/posts");
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        this.props.history.push("/posts");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : null}

                <p> {comments}</p>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(PostPage);
