import React, { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import Auto from "../../assets/svg/Auto";
import BBQ from "../../assets/svg/BBQ";
import Beach from "../../assets/svg/Beach";
import Bed from "../../assets/svg/Bed";
import Kitchen from "../../assets/svg/Kitchen";
import Pool from "../../assets/svg/Pool";
import Sport from "../../assets/svg/Sport";
import Sweem from "../../assets/svg/Sweem";
import WiFi from "../../assets/svg/WiFi";

const FourthSection = () => (
	<Fade triggerOnce duration={2000}>
		<div className="fourthSection" id="svedeniya">
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
	</Fade>
);

export default FourthSection;
