import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
	tls: {
		ciphers: "SSLv3",
		rejectUnauthorized: false,
	},
	service: "gmail",
});
export default transporter;
