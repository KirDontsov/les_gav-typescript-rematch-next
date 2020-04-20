import React, { FC } from "react";
import Link from "./nav/Link";

type ArrowProps = {
	type?: string;
	color?: string;
	to?: any;
	title?: any;
	direction?: string;
};
const Arrow: FC<ArrowProps> = props => {
	const scrollToTop = () => {
		let div;
		if (div !== null) {
			div = document.querySelector(".wrapper");
			div!.scrollTop = 0;
		}
	};
	return (
		<Link href={props.to}>
			<a>
				<div onClick={() => scrollToTop()}>
					{props.title ? <h2 className="titleArrow">{props.title}</h2> : null}
					<div className="arrow-container horizontal">
						<div className="arrow" />
					</div>
				</div>
			</a>
		</Link>
	);
};

export default Arrow;
