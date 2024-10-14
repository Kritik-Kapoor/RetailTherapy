import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  product: {
    type: String,
    required: [true, "Product is required"],
    trim: true,
    lowercase: true,
    minLength: 2,
    index: true,
  },
  collection: {
    type: Schema.Types.ObjectId,
    ref: "Collection",
  },
  quantity: [
    {
      size: String,
      qty: {
        type: Number,
        default: 0,
      },
    },
  ],
  displayImg: {
    type: String,
    required: true,
    trim: true,
  },
  allImages: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
  brand: {
    type: String,
    required: [true, "Brand is required"],
    trim: true,
    index: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  fit: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  tags: [
    {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
  ],
});

export const Product = mongoose.model("Product", productSchema);
