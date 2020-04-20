import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";
import { ThemeProvider } from "@material-ui/core/styles";

class Contacts extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, disabled } = this.props;
    return (
      <ThemeProvider theme={this.props.theme}>
        <div className="quiz__section">
          <div className="quiz">
            <Fade bottom delay={300}>
              <h2>Пройдите небольшой тест</h2>
            </Fade>
            <Fade bottom cascade delay={500}>
              <div className="quiz__box inputs">
                <TextField
                  label="Имя"
                  onChange={handleChange("firstName")}
                  defaultValue={values.firstName}
                  margin="normal"
                  fullWidth={true}
                  required
                />
                {values.firstName.length < 3 &&
                  values.firstName.length !== 0 && (
                    <span className="errorMessage">
                      Должно быть больше 3 символов
                    </span>
                  )}
                <br />
                <TextField
                  label="Фамилия"
                  onChange={handleChange("lastName")}
                  defaultValue={values.lastName}
                  margin="normal"
                  fullWidth={true}
                  required
                />
                {values.lastName.length < 3 && values.lastName.length !== 0 && (
                  <span className="errorMessage">
                    Должно быть больше 3 символов
                  </span>
                )}
                <br />
              </div>
            </Fade>

            <div className="btn__container inputs">
              <Fade bottom delay={700}>
                <Button
                  variant="contained"
                  onClick={this.back}
                  className="next btn"
                >
                  Назад
                </Button>
                <Button
                  variant="contained"
                  onClick={this.continue}
                  className="next btn"
                  disabled={disabled}
                >
                  Продолжить
                </Button>
              </Fade>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Contacts;
