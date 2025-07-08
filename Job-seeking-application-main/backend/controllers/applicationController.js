import { Application } from "../models/applicationModel.js";
import { catchAsyncError } from "./../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Job } from "../models/jobModel.js";

export const employerGetAllApplications = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Job Seeker") {
      return next(
        new ErrorHandler(
          "Job seeker is not allowed to access this resource!",
          400
        )
      );
    }

    const { _id } = req.user;

    // Fetch applications where the employerId matches the logged-in employer
    const applications = await Application.find({ "employerId.user": _id })
      .populate("applicantId.user", "name email")
      .populate("jobId", "title company location salary jobType description"); // Include job details

    res.status(200).json({
      success: true,
      applications,
    });
  }
);

export const jobSeekerGetAllApplications = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
      return next(
        new ErrorHandler(
          "Employer is not allowed to access this resource!",
          400
        )
      );
    }

    const { _id } = req.user;

    // Fetch applications where the applicantId matches the logged-in job seeker
    const applications = await Application.find({ "applicantId.user": _id })
      .populate("employerId.user", "name email") // Optionally populate employer details
      .populate("jobId", "title company location salary jobType description"); // Optionally populate job details

    res.status(200).json({
      success: true,
      applications,
    });
  }
);

export const jobSeekerDeleteApplication = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
      return next(
        new ErrorHandler(
          "Employer is not allowed to access this resource!",
          400
        )
      );
    }

    const { id } = req.params;

    // Find the application by ID
    const application = await Application.findById(id);
    if (!application) {
      return next(new ErrorHandler("Oops! Application not found.", 404));
    }

    // Delete the application
    await application.deleteOne();

    res.status(200).json({
      success: true,
      message: "Application deleted successfully!",
    });
  }
);

export const postApplication = catchAsyncError(async (req, res, next) => {
  try {
    const { name, email, phone, address } = req.body;
    const resume = req.file ? req.file.path : null;

    // Extract jobId from route parameters
    const jobId = req.params.id;
    console.log(jobId);

    const job = await Job.findById(jobId).populate("postedBy");
    if (!job) {
      return next(new ErrorHandler("Job not found", 404));
    }

    const employerId = job.postedBy;

    if (!employerId) {
      return next(new ErrorHandler("Employer not found for this job", 404));
    }

    const applicantId = req.user._id;

    const application = new Application({
      name,
      email,
      phone,
      address,
      resume,
      applicantId: {
        user: applicantId,
        role: "Job Seeker",
      },
      employerId: {
        user: employerId._id,
        role: "Employer",
      },
      jobId: job._id,
    });

    await application.save();
    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});
