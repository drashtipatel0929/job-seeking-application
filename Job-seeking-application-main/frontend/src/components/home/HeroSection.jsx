import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./../../store/UserContext";

function HeroSection() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleonclick = () => {
    navigate("/job/getall");
  };
  return (
    <>
      <div className="hero">
        <div className="content">
          <h1>
            Welcome, <span>{user.name} !</span>
          </h1>
          <h2>Unlock Your Professional Potential </h2>
          <p>
            Connecting top talent with exceptional opportunities. <br />
            Where your next great hire is just a{" "}
            <span className="span"> click away. </span>
          </p>
          <button onClick={handleonclick}>Find Job</button>
        </div>
        <div className="image">
          <img src="/image/home.png" alt="" />
        </div>
      </div>
    </>
  );
}
export default HeroSection;
