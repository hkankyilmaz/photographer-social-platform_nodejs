import mongoose from "mongoose";

const { Schema } = mongoose;

const photoScheme = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const Photo = mongoose.model("Photo", photoScheme);

export default Photo;
