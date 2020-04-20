import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();

    // Send FORM //
    let formData = this.props.values;
    console.log(formData);
    fetch("mail.php", {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.firstName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        item: formData.item,
        selectedOption: formData.selectedOption
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });

    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, phone, city, item, selectedOption }
    } = this.props;

    return (
      <ThemeProvider theme={this.props.theme}>
        <div className="quiz__section">
          <div className="quiz">
            <h2>Проверьте правильность заполнения данных</h2>
            <div className="quiz__box">
              <List>
                <ListItem>
                  <ListItemText primary="Имя" secondary={firstName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Фамилия" secondary={lastName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Email" secondary={email} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Телефон" secondary={phone} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Город" secondary={city} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Наименование товара"
                    secondary={item}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Выбрано" secondary={selectedOption} />
                </ListItem>
              </List>
            </div>
            <div className="btn__container inputs">
              <Button
                variant="contained"
                onClick={this.back}
                className="next btn"
              >
                Назад
              </Button>

              <Button
                type="submit"
                variant="contained"
                onClick={this.continue}
                className="next btn"
              >
                Подтвердить и Отправить
              </Button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Confirm;
