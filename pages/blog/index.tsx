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
import { Burger } from "../../components/Burger";
import NavOther from "../../components/nav/NavOther";
import Head from "next/head";

type BlogProps = { scrollPosition?: any; getInitialProps: any; data: Article[] };

const Blog: FC<BlogProps> = ({ data, scrollPosition }) => {
	const [width, setWidth] = useState<null | number>(null);
	const [isMobile, setIsMobile] = useState(false);
	useEffect(
		() => {
			if (typeof window !== "undefined") {
				setWidth(window.innerWidth);
				if (width! <= 768) {
					setIsMobile(true);
				}
				if (width! > 768) {
					setIsMobile(false);
				}

				window.addEventListener("resize", () => setWidth(window.innerWidth));
				return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
			}
		},
		[width]
	);
	const title = "Лесная Гавань - информация о гостинице";
	const description =
		"Лесная Гавань - продается имущественный комплекс, готовый гостиничный бизнес, имеется возможность реконструкции";
	return (
		<LayoutOther>
			<Shutter />
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			{isMobile ? <Burger /> : <NavOther />}
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
							{data
								.slice()
								.reverse()
								.map((item, i) => (
									<ArticleListItem data={item} scrollPosition={scrollPosition} key={i} />
								))}
						</div>
					</div>
				</Fade>
			</div>
		</LayoutOther>
	);
};

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
	slide: dispatch.shutter.slide
});

export default connect(
	mapState as any,
	mapDispatch as any
)(trackWindowScroll(Blog));
