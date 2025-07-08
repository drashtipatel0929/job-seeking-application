# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

https://github.com/Zeeshu911/MERN-Stack-Job-Seeking-Web-Application
HERO SECTION:
const details = [
{
id: 1,
title: "1,23,441",
subTitle: "Live Job",
icon: <FaSuitcase />,
},
{
id: 2,
title: "91220",
subTitle: "Companies",
icon: <FaBuilding />,
},
{
id: 3,
title: "2,34,200",
subTitle: "Job Seekers",
icon: <FaUsers />,
},
{
id: 4,
title: "1,03,761",
subTitle: "Employers",
icon: <FaUserPlus />,
},
];

POPULAR CATEGORIES:

const categories = [
{
id: 1,
title: "Graphics & Design",
subTitle: "305 Open Positions",
icon: <MdOutlineDesignServices />,
},
{
id: 2,
title: "Mobile App Development",
subTitle: "500 Open Positions",
icon: <TbAppsFilled />,
},
{
id: 3,
title: "Frontend Web Development",
subTitle: "200 Open Positions",
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
subTitle: "150 Open Positions",
icon: <MdAccountBalance />,
},
{
id: 6,
title: "Artificial Intelligence",
subTitle: "867 Open Positions",
icon: <GiArtificialIntelligence />,
},
{
id: 7,
title: "Video Animation",
subTitle: "50 Open Positions",
icon: <MdOutlineAnimation />,
},
{
id: 8,
title: "Game Development",
subTitle: "80 Open Positions",
icon: <IoGameController />,
},
];

POPULAR COMPANIES:

const companies = [
{
id: 1,
title: "Microsoft",
location: "Street 10 Karachi, Pakistan",
openPositions: 10,
icon: <FaMicrosoft />,
},
{
id: 2,
title: "Tesla",
location: "Street 10 Karachi, Pakistan",
openPositions: 5,
icon: <SiTesla />,
},
{
id: 3,
title: "Apple",
location: "Street 10 Karachi, Pakistan",
openPositions: 20,
icon: <FaApple />,
},
];

POST JOB: (JOB CATEGORIES)

<select
value={category}
onChange={(e) => setCategory(e.target.value)} >

<option value="">Select Category</option>
<option value="Graphics & Design">Graphics & Design</option>
<option value="Mobile App Development">
Mobile App Development
</option>
<option value="Frontend Web Development">
Frontend Web Development
</option>
<option value="MERN Stack Development">
MERN STACK Development
</option>
<option value="Account & Finance">Account & Finance</option>
<option value="Artificial Intelligence">
Artificial Intelligence
</option>
<option value="Video Animation">Video Animation</option>
<option value="MEAN Stack Development">
MEAN STACK Development
</option>
<option value="MEVN Stack Development">
MEVN STACK Development
</option>
<option value="Data Entry Operator">Data Entry Operator</option>
</select>

MY JOBS: (CATEGORIES)

<select
value={element.category}
onChange={(e) =>
handleInputChange(
element.\_id,
"category",
e.target.value
)
}
disabled={
editingMode !== element.\_id ? true : false
} >

<option value="Graphics & Design">
Graphics & Design
</option>
<option value="Mobile App Development">
Mobile App Development
</option>
<option value="Frontend Web Development">
Frontend Web Development
</option>
<option value="MERN Stack Development">
MERN STACK Development
</option>
<option value="Account & Finance">
Account & Finance
</option>
<option value="Artificial Intelligence">
Artificial Intelligence
</option>
<option value="Video Animation">
Video Animation
</option>
<option value="MEAN Stack Development">
MEAN STACK Development
</option>
<option value="MEVN Stack Development">
MEVN STACK Development
</option>
<option value="Data Entry Operator">
Data Entry Operator
</option>
</select>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

