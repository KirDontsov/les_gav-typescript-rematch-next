import React, { FC } from "react";
import Link from "./Link";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../../shared/store";

interface NavProps extends Partial<ReturnType<typeof mapState>>, Partial<ReturnType<typeof mapDispatch>> {
	slide?: any;
}

const Nav: FC<NavProps> = props => {
	const onClick = () => {
		props.slide(true);
		scrollToTop();
		console.log("click");
	};
	const scrollToTop = () => {
		let div;
		if (div !== null) {
			div = document.querySelector(".wrapper");
			div!.scrollTop = 0;
		}
	};
	return (
		<div className="nav-wrapper">
			<div className="center nav__bot">
				<a className="nav-link logo" href="/" onClick={onClick} />
				<nav>
					<a href="#secondSection" className="nav-link">
						О Комплексе
					</a>
					<a href="#fourthSection" className="nav-link">
						Сведения
					</a>
					<a href="#sixthSection" className="nav-link">
						Контакты
					</a>
					<Link activeClassName="active" href="/galery">
						<a className="nav-link" onClick={onClick}>
							галерея
						</a>
					</Link>
					<Link activeClassName="active" href="/blog">
						<a className="nav-link" onClick={onClick}>
							блог
						</a>
					</Link>
				</nav>
			</div>
		</div>
	);
};

const mapState = (state: iRootState) => ({
	addClass: state.shutter.addClass
});

const mapDispatch = (dispatch: Dispatch) => ({
	slide: dispatch.shutter.slide
});

export default connect(
	mapState as any,
	mapDispatch as any
)(Nav);
