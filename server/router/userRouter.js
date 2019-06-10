import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  getEditProfile,
  changePassword,
  postEditProfile
} from "../contollers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

// userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.usersDetail(), onlyPrivate, userDetail);

export default userRouter;
