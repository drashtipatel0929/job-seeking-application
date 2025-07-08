import React, { useContext } from "react";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { UserContext } from "../../store/UserContext";
const Footer = () => {
  const { isAuthorized } = useContext(UserContext);
  return (
    <>
      <div className={isAuthorized ? "footer-show main-footer" : "footer-hide"}>
        <div className="sub-footer">
          <div className="footer">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="footer">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Community Guidelines</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer">
            <h3>Resourses</h3>
            <ul>
              <li>
                <a href="#">Job Search Tips</a>
              </li>
              <li>
                <a href="#">Resume Writing</a>
              </li>
              <li>
                <a href="#">Company Reviews</a>
              </li>
              <li>
                <a href="#">Featured Companies</a>
              </li>
            </ul>
          </div>
          <div className="footer">
            <h3>Follow Us</h3>
            <a href="#" className="a">
              <RiInstagramFill className="footer-icon" />
            </a>
            <a href="#" className="a">
              <FaFacebookF className="footer-icon" />
            </a>
            <a href="#" className="a">
              <FaTwitter className="footer-icon" />
            </a>
            <a href="#" className="a">
              <FaLinkedin className="footer-icon" />
            </a>
          </div>
        </div>
        <hr />
        <div className="copy-footer">
          <p>@Copyright, All rights reserved 2020</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

{
  /* <footer className={isAuthorized ? "footer-show" : "footer-hide"}>
        <div>&copy; All rights reserved by CodewithHimali.</div>
        <div>
          <Link to={"/"} target="_blank">
            <FaFacebookF />
          </Link>
          <Link to={"/"} target="_blank">
            <FaYoutube />
          </Link>
          <Link to={"/"} target="_blank">
            <FaLinkedin />
          </Link>
          <Link to={"/"} target="_blank">
            <RiInstagramFill />
          </Link>
        </div>
      </footer>
    */
}
