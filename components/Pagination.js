import React from "react";
import Link from "./nav/Link";

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className="pagination">
			{pageNumbers.map((number, i) => (
				<li key={i} className="page-item">
					<Link href="#" className="page-link" onClick={() => paginate(number)}>
						{number}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Pagination;
