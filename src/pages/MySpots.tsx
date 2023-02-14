import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spot, ISpotProps } from "../components/Spot";
import axios from "axios";
import UpdateSpotForm from "../components/updateSpotForm";

export interface IAboutPageProps {}

const MySpots: React.FunctionComponent<IAboutPageProps> = (props) => {
  const [myspotData, setSpotsData] = useState<any[]>([]);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  function togglePopup() {
    setPopupVisible(!popupVisible);
  }
  useEffect(() => {
    axios
      .get("https://hit-the-spot-backend.herokuapp.com/users", {})
      .then((response) => {
        setSpotsData(response.data);
        console.log("API is working!!!!");
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Couldn't get all spots.");
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

  const updateSpot = (id: Number, location: string) => {
    axios
      .patch(`https://hit-the-spot-backend.herokuapp.com/users/${id}`, {
        location,
      })
      .then((response) => {
        const newSpotsData = myspotData.map((currentSpot) => {
          return currentSpot.id !== id
            ? currentSpot
            : { ...currentSpot, location: location };
        });
        // console.log(myspotData);
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
          <Link to="/findaspot">Find a spot</Link>
        </nav>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="/myspots">My Spot</Link>
        </nav>
      </div>
      <div className="myspot_container">
        {myspotData.map((spot) => (
          <div key={spot.id} className="eachSpot">
            <Spot spotData={spot} fun1={() => deleteSpot(spot)}></Spot>
            {popupVisible && (
              <UpdateSpotForm spotData={spot} updateSpot={updateSpot} />
            )}
            <div onClick={togglePopup} className="spotControl">
              {popupVisible ? "close" : "update"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MySpots;
