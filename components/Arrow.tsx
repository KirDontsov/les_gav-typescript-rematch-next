import React, { FC } from "react";

type ArrowProps = {
	type?: string;
	color?: string;
	direction?: string;
};

const Arrow: FC<ArrowProps> = props => {
	return (
		<>
			{props.type !== undefined && props.type === "secondSection" ? (
				<a href="#about">
					<div className="arrow-container vertical">
						<div className={props.color === "green" ? "arrow green" : "arrow"} />
					</div>
				</a>
			) : (
				<div className="arrow-container vertical">
					<div className={props.color === "green" ? "arrow green" : "arrow"} />
				</div>
			)}
		</>
	);
};

export default Arrow;
