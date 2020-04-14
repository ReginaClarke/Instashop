import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://instashop-heroku.herokuapp.com/"
    : "http://localhost:3000"; //will need to update this to  heroku or another service upon deployment.

const api = axios.create({
  baseURL: baseUrl,
});

export const loginUser = async (loginData) => {
  const resp = await api.post("/auth/login", { auth: loginData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const registerUser = async (registerData) => {
  const resp = await api.post("/users", { user: registerData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return resp.data;
  }
  return false;
};

////////////////////////////POSTS SECTION/////////////////////////////

export const createPost = async (data) => {
  const resp = await api.post("/posts", { post: data });
  return resp.data;
};

export const readAllPosts = async () => {
  const resp = await api.get("/posts");
  return resp.data;
};

// export const readAllUserPosts = async () => {
//   const resp = await api.get(`/users/${id}`);
//   return resp.data;
// };

export const updatePost = async (id, data) => {
  const resp = await api.put(`/posts/${id}`, { post: data });
  return resp.data;
};

export const destroyPost = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp.data;
};

////////////////////////////COMMENTS SECTION/////////////////////////////
export const createComment = async (data) => {
  const resp = await api.post("/comments", { comment: data });
  return resp.data;
};

export const readAllComments = async () => {
  const resp = await api.get("/comments");
  return resp.data;
};

export const updateComment = async (id, data) => {
  const resp = await api.put(`/comments/${id}`, { comment: data });
  return resp.data;
};

export const destroyComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp.data;
};
