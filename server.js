const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

var cors = require("cors");

const dev = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";
const app = next({ prod });
const handle = app.getRequestHandler();

const mailer = require("./mailer");

app.prepare().then(() => {
	const server = express();

	server.use(bodyParser.json());

	server.post("/api/contact", (req, res) => {
		const { email = "", name = "", phone = "" } = req.body;

		mailer({ email, name, phone })
			.then(() => {
				console.log(req.body);
				res.send("success");
			})
			.catch(error => {
				console.log("failed", error);
				res.send("badddd");
			});
	});

	server.get("*", cors(), (req, res) => {
		return handle(req, res);
	});

	server.listen(3000, err => {
		if (err) throw err;
		console.log("> Read on http://localhost:3000");
	});
});
