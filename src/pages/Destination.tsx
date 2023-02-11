import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spot } from "../components/Spot";
import findSpotForm from "../components/findSpotForm";
import axios from "axios";

export interface IAboutPageProps {}

const MySpots: React.FunctionComponent<IAboutPageProps> = (props) => {
  const [spotData, setSpotsData] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://hit-the-spot-backend.herokuapp.com/users", {})
      .then((response) => {
        setSpotsData(response.data);
        console.log("API is working!!!!", response.data);
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Couldn't get all spots .");
      });
  }, []);

  return (
    <div>
      <div className="Navbar">
        <nav>
          <Link to="/">Return home </Link>
        </nav>
      </div>
      <p>This is the destination page. You can see saved spots</p>

      {spotData.map((spot) => (
        <div key={spot.id} className="eachSpot">
          <p>User name: {spot.name} </p>
          <p>Destination: {spot.location}</p>
          <p>
            Local Langauge:
            {spot.language_spoken}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MySpots;
