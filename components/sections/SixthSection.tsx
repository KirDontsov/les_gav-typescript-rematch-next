import React, { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import MyMap from "../Map";
import { YMaps } from "react-yandex-maps";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const SixthSection = () => {
	return (
		<Fragment>
			<div className="sixthSection" id="contacts">
				<Fade duration={2000}>
					<div className="centerSection">
						<div className="colWrapper">
							<div className="col">
								<div className="header">
									<h2 className="dark">Контакты</h2>
								</div>
								<div className="colTitle">Наш адрес:</div>
								<div className="colText">
									353993, Краснодарский край, г. Новороссийск, урочище Широкая балка, гостиница «Лесная Гавань»
								</div>
								<div className="colTitle">Телефон:</div>
								<div className="colText">8 (928) 260-01-65</div>
								<div className="colTitle">Почта:</div>
								<div className="colText">glavdomop@gmail.com</div>
							</div>
							<div className="col">
								<LazyLoadComponent>
									<YMaps>
										<MyMap />
									</YMaps>
								</LazyLoadComponent>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</Fragment>
	);
};

export default SixthSection;
