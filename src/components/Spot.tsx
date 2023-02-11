import React, { useEffect, useState } from "react";

export interface SpotProps {
  location: string;
  id: number;
}

const Spot: React.FC<SpotProps> = (props) => {
  return (
    <div className="chat">
      <p className="spot"></p>
    </div>
  );
};

export { Spot };
