export type Article = {
	id: string;
	src: string;
	alt: string;
	title: string;
	desc: string;
	content: string;
	author: string;
	publishedAt: string;
	className: string;
	timeToRead: string;
};

export type BlogProps = { scrollPosition?: any; getInitialProps: any; data: any };
