import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../store/UserContext";
import ResumeModel from "./ResumeModel.jsx";
import JobSeekerCard from "./JobSeekerCard.jsx";
import EmployerCard from "./EmployerCard.jsx";

const MyApplications = () => {
  const { user, isAuthorized } = useContext(UserContext);
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeFileUrl, setResumeFileUrl] = useState("");
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchApplications = async (role) => {
      const userRole =
        role === "Employer"
          ? "employer/getall"
          : role === "Job Seeker"
          ? "jobseeker/getall"
          : "";

      try {
        const res = await axios.get(
          `http://localhost:4000/api/application/${userRole}`,
          { withCredentials: true }
        );
        setApplications(res.data.applications);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    if (user) fetchApplications(user.role);
  }, [user]);

  useEffect(() => {
    if (!isAuthorized) {
      navigateTo("/");
    }
    window.scrollTo(0, 0);
  }, [isAuthorized, navigateTo]);

  const deleteApplication = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/application/delete/${id}`,
        { withCredentials: true }
      );
      toast.success(res.data.message);
      setApplications((prevApplications) =>
        prevApplications.filter((application) => application._id !== id)
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const openModal = (fileUrl) => {
    const formattedUrl = `http://localhost:4000/${fileUrl.replace(/\\/g, "/")}`;
    setResumeFileUrl(formattedUrl);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="my-applications">
      <>
        {user && user.role === "Job Seeker" ? (
          <div className="container">
            <h1>My Applications</h1>
            <div className="card">
              {applications.length <= 0 ? (
                <h4>No Applications Found!</h4>
              ) : (
                applications.map((element) => (
                  <JobSeekerCard
                    element={element}
                    key={element._id}
                    deleteApplication={deleteApplication}
                    openModal={openModal}
                  />
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="container">
            <h1>Applications From Job Seekers</h1>
            {applications.length <= 0 ? (
              <h4>No Applications Found!</h4>
            ) : (
              applications.map((element) => (
                <EmployerCard
                  element={element}
                  key={element._id}
                  openModal={openModal}
                />
              ))
            )}
          </div>
        )}
        {modalOpen && (
          <ResumeModel fileUrl={resumeFileUrl} onClose={closeModal} />
        )}
      </>
    </section>
  );
};

export default MyApplications;
