import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { User } from "../../models/user/user.model.js";
import { cookieOptions } from "../../constants.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (
    [username, email, password].some((field) => !field || field.trim() === "")
  )
    throw new ApiError(400, "All fields are mandatory");

  const userExists = await User.findOne({ email });

  if (userExists) throw new ApiError(409, "Email is already registered");

  const createUser = await User.create({
    username,
    email,
    password,
  });

  const createdUser = await User.findById(createUser._id).select("-password");

  const accessToken = createdUser.generateAccessToken();
  if (!accessToken) throw new ApiError(500, "Failed to generate access token");

  if (createdUser) {
    return res
      .status(201)
      .cookie("accessToken", accessToken, cookieOptions)
      .json(new ApiResponse(200, createdUser, "User registered successfully"));
  }
});

export default registerUser;
