import React, { Component, FC } from "react";
import { connect } from "react-redux";
import { Layout } from "../components/Layout";
import { iRootState, Dispatch } from "../shared/store";
import Shutter from "../components/nav/Shutter";

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

interface HomeProps extends Partial<ReturnType<typeof mapState>>, Partial<ReturnType<typeof mapDispatch>> {
	slide?: any;
}

const Home: FC<HomeProps> = props => {
	return (
		<Layout>
			<Shutter />
			{props.isMobile ? (
				<>
					<FirstSectionMob />
					{/* <SecondSectionMob />
					<ThirdSectionMob slides={slideData} />
					<FourthSectionMob />
					<ThirdSectionCopyMob title="Внутренний вид помещений" slides={slideData} />
					<FifthSectionMob />
					<SixthSectionMob /> */}
				</>
			) : (
				<>
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
	shutter: state.shutter.addClass,
	isMobile: state.windowModel.isMobile
});

const mapDispatch = (dispatch: Dispatch) => ({
	fetchSpecialists: dispatch.shutter.slide
});

export default connect(
	mapState as any,
	mapDispatch as any
)(Home);
