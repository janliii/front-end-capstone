import React, { useState } from "react";
// import axios from "axios";

interface FindSpotProps {}

const FindSpotForm: React.FC<FindSpotProps> = () => {
  const [formData, setFormData] = useState<any[]>([]);

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
    // createNewBoard(formData);
    setFormData([]);
  };

  return (
    <form onSubmit={handleFormSubmit} className="create_newboard">
      <div>
        <label> Spot name: </label>
        <input
          type="text"
          id="boardFormTitle"
          //   name="title"
          value={formData}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label> Travel date: </label>
        <input
          type="text"
          //   id="boardFormOwner"
          //   name="owner"
          value={formData}
          onChange={handleChange}
        ></input>
        {/* <p className="preview_message">
          Preview: {formData.title} - {formData.owner}
        </p> */}
        <input
          type="Submit"
          className="new-board-form__form-submit-btn"
        ></input>
      </div>
    </form>
  );
};

export default FindSpotForm;
