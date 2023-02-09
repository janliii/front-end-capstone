import React from "react";
import { Link } from "react-router-dom";

export interface ILayoutComponentProps {}

const LayoutComponent: React.FunctionComponent<ILayoutComponentProps> = (
  props
) => {
  return (
    <div>
      <div className="Navbar">
        <nav>
          <Link to="/">Return home </Link>
        </nav>
      </div>

      <button> Take me anywhere.</button>
      <p>This will show you some random spots in the world </p>
    </div>
  );
};

export default LayoutComponent;
