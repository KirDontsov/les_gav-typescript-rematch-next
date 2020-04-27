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
