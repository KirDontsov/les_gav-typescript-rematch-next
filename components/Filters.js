import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "../scss/Filters.scss";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(",")
  }
});

function valuetext(value) {
  return `${value}°C`;
}

class Filters extends Component {
  handleChangeProducer = e => {
    this.props.changeProducer(e.target.value);
    this.props.changeFilterProducer(true);
  };

  handleChangeStandart = e => {
    this.props.changeStandart(e.target.value);
    this.props.changeFilterStandart(true);
  };

  handleChangeCategory = e => {
    this.props.changeCategory(e.target.value);
    this.props.changeFilterCategory(true);
  };

  handleChangeType = e => {
    this.props.changeType(e.target.value);
    this.props.changeFilterType(true);
  };

  handleChangeInner = (e, newValue) => {
    this.props.changeInner(newValue);
    this.props.changeFilterRange(true);
  };

  handleChangeOuter = (e, newValue) => {
    this.props.changeOuter(newValue);
    this.props.changeFilterRange(true);
  };

  handleChangePressureMpa = e => {
    this.props.changePressureMpa(e.target.value);
    this.props.changeFilterPressureMpa(true);
    this.props.changeFilterPressureAtm(false);
    this.props.changePressureAtm("");
  };

  handleChangePressureAtm = e => {
    this.props.changePressureAtm(e.target.value);
    this.props.changeFilterPressureAtm(true);
    this.props.changeFilterPressureMpa(false);
    this.props.changePressureMpa("");
  };

  handleChangeLengh = (e, newValue) => {
    this.props.changeLengh(newValue);
    this.props.changeFilterRange(true);
  };

  handleChangeTemperature = (e, newValue) => {
    this.props.changeTemperature(newValue);
    this.props.changeFilterRange(true);
  };

  render() {
    const {
      producer,
      standart,
      category,
      type,
      inner,
      outer,
      pressureMpa,
      pressureAtm,
      lengh,
      temperature
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <FormControl className="formControl">
          <InputLabel id="demo-simple-select-label">Категория</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={this.handleChangeCategory}
          >
            <MenuItem value={"Рукава для бензина и минеральных масел"}>
              Рукава для бензина и минеральных масел
            </MenuItem>
            <MenuItem value={"Рукава для технической воды"}>
              Рукава для технической воды
            </MenuItem>
            <MenuItem value={"Рукава для горячей воды"}>
              Рукава для горячей воды
            </MenuItem>
            <MenuItem value={"Рукава для газа"}>Рукава для газа</MenuItem>
            <MenuItem value={"Рукава для пара"}>Рукава для пара</MenuItem>
            <MenuItem value={"Рукава для пищевых продуктов"}>
              Рукава для пищевых продуктов
            </MenuItem>
            <MenuItem value={"Рукава для абразива"}>
              Рукава для абразива
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl className="formControl">
          <InputLabel id="demo-simple-select-label">Тип</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            onChange={this.handleChangeType}
          >
            <MenuItem value={"напорные"}>Напорный</MenuItem>
            <MenuItem value={"всасывающие"}>Напорно-всасывающий</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="formControl">
          <InputLabel id="demo-simple-select-label">Давление, МПа</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pressureMpa}
            onChange={this.handleChangePressureMpa}
          >
            <MenuItem value={"0.3"}>0,3</MenuItem>
            <MenuItem value={"0.63"}>0,63</MenuItem>
            <MenuItem value={"0.8"}>0,8</MenuItem>
            <MenuItem value={"1"}>1,00</MenuItem>
            <MenuItem value={"4"}>4,00</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="formControl">
          <InputLabel id="demo-simple-select-label">Давление, Атм</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pressureAtm}
            onChange={this.handleChangePressureAtm}
          >
            <MenuItem value={"3"}>3</MenuItem>
            <MenuItem value={"6.3"}>6,3</MenuItem>
            <MenuItem value={"8"}>8</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"40"}>40</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="formControl">
          <InputLabel id="demo-simple-select-label">Стандарт</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={standart}
            onChange={this.handleChangeStandart}
          >
            <MenuItem value={"ГОСТ 18698-78"}>ГОСТ 18698-78</MenuItem>
            <MenuItem value={"ГОСТ 18698-79"}>ГОСТ 18698-79</MenuItem>
            <MenuItem value={"ГОСТ 18698-80"}>ГОСТ 18698-80</MenuItem>
            <MenuItem value={"ГОСТ 18698-81"}>ГОСТ 18698-81</MenuItem>
            <MenuItem value={"ГОСТ 18698-82"}>ГОСТ 18698-82</MenuItem>
            <MenuItem value={"ГОСТ 18698-83"}>ГОСТ 18698-83</MenuItem>
            <MenuItem value={"ГОСТ 18698-84"}>ГОСТ 18698-84</MenuItem>
            <MenuItem value={"ГОСТ 18698-85"}>ГОСТ 18698-85</MenuItem>
            <MenuItem value={"ТУ 2553-189-05788889-2004"}>
              ТУ 2553-189-05788889-2004
            </MenuItem>
            <MenuItem value={"ТУ 38 105981-"}>ТУ 38 105981-</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="formControl">
          <InputLabel id="demo-simple-select-label">Производитель</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={producer}
            onChange={this.handleChangeProducer}
          >
            <MenuItem value={"Россия"}>Россия</MenuItem>
            <MenuItem value={"Китай"}>Китай</MenuItem>
            <MenuItem value={"Тайвань"}>Тайвань</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="formControl">
          <Typography className="rangeControl" id="range-slider" gutterBottom>
            Внутр. диаметр, мм
          </Typography>
          <Slider
            value={inner}
            min={10}
            max={150}
            onChange={this.handleChangeInner}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </FormControl>

        <FormControl className="formControl">
          <Typography className="rangeControl" id="range-slider" gutterBottom>
            Внеш. диаметр, мм
          </Typography>
          <Slider
            min={22}
            max={172}
            value={outer}
            onChange={this.handleChangeOuter}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </FormControl>

        <FormControl className="formControl">
          <Typography className="rangeControl" id="range-slider" gutterBottom>
            Длина, м
          </Typography>
          <Slider
            value={lengh}
            min={2.5}
            max={20}
            onChange={this.handleChangeLengh}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </FormControl>
        <FormControl className="formControl">
          <Typography className="rangeControl" id="range-slider" gutterBottom>
            Температура, °C
          </Typography>

          <Slider
            value={temperature}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            onChange={this.handleChangeTemperature}
            min={50}
            max={175}
            marks
            step={10}
            valueLabelDisplay="auto"
            valueLabelDisplay="on"
          />
        </FormControl>
      </ThemeProvider>
    );
  }
}

