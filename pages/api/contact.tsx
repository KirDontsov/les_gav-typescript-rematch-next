import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const response = await fetch(`http://react.rainbows23.tmweb.ru/mail.php`, {
			body: JSON.stringify(req.body),
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST"
		});

		// 7. Swallow any errors from Mailchimp and return a better error message.
		if (response.status >= 400) {
			return res.status(400).json({
				error: `There was an error subscribing to the newsletter. Shoot me an email at [me@leerob.io] and I'll add you to the list.`
			});
		}
		return res.status(201).json({ error: "" });
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
};
