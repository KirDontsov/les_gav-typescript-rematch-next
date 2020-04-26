import React, { Component, FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Layout } from "../components/Layout";
import { iRootState, Dispatch } from "../shared/store";
import Shutter from "../components/nav/Shutter";
import Burger from "../components/Burger";

import FirstSection from "../components/sections/FirstSection";
import SecondSection from "../components/sections/SecondSection";
import ThirdSection from "../components/sections/ThirdSection";
import ThirdSectionCopy from "../components/sections/ThirdSectionCopy";
import FourthSection from "../components/sections/FourthSection";
import FifthSection from "../components/sections/FifthSection";
import SixthSection from "../components/sections/SixthSection";
import FirstSectionMob from "../components/sections_mobile/FirstSectionMob";
import SecondSectionMob from "../components/sections_mobile/SecondSectionMob";
import ThirdSectionMob from "../components/sections_mobile/ThirdSectionMob";
import ThirdSectionCopyMob from "../components/sections_mobile/ThirdSectionCopyMob";
import FourthSectionMob from "../components/sections_mobile/FourthSectionMob";
import FifthSectionMob from "../components/sections_mobile/FifthSectionMob";
import SixthSectionMob from "../components/sections_mobile/SixthSectionMob";
import slideData from "../categories/Categories";
import Nav from "../components/nav/Nav";

interface HomeProps extends Partial<ReturnType<typeof mapState>>, Partial<ReturnType<typeof mapDispatch>> {
	slide?: any;
	setWidth: any;
}

const Home: FC<HomeProps> = props => {
	const [width, setWidth] = useState<null | number>(null);
	const [isMobile, setIsMobile] = useState(false);
	useEffect(
		() => {
			if (typeof window !== "undefined") {
				setWidth(window.innerWidth);
				if (width! <= 768) {
					setIsMobile(true);
				}
				if (width! > 768) {
					setIsMobile(false);
				}

				window.addEventListener("resize", () => setWidth(window.innerWidth));
				return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
			}
		},
		[width]
	);

	return (
		<Layout
			title="Лесная Гавань - продается имущественный комплекс"
			description="Лесная Гавань - продается имущественный комплекс, готовый гостиничный бизнес, имеется возможность реконструкции"
		>
			<Shutter />

			{isMobile ? (
				<>
					<Burger />
					<FirstSectionMob />
					<SecondSectionMob />
					<ThirdSectionMob slides={slideData} />
					<FourthSectionMob />
					<ThirdSectionCopyMob title="Внутренний вид помещений" slides={slideData} />
					<FifthSectionMob />
					<SixthSectionMob />
				</>
			) : (
				<>
					<Nav />
					<FirstSection />
					<SecondSection />
					<ThirdSection slides={slideData} />
					<FourthSection />
					<ThirdSectionCopy title="Внутренний вид помещений" slides={slideData} />
					<FifthSection />
					<SixthSection />
				</>
			)}
		</Layout>
	);
};

const mapState = (state: iRootState) => ({
	shutter: state.shutter.addClass
});

const mapDispatch = (dispatch: Dispatch) => ({
	slide: dispatch.shutter.slide
});

export default connect(
	mapState as any,
	mapDispatch as any
)(Home);
