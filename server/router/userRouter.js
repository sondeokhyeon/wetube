import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send('users'))
userRouter.get(routes.usersDetail, (req, res) => res.send('user detail'))
userRouter.get(routes.editProfile, (req, res) => res.send('edit profile'))
userRouter.get(routes.changePassword, (req, res) =>
    res.send('chagne password'));

export default userRouter;