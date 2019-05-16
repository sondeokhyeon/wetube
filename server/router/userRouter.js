import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword
} from "../contollers/userController";

const userRouter = express.Router();

// userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.usersDetail(), userDetail);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
