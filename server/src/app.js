import express from "express";
import cors from "cors";

const app = express();

//middlewares
app.use(cors());
import { errorHandler } from "./middlewares/error.middleware.js";

app.use(errorHandler);

//routes

import { onboardingRoute } from "./routes/onboarding.routes.js";

app.use("/api/v1/onboarding", onboardingRoute);

export default app;
