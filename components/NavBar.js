import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CallBack from "./CallBack";
import "../scss/Nav.scss";
import { routes } from "../routes";

const NavigationBar = props => {
	function handleClick(e) {
		props.slide(true);
		scrollToTop();
	}
	function scrollToTop() {
		let div = document.querySelector(".wrapper");
		div.scrollTop = 0;
	}

	let navClass = ["nav-link", "white"];

	const renderNav = props => {
		// eslint-disable-next-line default-case
		switch (props.location.pathname) {
			case "/":
				return (
					<Fragment>
						<a href="#secondSection" className={navClass.join(" ")}>
							О Комплексе
						</a>
						<a href="#fourthSection" className={navClass.join(" ")}>
							Сведения
						</a>
						<a href="#sixthSection" className={navClass.join(" ")}>
							Контакты
						</a>
						{props.routes.map(route =>
							route.id > 2 ? (
								<NavLink
									className={route.className}
									exact={route.isExact}
									activeClassName="active"
									key={route.name}
									to={route.path}
									onClick={e => handleClick(e)}
								>
									{route.name}
								</NavLink>
							) : null
						)}
					</Fragment>
				);

			case "/galery":
				return (
					<Fragment>
						{props.routes.map(route => (
							<NavLink
								className={route.className}
								exact={route.isExact}
								activeClassName="active"
								key={route.name}
								to={route.path}
								onClick={e => handleClick(e)}
							>
								{route.name}
							</NavLink>
						))}
					</Fragment>
				);

			case "/blog":
				return (
					<Fragment>
						{props.routes.map(route => (
							<NavLink
								className={route.className}
								exact={route.isExact}
								activeClassName="active"
								key={route.name}
								to={route.path}
								onClick={e => handleClick(e)}
							>
								{route.name}
							</NavLink>
						))}
					</Fragment>
				);
		}
	};

	return (
		<div className="nav-wrapper">
			<div className="center nav__bot">
				{props.routes.map(route =>
					route.id === 1 ? (
						<NavLink
							className={route.className}
							exact={route.isExact}
							activeClassName="active"
							key={route.path}
							to={route.path}
							onClick={e => handleClick(e)}
						>
							{route.name}
						</NavLink>
					) : null
				)}
				<nav>{renderNav(props)}</nav>
				<CallBack routes={routes.filter(route => route.isMobile)} />
			</div>
		</div>
	);
};

const mapState = state => ({
	addClass: state.shutter.addClass
});

const mapDispatch = ({ shutter: { slide } }) => ({
	slide
});

export default withRouter(
	connect(
		mapState,
		mapDispatch
	)(NavigationBar)
);

NavigationBar.propTypes = {
	routes: PropTypes.array
};
