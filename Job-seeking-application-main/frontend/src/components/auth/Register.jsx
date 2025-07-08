import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/UserContext";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { ImPencil2 } from "react-icons/im";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const { isAuthorized, setIsAuthorized } = useContext(UserContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/user/register",
        { name, email, password, role },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    if (isAuthorized) {
      navigate("/");
    }
  }, [isAuthorized, navigate]);

  return (
    <div className="auth-page">
      <div className="container">
        <div className="heading">
          <h3>Create new account</h3>
        </div>
        <form action="">
          <div className="form-control">
            <label>Register As</label>
            <div className="input-wrapper">
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="Employer">Employer</option>
                <option value="Job Seeker">Job Seeker</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label>Name</label>
            <div className="input-wrapper">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
              <ImPencil2 />
            </div>
          </div>
          <div className="form-control">
            <label>Email Address</label>
            <div className="input-wrapper">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
              />
              <MdOutlineMailOutline />
            </div>
          </div>

          <div className="form-control">
            <label>Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**********"
              />
              <RiLock2Fill />
            </div>
          </div>
          <button onClick={handleRegister} type="submit">
            Register
          </button>
          <div className="login">
            Already have an account? <Link to={"/login"}>Login Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
