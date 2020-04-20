import React, { useState, useEffect, FC, ReactNode } from "react";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { connect } from "react-redux";
import { Layout } from "../components/Layout";
import { iRootState, Dispatch } from "../shared/store";
import Shutter from "../components/nav/Shutter";
import Link from "../components/nav/Link";
import Arrow from "../components/Arrow";
import LazyImage from "../components/LazyImage";
import Pagination from "../components/Pagination";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { GetStaticProps } from "next";
import fetch from "isomorphic-unfetch";
// import data from "../components/utils/photos.json";

type GalleryProps = { scrollPosition?: any; getInitialProps: any; data: any };
export interface Photos {
	id: string;
	alt: string;
	className: string;
	src: string;
}

const Galery: FC<GalleryProps> = ({ scrollPosition, data }) => {
	const [photos, setPhotos] = useState<Photos[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [photosPerPage, setPhotosPerPage] = useState(10);

	useEffect(
		() => {
			setPhotos(data);
			setLoading(false);

			// const fetchPhotos = async () => {
			// 	setLoading(true);
			// 	const res = await fetch("/api/photos");
			// 	const data = await res.json();
			// 	await console.log(data);
			// 	setPhotos(data);
			// 	setLoading(false);
			// };

			// fetchPhotos();
		},
		[photos]
	);

	let currentPhotos: Photos[] = [];
	if (!loading) {
		const indexOfLastCard = currentPage * photosPerPage;
		const indexOfFirstCard = indexOfLastCard - photosPerPage;
		currentPhotos = photos!.slice(indexOfFirstCard, indexOfLastCard);
	}

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
	console.log(photos, currentPhotos);
	return (
		<Layout>
			<Shutter />
			<div className="galerySection">
				<Fade delay={500} duration={2000}>
					<div className="centerSection">
						<Link href="/">
							<a>
								<Arrow />
							</a>
						</Link>
						<h1>Галерея</h1>

						<div className="colCenter">
							{!loading
								? currentPhotos!.map((img, i) => {
										return <LazyImage image={img} key={i} scrollPosition={scrollPosition} />;
								  })
								: null}

							<div className="pagination">
								{/* {!loading ? <Pagination cardsPerPage={photosPerPage} totalCards={photos!.length} paginate={paginate} /> : null} */}
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	// Call an external API endpoint to get posts.
	const res = await fetch("https://les-gav-typescript-rematch-next.now.sh/api/photos");
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
)(trackWindowScroll(Galery));
