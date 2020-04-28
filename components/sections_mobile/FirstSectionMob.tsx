import React, { FC } from "react";
import Arrow from "../Arrow";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { Fade } from "react-awesome-reveal";
import { LazyBlogImage } from "../LazyBlogImage";

const mainImg = require("../../assets/img/KIR_2320.jpg");

type FirstSectionProps = { scrollPosition: any };

const FirstSection: FC<FirstSectionProps> = props => (
	<div className="sectionWrapper">
		<div className="firstSection">
			<div className="header">
				<Fade triggerOnce duration={2000}>
					<h1 className="white">
						Имущественный комплекс
						<br />
						Санаторий <span>Лесная Гавань</span>
					</h1>
				</Fade>
			</div>
		</div>
		<div className="mobileImgContainer">
			<LazyBlogImage
				src={mainImg}
				scrollPosition={props.scrollPosition}
				className="LazyImage"
				alt="Имущественный комплекс Санаторий Лесная Гавань"
			/>
		</div>
		<Arrow direction="vertical" type="about" />
	</div>
);

export default trackWindowScroll(FirstSection);
