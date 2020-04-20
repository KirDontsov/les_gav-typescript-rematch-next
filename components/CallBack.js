import React, { Component, Fragment } from "react";
import classNames from "classnames";
import Form from "./Form";
import { connect } from "react-redux";

const Button = props => (
	<button className={classNames(props.className)} onClick={props.onClick}>
		{props.children}
	</button>
);

class CallBack extends Component {
	openModal() {
		this.props.changeClass(!this.props.addClass);
		this.props.changeActive(!this.props.active);
	}

	render() {
		let buttonClass = ["callBack"];
		let navClass = ["nav__toggle"];
		let header = ["header__form"];

		if (this.props.addClass) {
			buttonClass.push("active");
			navClass.push("active");
		}
		return (
			<Fragment>
				<div className={navClass.join(" ")}>
					<div className="container__form">
						<Form className={header} type={"headerForm"} />
					</div>
				</div>
				<Button
					className={buttonClass.join(" ")}
					onClick={() => {
						this.openModal();
					}}
				>
					<span className={this.props.active ? "icon__burger nav active" : "icon__burger nav"} />
					Оставить заявку
				</Button>
			</Fragment>
		);
	}
}

const mapState = state => ({
	addClass: state.callBack.addClass,
	active: state.callBack.active
});

const mapDispatch = ({ callBack: { changeClass, changeActive } }) => ({
	changeClass,
	changeActive
});

export default connect(
	mapState,
	mapDispatch
)(CallBack);
