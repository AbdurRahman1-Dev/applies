import mongoose, { Schema } from "mongoose";
import userSchema from "./users";

const appliedJobsSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  role: String,
  companyLogoURL: String,
  userEmail: String,
  notes: String,
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "In Review",
  },
});

const appliedJobs =
  mongoose.models.appliedJobs ||
  mongoose.model("appliedJobs", appliedJobsSchema);

export default appliedJobs;

export const User = mongoose.models.User || mongoose.model("Users", userSchema);
