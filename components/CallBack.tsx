import React, { Component, Fragment, FC } from "react";
import classNames from "classnames";
import Form from "./Form";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../shared/store";

type ButtonProps = { className: string; onClick: () => void; title: string; id: string };
const Button: FC<ButtonProps> = props => (
	<button className={classNames(props.className)} onClick={props.onClick}>
		{props.children}
	</button>
);

interface CallBackProps extends Partial<ReturnType<typeof mapState>>, Partial<ReturnType<typeof mapDispatch>> {
	slide?: any;
}

class CallBack extends Component<CallBackProps> {
	openModal() {
		this.props.changeClass!(!this.props.addClass);
		this.props.changeActive!(!this.props.active);
	}

	render() {
		let buttonClass = ["callBack"];
		let navClass = ["nav__toggle"];

		if (this.props.addClass) {
			buttonClass.push("active");
			navClass.push("active");
		}
		return (
			<Fragment>
				<div className={navClass.join(" ")}>
					<div className="container__form">
						<div className="callBackPhoneTitle">Телефон:</div>
						<a href="tel:+79282600165" className="callBackPhone">
							+7 (928) 260-01-65
						</a>
						<div className="callBackEmailTitle">Почта:</div>
						<a href="mailto:glavdomop@gmail.com" className="callBackEmail">
							glavdomop@gmail.com
						</a>
					</div>
				</div>
				<Button
					className={buttonClass.join(" ")}
					onClick={() => {
						this.openModal();
					}}
					title="Оставить заявку"
					id="application"
				>
					<span className={this.props.active ? "icon__burger nav active" : "icon__burger nav"} />
					Связаться с нами
				</Button>
			</Fragment>
		);
	}
}

const mapState = (state: iRootState) => ({
	addClass: state.callBack.addClass,
	active: state.callBack.active
});

const mapDispatch = (dispatch: Dispatch) => ({
	changeClass: dispatch.callBack.changeClass,
	changeActive: dispatch.callBack.changeActive
});

export default connect(
	mapState as any,
	mapDispatch as any
)(CallBack);
