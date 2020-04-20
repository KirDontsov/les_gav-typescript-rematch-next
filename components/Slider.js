import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../scss/Slider.scss";

class Slide extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.slide = React.createRef();
  }

  handleMouseMove(e) {
    const el = this.slide.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", e.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty("--y", e.clientY - (r.top + Math.floor(r.height / 2)));
  }
  handleMouseLeave() {
    this.slide.current.style.setProperty("--x", 0);
    this.slide.current.style.setProperty("--y", 0);
  }
  handleSlideClick() {
    this.props.handleSlideClick(this.props.slide.index);
  }
  imageLoaded(e) {
    e.target.style.opacity = 1;
  }
  render() {
    const { src, link, headline, index } = this.props.slide;
    const current = this.props.current;
    let classNames = "slide";
    if (current === index) classNames += " slide--current";
    else if (current - 1 === index) classNames += " slide--previous";
    else if (current + 1 === index) classNames += " slide--next";
    return (
      <li
        ref={this.slide}
        className={classNames}
        onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="slide__image-wrapper">
          <img
            className="slide__image"
            alt={headline}
            src={src}
            onLoad={this.imageLoaded}
          />
        </div>
      </li>
    );
  }
}

// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg
        width="7"
        height="17"
        viewBox="0 0 7 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 1L1 8.5L6 16"
          stroke="#1E1E1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

// =========================
// Slider
// =========================

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 1,
      active: false
    };
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
  }
  handlePreviousClick() {
    const previous = this.state.current - 1;
    this.setState({
      current: previous < 0 ? this.props.slides.length - 1 : previous
    });
  }
  handleNextClick() {
    const next = this.state.current + 1;
    this.setState({
      current: next === this.props.slides.length ? 0 : next
    });
  }
  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index
      });
    }
    if (this.state.current === index) {
      console.log("click");
    }
  }
  render() {
    const { current } = this.state;
    const { slides, heading } = this.props;
    const headingId = `slider-heading__${heading
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / slides.length)}%)`
    };
    return (
      <div className="slider" aria-labelledby={headingId}>
        <ul className="slider__wrapper" style={wrapperTransform}>
          <h3 id={headingId} className="visuallyhidden">
            {heading}
          </h3>
          {slides.map(slide => {
            return (
              <Slide
                key={slide.index}
                slide={slide}
                active={this.state.active}
                current={current}
                handleSlideClick={this.handleSlideClick}
              />
            );
          })}
        </ul>
        <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={this.handlePreviousClick}
        />
        <SliderControl
          type="next"
          title="Go to next slide"
          handleClick={this.handleNextClick}
        />
      </div>
    );
  }
}

export default Slider;
