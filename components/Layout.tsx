import React, { FC } from "react";
import Head from "next/head";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

type Props = {
	title: string;
	description: string;
};

export const Layout: FC<Props> = ({ children, title, description }) => (
	<div className="wrapper">
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="yandex-verification" content="9fcaa5f92320287d" />
			<meta name="google-site-verification" content="4GFebNPOpe9lCdvQkf9pXJGj5IWEBkxcGE9J736ZDOY" />
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="icon" type="image/x-icon" href={require("../assets/img/logo192.png")} />
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
		</Head>

		{children}
		<Footer />
	</div>
);
