import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { onBoarding } from "../../models/onboarding/onboarding.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (
    [username, email, password].some((field) => !field || field.trim() === "")
  )
    throw new ApiError(400, "All fields are mandatory");

  const userExists = await onBoarding.findOne({ email });

  if (userExists) throw new ApiError(409, "Email is already registered");

  const createUser = await onBoarding.create({
    username,
    email,
    password,
  });

  const createdUser = await onBoarding
    .findById(createUser._id)
    .select("-password");

  const { accessToken } = await createdUser.generateAccessToken();
  if (!accessToken) throw new ApiError(500, "Failed to generate access token");

  if (createdUser) {
    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          { createdUser, accessToken },
          "User registered successfully"
        )
      );
  }
});

export { registerUser };
