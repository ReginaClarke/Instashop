import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import PostsView from "./shared/PostsView";
import MyPostsView from "./shared/MyPostsView";

import PostPage from "./shared/PostPageEditorVersion";
import CreatePost from "./shared/CreatePost";
import Login from "./shared/Login";
import Register from "./shared/Register";
import Header from "./shared/Header";
import CreateComment from "./shared/CreateComment";

import {
  createPost,
  readAllPosts,
  updatePost,
  destroyPost,
  createComment,
  readAllComments,
  updateComment,
  destroyComment,
  loginUser,
  registerUser,
  verifyUser,
} from "../services/api-helper";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postForm: {
        caption: "",
        link_to_product: "",
        image_link: "",
        product_name: "",
      },
      comments: [],
      commentForm: {
        caption: "",
      },
      currentUser: null,
      authFormData: {
        username: "",
        password: "",
      },
    };
  }

  async componentDidMount() {
    this.getPosts();
    this.getComments();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  }

  //---------------------POSTS ------------------
  getPosts = async () => {
    const posts = await readAllPosts();
    this.setState({
      posts,
    });
  };

  newPost = async (e) => {
    e.preventDefault();
    const post = await createPost(this.state.postForm);
    this.setState((prevState) => ({
      posts: [...prevState.posts, post],
      postForm: {
        caption: "",
        link_to_product: "",
        image_link: "",
        product_name: "",
      },
    }));
    this.props.history.push("/explorer");
  };

  editPost = async () => {
    const { postForm } = this.state;
    await updatePost(postForm.id, postForm);
    this.setState((prevState) => ({
      posts: prevState.posts.map((post) => {
        return post.id === postForm.id ? postForm : post;
      }),
    }));
  };

  deletePost = async (id) => {
    await destroyPost(id);
    this.setState((prevState) => ({
      posts: prevState.posts.filter((post) => post.id !== id),
    }));
  };

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      postForm: {
        ...prevState.postForm,
        [name]: value,
      },
    }));
  };

  mountEditForm = async (id) => {
    const posts = await readAllPosts();
    const post = posts.find((el) => el.id === parseInt(id));
    this.setState({
      postForm: post,
    });
  };

  resetForm = () => {
    this.setState({
      postForm: {
        caption: "",
        link_to_product: "",
        image_link: "",
        product_name: "",
      },
    });
  };
  //----------------COMMENTS--------------

  getComments = async () => {
    const comments = await readAllComments();
    this.setState({
      comments,
    });
  };

  newComment = async (e, post_id) => {
    e.preventDefault();
    const postId = { post_id: post_id };
    const postComments = this.state.commentForm;
    const comment = await createComment({ ...postComments, ...postId });
    this.setState((prevState) => ({
      comments: [...prevState.comments, comment],
      commentForm: {
        caption: "",
      },
    }));
    this.props.history.push("/explorer");

  };

  editComment = async () => {
    const { commentForm } = this.state;
    await updateComment(commentForm.id, commentForm);
    this.setState((prevState) => ({
      comments: prevState.comments.map((comment) => {
        return comment.id === commentForm.id ? commentForm : comment;
      }),
    }));
  };

  deleteComment = async (id) => {
    await destroyComment(id);
    this.setState((prevState) => ({
      comments: prevState.comments.filter((comment) => comment.id !== id),
    }));
  };

  handleCommentFormChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      commentForm: {
        ...prevState.commentForm,
        [name]: value,
      },
    }));
  };

  mountCommentEditForm = async (id) => {
    const comments = await readAllComments();
    const comment = comments.find((el) => el.id === parseInt(id));
    this.setState({
      commentForm: comment,
    });
  };

  resetCommentForm = () => {
    this.setState({
      commentForm: {
        caption: "",
      },
    });
  };

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/explorer");
  };

  handleLogin = async () => {
    const currentUser = await loginUser({
      username: this.state.authFormData.username,
      password: this.state.authFormData.password,
    });
    this.setState({ currentUser });
    this.props.history.push("/explorer");
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/explorer");
  };

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null,
    });
    this.props.history.push("/");
  };

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Login
                handleLogin={this.handleLogin}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />

          <Route
            exact
            path="/login"
            render={() => (
              <Login
                handleLogin={this.handleLogin}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={() => (
              <Register
                handleRegister={this.handleRegister}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />

          <Route
            exact
            path="/explorer"
            render={() => (
              <PostsView
                posts={this.state.posts}
                postForm={this.state.postForm}
                handleFormChange={this.handleFormChange}
                newPost={this.newPost}
              />
            )}
          />
          {/* //////////////////////////////////////////// */}

          <Route
            exact
            path="/users/:id/myposts"
            render={() => (
              <MyPostsView
                posts={this.state.posts}
                currentUser={this.state.currentUser}
              />
            )}
          />

          {/* //////////////////////////////////////////// */}
          <Route
            path="/create/post"
            render={() => (
              <CreatePost
                handleFormChange={this.handleFormChange}
                postForm={this.state.postForm}
                newPost={this.newPost}
              />
            )}
          />

          <Route
            path="/posts/:id/addcomment"
            // render={(props) => (

            render={(props) => {
              const { id } = props.match.params;
              const post = this.state.posts.find(
                (el) => el.id === parseInt(id)
              );
              return (
                <CreateComment
                  {...props}
                  handleCommentFormChange={this.handleCommentFormChange}
                  commentForm={this.state.commentForm}
                  newComment={this.newComment}
                  post={post}
                  comments={this.state.comments}
                />
              );
            }}
          />

          <Route
            path="/posts/:id"
            render={(props) => {
              const { id } = props.match.params;
              const post = this.state.posts.find(
                (el) => el.id === parseInt(id)
              );
              return (
                <PostPage
                  id={id}
                  post={post}
                  comments={this.state.comments}
                  handleFormChange={this.handleFormChange}
                  mountEditForm={this.mountEditForm}
                  editPost={this.editPost}
                  postForm={this.state.postForm}
                  deletePost={this.deletePost}
                  currentUser={this.state.currentUser}
                />
              );
            }}
          />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Container);
