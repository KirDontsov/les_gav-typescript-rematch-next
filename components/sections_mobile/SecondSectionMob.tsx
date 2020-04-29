import React from "react";

const SecondSection = () => {
	return (
		<div className="secondSection" id="about">
			<div className="centerSection">
				<h2 className="dark">Об имущественном комплексе</h2>
				<div className="colWrapper">
					<div className="mainCol">
						<p>
							Продается комплекс недвижимости с возможностью дальнейшего развития. Гостиница «Лесная гавань» находится на склоне
							Северо-кавказских гор, в живописном месте – пригород Новороссийска, курортный поселок Широкая Балка. Вас окружат
							своим могуществом горы, дубовые, сосновые, можжевеловые леса и потрясающий пляж с кристальной, прозрачной водой.
						</p>
						<p>Собственная столовая на 150 посадочных мест</p>
						<p>Собственная трансформаторная подстанция и генератор на 60 кВт/ч.</p>
						<p>Собственные скважины, лицензии на изъятие воды имеются.</p>
						<p>Собственные очистные сооружения.</p>
						<p>
							Помимо пяти (5) действующих зданий на территории располагаются 16 домиков в горной части участка и здание крытого
							бассейна, требующие реконструкции.
						</p>
					</div>
					<div className="mainCol">
						<div className="box">
							<p className="title">26670 м²</p>
							<p className="text">общая площадь участка</p>
						</div>
						<div className="box">
							<p className="title">2908 м²</p>
							<p className="text">площадь номерного фонда</p>
						</div>
						<div className="box">
							<p className="title">4</p>
							<p className="text">корпуса</p>
						</div>
						<div className="box">
							<p className="title">102</p>
							<p className="text">номера</p>
						</div>
						<div className="box">
							<p className="title">30 м</p>
							<p className="text">до моря</p>
						</div>

						<div className="box">
							<p className="title">Собственный пляж</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecondSection;
