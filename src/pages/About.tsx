import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import FindSpotForm from "../components/findSpotForm";

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
      <p>This is where you find a spot page.</p>
      <div>
        <FindSpotForm />
      </div>
    </div>
  );
};

export default AboutPage;
