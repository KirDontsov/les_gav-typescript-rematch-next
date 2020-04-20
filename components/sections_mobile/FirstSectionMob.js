import React, { Fragment } from "react";
import Arrow from "../Arrow";
import LazyImage from "../LazyImage";
import { trackWindowScroll } from "react-lazy-load-image-component";

const FirstSection = props => {
	return (
		<Fragment>
			<div className="sectionWrapper">
				<div
					className="firstSection"
					// id="firstSection"
				>
					<div className="header">
						<h1 className="white">
							Имущественный комплекс
							<br />
							Санаторий <span>Лесная Гавань</span>
						</h1>
					</div>
				</div>
				<div className="mobileImgContainer">
					<LazyImage image={props.slides[8]} scrollPosition={props.scrollPosition} />
				</div>

				<Arrow direction="vertical" type="secondSection" />
			</div>
		</Fragment>
	);
};

export default trackWindowScroll(FirstSection);
