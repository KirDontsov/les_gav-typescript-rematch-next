import React, { Component, Fragment, FC, useState, useCallback } from "react";
import { Motion, spring } from "react-motion";
import { noop } from "lodash";
import classNames from "classnames";
import Link from "./nav/Link";
import Form from "./Form";

type ButtonProps = { className: string; style: {}; onClick: () => void };

const Button: FC<ButtonProps> = props => (
	<button className={classNames("button", props.className)} style={props.style} onClick={props.onClick || noop}>
		{props.children}
	</button>
);

type BurgerProps = {};

export const Burger: FC<BurgerProps> = () => {
	const [active, setActive] = useState(false);
	const [addClass, setAddClass] = useState(false);

	const onBurgerClick = useCallback(
		() => {
			setActive(prevState => !prevState);
			setAddClass(prevState => !prevState);
		},
		[active, addClass]
	);

	const onClick = useCallback(() => {
		scrollToTop();
	}, []);

	const scrollToTop = () => {
		let div;
		if (div !== null) {
			div = document.querySelector(".wrapper");
			div!.scrollTop = 0;
		}
	};

	let buttonClass = ["button--large"];
	let navClass = ["nav__toggle"];

	if (addClass) {
		buttonClass.push("active");
		navClass.push("active");
	}

	return (
		<Fragment>
			<Motion
				defaultStyle={{ s: 0.675 }}
				style={{
					s: spring(active ? 1 : 0.675, {
						stiffness: 330,
						damping: 14
					})
				}}
			>
				{interpolatingStyles => (
					<Fragment>
						<div className={navClass.join(" ")}>
							<div className="container__mob">
								<Link activeClassName="active" href="/">
									<a className="nav-link" onClick={onClick}>
										Главная
									</a>
								</Link>
								<Link activeClassName="active" href="/galery">
									<a className="nav-link" onClick={onClick}>
										Галерея
									</a>
								</Link>
								<Link activeClassName="active" href="/blog">
									<a className="nav-link" onClick={onClick}>
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
							onClick={() => onBurgerClick()}
							style={{
								transform: "scale(" + interpolatingStyles.s + ")"
							}}
						>
							<span className={active ? "icon__burger active" : "icon__burger"} />
						</Button>
					</Fragment>
				)}
			</Motion>
		</Fragment>
	);
};
