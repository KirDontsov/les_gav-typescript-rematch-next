export type Article = {
	id: number;
	src: string;
	alt: string;
	title: string;
	desc: string;
	content: string;
	author: string;
	publishedAt: Date;
	className: string;
	timeToRead: string;
};

export type BlogProps = { scrollPosition?: any; getInitialProps: any; data: any };
