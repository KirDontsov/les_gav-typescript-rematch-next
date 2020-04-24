import React, { useState, useEffect, FC, ReactNode, Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { connect } from "react-redux";
import { LayoutOther } from "../components/LayoutOther";
import { iRootState, Dispatch } from "../shared/store";
import Shutter from "../components/nav/Shutter";
import Link from "../components/nav/Link";
import Arrow from "../components/Arrow";
import Pagination from "../components/Pagination";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { GetStaticProps } from "next";
import fetch from "isomorphic-unfetch";
import { LazyBlogImage } from "../components/LazyBlogImage";
import Router from "next/router";

type GalleryProps = { scrollPosition?: any; getInitialProps: any; data: any };
// export interface Photos {
// 	id: string;
// 	alt: string;
// 	className: string;
// 	src: string;
// }

const Blog: FC<GalleryProps> = ({ scrollPosition, data }) => {
	const [articles, setArticles] = useState<any[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [photosPerPage] = useState(10);

	useEffect(
		() => {
			setArticles(data);
			setLoading(false);
		},
		[articles]
	);

	// let currentPhotos: Photos[] = [];
	// if (!loading) {
	// 	const indexOfLastCard = currentPage * photosPerPage;
	// 	const indexOfFirstCard = indexOfLastCard - photosPerPage;
	// 	currentPhotos = photos!.slice(indexOfFirstCard, indexOfLastCard);
	// }

	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		scrollToTop();
	};

	const scrollToTop = () => {
		let div;
		if (div !== null) {
			div = document.querySelector(".wrapper");
			div!.scrollTop = 0;
		}
	};
	console.log(data.articles);
	return (
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
						<span onClick={() => Router.push("/")}>here</span>
						<div className="colCenter">
							{!loading && data.articles.length !== 0
								? data.articles.map((article: any, i: number) => {
										return (
											<div>
												<LazyBlogImage
													src={article.urlToImage}
													scrollPosition={scrollPosition}
													alt={article.title}
													className="blogImg"
												/>
												<h2>{article.title}</h2>
												<div className="white">{article.content}</div>
											</div>
										);
								  })
								: null}

							<div className="pagination">
								{!loading ? (
									<Pagination cardsPerPage={photosPerPage} totalCards={articles!.length} paginate={paginate} />
								) : null}
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</LayoutOther>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	// Call an external API endpoint to get posts.
	const res = await fetch(
		"http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-24&sortBy=publishedAt&apiKey=8bb5544e92f34da3b3d0dab1323a03cd"
	);
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
