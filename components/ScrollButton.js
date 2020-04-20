import React, { Component } from "react";
import Arrow from "./Arrow";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

class ScrollButton extends Component {
  scrollToTop() {
    let div = document.querySelector(".wrapper");
    div.scrollTop = 0;
  }

  render() {
    return (
      <button
        title="Back to top"
        className="scroll"
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <Arrow type={null} />
      </button>
    );
  }
}

export default ScrollButton;
