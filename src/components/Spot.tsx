import React, { useEffect, useState } from "react";

export interface ISpotProps {
  spotData: {
    location: string;
    id: number;
    language_spoken: string;
    name: string;
  };
}

const Spot: React.FC<ISpotProps> = (props) => {
  const { name, location, language_spoken } = props.spotData;

  return (
    <div className="Spot">
      <p>Destination: {location}</p>
      <p>User Name: {name}</p>
      <p>Local language: {language_spoken}</p>
    </div>
  );
};

export { Spot };
