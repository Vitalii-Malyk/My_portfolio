import React from "react";
import { ReactComponent as ArrowUP } from "../Helpers/icons/arrowUP.svg";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="top" onClick={handleScrollToTop}>
      <ArrowUP />
    </button>
  );
};

export default ScrollToTopButton;
