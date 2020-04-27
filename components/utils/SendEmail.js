import fetch from "node-fetch";

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY = "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";

export const sendEmail = async ({ name, email }) => {
	await fetch(SENDGRID_API, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${SENDGRID_API_KEY}`
		},
		body: JSON.stringify({
			personalizations: [
				{
					to: [
						{
							email: "kir.dontsov@gmail.com"
						}
					],
					subject: "Demo success :)"
				}
			],
			from: {
				email,
				name: "Test SendGrid"
			},
			content: [
				{
					type: "text/html",
					value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`
				}
			]
		})
	});
};
