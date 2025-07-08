import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const { isAuthorized, user, loading, setLoading } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthorized || (user && user.role !== "Employer")) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/job/getMyJobs",
          { withCredentials: true }
        );
        setMyJobs(data.myJobs);
      } catch (error) {
        toast.error(error.response.data.message);
        setMyJobs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleEnableEdit = (jobId) => {
    setEditMode(jobId);
  };
  const handleDisableEdit = (jobId) => {
    setEditMode(null);
  };
  const handleUpdateJob = async (jobId) => {
    const updatedJob = myJobs.find((job) => {
      return job._id === jobId;
    });
    await axios
      .put(`http://localhost:4000/api/job/updateJob/${jobId}`, updatedJob, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setEditMode(null);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  const handleJobTypeChange = (e, element) => {
    const { checked, value } = e.target;

    const updatedJobTypes = checked
      ? [...element.jobType, value]
      : element.jobType.filter((job) => job !== value);

    handleInputChange(element._id, "jobType", updatedJobTypes);
  };

  const handleDeleteJob = async (jobId) => {
    await axios
      .delete(`http://localhost:4000/api/job/deleteJob/${jobId}`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setMyJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  const handleInputChange = (jobId, field, value) => {
    setMyJobs((prevJobs) =>
      prevJobs.map((job) =>
        job._id === jobId ? { ...job, [field]: value } : job
      )
    );
  };
  return (
    <>
      <div className="myJobs">
        <div className="container">
          <h3>Your posted jobs</h3>
          {myJobs && myJobs.length > 0 ? (
            <>
              <div className="banner">
                {myJobs.map((element) => {
                  return (
                    <div className="card" key={element._id}>
                      <h2
                        style={{
                          textDecoration: "underline",
                          marginBottom: "15px",
                        }}
                      >
                        {element.title}
                      </h2>
                      <div className="wrapper">
                        <div className="form-control">
                          <span>Title :</span>
                          <input
                            type="text"
                            disabled={editMode !== element._id ? true : false}
                            value={element.title}
                            onChange={(e) =>
                              handleInputChange(
                                element._id,
                                "title",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="form-control ">
                          <span>Company :</span>
                          <input
                            type="text"
                            disabled={editMode !== element._id ? true : false}
                            value={element.company}
                            onChange={(e) =>
                              handleInputChange(
                                element._id,
                                "company",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="wrapper jobtypeUpdate">
                        <span>Job Type :</span>
                        <div className="checkWrapper">
                          {["Full Time", "Part Time", "Internship"].map(
                            (type) => (
                              <div className="jobcheck" key={type}>
                                <input
                                  type="checkbox"
                                  checked={
                                    element.jobType &&
                                    element.jobType.includes(type)
                                      ? true
                                      : false
                                  }
                                  value={type}
                                  id={type}
                                  disabled={editMode !== element._id}
                                  onChange={(e) =>
                                    handleJobTypeChange(e, element)
                                  }
                                />
                                <label htmlFor={type}>{type}</label>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <div className="wrapper"></div>
                      <div className="wrapper">
                        <div className="form-control">
                          <span>Country :</span>
                          <input
                            type="text"
                            disabled={editMode !== element._id ? true : false}
                            value={element.country}
                            onChange={(e) =>
                              handleInputChange(
                                element._id,
                                "country",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="form-control">
                          <span>City :</span>
                          <input
                            type="text"
                            disabled={editMode !== element._id ? true : false}
                            value={element.city}
                            onChange={(e) =>
                              handleInputChange(
                                element._id,
                                "city",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="wrapper">
                        <div className="form-control full-control">
                          <span>Location :</span>
                          <input
                            type="text"
                            disabled={editMode !== element._id ? true : false}
                            value={element.location}
                            onChange={(e) =>
                              handleInputChange(
                                element._id,
                                "location",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="wrapper">
                        {element.fixedSalary ? (
                          <div className="fixed-salary wrapper">
                            <div className="form-control full-control">
                              <span>Salary :</span>
                              <input
                                type="number"
                                disabled={
                                  editMode !== element._id ? true : false
                                }
                                value={element.fixedSalary}
                                onChange={(e) =>
                                  handleInputChange(
                                    element._id,
                                    "fixedSalary",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="randed_salary wrapper">
                            <div className="form-control">
                              <span>Salary From :</span>
                              <input
                                type="number"
                                disabled={
                                  editMode !== element._id ? true : false
                                }
                                value={element.salaryFrom}
                                onChange={(e) =>
                                  handleInputChange(
                                    element._id,
                                    "salaryFrom",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="form-control">
                              <span>Salary To :</span>
                              <input
                                type="text"
                                disabled={
                                  editMode !== element._id ? true : false
                                }
                                value={element.salaryTo}
                                onChange={(e) =>
                                  handleInputChange(
                                    element._id,
                                    "salaryTo",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="wrapper">
                        <div className="form-control full-control">
                          <span>Description :</span>
                          <textarea
                            rows={5}
                            value={element.description}
                            onChange={(e) =>
                              handleInputChange(
                                element._id,
                                "description",
                                e.target.value
                              )
                            }
                            disabled={editMode !== element._id ? true : false}
                          ></textarea>
                        </div>
                      </div>

                      <div className="button-wrapper">
                        <div>
                          <div className="edit-wrapper">
                            {editMode === element._id ? (
                              <>
                                <button
                                  onClick={() => handleUpdateJob(element._id)}
                                  className="check-btn"
                                >
                                  <IoCheckmarkCircle />
                                </button>
                                <button
                                  onClick={() => handleDisableEdit(element._id)}
                                  className="cross-btn"
                                >
                                  <IoCloseCircle />
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={() => handleEnableEdit(element._id)}
                                  className="edit-btn"
                                >
                                  Edit
                                </button>
                              </>
                            )}
                          </div>
                          <button
                            onClick={() => handleDeleteJob(element._id)}
                            className="delete-btn"
                          >
                            Delete
                          </button>
                        </div>
                        <div className="expired">
                          <div className="form-control">
                            <span>Expired :</span>
                            <select
                              value={element.expired}
                              onChange={(e) =>
                                handleInputChange(
                                  element._id,
                                  "expired",
                                  e.target.value
                                )
                              }
                              disabled={editMode !== element._id ? true : false}
                            >
                              <option value="true">True</option>
                              <option value="false">False</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <h3>There is not any jobs available</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default MyJobs;
