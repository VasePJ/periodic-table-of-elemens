import React from "react";
import { Link } from "react-router-dom";

const CloseBtn = () => {
  return (
    <div className="ButtonX d-flex align-self-end">
      <Link to="/">
        <button className="btnX btn">X</button>
      </Link>
    </div>
  );
};

export default CloseBtn;
