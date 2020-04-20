import React, { Fragment } from "react";

import Auto from "../../assets/svg/Auto";
import BBQ from "../../assets/svg/BBQ";
import Beach from "../../assets/svg/Beach";
import Bed from "../../assets/svg/Bed";
import Kitchen from "../../assets/svg/Kitchen";
import Pool from "../../assets/svg/Pool";
import Sport from "../../assets/svg/Sport";
import Sweem from "../../assets/svg/Sweem";
import WiFi from "../../assets/svg/WiFi";

const FourthSection = () => {
	return (
		<Fragment>
			<div className="fourthSection" id="fourthSection">
				<div className="centerSection">
					<h2 className="dark">Что такое "Лесная Гавань"</h2>
					<div className="colWrapper">
						<Bed />
						<Sweem />
						<Beach />
						<Pool />
						<Kitchen />
						<Sport />
						<BBQ />
						<Auto />
						<WiFi />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default FourthSection;
