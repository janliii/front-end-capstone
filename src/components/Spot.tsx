import React from "react";

export interface ISpotProps {
  spotData: {
    location: string;
    id: number;
    language_spoken: string;
    name: string;
  };
  fun: () => void;
}

const Spot: React.FC<ISpotProps> = (props) => {
  const { name, location, language_spoken } = props.spotData;

  return (
    <div className="Spot">
      <p>Destination: {location}</p>
      <p>User Name: {name}</p>
      <p>Local language: {language_spoken}</p>
      <div className="spotControl">
        <p className="spot-item__delete" onClick={() => props.fun()}>
          Delete this spot
        </p>
      </div>
    </div>
  );
};

export { Spot };
