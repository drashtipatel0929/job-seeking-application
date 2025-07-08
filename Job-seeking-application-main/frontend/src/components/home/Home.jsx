import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import PopularCompany from "./PopularCompany";
import { useContext, useEffect } from "react";
import JobType from "./JobType";
import { UserContext } from "../../store/UserContext";
import PopularCategory from "./PopularCategory";
function Home() {
  const { isAuthorized } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthorized) {
      navigate("/login");
    }
  }, [isAuthorized, navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <hr />
      <PopularCategory />
      <hr />
      <JobType />
      <hr />
      <PopularCompany />
    </>
  );
}
export default Home;
