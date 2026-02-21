
import { NextResponse } from 'next/server';
import { transporter } from '@/lib/mail';

export async function POST(req: Request) {
    try {
        console.log('API Livreur call started');
        console.log('SMTP_USER defined:', !!process.env.SMTP_USER);

        const formData = await req.formData();
        const nom = formData.get('nom') as string;
        const telephone = formData.get('telephone') as string;
        const quartier = formData.get('quartier') as string;
        const hasMoto = formData.get('hasMoto') === 'true';
        const hasPermis = formData.get('hasPermis') === 'true';
        const disponibilite = formData.get('disponibilite') as string;
        const identityFile = formData.get('identity') as File | null;
        const permitFile = formData.get('permit') as File | null;

        if (!nom || !telephone || !quartier) {
            return NextResponse.json(
                { message: 'Champs obligatoires manquants' },
                { status: 400 }
            );
        }

        const attachments = [];
        if (identityFile) {
            const buffer = Buffer.from(await identityFile.arrayBuffer());
            attachments.push({
                filename: identityFile.name,
                content: buffer,
            });
        }
        if (permitFile) {
            const buffer = Buffer.from(await permitFile.arrayBuffer());
            attachments.push({
                filename: permitFile.name,
                content: buffer,
            });
        }

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.RECIP_EMAIL,
            subject: `Nouvelle candidature Livreur : ${nom}`,
            text: `
          Nom: ${nom}
          Téléphone: ${telephone}
          Quartier: ${quartier}
          Moto: ${hasMoto ? 'Oui' : 'Non'}
          Permis: ${hasPermis ? 'Oui' : 'Non'}
          Disponibilité: ${disponibilite}
          Pièce d'identité jointe: ${identityFile ? 'Oui' : 'Non'}
          Permis de conduire joint: ${permitFile ? 'Oui' : 'Non'}
        `,
            html: `
          <h1>Nouvelle candidature Livreur</h1>
          <p><strong>Nom:</strong> ${nom}</p>
          <p><strong>Téléphone:</strong> ${telephone}</p>
          <p><strong>Quartier:</strong> ${quartier}</p>
          <p><strong>Moto:</strong> ${hasMoto ? 'Oui' : 'Non'}</p>
          <p><strong>Permis:</strong> ${hasPermis ? 'Oui' : 'Non'}</p>
          <p><strong>Disponibilité:</strong> ${disponibilite}</p>
          <p><strong>Pièce d'identité:</strong> ${identityFile ? 'Présente' : 'Absente'}</p>
          <p><strong>Permis de conduire:</strong> ${permitFile ? 'Présent' : 'Absent'}</p>
        `,
            attachments,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Candidature envoyée avec succès' });
    } catch (error: any) {
        console.error('Erreur lors de l\'envoi de la candidature:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Erreur lors de l\'envoi de la candidature',
                error: error.message
            },
            { status: 500 }
        );
    }
}
