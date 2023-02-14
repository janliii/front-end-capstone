import React, { useState } from "react";
import { ISpotProps } from "./Spot";
export interface UpdateSpotProps {
  updateSpot: (id: Number, location: string) => void;
  spotData: ISpotProps["spotData"];
}

const UpdateSpotForm: React.FC<UpdateSpotProps> = (props) => {
  //   const [popUp, setpopUp] = useState<boolean>(false);
  //   function toggleClose() {
  //     setpopUp(!popUp);
  //   }
  const [formData, setFormData] = useState<{ location: string }>({
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const inputValue = e.currentTarget.value;
    const inputName = e.currentTarget.name;
    const newFormData = { ...formData, [inputName]: inputValue };

    setFormData(newFormData);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.updateSpot(props.spotData.id, formData.location);
    setFormData({ location: "" });
  };

  return (
    <div className="update_spot">
      <form onSubmit={handleFormSubmit}>
        <div className="updateInput">
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          ></input>
          <button className="button-78" type="submit">
            Update Location
          </button>
        </div>
        {/* <button onClick={toggleClose}>{popUp ? "" : "close"}</button> */}
      </form>
    </div>
  );
};

export default UpdateSpotForm;
