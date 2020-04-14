import React, { Component } from "react";
import EditPost from "./EditPost";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

class PostsPage extends Component {
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
    return (
      <div className="post-page">
        {post === undefined ? (
          <h2>Loading . . .</h2>
        ) : (
          <div>
            <img alt={post.name} src={post.photo} />
            {this.state.isEdit ? (
              <Route
                path={"/myposts/:id/edit"}
                render={() => (
                  <EditPost
                    handleFormChange={this.props.handleFormChange}
                    handleSubmit={(e) => {
                      e.preventDefault();
                      this.props.editPost();
                      this.setState({ isEdit: false });
                      this.props.history.push(
                        `/myposts/${this.props.postForm.id}`
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
                    this.setState({
                      isEdit: true,
                    });
                    this.props.history.push(`/myposts/${post.id}/edit`);
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
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(PostsPage);
