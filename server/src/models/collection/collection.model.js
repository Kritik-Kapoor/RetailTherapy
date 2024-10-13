import mongoose, { Schema } from "mongoose";

const collectionSchema = new Schema({
  collection: {
    type: String,
    required: [true, "Collection is required"],
    minLength: 2,
    lowerCase: true,
    unique: true,
    trim: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  img: {
    type: String,
    required: true,
    trim: true,
  },
});

export const Collection = mongoose.model("Collection", collectionSchema);
