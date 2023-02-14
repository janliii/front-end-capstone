import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Chatbot from "../components/Chatbot";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className="pageContainer">
      <div className="Navbar">
        {/* <button onClick={() => navigate("/randomspot")}>Hit the Spot</button> */}
        <nav>
          <Link to="/findaspot">Find a spot</Link>
        </nav>
        <nav>
          <Link to="/"> Home</Link>
        </nav>
        {/* <button onClick={() => navigate("/randomspot")}>Hit the Spot</button> */}
        <nav>
          <Link to="/myspots">My Spot</Link>
        </nav>
      </div>
      <Chatbot />
    </div>
  );
};

export default HomePage;
