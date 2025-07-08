import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../store/UserContext";
import axios from "axios";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setjob] = useState({});
  const navigate = useNavigate();
  const { isAuthorized, user } = useContext(UserContext);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/job/${id}`,
          { withCredentials: true }
        );
        setjob(response.data.job);
      } catch (error) {
        navigate("/notfound");
      }
    };
    fetchJob();
  }, [id, navigate]);

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/login");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="job-detail">
      <div className="container">
        <div className="title" style={{ textAlign: "center" }}>
          <h2 className="job-cat">{job.company}</h2>
          <h3>{job.title}</h3>
        </div>
        <div className="banner">
          <div>
            <span>Job Type :</span>{" "}
            <span>
              <ul style={{ marginLeft: "27px" }}>
                {job.jobType &&
                  job.jobType.map((job) => {
                    return <li key={job}>{job}</li>;
                  })}
              </ul>
            </span>
          </div>
          <div>
            <span>Country :</span> <span>{job.country}</span>
          </div>
          <div>
            <span>City :</span> <span>{job.city}</span>
          </div>
          <div>
            <span>Location :</span> <span>{job.location}</span>
          </div>
          <div>
            <span>Description :</span> <span>{job.description}</span>
          </div>
          <div>
            <span>Job posted on :</span>{" "}
            <span>
              {job.jobPostedOn ? job.jobPostedOn.split("T")[0] : "N/A"}
            </span>
          </div>
          <div>
            <span>Salary :</span>{" "}
            {job.fixedSalary ? (
              <span>{job.fixedSalary}</span>
            ) : (
              <span>
                {job.salaryFrom} - {job.salaryTo}
              </span>
            )}
          </div>
          {user && user.role === "Employer" ? (
            <></>
          ) : (
            <Link to={`/application/${job._id}`}>
              <button className="btn btn-apply">Apply Now</button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
