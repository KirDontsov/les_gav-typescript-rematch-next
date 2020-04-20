import React, { Component, FC } from "react";
import { connect } from "react-redux";
import { Layout } from "../components/Layout";
import { iRootState, Dispatch } from "../shared/store";
import Shutter from "../components/nav/Shutter";

const Gallery: FC = () => {
	return (
		<Layout>
			<Shutter />
			<div className="container web">
				<div className="container map" />
			</div>
		</Layout>
	);
};

const mapState = (state: iRootState) => ({
	shutter: state.shutter.addClass
});

const mapDispatch = (dispatch: Dispatch) => ({
	fetchSpecialists: dispatch.shutter.slide
});

export default connect(
	mapState as any,
	mapDispatch as any
)(Gallery);
