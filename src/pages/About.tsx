import React from "react";
import { Link } from "react-router-dom";
import FindSpotForm from "../components/findSpotForm";
import "../App.css";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <div>
      <div className="Navbar">
        <nav>
          <Link to="/findaspot">Find a spot</Link>
        </nav>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="/myspots">My Spot</Link>
        </nav>
      </div>

      <p>This is where you find a spot page.</p>
      <div>
        <FindSpotForm />
      </div>
    </div>
  );
};

export default AboutPage;
