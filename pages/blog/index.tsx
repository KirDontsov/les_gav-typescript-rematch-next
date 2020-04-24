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
import fetch from "isomorphic-unfetch";
import { Article } from "../../interfaces";
import { Articles } from "../../components/utils/articles";
import { LayoutOther } from "../../components/LayoutOther";
import { ArticleListItem } from "../../components/blog/ArticleListItem";

type Props = {
	data: Article[];
};

const Blog = ({ data }: Props) => (
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
							<ArticleListItem data={item} />
						))}
					</div>
				</div>
			</Fade>
		</div>
	</LayoutOther>
);

export const getStaticProps: GetStaticProps = async context => {
	// Call an external API endpoint to get posts.
	const res = await fetch("https://les-gav-typescript-rematch-next.now.sh/api/articles");
	const data = await res.json();
	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			data
		}
	};
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
