import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Chatbot from "../components/Chatbot";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className="pageContainer">
      <div className="Navbar">
        <nav className="findaspot">
          <Link to="/findaspot">Find a spot</Link>
        </nav>
        <nav className="homepage">
          <Link to="/"> Home</Link>
        </nav>
        <nav className="myspots">
          <Link to="/myspots">My Spot</Link>
        </nav>
      </div>
      <Chatbot />
    </div>
  );
};

export default HomePage;
