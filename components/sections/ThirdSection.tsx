import React, { FC, useCallback } from "react";
import { Fade } from "react-awesome-reveal";
import LazyImage from "../LazyImage";
import ArrowHorizontal from "../ArrowHorizontal";
import { connect } from "react-redux";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { iRootState, Dispatch } from "../../shared/store";

interface ThirdSectionProps extends Partial<ReturnType<typeof mapState>>, Partial<ReturnType<typeof mapDispatch>> {
	slide?: any;
	slides: any;
	title?: string;
	scrollPosition?: any;
}
const ThirdSection: FC<ThirdSectionProps> = props => {
	const handleClick = useCallback(() => {
		scrollToTop();
		props.slide(true);
	}, []);

	const scrollToTop = () => {
		let div;
		if (div !== null) {
			div = document.querySelector(".wrapper");
			div!.scrollTop = 0;
		}
	};
	return (
		<div className="thirdSection" id="vneshniyvid">
			<Fade triggerOnce duration={2000}>
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
								<LazyImage image={props.slides[0]} scrollPosition={props.scrollPosition} />
								<LazyImage image={props.slides[1]} scrollPosition={props.scrollPosition} />
							</div>
							<div className="col">
								<LazyImage image={props.slides[2]} scrollPosition={props.scrollPosition} />
								<LazyImage image={props.slides[3]} scrollPosition={props.scrollPosition} />
							</div>
						</div>
					) : null}
					<div className="galleryLink" onClick={() => handleClick()}>
						<ArrowHorizontal direction="horizontal" title="галерея" to="/galery" />
					</div>
				</div>
			</Fade>
		</div>
	);
};

const mapState = (state: iRootState) => ({
	width: state.windowModel.width
});

const mapDispatch = (dispatch: Dispatch) => ({
	slide: dispatch.shutter.slide
});

export default trackWindowScroll(
	connect(
		mapState as any,
		mapDispatch as any
	)(ThirdSection)
);
