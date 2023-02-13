import React, { useState } from "react";
import "./Spot.css";
import UpdateSpotForm from "./updateSpotForm";

export interface ISpotProps {
  spotData: {
    location: string;
    id: number;
    language_spoken: string;
    name: string;
  };
  fun1: () => void;
  // fun2: () => void;
}

const Spot: React.FC<ISpotProps> = (props) => {
  const { name, location, language_spoken } = props.spotData;

  return (
    <div className="Spot">
      <p>Destination: {location}</p>
      <p>User Name: {name}</p>
      <p>Local language: {language_spoken}</p>
      <div className="spotControl">
        <p className="spot-item__delete" onClick={() => props.fun1()}>
          Delete
        </p>
        {/* <p className="spot-item__update" onClick={() => props.fun2()}>
          Update
        </p> */}

        {/* <div onClick={togglePopup}>
          <UpdateSpotForm /> click
        </div> */}
      </div>
    </div>
  );
};

export { Spot };
