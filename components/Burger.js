import React, { Component, Fragment } from "react";
import { Motion, spring } from "react-motion";
import { noop } from "lodash";
import classNames from "classnames";
import Link from "../components/nav/Link";
import Form from "../components/Form";

const Button = props => (
	<button className={classNames("button", props.className)} style={props.style} onClick={props.onClick || noop}>
		{props.children}
	</button>
);

class Burger extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false,
			addClass: false
		};

		this._onClick = this._onClick.bind(this);
	}

	_onClick() {
		this.setState({
			active: !this.state.active,
			addClass: !this.state.addClass
		});
	}

	onClick = () => {
		scrollToTop();
	};
	scrollToTop = () => {
		let div;
		if (div !== null) {
			div = document.querySelector(".wrapper");
			div.scrollTop = 0;
		}
	};

	render() {
		let buttonClass = ["button--large"];
		let navClass = ["nav__toggle"];

		if (this.state.addClass) {
			buttonClass.push("active");
			navClass.push("active");
		}
		return (
			<Fragment>
				<Motion
					defaultStyle={{ s: 0.675 }}
					style={{
						s: spring(this.state.active ? 1 : 0.675, {
							stiffness: 330,
							damping: 14
						})
					}}
				>
					{interpolatingStyles => (
						<Fragment>
							<div className={navClass.join(" ")}>
								<div className="container__mob">
									<a href="#sixthSection" className="nav-link">
										Контакты
									</a>
									<Link activeClassName="active" href="/galery">
										<a className="nav-link" onClick={this.onClick}>
											Галерея
										</a>
									</Link>
									<Link activeClassName="active" href="/blog">
										<a className="nav-link" onClick={this.onClick}>
											Блог
										</a>
									</Link>
									<div className="container__form">
										<Form type={"BurgerForm"} />
									</div>
								</div>
							</div>
							<Button
								className={buttonClass.join(" ")}
								onClick={this._onClick.bind(this)}
								style={{
									transform: "scale(" + interpolatingStyles.s + ")"
								}}
							>
								<span className={this.state.active ? "icon__burger active" : "icon__burger"} />
							</Button>
						</Fragment>
					)}
				</Motion>
			</Fragment>
		);
	}
}

export default Burger;
