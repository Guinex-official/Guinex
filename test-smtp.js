
const nodemailer = require('nodemailer');

// Values hardcoded for direct testing
const SMTP_HOST = 'smtp.gmail.com';
const SMTP_PORT = 587;
const SMTP_USER = 'guinex.contact@gmail.com';
const SMTP_PASS = 'inkd xfbk ksek gkmn';

console.log('Testing SMTP connection with:');
console.log('Host:', SMTP_HOST);
console.log('Port:', SMTP_PORT);
console.log('User:', SMTP_USER);

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.log('Verification Error:', error);
    } else {
        console.log('SUCCESS: SMTP Server is ready to take our messages');
    }
});
