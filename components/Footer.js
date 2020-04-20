import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ScrollButton from "./ScrollButton";

import "../scss/Footer.scss";

class Footer extends Component {
  handleClick(event) {
    this.props.slide(true);
    this.scrollToTop();
  }
  scrollToTop() {
    let div = document.querySelector(".wrapper");
    div.scrollTop = 0;
  }
  render() {
    return (
      <Fragment>
        <div className="footer">
          <div className="col__center">
            <div className="colWrapper">
              <div className="colMain">
                <div className="col">
                  <div className="logo" />
                </div>
                <div className="col">
                  <a href="#secondSection" className="nav-link white">
                    О Гостинице
                  </a>
                  <a href="#thirdSection" className="nav-link white">
                    Внешний Вид
                  </a>
                  <a href="#fourthSection" className="nav-link white">
                    Сведения
                  </a>
                  <a href="#thirdSectionCopy" className="nav-link white">
                    Внутренний Вид
                  </a>
                  <a href="#sixthSection" className="nav-link white">
                    Контакты
                  </a>
                </div>
              </div>
              <div className="colMain">
                <div className="col">
                  <ScrollButton />
                </div>
                <div className="col">
                  <h3>Наверх</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="col__center second">
              <p className="copyright">
                © Лесная Гавань, 2020. Все права защищены. Создание сайтов
                <a href="http://paradox-agency.ru/index.ru.html">
                  <span> Paradox Agency.</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapState = state => ({
  addClass: state.shutter.addClass
});

const mapDispatch = ({ shutter: { slide } }) => ({
  slide
});

export default connect(mapState, mapDispatch)(Footer);

Footer.propTypes = {
  routes: PropTypes.array
};
