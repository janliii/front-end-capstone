import React, { useState, useEffect } from "react";
import axios from "axios";
import { ISpotProps } from "../components/Spot";
export interface UpdateSpotProps {
  updateSpot: (id: Number, location: string) => void;
  spotData: ISpotProps["spotData"];
}

// const OriginalState = {
//   name:"",
//   language_spoken:"",
//     location: "",
// };

const UpdateSpotForm: React.FC<UpdateSpotProps> = (props) => {
  const [formData, setFormData] = useState<{ location: string }>({
    location: "",
  });
  const [updatedData, setUpdatedData] = useState<any[]>([]);

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

    // updateSpot(formData);
  };

  return (
    <form onSubmit={handleFormSubmit} className="update_spot">
      <div>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        ></input>
        <button className="button-78" type="submit">
          submit
        </button>
      </div>
    </form>
  );
};

export default UpdateSpotForm;
