import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spot, ISpotProps } from "../components/Spot";
import findSpotForm from "../components/findSpotForm";
import axios from "axios";

export interface IAboutPageProps {}

const MySpots: React.FunctionComponent<IAboutPageProps> = (props) => {
  const [myspotData, setSpotsData] = useState<any[]>([]);
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
      {myspotData.map((spot) => (
        <div key={spot.id} className="eachSpot">
          <Spot spotData={spot}></Spot>
        </div>
      ))}
      ;
    </div>
  );
};
export default MySpots;
