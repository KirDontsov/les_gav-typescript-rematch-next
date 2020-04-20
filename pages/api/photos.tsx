import { NextApiRequest, NextApiResponse } from "next";
import photos from "../../components/utils/photos.json";

export default (_: NextApiRequest, res: NextApiResponse) => {
	try {
		if (!Array.isArray(photos)) {
			throw new Error("Cannot find user data");
		}

		res.status(200).json(photos);
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
	} catch (err) {
		res.status(500).json({ statusCode: 500, message: err.message });
	}
};
