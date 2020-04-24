import React, { FC } from "react";
import Head from "next/head";
import Footer from "./footer/Footer";
import NavOther from "./nav/NavOther";

type Props = {
	title?: string;
};

export const LayoutOther: FC<Props> = ({ children, title = "This is the default title" }) => (
	<div className="wrapper">
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="icon" type="image/x-icon" href={require("../assets/img/logo192.png")} />
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
		</Head>

		<NavOther />
		{children}
		<Footer />
	</div>
);
