import React, { FC } from "react";
import Form from "../Form";
import Arrow from "../Arrow";

const FifthSection: FC = () => {
	return (
		<div className="fifthSection" id="fifthSection">
			<div className="centerSection">
				<div className="colWrapper">
					<div className="col">
						<h2 className="dark">
							Имущественный комплекс - Ваш готовый <br /> бизнес
						</h2>
						<Arrow />
					</div>
					<div className="col">
						<Form type="sectionForm" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FifthSection;
