import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Welcome from "./Welcome";
import Contacts from "./Contacts";
import Confirm from "./Confirm";
import Success from "./Success";
import { createMuiTheme } from "@material-ui/core/styles";
// import { quizData } from "../quizData";
import "../scss/Quiz.scss";

const theme = createMuiTheme({
  pallette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#fff"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#ff4400",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    }
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(",")
  }
});

export class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      step: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      item: "",
      selectedOption: "",
      disabled: true
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
      disabled: true
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
      disabled: false
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.currentTarget.value });
    console.log(e.currentTarget.value);

    // eslint-disable-next-line default-case
    switch (this.state.step) {
      case 1:
        if (this.state.selectedOption !== 0) {
          this.setState({ disabled: false });
        }
        break;
      case 2:
        if (
          this.state.phone &&
          this.state.email &&
          this.state.email.includes("@") &&
          this.state.city &&
          this.state.item !== ""
        ) {
          this.setState({ disabled: false });
        }
        break;

      case 3:
        if (this.state.firstName && this.state.lastName !== "") {
          this.setState({ disabled: false });
        }

        break;
      default:
        break;
    }
  };

  render() {
    const {
      disabled,
      step,
      firstName,
      lastName,
      email,
      phone,
      city,
      item,
      selectedOption
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      phone,
      city,
      item,
      selectedOption
    };

    // eslint-disable-next-line default-case
    switch (step) {
      case 0:
        return (
          <Welcome
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            disabled={disabled}
            theme={theme}
          />
        );
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            disabled={disabled}
            theme={theme}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            disabled={disabled}
            theme={theme}
          />
        );
      case 3:
        return (
          <Contacts
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            disabled={disabled}
            theme={theme}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            disabled={disabled}
            theme={theme}
          />
        );
      case 5:
        return <Success />;
    }
  }
}

export default Quiz;
