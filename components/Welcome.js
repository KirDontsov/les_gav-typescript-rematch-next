import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
// icons
import Truck from "./icons/Truck";
import Industry from "./icons/Industry";
import Hand from "./icons/Hand";
import WareHouse from "./icons/WareHouse";

class Welcome extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <div className="quiz__section">
          <div className="quiz">
            <Fade bottom delay={300}>
              <h2 className="welcome__title">
                Ответьте на
                <span className="red"> несколько простых вопросов</span> и
                получите каталог рукавов и шлангов
              </h2>
            </Fade>

            <div className="quiz__box">
              <div className="icon__li">
                <Fade bottom delay={300}>
                  <div className="col">
                    <Truck />
                    <p className="welcome__text">
                      Отгрузка день в день, 24/7 и доставка до ТК бесплатно
                    </p>
                  </div>
                </Fade>
                <Fade bottom delay={500}>
                  <div className="col">
                    <Industry />
                    <p className="welcome__text">
                      Налаженные контакты более чем с 50 поставщиками
                    </p>
                  </div>
                </Fade>
                <Fade bottom delay={700}>
                  <div className="col">
                    <Hand />
                    <p className="welcome__text">
                      Бесплатно соберем рукав в готовое изделие
                    </p>
                  </div>
                </Fade>
                <Fade bottom delay={900}>
                  <div className="col">
                    <WareHouse />
                    <p className="welcome__text">
                      От 10 км всегда в наличии на складе
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div className="btn__container align-center">
              <Fade bottom delay={900}>
                <Button
                  variant="contained"
                  onClick={this.continue}
                  className="next btn"
                >
                  Получить каталог
                </Button>
              </Fade>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Welcome;
