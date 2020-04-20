import React, { Component, Fragment, FC } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ScrollButton from "../ScrollButton";

import { iRootState, Dispatch } from "../../shared/store";

interface FooterProps extends Partial<ReturnType<typeof mapState>>, Partial<ReturnType<typeof mapDispatch>> {}

const Footer: FC<FooterProps> = props => {
	return (
		<Fragment>
			<div className="footer">
				<div className="col__center">
					<div className="colWrapper">
						<div className="colMain">
							<div className="col">
								<div className="logo" />
							</div>
							<div className="col">
								<a href="#secondSection" className="nav-link white">
									О Гостинице
								</a>
								<a href="#thirdSection" className="nav-link white">
									Внешний Вид
								</a>
								<a href="#fourthSection" className="nav-link white">
									Сведения
								</a>
								<a href="#thirdSectionCopy" className="nav-link white">
									Внутренний Вид
								</a>
								<a href="#sixthSection" className="nav-link white">
									Контакты
								</a>
							</div>
						</div>
						<div className="colMain">
							<div className="col">
								<ScrollButton />
							</div>
							<div className="col">
								<h3>Наверх</h3>
							</div>
						</div>
					</div>
				</div>

				<div className="bottom">
					<div className="col__center second">
						<p className="copyright">
							© Лесная Гавань, 2020. Все права защищены. Создание сайтов
							<a href="http://paradox-agency.ru/index.ru.html">
								<span> Paradox Agency.</span>
							</a>
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

const mapState = (state: iRootState) => ({
	addClass: state.shutter.addClass
});

const mapDispatch = (dispatch: Dispatch) => ({
	slide: dispatch.shutter.slide
});

export default connect(
	mapState as any,
	mapDispatch as any
)(Footer);
