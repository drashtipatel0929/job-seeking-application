import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide job title."],
    minLength: [3, "Job title must contain atleast 3 characters"],
    maxLength: [50, "Job title connot exceed 50 characters"],
  },
  description: {
    type: String,
    required: [true, "Please provide job description."],
    minLength: [3, "Job description must contain atleast 3 characters"],
    maxLength: [350, "Job description connot exceed 350 characters"],
  },
  company: {
    type: String,
    required: [true, "Please provide company name."],
  },
  country: {
    type: String,
    required: [true, "Job country is required"],
  },
  city: {
    type: String,
    required: [true, "Job city is required"],
  },
  location: {
    type: String,
    required: [true, "Please provide exact location"],
    minLength: [10, "Job location must contain atleast 10 characters"],
  },
  fixedSalary: {
    type: Number,
    min: [5000, "Fixed salary must contain atleast 4 digits"],
    max: [10000000, "Fixed salary cannot exceed 9 digits"],
  },
  salaryFrom: {
    type: Number,
    min: [5000, "Salary from must contain atleast 4 digits"],
    max: [10000000, "Salary from cannot exceed 9 digits"],
  },
  salaryTo: {
    type: Number,
    min: [5000, "Salary to must contain atleast 4 digits"],
    max: [10000000, "Salary to cannot exceed 9 digits"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobType: [
    {
      type: String,
      enum: ["Full Time", "Part Time", "Internship"],
    },
  ],
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);
