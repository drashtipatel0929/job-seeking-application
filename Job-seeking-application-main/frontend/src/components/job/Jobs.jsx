import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../store/UserContext";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const { isAuthorized } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/job/getAllJob", {
          withCredentials: true,
        });
        const { jobs } = res.data;
        setJobs(jobs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/");
    }
  }, [isAuthorized, navigate]);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter jobs based on search query
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="all-jobs">
      <div className="container">
        <h1>Explore the available Jobs!</h1>
        {/* Search Input */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for jobs..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="banner">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((element) => (
              <div className="job-card" key={element._id}>
                <div className="title">
                  <h2 className="job-cat">{element.company}</h2>
                  <h3>{element.title}</h3>
                </div>
                <div>
                  <span>Location : </span>
                  {element.location}
                </div>
                <div>
                  <span>Job Type :</span>
                  <span>
                    <ul style={{ marginLeft: "27px", fontWeight: 400 }}>
                      {element.jobType &&
                        element.jobType.map((job) => <li key={job}>{job}</li>)}
                    </ul>
                  </span>
                </div>
                <div>
                  <span>Posted on : </span>
                  {element.jobPostedOn.split("T")[0]}
                </div>
                <Link to={`/job/${element._id}`} className="a-job">
                  <button className="btn-job">View Job Details</button>
                </Link>
              </div>
            ))
          ) : (
            <p>No jobs found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
