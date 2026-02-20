
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.RECIP_EMAIL,
};
