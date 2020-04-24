import React, { FC } from "react";
import { Fade } from "react-awesome-reveal";
import Link from "../../components/nav/Link";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../../shared/store";
import { LayoutOther } from "../../components/LayoutOther";
import Shutter from "../../components/nav/Shutter";

import { Article } from "../../interfaces";
import Arrow from "../Arrow";

interface ListDetailProps extends Partial<ReturnType<typeof mapState>>, Partial<ReturnType<typeof mapDispatch>> {
	slide?: any;
	item: Article;
}

const ArticleListDetail: FC<ListDetailProps> = ({ item: article }, props) => {
	const onClick = () => {
		props.slide(true);
		scrollToTop();
	};
	const scrollToTop = () => {
		let div;
		if (div !== null) {
			div = document.querySelector(".wrapper");
			div!.scrollTop = 0;
		}
	};
	return (
		<LayoutOther>
			<Shutter />
			<div className="blogSection">
				<Fade delay={500} duration={2000}>
					<div className="centerSection">
						<Link href="/blog">
							<a>
								<Arrow />
							</a>
						</Link>

						<h1>Detail for {article.name}</h1>
						<div className="colCenter">
							<p className="white">ID: {article.id}</p>
						</div>
					</div>
				</Fade>
			</div>
		</LayoutOther>
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
)(ArticleListDetail);
