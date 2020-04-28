import React, { FC } from "react";
import { GlassMagnifier } from "react-image-magnifiers";
import { Fade } from "react-awesome-reveal";
import Arrow from "../Arrow";

const mainImg = require("../../assets/img/KIR_2320.jpg");
const darkImg = require("../../assets/img/KIR_2320_1.jpg");

const FirstSection: FC = () => (
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
		<Fade duration={2000} delay={1000}>
			<GlassMagnifier
				imageSrc={mainImg}
				imageAlt="Имущественный комплекс Лесная Гавань"
				largeImageSrc={darkImg} // Optional
				magnifierBorderSize={0}
				magnifierSize={"30%"}
				allowOverflow={false}
				className="heroBanner"
			/>
		</Fade>
		<Arrow direction="vertical" type="about" />
	</div>
);

export default FirstSection;
