import React, { FC } from "react";
import Head from "next/head";
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
			<link rel="shortcut icon" href="/static/favicon.ico" />
			<script
				dangerouslySetInnerHTML={{
					__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-5WW4MRH');`
				}}
			/>
		</Head>

		{children}
		<Footer />
		<noscript
			dangerouslySetInnerHTML={{
				__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WW4MRH"
				height="0" width="0" style="display:none;visibility:hidden"></iframe>`
			}}
		/>
	</div>
);
