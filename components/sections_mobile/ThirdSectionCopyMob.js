import React, { Fragment } from "react";
import LazyImage from "../LazyImage";
import ArrowHorizontal from "../ArrowHorizontal";

const ThirdSectionCopy = props => {
	return (
		<Fragment>
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
		</Fragment>
	);
};

export default ThirdSectionCopy;
