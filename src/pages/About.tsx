import React from "react";
import { Link } from "react-router-dom";
import { FindSpotForm } from "../components/FindSpotForm";
import "../App.css";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <div>
      <div className="Navbar">
        <nav className="findaspot">
          <Link to="/findaspot">Find a spot</Link>
        </nav>
        <nav className="homepage">
          <Link to="/">Home</Link>
        </nav>
        <nav className="myspots">
          <Link to="/myspots">My Spot</Link>
        </nav>
      </div>

      <div>
        <FindSpotForm />
      </div>
    </div>
  );
};

export default AboutPage;
