import React, { FC } from "react";
import Link from "./nav/Link";

type PaginationProps = {
	cardsPerPage: number;
	totalCards: number;
	paginate: (number: number) => void;
};

const Pagination: FC<PaginationProps> = ({ cardsPerPage, totalCards, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className="pagination">
			{pageNumbers.map((number, i) => (
				<li key={i} className="page-item">
					<Link href="#">
						<a className="page-link" onClick={() => paginate(number)}>
							{number}
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Pagination;
