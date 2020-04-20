import React, { FC } from "react";
import { Fade } from "react-awesome-reveal";
import Link from "../components/nav/Link";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../shared/store";
import { Layout } from "../components/Layout";
import Shutter from "../components/nav/Shutter";

interface Custom404Props extends Partial<ReturnType<typeof mapState>>, Partial<ReturnType<typeof mapDispatch>> {
	slide?: any;
}

const Custom404: FC<Custom404Props> = props => {
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
		<Layout>
			<Shutter />
			<Fade delay={300}>
				<div className="container__margin">
					<div className="centerSection">
						<Link activeClassName="active" href="/">
							<a className="nav-link logo" href="/" onClick={onClick}>
								Вернуться на главную >
							</a>
						</Link>

						<h1 style={{ color: "#000" }}>Упс... 404 Страница не существует</h1>
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
					</div>
				</div>
			</Fade>
		</Layout>
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
)(Custom404);
