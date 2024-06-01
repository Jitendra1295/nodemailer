// emailService.js

const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (to, subject, text, html) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    })

    let mail = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
        html,
    })

    console.log("Message sent: ", mail.messageId);
}

module.exports = sendEmail;
