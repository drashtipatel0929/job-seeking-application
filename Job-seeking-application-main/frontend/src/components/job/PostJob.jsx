import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/UserContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [jobType, setJobtype] = useState([]);
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");

  const { isAuthorized, user } = useContext(UserContext);

  const navigate = useNavigate();
  const handleJobtype = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setJobtype((prev) => {
        const updatedJob = [...prev, value];
        // console.log(updatedJob);
        return updatedJob;
      });
    } else {
      //remove
      setJobtype((prev) => {
        const updatedJob = prev.filter((type) => type !== value);
        // console.log(updatedJob);
        return updatedJob;
      });
    }
  };

  const handleJobPost = async (e) => {
    e.preventDefault();

    // Logging the jobType state before submission
    console.log("Job Types Selected:", jobType);

    // Salary type handling logic
    if (salaryType === "Fixed Salary") {
      setSalaryFrom("");
      setSalaryTo("");
    } else if (salaryType === "Ranged Salary") {
      setFixedSalary("");
    } else {
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
    }

    // Submitting the form
    await axios
      .post(
        "http://localhost:4000/api/job/post",
        fixedSalary.length >= 4
          ? {
              title,
              company,
              jobType, // This should now reflect the correct state
              country,
              city,
              location,
              description,
              fixedSalary,
            }
          : {
              title,
              company,
              jobType, // This should now reflect the correct state
              country,
              city,
              location,
              description,
              salaryFrom,
              salaryTo,
            },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);

        // Resetting form fields after successful post
        setTitle("");
        setCompany("");
        setCity("");
        setCountry("");
        setDescription("");
        setSalaryType("default");
        setJobtype([]); // Resetting jobType to an empty array after success
        setLocation("");
        setFixedSalary("");
        setSalaryFrom("");
        setSalaryTo("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  // Logging the jobType array to the console each time it updates
  useEffect(() => {
    console.log("Updated jobType array:", jobType);
  }, [jobType]);

  useEffect(() => {
    if (!isAuthorized || (user && user.role !== "Employer")) {
      navigate("/");
    }
  }, [isAuthorized, navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="job-post page">
        <div className="container">
          <h2>Post new job</h2>
          <form onSubmit={handleJobPost}>
            <div className="wrapper">
              <div className="form-control">
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company Name"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Job title"
                />
              </div>
            </div>
            <div className="wrapper jobtype-wrapper">
              <span>Job Type : </span>
              <div className="jobcheck">
                <input
                  type="checkbox"
                  id="pt"
                  value="Part Time"
                  onChange={handleJobtype}
                  checked={
                    jobType && jobType.includes("Part Time") ? true : false
                  }
                />
                <label htmlFor="pt">Part-time</label>
              </div>
              <div className="jobcheck">
                <input
                  type="checkbox"
                  value="Full Time"
                  checked={
                    jobType && jobType.includes("Full Time") ? true : false
                  }
                  id="ft"
                  onChange={handleJobtype}
                />
                <label htmlFor="ft">Full-time</label>
              </div>
              <div className="jobcheck">
                <input
                  type="checkbox"
                  value="Internship"
                  id="i"
                  checked={
                    jobType && jobType.includes("Internship") ? true : false
                  }
                  onChange={handleJobtype}
                />

                <label htmlFor="i">Internship</label>
              </div>
            </div>
            <div className="wrapper">
              <div className="form-control">
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                />
              </div>
            </div>
            <div className="wrapper">
              <div className="form-control full">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                />
              </div>
            </div>

            <div className="salary-wrapper wrapper" style={{ gap: 0 }}>
              <div className="form-control full">
                <select
                  value={salaryType}
                  onChange={(e) => setSalaryType(e.target.value)}
                >
                  <option value="default">Select salary type</option>
                  <option value="Fixed Salary">Fixed Salary</option>
                  <option value="Ranged Salary">Ranged Salary</option>
                </select>
              </div>
              <div className="salary-type">
                {salaryType === "default" ? (
                  // <p>*Please provide salary type</p>
                  ""
                ) : salaryType === "Fixed Salary" ? (
                  <div className="fixed-salary wrapper">
                    <div className="form-control full">
                      <input
                        type="number"
                        placeholder="Enter fixed salary"
                        value={fixedSalary}
                        onChange={(e) => setFixedSalary(e.target.value)}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="ranged_salary wrapper">
                    <div className="form-control">
                      <input
                        type="number"
                        placeholder="Salary from"
                        value={salaryFrom}
                        onChange={(e) => setSalaryFrom(e.target.value)}
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="number"
                        placeholder="Salary to"
                        value={salaryTo}
                        onChange={(e) => setSalaryTo(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <textarea
              rows={10}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Job description"
            />

            <button type="submit" className="btn-post-job">
              Create Job
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostJob;
