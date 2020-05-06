import App from "next/app";
import React from "react";
import TagManager from "react-gtm-module";

import withRematch from "../shared/withRematch";
import { Provider } from "react-redux";
import "../styles/index.scss";

const tagManagerArgs = {
	id: "GTM-5WW4MRH"
};

class MyApp extends App {
	componentDidMount() {
		TagManager.initialize(tagManagerArgs);
	}
	render() {
		const { Component, pageProps, reduxStore } = this.props;
		return (
			<Provider store={reduxStore}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default withRematch(MyApp);
