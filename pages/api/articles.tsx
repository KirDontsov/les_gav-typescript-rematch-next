import { NextApiRequest, NextApiResponse } from "next";
import Articles from "../../components/utils/articles.json";

export default (_: NextApiRequest, res: NextApiResponse) => {
	try {
		if (!Array.isArray(Articles)) {
			throw new Error("Cannot find user data");
		}

		res.status(200).json(Articles);
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
	} catch (err) {
		res.status(500).json({ statusCode: 500, message: err.message });
	}
};