- {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Noto Sans", sans-serif;
  }
  body {
  background-image: url("https://img.cdn-pictorem.com/uploads/collection/E/EH4LNA1KMP/900_7ob_Trees_Moon_Lake_Moonlight_Night_Image_Manipulation_Mystic_Light_Mood_Illuminated_Night.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  }
  body::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  }
  .container {
  box-shadow: 0px 0px 10px white;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  color: #fff;
  height: 380px;
  width: 340px;
  padding: 20px;
  }
  .title {
  font-size: 40px;
  text-align: center;
  }
  .form-container .input-box {
  position: relative ;
  display: flex;
  align-items: center;
  }
  .form-container .email {
  margin-top: 30px;
  }
  .form-container .password {
  margin-top: 20px;
  }
  .input-box input {
  width: 100%;
  outline: 0;
  border: 2px solid #cecece;
  border-radius: 50px;
  padding: 8px 8px 8px 15px;
  background: transparent;
  color: #fff;
  font-size: 16px;
  }
  input::placeholder{
  color: #fff;
  }
  .input-box img {
  position: absolute;
  right: 25px;
  }
  .remember-forgot {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  }
  .forgot a {
  font-size: 15px;
  color: #fff;
  }
  .button {
  display: flex;
  justify-content: center;
  margin-top: 28px;
  }
  .button button {
  border: none;
  background-color: #fff;
  border-radius: 50px;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  outline: none;
  width: 100%;
  }
  .button button:hover {
  background-color: #cecece;
  }
  .register p {
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  }
  .register p a {
  color: #fff;
  }
  .register p a:hover,
  .forgot a:hover {
  color: blue;
  }

 <div class="container">
        <h2 class="title">Login</h2>
        <form action="#" class="form-container">
            <div class="input-box email">
                <input type="email"  id="email-input" required placeholder="Username">
                <img src="https://cdn-icons-png.flaticon.com/512/6325/6325109.png" alt="user-image" width="25px">
            </div>
            <div class="input-box password">
                <input type="password"  id="password-input" required placeholder="Password">
                <img src="https://cdn-icons-png.flaticon.com/512/2489/2489659.png" alt="lock-image" width="22px">
            </div>
            <div class="remember-forgot">
                <div class="remember">
                    <input type="checkbox" id="remember">
                    <label for="remember">Remember me</label>
                </div>
                <div class="forgot">
                    <a href="#">forgot Password ?</a>
                </div>
            </div>
            <div class="button">
                <button class="login">Login</button>
            </div>
            <div class="register">
                <p>Don't you have an account ?<a href="#">Register</a></p>
            </div>
        </form>
    </div>

    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

\*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
}

body{
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
background: url('https://i.postimg.cc/HW2MmR3p/ken-cheung-Kon-WFWUa-Auk-unsplash.jpg') no-repeat;
background-size: cover;
background-position: center;
}

.wrapper{
width: 420px;
color: white;
border: 2px solid rgba(255, 255, 255, .2);
backdrop-filter: blur(20px);
box-shadow: 0 0 10px rgba(0, 0, 0, .2);
border-radius: 10px;
padding: 30px 40px;
}

.wrapper h1{
font-size: 36px;
text-align: center;
}

.wrapper .input-box{
position: relative;
width: 100%;
height: 50px;
margin: 30px 0;
}

.input-box input{
width: 100%;
height: 100%;
background: transparent;
border: none;
outline: none;
border: 2px solid rgba(255, 255, 255, .2);
border-radius: 40px;
font-size: 18px;
color: white;
padding: 20px 45px 20px 20px;
}

.input-box input::placeholder{
color: white;
}

.input-box box-icon{
position: absolute;
right: 20px;
top: 50%;
transform: translateY(-50%);
font-size: 20px;
}

.wrapper .remember-forget{
display: flex;
justify-content: space-between;
font-size: 14.5px;
margin: -15px 0 15px;
}

.remember-forget label input{
accent-color: white;
margin-right: 5px;
}

.remember-forget a{
color: white;
text-decoration: none;
}

.remember-forget a:hover{
text-decoration: underline;
}

.wrapper .btn{
width: 100%;
height: 45px;
background: white;
border: none;
outline: none;
border-radius: 40px;
box-shadow: 0 0 10px rgba(0, 0, 0, .1);
cursor: pointer;
font-size: 16px;
font-weight: 600;
}

.wrapper .register-link{
font-size: 14.5px;
text-align: center;
margin: 20px 0 15px;
}

.register-link p a{
color: white;
text-decoration: none;
font-weight: 600;
font-size: 18px
}

