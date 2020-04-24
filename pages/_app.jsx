import App from "next/app";
import React from "react";
import { YMInitializer } from "react-yandex-metrika";

import withRematch from "../shared/withRematch";
import { Provider } from "react-redux";
import "../styles/index.scss";

class MyApp extends App {
	render() {
		const { Component, pageProps, reduxStore } = this.props;
		return (
			<Provider store={reduxStore}>
				<Component {...pageProps} />
				<YMInitializer accounts={[62082124]} options={{ webvisor: true, defer: true }} version="2" />
			</Provider>
		);
	}
}

export default withRematch(MyApp);
