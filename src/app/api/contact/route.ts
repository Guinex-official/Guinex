
import { NextResponse } from 'next/server';
import { transporter } from '@/lib/mail';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { nom, telephone, email, message } = data;

        if (!nom || !telephone || !email || !message) {
            return NextResponse.json(
                { message: 'Tous les champs sont requis' },
                { status: 400 }
            );
        }

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.RECIP_EMAIL,
            subject: `Nouveau message de contact de ${nom}`,
            text: `
        Nom: ${nom}
        Email: ${email}
        Téléphone: ${telephone}
        Message: ${message}
      `,
            html: `
        <h1>Nouveau message de contact</h1>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Message envoyé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json(
            { success: false, message: 'Erreur lors de l\'envoi du message' },
            { status: 500 }
        );
    }
}
