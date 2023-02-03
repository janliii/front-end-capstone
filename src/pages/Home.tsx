import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Home.css'
import Chatbot from "../components/Chatbot";


export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div >
      <div className="Navbar">
      <nav>
            <Link to="/about">About the spot</Link>
      </nav>
      <button onClick={() => navigate("/layout/55")}>
        Hit the Spot
      </button>
      <nav>
            <Link to="/destination">MySpot</Link>
      </nav>
      
      </div>
      <Chatbot/>
    </div>
  );
};

export default HomePage;
