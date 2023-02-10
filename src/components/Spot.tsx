import React, { useEffect, useState } from "react";

export interface SpotProps {}

const Spot: React.FC<SpotProps> = () => {
  return (
    <div className="chat">
      <p className="spot"></p>
    </div>
  );
};

export { Spot };
