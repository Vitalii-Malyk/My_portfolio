import React from "react";
import { ReactComponent as ArrowUP } from "../Helpers/icons/arrowUP.svg";

const Footer = () => {
  return (
    <>
      <div className="last-text">
        <p>Developed with love by Vitalii Malyk © 2024</p>
      </div>
      <a href="javascript:void(0)" className="top">
        <i className="bx bx-up-arrow-alt">
          <ArrowUP />
        </i>
      </a>
    </>
  );
};

export default Footer;
