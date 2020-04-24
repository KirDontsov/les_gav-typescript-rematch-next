import React, { useState, useEffect, FC, ReactNode, Fragment } from "react";
import { GetStaticProps } from "next";
import Link from "../../components/nav/Link";
import { Fade } from "react-awesome-reveal";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../../shared/store";
import Shutter from "../../components/nav/Shutter";
import Arrow from "../../components/Arrow";
// import Pagination from "../../components/Pagination";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { Articles } from "../../components/utils/articles";
import { Article } from "../../interfaces";
import { LayoutOther } from "../../components/LayoutOther";
import { ArticleListItem } from "../../components/blog/ArticleListItem";

type BlogProps = { scrollPosition?: any; getInitialProps: any; data: Article[] };

const Blog: FC<BlogProps> = ({ data, scrollPosition }) => (
	<LayoutOther>
		<Shutter />
		<div className="blogSection">
			<Fade delay={500} duration={2000}>
				<div className="centerSection">
					<Link href="/">
						<a>
							<Arrow />
						</a>
					</Link>
					<h1>Блог</h1>
					<div className="colCenter">
						{data.map(item => (
							<ArticleListItem data={item} scrollPosition={scrollPosition} />
						))}
					</div>
				</div>
			</Fade>
		</div>
	</LayoutOther>
);

export const getStaticProps: GetStaticProps = async () => {
	// Example for including static props in a Next.js function component page.
	// Don't forget to include the respective types for any props passed into
	// the component.
	const data: Article[] = Articles;
	return { props: { data } };
};

const mapState = (state: iRootState) => ({
	shutter: state.shutter.addClass
});

const mapDispatch = (dispatch: Dispatch) => ({
	fetchSpecialists: dispatch.shutter.slide
});

export default connect(
	mapState as any,
	mapDispatch as any
)(trackWindowScroll(Blog));
