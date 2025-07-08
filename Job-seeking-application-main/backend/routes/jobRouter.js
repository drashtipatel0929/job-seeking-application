import express from "express";
import {
  deleteJob,
  getAllJobs,
  getMyJobs,
  getSingleJob,
  postJob,
  updateJob,
} from "../controllers/jobController.js";
import { isAuthorized } from "../middlewares/auth.js";
const router = express.Router();

router.get("/getAllJob", getAllJobs);
router.post("/post", isAuthorized, postJob);
router.get("/getMyJobs", isAuthorized, getMyJobs);
router.put("/updateJob/:id", isAuthorized, updateJob);
router.delete("/deleteJob/:id", isAuthorized, deleteJob);
router.get("/:id", isAuthorized, getSingleJob);
export default router;
