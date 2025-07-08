import { catchAsyncError } from "./../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Job } from "./../models/jobModel.js";
import { Application } from "../models/applicationModel.js";
export const getAllJobs = catchAsyncError(async (req, res, next) => {
  const jobs = await Job.find({ expired: false });
  res.status(200).json({
    success: true,
    jobs,
  });
});

export const postJob = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler(
        "Job seeker is not allowed to access this resources!",
        400
      )
    );
  }

  const {
    title,
    description,
    company,
    jobType,
    country,
    city,
    location,
    salaryFrom,
    salaryTo,
    fixedSalary,
  } = req.body;

  if (
    !title ||
    !description ||
    !company ||
    !country ||
    !city ||
    !location ||
    !jobType
  ) {
    return next(new ErrorHandler("Please provide all the job details", 400));
  }
  if (!Array.isArray(jobType) || jobType.length === 0) {
    return next(new ErrorHandler("Job Type is required", 400));
  }

  if ((!salaryFrom || !salaryTo) && !fixedSalary) {
    return next(
      new ErrorHandler(
        "Please provide either fixed salary or ranged salary",
        400
      )
    );
  }
  if (salaryFrom && salaryTo && fixedSalary) {
    return next(
      new ErrorHandler(
        "You cannot enter fixed salary and range salary together!",
        400
      )
    );
  }
  if (salaryFrom && salaryTo && salaryFrom > salaryTo) {
    return next(
      new ErrorHandler("Salary 'to' cannot be less than Salary 'from'.", 400)
    );
  }
  const postedBy = req.user._id;
  const job = await Job.create({
    title,
    description,
    company,
    country,
    jobType,
    city,
    location,
    salaryFrom,
    salaryTo,
    fixedSalary,
    postedBy,
  });
  res.status(200).json({
    success: true,
    message: "Job posted successfully!",
    job,
  });
});

export const getMyJobs = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler(
        "Job seeker is not allowed to access this resources!",
        400
      )
    );
  }

  const myJobs = await Job.find({ postedBy: req.user._id });
  res.status(200).json({
    success: true,
    myJobs,
  });
});

export const updateJob = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler(
        "Job seeker is not allowed to access this resources!",
        400
      )
    );
  }

  const { id } = req.params;
  const {
    title,
    description,
    company,
    jobType,
    country,
    city,
    location,
    salaryFrom,
    salaryTo,
    fixedSalary,
  } = req.body;
  if (!Array.isArray(jobType) || jobType.length === 0) {
    return next(new ErrorHandler("Job Type is required", 400));
  }
  let job = await Job.findById(id);
  if (!job) {
    return next(new ErrorHandler("Oops! Job not found.", 404));
  }

  if (
    title === undefined ||
    description === undefined ||
    company === undefined ||
    country === undefined ||
    city === undefined ||
    location === undefined ||
    jobType === undefined
  ) {
    return next(new ErrorHandler("Please provide all the job details", 400));
  }

  // Validate salary
  if ((!salaryFrom || !salaryTo) && !fixedSalary) {
    return next(
      new ErrorHandler(
        "Please provide either fixed salary or ranged salary",
        400
      )
    );
  }
  if (salaryFrom && salaryTo && fixedSalary) {
    return next(
      new ErrorHandler(
        "You cannot enter fixed salary and range salary together!",
        400
      )
    );
  }
  if (salaryFrom && salaryTo && salaryFrom > salaryTo) {
    return next(
      new ErrorHandler("Salary 'to' cannot be less than Salary 'from'.", 400)
    );
  }
  // Update job details
  job = await Job.findByIdAndUpdate(id, req.body);

  res.status(200).json({
    success: true,
    message: "Job updated successfully",
    job,
  });
});

export const deleteJob = catchAsyncError(async (req, res, next) => {
  const role = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("Job Seeker is not allowed to use this resources!", 400)
    );
  }
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    return next(new ErrorHandler("Oops! job not found.", 404));
  }

  // Delete all applications associated with the job
  const applicationsDeleted = await Application.deleteMany({ jobId: id });

  // Delete the job itself
  await job.deleteOne();

  res.status(200).json({
    success: true,
    message: `Job deleted successfully! ${applicationsDeleted.deletedCount} applications also deleted.`,
  });
});
export const getSingleJob = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id);
    if (!job) {
      return next(new ErrorHandler("Job not found!", 404));
    }
    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    return next(new ErrorHandler("Invalid Id/Cast error", 400));
  }
});
