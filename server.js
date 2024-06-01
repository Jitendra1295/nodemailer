// server.js

const express = require('express');
const sendEmail = require('./emailService');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", async (req, resp) => {
    resp.send("<h1>Hello Jeet</h1>")
})

app.post('/send-email', async (req, res) => {
    const { to, subject, text, html } = req.body;

    try {
        const info = await sendEmail(to, subject, text, html);
        res.status(200).json({ message: 'Email sent', info });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
