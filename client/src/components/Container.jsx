import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import PostsView from "./PostsView";
import PostPage from "./PostPage";
import CreatePost from "./CreatePost";
import Login from "./Login";
import Register from "./Register";
// import LandingPage from "./LandingPage";
import {
  createPost,
  readAllPosts,
  updatePost,
  destroyPost,
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
      },
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: "",
      },
    };
  }

  async componentDidMount() {
    this.getPosts();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  }

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
      },
    }));
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
      },
    });
  };

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login");
  };

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  };

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null,
    });
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
        {/* <Route exact path="/">
          <LandingPage />
        </Route> */}

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
          path="/posts"
          render={() => (
            <PostsView
              posts={this.state.posts}
              postForm={this.state.postForm}
              handleFormChange={this.handleFormChange}
              newPost={this.newPost}
            />
          )}
        />
        <Route
          path="/new/post"
          render={() => (
            <CreatePost
              handleFormChange={this.handleFormChange}
              postForm={this.state.postForm}
              newPost={this.newPost}
            />
          )}
        />
        <Route
          path="/posts/:id"
          render={(props) => {
            const { id } = props.match.params;
            const post = this.state.posts.find((el) => el.id === parseInt(id));
            return (
              <PostPage
                id={id}
                post={post}
                handleFormChange={this.handleFormChange}
                mountEditForm={this.mountEditForm}
                editPost={this.editPost}
                postForm={this.state.postForm}
                deletePost={this.deletePost}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default withRouter(Container);
