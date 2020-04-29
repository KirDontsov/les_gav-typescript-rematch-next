import React, { FC } from "react";
import Arrow from "./Arrow";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton: FC = () => {
	const scrollToTop = () => {
		let div;
		if (div !== null) {
			div = document.querySelector(".wrapper");
			div!.scrollTop = 0;
		}
	};

	return (
		<button
			title="Back to top"
			className="scroll"
			onClick={() => {
				scrollToTop();
			}}
		>
			<Arrow />
		</button>
	);
};

export default ScrollButton;
