import React from "react";
import { Fade } from "react-awesome-reveal";
import Form from "../Form";
import Arrow from "../Arrow";

const FifthSection = () => {
	return (
		<div className="fifthSection" id="fifthSection">
			<Fade triggerOnce duration={2000}>
				<div className="centerSection">
					<div className="colWrapper">
						<div className="col">
							<h2 className="dark">
								Имущественный комплекс - <br />
								<span>
									Ваш готовый <br /> бизнес
								</span>
							</h2>
							<Arrow />
						</div>
						<div className="col">
							<Form type="sectionForm" />
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default FifthSection;
