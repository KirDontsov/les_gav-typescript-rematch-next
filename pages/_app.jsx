import App from "next/app";
import React from "react";
import Router from "next/router";
import withYM from "next-ym";

import withRematch from "../shared/withRematch";
import { Provider } from "react-redux";
import "../styles/index.scss";

class MyApp extends App {
	render() {
		const { Component, pageProps, reduxStore } = this.props;
		return (
			<Provider store={reduxStore}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default withRematch(withYM("62082124", Router)(MyApp));
