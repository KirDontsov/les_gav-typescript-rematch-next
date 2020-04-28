const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
// 	host: "smtp.ethereal.email",
// 	port: 587,
// 	auth: {
// 		user: "braulio.eichmann@ethereal.email",
// 		pass: "44XSmnWZEq7GcUeBuC"
// 	}
// });

const transporter = nodemailer.createTransport({
	service: "Yandex",
	host: "smtp.yandex.ru",
	secureConnection: true,
	port: 465,
	auth: {
		user: "wwwdks@yandex.ru",
		pass: "x0XKIRX0xxal10x1"
	}
});

const send = ({ email, name, phone }) => {
	const from = name && email && phone ? `${name} <${email}> ${phone}` : `${name || email} ${phone}`;
	const message = {
		from: "wwwdks@yandex.ru",
		to: "kir.dontsov@gmail.com, glavdomop@gmail.com",
		subject: `Заявка от ${from}`,
		html: `
    <h1 style="width: 700px; padding: 50px 8px 30px;" >Новая заявка с сайта lesnaya-gavan.ru<h1>
    <table style="width: 700px; border: 1px solid #ddd; border-collapse: collapse;">
      <thead>
      <tr style="background: #f9f9f9;">
        <th style="padding: 8px; border: 1px solid #ddd;">Имя</th>
        <th style="padding: 8px; border: 1px solid #ddd;">Телефон</th>
        <th style="padding: 8px; border: 1px solid #ddd;">Email</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
        </tr>
      </tbody>
    </table>`,
		replyTo: "wwwdks@yandex.ru"
	};

	return new Promise((resolve, reject) => {
		transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)));
	});
};

module.exports = send;
