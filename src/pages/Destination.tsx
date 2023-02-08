import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export interface IAboutPageProps {}

const DestiPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <div>
      <div className="Navbar">
        <nav>
          <Link to="/">Return home </Link>
        </nav>
      </div>
      <p>This is the destination page. You can see saved spots</p>
    </div>
  );
};

export default DestiPage;
