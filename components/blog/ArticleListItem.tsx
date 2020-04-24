import React, { FC } from "react";
import Link from "../../components/nav/Link";

import { Article } from "../../interfaces";
import { LazyBlogImage } from "../LazyBlogImage";

type ArticleListItemProps = {
	data: Article;
	scrollPosition: any;
};

export const ArticleListItem: FC<ArticleListItemProps> = ({ data, scrollPosition }) => (
	<Link href="/blog/[id]" as={`/blog/${data.id}`}>
		<a>
			<LazyBlogImage src={data.src} scrollPosition={scrollPosition} alt={data.title} className="blogImg" />
			<h2>{data.title}</h2>
			<div className="white">{data.desc}</div>
		</a>
	</Link>
);
