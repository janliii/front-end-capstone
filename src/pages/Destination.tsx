import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export interface IAboutPageProps {}

const DestiPage: React.FunctionComponent<IAboutPageProps> = (props) => {
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
      <p>This is the destination page.</p>
      <p>{message}</p>
      <nav>
            <Link to="/">Return home </Link>
      </nav>
    </div>
  );
};

export default DestiPage;
