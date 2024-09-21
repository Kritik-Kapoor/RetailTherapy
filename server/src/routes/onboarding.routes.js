import { Router } from "express";
import { registerUser } from "../controllers/onboarding/register.controller";

const onboardingRouter = Router();

onboardingRouter.route("/register").post(registerUser);

export default onboardingRouter;
