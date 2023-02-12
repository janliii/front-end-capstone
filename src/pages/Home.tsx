import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import Chatbot from "../components/Chatbot";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="pageContainer">
      <div className="Navbar">
        <nav>
          <Link to="/findaspot">Find a spot</Link>
        </nav>
        <button onClick={() => navigate("/randomspot")}>Hit the Spot</button>
        <nav>
          <Link to="/myspots">My Spot</Link>
        </nav>
      </div>
      <Chatbot />
    </div>
  );
};

export default HomePage;
