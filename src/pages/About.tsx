import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import FindSpotForm from "../components/FindSpotForm";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  const [message, setMessage] = useState("");
  const { number } = useParams();

  useEffect(() => {
    if (number) {
      setMessage("The number is " + number);
    } else {
      setMessage("No number was provided");
    }
  }, []);

  return (
    <div>
      <div className="Navbar">
        {/* <p>{message}</p> */}
        <nav>
          <Link to="/">Return home </Link>
        </nav>
      </div>
      <p>This is the about page.</p>
      <p>
        <FindSpotForm />
      </p>
      <button> Take me anywhere.</button>
    </div>
  );
};

export default AboutPage;
