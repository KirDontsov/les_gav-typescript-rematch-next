import React, { Fragment } from "react";
import LazyImage from "../LazyImage";
import ArrowHorizontal from "../ArrowHorizontal";

const ThirdSection = props => {
	return (
		<Fragment>
			<div className="thirdSection" id="thirdSection">
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
								<LazyImage image={props.slides[0]} />
								<LazyImage image={props.slides[1]} />
							</div>
							<div className="col">
								<LazyImage image={props.slides[2]} />
								<LazyImage image={props.slides[3]} />
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

export default ThirdSection;
