import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Home.css'


export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div >
      <div className="Navbar">
      <nav>
            <Link to="/about">About</Link>
      </nav>
      <nav>
            <Link to="/destination">Destination</Link>
      </nav>
      
      <button onClick={() => navigate("/layout/55")}>
        Hit the Spot
      </button>
      </div>
      <p>This is the home page.</p>
    </div>
  );
};

export default HomePage;
