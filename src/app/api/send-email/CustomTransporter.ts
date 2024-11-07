import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.strato.de", // Correct SMTP server hostname for Strato
  service: "strato",
  port: 587, // Port for SSL/TLS
  secure: false, // Use SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: "TLSv1.2",
    servername: "green-energy-career-day.com"
}

});

export default transporter;
