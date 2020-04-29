import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { Article } from "../../interfaces";
import { Articles } from "../../components/utils/articles";
import { LayoutOther } from "../../components/LayoutOther";
import ArticleListDetail from "../../components/blog/ArticleListDetail";

type Props = {
	item?: Article;
	errors?: string;
};

export default class StaticPropsDetail extends React.Component<Props> {
	render() {
		const { item, errors } = this.props;

		if (errors) {
			return (
				<LayoutOther>
					<p>
						<span style={{ color: "red" }}>Ошибка:</span> {errors}
					</p>
				</LayoutOther>
			);
		}

		return <>{item && <ArticleListDetail item={item} />}</>;
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	// Get the paths we want to pre-render based on users
	const paths = Articles.map(article => ({
		params: { id: article.id.toString() }
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const id = params!.id;
		const item = Articles.find(data => +data.id === Number(id));
		// By returning { props: item }, the StaticPropsDetail component
		// will receive `item` as a prop at build time
		return { props: { item } };
	} catch (err) {
		return { props: { errors: err.message } };
	}
};
