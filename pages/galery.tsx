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
// import fetch from "isomorphic-unfetch";
import fetch from "unfetch";
import useSWR from "swr";

type GalleryProps = { scrollPosition?: any; getInitialProps: any };
export interface Photos {
	id: string;
	alt: string;
	className: string;
	src: string;
}
const fetcher = (url: any) => fetch(url).then(res => res.json());

const Galery: FC<GalleryProps> = ({ scrollPosition }) => {
	const [photos, setPhotos] = useState<Array<Photos>>([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [photosPerPage, setPhotosPerPage] = useState(10);

	const { data } = useSWR("/api/photos", fetcher);
	setPhotos(data);
	setLoading(false);
	console.log(loading);

	// useEffect(() => {
	// 	const fetchPhotos = async () => {
	// 		setLoading(true);
	// 		const res = await fetch("/api/photos");
	// 		const data = await res.json();
	// 		await console.log(data);
	// 		setPhotos(data);
	// 		setLoading(false);
	// 	};

	// 	fetchPhotos();
	// }, []);

	let currentPhotos: Array<Photos> = [];
	if (!loading) {
		const indexOfLastCard = currentPage * photosPerPage;
		const indexOfFirstCard = indexOfLastCard - photosPerPage;
		currentPhotos = photos.slice(indexOfFirstCard, indexOfLastCard);
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
								? currentPhotos.map((img, i) => {
										return <LazyImage image={img} key={i} scrollPosition={scrollPosition} />;
								  })
								: null}

							<div className="pagination">
								{!loading ? <Pagination cardsPerPage={photosPerPage} totalCards={photos.length} paginate={paginate} /> : null}
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</Layout>
	);
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
