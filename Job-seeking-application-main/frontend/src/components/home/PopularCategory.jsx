// import axios from "axios";
// import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import {
  MdAccountBalance,
  MdOutlineAnimation,
  MdOutlineDesignServices,
  MdOutlineWebhook,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";

function PopularCategory() {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305+ Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500+ Open Positions",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200+ Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Postions",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150+ Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867+ Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50+ Open Positions",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80+ Open Positions",
      icon: <IoGameController />,
    },
  ];

  return (
    <>
      <div className="categories">
        <h1>POPULAR CATEGORIES</h1>
        <div className="card">
          {
            <ul>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <h4 style={{ marginTop: "20px" }}> {cat.title}</h4>
                  <br />
                  <p>{cat.subTitle}</p>
                  <button className="btn-cat">
                    View Jobs <span></span>
                    {cat.icon}
                  </button>
                </li>
              ))}
            </ul>
          }
        </div>
      </div>
    </>
  );
}
export default PopularCategory;
