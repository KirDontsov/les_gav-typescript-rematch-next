import React, { FC, useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Link from "../../components/nav/Link";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../../shared/store";
import { LayoutOther } from "../../components/LayoutOther";
import Shutter from "../../components/nav/Shutter";

import { Article } from "../../interfaces";
import Arrow from "../Arrow";
import { LazyBlogImage } from "../LazyBlogImage";
import { Burger } from "../Burger";
import NavOther from "../nav/NavOther";

interface ListDetailProps extends Partial<ReturnType<typeof mapState>>, Partial<ReturnType<typeof mapDispatch>> {
	slide?: any;
	scrollPosition?: any;
	item: Article;
}

const ArticleListDetail: FC<ListDetailProps> = ({ item: article, scrollPosition }, props) => {
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
	return (
		<LayoutOther
			title={article.title}
			description="Лесная Гавань - продается имущественный комплекс, готовый гостиничный бизнес, имеется возможность реконструкции"
		>
			<Shutter />
			{isMobile ? <Burger /> : <NavOther />}
			<div className="blogSection">
				<Fade delay={500} duration={2000}>
					<div className="centerSection">
						<Link href="/blog">
							<a>
								<Arrow />
							</a>
						</Link>
						<h1>{article.title}</h1>
						<div className="articleColCenter">
							<LazyBlogImage src={article.src} scrollPosition={scrollPosition} alt={article.title} className="blogImg" />

							<div className="white" dangerouslySetInnerHTML={{ __html: article.content }} />
							<div className="properties">
								<p className="white">Опубликовано: {new Date(article.publishedAt).toLocaleDateString()}</p>
								<p className="white">Автор: {article.author}</p>
							</div>
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
