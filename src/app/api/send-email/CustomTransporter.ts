import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.strato.de", // Gmail's SMTP server
  port: 587, // Port for secure SMTP
  secure: false, // Use TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
});

export default transporter;