.register-link p a:hover{
text-decoration: underline;
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <div class="wrapper">
        <form action="">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" required>
                <box-icon type='solid' name='user' color="white"></box-icon> 
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password" required> 
                <box-icon name='lock-alt' type='solid' color="white"></box-icon>
            </div>

            <div class="remember-forget">
                <label><input type="checkbox">Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit" class="btn">Login</button>

            <div class="register-link">
                <p>Don't have an account?<br> <a href="#">Register</a></p>
            </div>
        </form>
    </div>

    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

</body>
</html>

import { useNavigate } from "react-router-dom"
import style from "../../module/HeroSection.module.css";
// import { faCamera } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { IconContext } from "react-icons";
import PopularCategory from './PopularCategory';

function HeroSection() {

    const navigate = useNavigate()
    const handleonclick = () => {
        navigate('/job/getall');
    }
    return (
        <>

            <div className={style.hero}>
                <div className={style.content}>
                    <h1>Unlock Your Professional Potential </h1>
                    <p>Connecting top talent with exceptional opportunities. <br />
                        Where your next great hire is just a  <span className={style.span}> click away. </span></p>
                    <button onClick={handleonclick}>Find Job</button>
                </div>
                <div className={style.image}>
                    {/* <img src="img1.jpeg" alt="" />
                       <img src="img2.jpeg" alt="" /> */}
                    <img src="resume.png" alt="" />
                </div>
            </div>
            <PopularCategory></PopularCategory>
        </>
    )

}
export default HeroSection;

/_ first section _/

.hero{

    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    margin-top: 180px;
    margin-bottom: 70px;

}
.content p{
margin-top: 10px;
font-size: 25px;
color:rgb(72, 70, 70);
}
.span{
color:#088395;
font-weight: bold;
}
.content{
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-start;
margin-left: 100px;
margin-top: 40px;
}  
 .content button{
padding: 10px;
margin-top: 30px;
width:200px;
height: 40px;
background-color: #088395;
border: none;
border-radius: 7px;
color: white;
}
.content button:hover{
cursor: pointer;
background-color: #078ea3;
}
.content h1{
font-size: 45px;
padding-right: 20px;
}

@media screen and (max-width:1250px)
{
.hero{
margin-top: 250px;
}
.image img{
height:300px;
margin-right: 150px;
}
.content {
margin-left: 40px;
}
.content p{
margin:0;
}
}
@media screen and (max-width:1020px)
{
.hero{
margin-top: 100px;
display: flex;
flex-direction: column-reverse;
justify-content: center;
}
.image img{
margin-right: 4px;
}
.content h1{
font-size: 29px;

    }
    .content p{
        margin:0;
    }

}
@media screen and (max-width:431px)
{
.image img{
height:200px;
}
}

import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategory"
import PopularCompany from "./PopularComapny"
import { useEffect } from "react";
import JobType from "./JobType";
function Home(){
const {isAuthorized}=useSelector(state=>state.user);
console.log(isAuthorized);
const navigate=useNavigate();
useEffect(() => {
if (!isAuthorized) {
navigate('/login');
}
}, [isAuthorized, navigate]);

    return (
        <>
        {/* <button>hey</button> */}
            <HeroSection></HeroSection>
            {/* <HowItWorks></HowItWorks> */}
            <JobType></JobType>
            <PopularCompany></PopularCompany>
        </>
    )

}
export default Home;

import style from "../../module/JobType.module.css";
import { FaSuitcase } from 'react-icons/fa';
const JobType=()=>{
const details = [
{ id: 1, title: '1,23,442', subTitle: 'Live Job', icon: <FaSuitcase color='red' /> },
{ id: 2, title: '2,34,555', subTitle: 'Remote Job', icon: <FaSuitcase color='red' /> },
{ id: 3, title: '3,45,678', subTitle: 'Onsite Job', icon: <FaSuitcase color='red' /> },
{ id: 4, title: '4,56,789', subTitle: 'Contract Job', icon: <FaSuitcase /> },
{ id: 5, title: '5,67,890', subTitle: 'Part-time Job', icon: <FaSuitcase /> },
];
return(

        <>
        <div className={style.main2}>
                <h1 className={style.h11}>Current Job Listings by Type</h1>
                <div className={style.main}>
                    {
                        details.map(element => {
                            return <div key={element.id} className={style.jobtype}>
                                <span className={style.icon}>
                                    {element.icon}
                                </span>
                                <div className={style.info}>
                                    <p>{element.title}</p>
                                    <p>{element.subTitle}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )

}
export default JobType;

.main2{
/_ background-color: white; _/
padding:30px;
min-height: 400px;
}
.main2 h1{
margin-top:44px;
}
.main {
display: flex;
flex-wrap: wrap;
gap: 16px;
align-items: center;
justify-content: space-around;
margin-top: 60px;
}
.jobtype{
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-top: 10px;
width:200px;
height:110px;
background-color: white;
border-radius: 7px;;
/_ border:1px solid gray; _/
transition: 0.2s ease;
}
.icon{
margin-right: 9px;
border:1px solid gray;
font-size: 20px;
padding: 5px;
margin-top: 0px;
border-radius: 7px;
transition: 0.3s ease-in-out;
/_ background-color: #078ea3; _/
}
.jobtype:hover{
/_ background-color: rgb(100, 147, 156); _/
cursor: pointer;
}
.jobtype .info p:nth-of-type(1)
{
color:black;
font-weight: bold;
}
.h11
{
/_ color: rgb(52, 50, 50); _/
color:black;
text-align: center;
}
.jobtype:hover .icon{
background-color:skyblue;
}
@media screen and (max-width:605px)
{
.main{
margin-top: 20px;
}
.main2 h1{
font-size: 23px;
}

}

import axios from "axios";
import { useEffect, useState } from "react";
import { FaSuitcase } from "react-icons/fa";
import style from "../../module/PopularCategories.module.css"
import { FaArrowRightLong } from "react-icons/fa6";

function PopularCategory() {
const [details, setDetail] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/api/job/countCategories', { withCredentials: true })
            .then((res) => {
               setDetail(res.data)
            // console.log(res.data);
            })
            .catch((error) => {
                console.error('Error fetching job counts by category:', error);
            });
    }, []);


    return (
        <>
            <div className={style.categories}>
                <h1>POPULAR CATEGORIES</h1>
                <div className={style.card}>
                    {
                       <div>
                       <ul>
                        {/* ask chatGpt for explaination */}
                           {Object.entries(details).map(([category, count]) => (

                                   <li key={category}>
                                       {count} <br /><br /> <span style={{marginTop:'20px'}}> {category}</span><br/>
                                       <button className={style.btn}>View Jobs <span></span><FaArrowRightLong className={style.arrow}/></button>
                                   </li>

                           ))}

                       </ul>
                   </div>

                    }
                </div>
            </div>
        </>
    )

}
export default PopularCategory;

.card ul{
display: flex;
align-items: center;
gap:20px;
justify-content: space-around;
flex-wrap: wrap;

}
.card ul li{
border: 1px solid gray;
padding:20px;
border-radius: 9px;
margin-bottom: 10px;
height:170px;
width:280px;
text-align: center;

}

.categories h1{
margin:50px;
text-align: center;
}
.categories{
min-height: 400px;
padding-bottom:50px;
background-color: white;
}
.btn{
background-color: #088395;
height:40px;
border: none;
border-radius: 8px;
padding-bottom: 9px;
color:white;
width:140px;
margin-top: 20px;
transition: 0.3s ease-in-out;
text-align: center;
}
.btn:hover{
cursor: pointer;
background-color: #078ea3;
}
span{
margin-top: 40px;
}
.arrow{

    font-size: 19px;
    margin-left: 10px;
    transition: 0.3s ease-in-out;

}
.card ul li:hover .arrow{
/_ transform: scaleX(1); _/
transform: translateX(10px);
}
.card ul li:hover{
background-color: #acc8cc;
}
@media screen and (max-width:464px)
{
.categories h1{
font-size: 23px;
}
}

import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { VscAccount } from "react-icons/vsc";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { userAction } from "../../Slices/userSlice";
import style from "../../module/Navbar.module.css";
import { useEffect } from "react";
function NavBar() {

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        //vertically scroll mate scrollY
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

      //user scroll kre tyare j aa call thay
      window.addEventListener('scroll', handleScroll);

      //jyre component unMount thay tyare aa clean-up thay jay
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);




    const [show, setShow] = useState(false);
    const { isAuthorized } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = async () => {

        try {
            const response = await axios.get("http://localhost:4000/api/user/logout", { withCredentials: true });
            dispatch(userAction.setIsAuthorized(false));
            navigate('/login');
        }
        catch (err) {
            console.log(response.data)
            dispatch(userAction.setIsAuthorized(true));
        }
    }
    const handleOnClick = () => {
        setShow(!show);
    }
    const handlepostjob=()=>{
        navigate('/job/post');
    }
    return (
        <>
              <nav className={${style.navbar} ${scrolling ? style.onscroll : ''}}>
                <div className={style.logo}>
                    {/* <img src="logo2.png" alt=""  /> */}
                    <h1>HIREhub</h1>
                    {/* <img src="logo.png" alt="" /> */}
                </div>
                <div className={style.menu}>
                    {show ? <IoClose className={style.icon1} onClick={handleOnClick}></IoClose> : <TfiMenu className={style.icon2} onClick={handleOnClick}></TfiMenu>}
                    <ul className={${style.menuitems} ${show && style.menuopen}} onClick={() => setShow(false)}>
                        <li>
                            <NavLink to='/' className={({ isActive }) =>
                                isActive ? style.active : ""
                            }>Home</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to='/logout' className={({ isActive }) =>
                                isActive ? style.active : ""
                            }>logout</NavLink>
                        </li> */}
                        <li>
                            <NavLink to='/job/getall' className={({ isActive }) =>
                                isActive ? style.active : ""
                            }>jobs</NavLink>
                        </li>
                        <li>
                            <NavLink to='/profile' className={({ isActive }) =>
                                isActive ? style.active : ""
                            }><VscAccount style={{marginTop:'10px',fontSize:'26px'}}/></NavLink>
                        </li>
                        <button onClick={handlepostjob} className={style.postjob}>Post Job</button>
                    </ul>

                </div>
            </nav>


        </>
    )

}
export default NavBar;

