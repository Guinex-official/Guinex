# Documentation client – Guinex

Ce document est fourni au client **Guinex** pour permettre à un autre développeur (ou à l’équipe) de prendre le projet en main, de le déployer et de connecter le nom de domaine. Il contient tout ce qu’il faut savoir pour continuer le projet.

---

## 1. Présentation du projet

**Guinex** est un site vitrine Next.js pour une société de **livraison express** en Guinée (Conakry). Le site permet de :

- Présenter les services (livraison de repas, service coursier).
- Recueillir les demandes de contact via un formulaire (email).
- Recruter des livreurs via un formulaire de candidature (avec pièces jointes), envoyé par email.

**Stack technique :**

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS 4**, **Lucide React** (icônes)
- **Nodemailer** (envoi d’emails)
- **Sharp** (optimisation d’images)

---

## 2. Ce qu’il faut fournir à un nouveau développeur

À transmettre au nouveau développeur :

1. **Le code source**  
   - Dépôt Git (GitHub, GitLab, etc.) ou archive du projet (dossier `guinex`).

2. **Ce fichier**  
   - `DOCUMENTATION-CLIENT.md` (ce document).

3. **Le fichier d’exemple des variables d’environnement**  
   - `.env.example` (à la racine du projet). Le développeur devra créer un fichier `.env.local` en s’inspirant de ce fichier (voir section 4).

4. **Les accès et informations sensibles (à transmettre de façon sécurisée, pas dans le dépôt)**  
   - Identifiants du compte Gmail utilisé pour l’envoi des emails (ou instructions pour en créer un et configurer un “mot de passe d’application”).  
   - Adresse email qui doit recevoir les messages (contact + candidatures livreurs).  
   - Accès au compte d’hébergement (ex. Vercel) et, si applicable, au registrar du nom de domaine.

---

## 3. Installation et lancement du projet (nouveau développeur)

Prérequis : **Node.js 18+** et **npm** (ou yarn/pnpm).

```bash
# Cloner le dépôt (ou extraire l’archive)
cd guinex

# Installer les dépendances
npm install

# Créer le fichier des variables d’environnement (voir section 4)
# Copier .env.example vers .env.local et remplir les valeurs

# Lancer le serveur de développement
npm run dev
```

Le site est accessible sur : **http://localhost:3000**

**Scripts disponibles :**

| Commande        | Description                    |
|-----------------|--------------------------------|
| `npm run dev`   | Lance le serveur de développement |
| `npm run build` | Compile le projet pour la production |
| `npm run start` | Lance le serveur en mode production (après `build`) |
| `npm run lint`  | Vérification du code (ESLint)  |

---

## 4. Variables d’environnement (emails)

Les formulaires **Contact** et **Candidature livreur** envoient des emails. Il faut configurer les variables suivantes.

**Fichier à créer :** `.env.local` à la racine du projet (ne jamais le commiter).

**Copier le contenu de `.env.example`** et remplacer par les vraies valeurs :

| Variable      | Description |
|---------------|-------------|
| `SMTP_USER`   | Adresse Gmail qui **envoie** les emails (ex. `guinex.contact@gmail.com`) |
| `SMTP_PASS`   | Mot de passe d’**application** Gmail (pas le mot de passe normal du compte). Voir ci‑dessous. |
| `RECIP_EMAIL` | Adresse email qui **reçoit** les messages du formulaire contact et les candidatures livreurs |

**Obtenir un mot de passe d’application Gmail :**

1. Activer la validation en 2 étapes sur le compte Google.
2. Aller dans : Compte Google → Sécurité → Mots de passe des applications.
3. Créer un mot de passe d’application pour “Mail” et l’utiliser dans `SMTP_PASS`.

En production (Vercel, etc.), ces mêmes variables doivent être renseignées dans les paramètres du projet (Environment Variables).

---

## 5. Structure du projet (repères pour le développeur)

```
guinex/
├── src/
│   ├── app/                    # Pages et routes Next.js (App Router)
│   │   ├── page.tsx            # Accueil
│   │   ├── layout.tsx          # Layout global, métadonnées SEO
│   │   ├── globals.css         # Styles globaux
│   │   ├── a-propos/           # Page À propos
│   │   ├── contact/            # Page Contact + formulaire
│   │   ├── services/           # Page Nos services
│   │   ├── partenaires/       # Partenaires (page en construction)
│   │   │   ├── livreurs/       # Candidature livreur (formulaire complet)
│   │   │   ├── restaurants/
│   │   │   └── entreprise/
│   │   └── api/                # Routes API
│   │       ├── contact/        # POST : envoi formulaire contact
│   │       └── livreur/        # POST : envoi candidature livreur (avec fichiers)
│   ├── components/             # Composants réutilisables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   └── ui/                 # ContactModal, ConstructionPlaceholder
│   └── lib/
│       └── mail.ts             # Configuration Nodemailer (SMTP Gmail)
├── public/
│   └── images/                 # Images du site (logos, hero, icônes, etc.)
├── .env.example                # Modèle des variables d’environnement
├── DOCUMENTATION-CLIENT.md     # Ce document
├── next.config.ts
├── package.json
└── tsconfig.json
```

