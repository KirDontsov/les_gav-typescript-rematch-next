import React, { Fragment } from "react";
import MyMap from "../Map";
import { YMaps } from "react-yandex-maps";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const SixthSection = () => {
	return (
		<Fragment>
			<div className="sixthSection" id="sixthSection">
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
							<a href="tel:+79282600165" className="colText">
								+7 (928) 260-01-65
							</a>
							<div className="colTitle">Почта:</div>
							<a href="mailto:glavdomop@gmail.com" className="colText">
								glavdomop@gmail.com
							</a>
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
			</div>
		</Fragment>
	);
};

export default SixthSection;
