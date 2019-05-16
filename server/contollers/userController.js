import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", {
    pageTitle: "join"
  });
};

export const postJoin = async (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", {
      pageTitle: "Join"
    });
  } else {
    const user = await User.create()
    // To do : registerUser
    // To do : Log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("login", {
    pageTitle: "login"
  });
};

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To do : precess home
  res.redirect(routes.home);
};

export const users = (req, res) =>
  res.render("users", {
    pageTitle: "users"
  });

export const userDetail = (req, res) =>
  res.render("userDetail", {
    pageTitle: "userDetail"
  });

export const editProfile = (req, res) =>
  res.render("editProfile", {
    pageTitle: "editProfile"
  });

export const changePassword = (req, res) =>
  res.render("changePassword", {
    pageTitle: "changePassword"
  });