**Points importants :**

- Les **textes, numéros et emails** affichés sur le site (footer, contact, etc.) sont dans les composants (ex. `Footer.tsx`, `contact/page.tsx`). Pour les modifier, chercher "610 29 20 29", "guinex.contact@gmail.com", liens WhatsApp/Facebook/Instagram/LinkedIn.
- Les **emails envoyés** par le site partent du compte `SMTP_USER` et arrivent à `RECIP_EMAIL` (configurés dans `.env.local` ou dans l’hébergeur).

---

## 6. Déploiement (recommandation : Vercel)

Next.js se déploie très simplement sur **Vercel** (créé par l’équipe Next.js).

**Étapes pour le client ou le nouveau développeur :**

1. Créer un compte sur [vercel.com](https://vercel.com) (gratuit pour un projet personnel/petite structure).
2. Installer Vercel CLI (optionnel) : `npm i -g vercel`.
3. Lier le projet :
   - Soit via le site Vercel : “Import Git Repository” (si le code est sur GitHub/GitLab).
   - Soit en local : dans le dossier `guinex`, lancer `vercel` et suivre les instructions.
4. **Configurer les variables d’environnement** dans Vercel :  
   Projet → Settings → Environment Variables → ajouter `SMTP_USER`, `SMTP_PASS`, `RECIP_EMAIL` pour l’environnement **Production** (et Preview si besoin).
5. Déployer : chaque push sur la branche principale peut déclencher un déploiement automatique, ou lancer un déploiement manuel depuis le tableau de bord Vercel.

Après déploiement, Vercel fournit une URL du type : `https://guinex.vercel.app` (ou un nom personnalisé). Cette URL peut ensuite être remplacée par le nom de domaine du client (voir section 7).

---

## 7. Connexion du nom de domaine

Le client peut utiliser son propre nom de domaine (ex. `www.guinex.com` ou `guinex-guinee.com`).

### 7.1 Sur Vercel

1. Aller dans le projet Vercel → **Settings** → **Domains**.
2. Cliquer sur **Add** et saisir le domaine (ex. `www.guinex.com` ou `guinex.com`).
3. Vercel affiche les enregistrements DNS à créer chez le **registrar** (où le domaine a été acheté : OVH, Gandi, Namecheap, etc.).

**Enregistrements typiques :**

- Pour **www** (ex. `www.guinex.com`) :  
  - Type : `CNAME`  
  - Nom : `www`  
  - Valeur : `cname.vercel-dns.com` (ou la valeur indiquée par Vercel)

- Pour la **racine** (ex. `guinex.com` sans www) :  
  - Type : `A`  
  - Nom : `@`  
  - Valeur : `76.76.21.21` (IP fournie par Vercel – à vérifier dans la doc Vercel à jour)

4. Sauvegarder les DNS chez le registrar. La propagation peut prendre de 5 minutes à 48 h.
5. Dans Vercel, une fois le domaine vérifié, activer **HTTPS** (généralement automatique).

### 7.2 Vérification

- Attendre la fin de la propagation DNS.
- Ouvrir `https://www.votredomaine.com` (ou le domaine configuré) et vérifier que le site Guinex s’affiche.
- Tester le formulaire de contact et, si possible, une candidature livreur (fichiers), pour confirmer que les emails partent bien avec la config en production.

---

## 8. Résumé des informations à transmettre au nouveau développeur

| Élément | Où le trouver / quoi donner |
|--------|------------------------------|
| Code source | Dépôt Git ou archive du dossier `guinex` |
| Documentation | `DOCUMENTATION-CLIENT.md` (ce fichier) |
| Variables d’environnement | `.env.example` + valeurs réelles (SMTP_USER, SMTP_PASS, RECIP_EMAIL) transmises de façon sécurisée |
| Hébergement | Compte Vercel (ou autre) + accès au projet si le client veut que le dev gère les déploiements |
| Domaine | Registrar (OVH, Gandi, etc.) + accès pour modifier les DNS si le dev doit configurer le domaine |
| Emails | Compte Gmail utilisé pour l’envoi + adresse qui reçoit les messages (RECIP_EMAIL) |

---

## 9. Pages “en construction”

Les pages suivantes affichent un placeholder “en construction” :

- `/partenaires`
- `/partenaires/entreprise`
- `/partenaires/restaurants`

Seule **`/partenaires/livreurs`** est entièrement fonctionnelle (formulaire de candidature avec envoi par email). Un futur développeur pourra s’inspirer de cette page et de l’API `/api/livreur` pour développer les autres pages partenaires si besoin.

---

## 10. Contact technique et support

Pour toute question sur le code ou la mise en production, le nouveau développeur peut s’appuyer sur :

- Ce document (`DOCUMENTATION-CLIENT.md`)
- La structure du projet et les commentaires dans le code
- La documentation officielle : [Next.js](https://nextjs.org/docs), [Vercel](https://vercel.com/docs)

---

*Document généré pour la livraison du projet Guinex – à remettre au client avec le code source et le fichier `.env.example`.*
