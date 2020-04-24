import * as React from "react";
import Link from "../../components/nav/Link";

import { Article } from "../../interfaces";

type Props = {
	data: Article;
};

export const ArticleListItem: React.FunctionComponent<Props> = ({ data }) => (
	<Link href="/blog/[id]" as={`/blog/${data.id}`}>
		<a>
			{data.id}: {data.name}
		</a>
	</Link>
);
