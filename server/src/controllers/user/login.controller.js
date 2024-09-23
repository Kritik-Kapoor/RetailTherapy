import { User } from "../../models/user/user.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if ([email, password].some((field) => !field || field.trim() === ""))
    throw new ApiError(400, "All fields are mandatory");

  const user = await User.findOne({ email: email });

  if (!user) throw new ApiError(401, "Incorrect credentials");

  const passwordVerified = await user.verifyPassword(password);

  if (passwordVerified) {
    const accessToken = user.generateAccessToken();
    const userData = await User.findOne({ email: email }).select("-password");
    return res
      .status(200)
      .json(
        new ApiResponse(200, { userData, accessToken }, "Login Successfull")
      );
  } else {
    throw new ApiError(401, "Incorrect credentials");
  }
});

export default userLogin;
