import mongoose from "mongoose";

const progressSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});

export const Progress = mongoose.model("Progress", progressSchema);
