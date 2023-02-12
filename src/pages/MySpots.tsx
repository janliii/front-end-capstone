import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spot, ISpotProps } from "../components/Spot";
import axios from "axios";

export interface IAboutPageProps {}

const MySpots: React.FunctionComponent<IAboutPageProps> = (props) => {
  const [myspotData, setSpotsData] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://hit-the-spot-backend.herokuapp.com/users", {})
      .then((response) => {
        setSpotsData(response.data);
        // console.log("API is working!!!!", response.data);
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Couldn't get all spots .");
      });
  }, []);

  const deleteSpot = (spot: ISpotProps["spotData"]) => {
    axios
      .delete(`https://hit-the-spot-backend.herokuapp.com/users/${spot.id}`)
      .then((response) => {
        const newSpotsData = myspotData.filter((currentSpot) => {
          return currentSpot.id !== spot.id;
        });
        setSpotsData(newSpotsData);
        console.log("deletion is successful");
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Couldn't delete the spot.");
      });
  };

  const updateSpot = (spot: ISpotProps["spotData"]) => {
    axios
      .patch(`https://hit-the-spot-backend.herokuapp.com/users/${spot.id}`)
      .then((response) => {
        const newSpotsData = myspotData.filter((currentSpot) => {
          return currentSpot.id !== spot.id;
        });
        setSpotsData(newSpotsData);
        console.log("update is successful");
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Couldn't update the spot.");
      });
  };

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
          <Spot
            spotData={spot}
            fun1={() => deleteSpot(spot)}
            fun2={() => updateSpot(spot)}
          ></Spot>
        </div>
      ))}
    </div>
  );
};
export default MySpots;
