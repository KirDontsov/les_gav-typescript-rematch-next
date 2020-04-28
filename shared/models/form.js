export const form = {
	state: {
		email: "",
		phone: "",
		name: "",
		fetching: false,
		res: null
	},
	reducers: {
		setEmail: (state, payload) => ({
			...state,
			email: payload
		}),
		setPhone: (state, payload) => ({
			...state,
			phone: payload
		}),
		setName: (state, payload) => ({
			...state,
			name: payload
		}),
		setFetching: (state, payload) => ({
			...state,
			fetching: payload
		}),
		setRes: (state, payload) => ({
			...state,
			res: payload
		})
	},
	effects: dispatch => ({
		changeDisabled(payload, state) {
			if (state.form.phone && state.form.email && state.form.email.includes("@") !== "") {
				dispatch.form.setFetching(true);
				fetch("/api/send-email", {
					method: "POST",
					body: JSON.stringify({
						email: state.form.email,
						phone: state.form.phone,
						name: state.form.name
					}),
					headers: new Headers({
						"Content-Type": "application/json"
					})
				}).then(response => {
					dispatch.form.setFetching(false);
					dispatch.form.setRes(true);
					console.log("Successful" + response);
				});
				const SENDGRID_API_KEY = "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";
				const sgMail = require("@sendgrid/mail");
				sgMail.setApiKey(SENDGRID_API_KEY);
				const msg = {
					to: "kir.dontsov@gmail.com",
					from: "test@example.com",
					subject: "Sending with Twilio SendGrid is Fun",
					text: JSON.stringify({
						email: state.form.email,
						phone: state.form.phone,
						name: state.form.name
					}),
					html: "<strong>and easy to do anywhere, even with Node.js</strong>"
				};
				(async () => {
					try {
						await sgMail.send(msg);
					} catch (error) {
						console.error(error);

						if (error.response) {
							console.error(error.response.body);
						}
					}
				})();
			}
		}
	})
};