const mapState = state => ({
  addClass: state.shutter.addClass,
  producer: state.filters.producer,
  standart: state.filters.standart,
  category: state.filters.category,
  type: state.filters.type,
  inner: state.filters.inner,
  outer: state.filters.outer,
  pressureMpa: state.filters.pressureMpa,
  pressureAtm: state.filters.pressureAtm,
  lengh: state.filters.lengh,
  temperature: state.filters.temperature,
  producerFilterApplied: state.filters.producerFilterApplied,
  standartFilterApplied: state.filters.standartFilterApplied,
  categorytFilterApplied: state.filters.categorytFilterApplied,
  typeFilterApplied: state.filters.typeFilterApplied,
  pressureMpaFilterApplied: state.filters.pressureMpaFilterApplied,
  pressureAtmFilterApplied: state.filters.pressureAtmFilterApplied,
  temperatureFilterApplied: state.filters.temperatureFilterApplied,
  rangeFilterApplied: state.filters.rangeFilterApplied
});

const mapDispatch = ({
  shutter: { slide },
  filters: {
    changeProducer,
    changeStandart,
    changeCategory,
    changeType,
    changeTemperature,
    changeInner,
    changeOuter,
    changePressureMpa,
    changePressureAtm,
    changeLengh,
    changeFilterProducer,
    changeFilterStandart,
    changeFilterCategory,
    changeFilterType,
    changeFilterPressureMpa,
    changeFilterPressureAtm,
    changeFilterTemperature,
    changeFilterRange
  }
}) => ({
  slide,
  changeProducer,
  changeStandart,
  changeCategory,
  changeType,
  changeTemperature,
  changeInner,
  changeOuter,
  changePressureMpa,
  changePressureAtm,
  changeLengh,
  changeFilterProducer,
  changeFilterStandart,
  changeFilterCategory,
  changeFilterType,
  changeFilterPressureMpa,
  changeFilterPressureAtm,
  changeFilterTemperature,
  changeFilterRange
});

export default connect(mapState, mapDispatch)(Filters);
