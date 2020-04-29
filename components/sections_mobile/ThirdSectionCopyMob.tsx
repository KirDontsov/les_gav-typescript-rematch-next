import React, { FC } from "react";
import LazyImage from "../LazyImage";
import ArrowHorizontal from "../ArrowHorizontal";

type ThirdSectionCopyProps = { title?: string; slides: any };

const ThirdSectionCopy: FC<ThirdSectionCopyProps> = props => {
	return (
		<div className="thirdSectionCopy " id="thirdSectionCopy">
			<div className="centerSection">
				{props.title ? (
					<h2>
						Внутренний <span>вид помещений</span>
					</h2>
				) : (
					<h2>
						Внешний <span>вид</span>
					</h2>
				)}

				{props.slides !== undefined ? (
					<div className="colWrapper">
						<div className="col">
							<LazyImage image={props.slides[4]} />
							<LazyImage image={props.slides[5]} />
						</div>
						<div className="col">
							<LazyImage image={props.slides[6]} />
							<LazyImage image={props.slides[7]} />
						</div>
					</div>
				) : null}

				<div className="galleryLink">
					<ArrowHorizontal direction="horizontal" title="галерея" to="/galery" />
				</div>
			</div>
		</div>
	);
};

export default ThirdSectionCopy;
