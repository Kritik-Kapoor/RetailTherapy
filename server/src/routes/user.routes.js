import { Router } from "express";
import registerUser from "../controllers/user/register.controller.js";
import userLogin from "../controllers/user/login.controller.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(userLogin);

export default userRouter;
