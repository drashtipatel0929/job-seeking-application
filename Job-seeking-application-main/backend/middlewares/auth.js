import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "./error.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
export const isAuthorized = catchAsyncError(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next(new ErrorHandler("User not authorized", 400));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    return next(new ErrorHandler("User not authorized", 400));
  }
});

// console.log("User found:", req.user);
//User found: {
//   _id: new ObjectId('66976916129f2421c0fc9440'),
//   _id: new ObjectId('66976916129f2421c0fc9440'),
//   name: 'abc',
//   email: 'abc@test.com',
//   phone: 1234567890,
//   role: 'Job Seeker',
//   createdAt: 2024-07-17T06:47:47.883Z,
//   __v: 0
// }
