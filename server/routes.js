// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users

const USERS = "/users";
const USERS_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHAGNE_PASSWORD = "/change-password";
const ME = "/me";

// video

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

//Github

const GITHUB = "/auth/github";
const GITGUB_CALLBACK = "/auth/github/callback";
const FB = "/auth/facebook";
const FB_CALLBACK = "/auth/facebook/callback";

const API = "/api";
const REGISTER_VIEW = "/:id/view";

const ADD_COMMNET = "/:id/comment";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    }
    return USERS_DETAIL;
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHAGNE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: id => {
    if (id) {
      return `/videos/${id}`;
    }
    return VIDEO_DETAIL;
  },
  editVideo: id => {
    if (id) {
      return `/videos/${id}/edit`;
    }
    return EDIT_VIDEO;
  },
  deleteVideo: id => {
    if (id) {
      return `/videos/${id}/delete`;
    }
    return DELETE_VIDEO;
  },
  github: GITHUB,
  githubCallback: GITGUB_CALLBACK,
  me: ME,
  facebook: FB,
  facebookCallback: FB_CALLBACK,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMNET
};

export default routes;
