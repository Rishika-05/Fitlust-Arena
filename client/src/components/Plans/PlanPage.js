import React,{useState,useEffect} from "react";
import { AiOutlineUser } from "react-icons/ai";
import { VscTypeHierarchy } from "react-icons/vsc";
import { BsArrowReturnLeft, BsArrowReturnRight } from "react-icons/bs";
import signup from "../../assets/Ger.png";
import { useNavigate, useLocation } from "react-router-dom";

const PlanPage = () => {
  const [plan, setArticleObject] = useState();
  const location = useLocation();
  const getArticle = async (path) => {
    let res = await fetch(`${process.env.REACT_APP_SERVER_URL}${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);
    setArticleObject(data.plan);
  };

  useEffect(() => {
    getArticle(location.pathname);
  }, [true]);

  return ( plan &&
      <div className="container">
      <h5>Name</h5>
        <p>{plan.name}</p>
        <h5>Email</h5>
        <p>{plan.email}</p>
        <h5>Gender</h5>
        <p>{plan.gender}</p>
        <h5>Age</h5>
        <p>{plan.age}</p>
        <h5>Height</h5>
        <p>{plan.height}</p>
        <h5>Weight</h5>
        <p>{plan.weight} kg</p>
        <h5>How active are you during a typical week?</h5>
        <p>plan.activity</p>
        <h5>Body Fat %</h5>
        <p>{plan.bodyFat}</p>
        <h5>Which of the following best describes your current situation?</h5>
        <p>{plan.situation}</p>
        <h5>What would you consider to be your ultimate “ideal” physique?</h5>
        <p>{plan.idealPhysique}</p>
        <h5>Do you have at least 1 year of consistent, proper lifting under your belt?</h5>
        <p>{plan.experience}</p>
        <h5>What is the #1 thing that you feel is preventing you from making progress?</h5>
        <p>{plan.sp}</p>
      </div>
  )
};

export default PlanPage;
