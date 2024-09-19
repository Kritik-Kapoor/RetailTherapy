import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const onBoardingSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minLength: 7,
    },
  },
  { timestamps: true }
);

onBoardingSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export const onBoarding = mongoose.model("onBoarding", onBoardingSchema);
