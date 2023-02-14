import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spot } from "../components/Spot";

export interface FindSpotProps {}

const OriginalState = {
  name: "",
  location: "",
  language_spoken: "",
};

const FindSpotForm: React.FC<FindSpotProps> = () => {
  const [formData, setFormData] = useState(OriginalState);
  const [spotData, setSpotsData] = useState<any[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const inputValue = e.currentTarget.value;
    const inputName = e.currentTarget.name;
    const newFormData = { ...formData, [inputName]: inputValue };

    setFormData(newFormData);
  };

  const createNewSpot = (newSpot: {}) => {
    axios
      .post("https://hit-the-spot-backend.herokuapp.com/users", newSpot)
      .then((response) => {
        console.log("New spot successfully created", response.data);
        const spots = [...spotData];
        spots.push(response.data.user);
        setSpotsData(spots);
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Couldn't submit a new spot request.");
      });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNewSpot(formData);
    setFormData(OriginalState);
  };

  return (
    <form onSubmit={handleFormSubmit} className="create_newspot">
      <div>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
      </div>
      <input
        placeholder="Location"
        type="text"
        id="spotFormTitle"
        name="location"
        value={formData.location}
        onChange={handleChange}
      ></input>
      <div>
        <div>
          <input
            type="text"
            placeholder="Language"
            name="language_spoken"
            value={formData.language_spoken}
            onChange={handleChange}
          ></input>
        </div>
        <p className="preview_message">
          Preview: {formData.name} - {formData.location}-
          {formData.language_spoken}
        </p>

        <input
          type="Submit"
          className="new-board-form__form-submit-btn"
        ></input>
      </div>
    </form>
  );
};

export default FindSpotForm;
