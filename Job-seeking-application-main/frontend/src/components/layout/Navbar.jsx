import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFileAlt, FaHome, FaList, FaUpload } from "react-icons/fa";
import { TiUpload } from "react-icons/ti";
import { VscPreview } from "react-icons/vsc";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(UserContext);
  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/user/logout",
        { withCredentials: true }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };

  return (
    <>
      <nav className={isAuthorized ? "navbar-show navbar" : "navbar-hide"}>
        <div className="container">
          <div className="logo">
            <img src="/image/logo.png" alt="logo" height={"50px"} />
          </div>
          <ul className={!show ? "menu" : "show-menu menu"}>
            <li>
              <Link to={"/"} onClick={() => setShow(false)}>
                <div className="navItem">
                  <span>
                    <FaHome />
                  </span>
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/job/getall"} onClick={() => setShow(false)}>
                <div className="navItem">
                  <span>
                    <FaList />
                  </span>
                  <span>All Jobs</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"application/me"} onClick={() => setShow(false)}>
                <div className="navItem">
                  <span>
                    <FaFileAlt />
                  </span>
                  <span>Applications</span>
                </div>
              </Link>
            </li>
            {user && user.role === "Employer" ? (
              <>
                <li>
                  <Link to={"/job/post"} onClick={() => setShow(false)}>
                    <div className="navItem">
                      <span>
                        <TiUpload />
                      </span>
                      <span>Post Job</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to={"/job/me"} onClick={() => setShow(false)}>
                    <div className="navItem">
                      <span>
                        <VscPreview />
                      </span>
                      <span>View Job</span>
                    </div>
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
            <button className="btn-logout" onClick={handleLogout}>
              Logout{" "}
              <span>
                <IoMdLogOut />
              </span>
            </button>
          </ul>
          <div className={show ? "show-hamburger" : "hamburger"}>
            <GiHamburgerMenu onClick={() => setShow(!show)} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
