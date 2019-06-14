import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment
} from "../contollers/videoController";

const apiRouter = express.Router();

// apiRouter.get(routes.users, users);
apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