.logo img
{
height: 50px;
width:240px;

}
.icon1
{
display: none;
}
.icon2
{
display: none;
}
.navbar{
position: fixed;
width:100%;
top:10px;
display: flex;
align-items: center;
justify-content: space-between;
height:50px;
z-index: 76;
padding:30px;
background-color: white;
overflow: hidden;
transition: 0.6s;
}
/_ //scroll thay tyre top:0pr ave _/
.onscroll{
position: fixed;
top:0;
}
.menuitems{
display: flex;
justify-content: center;
align-items: center;
gap:50px;
font-weight: bold;
}

.menuitems a{
text-decoration: none;
font-size: 20px;
}
.menuitems a:hover{
color: #088395;
}
.active {
color:#088395;
}
.postjob
{
background-color: #088395;
height: 40px;
width: 100px;
border: none;
border-radius: 5px;
color:white;
}
.postjob:hover{
cursor: pointer;
background-color: #078ea3;
}
@media screen and (max-width:1026px) {

     /* this sets <a> horizontall */
    .menuitems{
        position: fixed;
        top:0px;
        display: block;
        backdrop-filter: blur(10px);
        margin-top: 60px;
        height:100vh;
        width:100%;
        max-width: 400px;
        right:-100%;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.3);
        border:1px solid gray;
        border-radius: 10px;
    }
     .menuopen{
            right:0;
    }
    .menuitems li{
        margin-top: 40px;

    }
    .menuitems button{
        margin-top: 30px;
    }
    .navbar{
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
      }

       /* aa set kare icon menu nu right thi 0 ma and position absolute che e logi ni line ma lave */
      .menu
      {
        position: absolute;
        right:0;
        margin-right: 10%;
        flex-direction: column;
        align-items: flex-end;
        gap:11px;
        z-index: 3;
        background: transparent;
      }
       /* bev icons ne visibile krva mate; */
    .icon1{
        display: block;
        font-size: 20px;
        z-index: 2;
        margin-bottom:10px;
        font-size: 30px;
        margin-left:140px;

    }
    .icon2{
        display: block;
        font-size: 20px;
        z-index: 2;
        font-size: 30px;
    }
    .logo img
    {
        height: 50px;
        width:180px;
        padding-left: 10px;
        padding-top: 20px;
    }
    .menuopen li:hover{
        color:#088395;
    }

}
#   j o b - s e e k i n g - a p p l i c a t i o n  
 