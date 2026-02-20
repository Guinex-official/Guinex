"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Loader2, PartyPopper } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        nom: "",
        telephone: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({
                    nom: "",
                    telephone: "",
                    email: "",
                    message: ""
                });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                alert("Une erreur est survenue lors de l'envoi du message.");
            }
        } catch (error) {
            console.error("Erreur:", error);
            alert("Une erreur est survenue lors de l'envoi du message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen bg-white flex flex-col">
                <Header />
                <section className="flex-grow flex flex-col items-center justify-center py-24 px-4 text-center">
                    <div className="bg-[#F1F4F7] p-12 md:p-20 rounded-3xl shadow-xl flex flex-col items-center max-w-2xl w-full border border-gray-100">
                        <div className="bg-[#F4B41A] p-6 rounded-full mb-8 shadow-lg shadow-yellow-100 animate-bounce">
                            <PartyPopper className="w-12 h-12 text-[#143D59]" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-[#143D59] mb-6">
                            Message envoyé !
                        </h1>
                        <p className="text-[#143D59] text-xl font-medium mb-10 opacity-80 leading-relaxed">
                            Merci {formData.nom}. Nous avons bien reçu votre message et notre équipe vous répondra dans les plus brefs délais.
                        </p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="bg-[#143D59] text-white font-extrabold py-5 px-12 rounded-xl shadow-lg hover:bg-[#1c4d6f] transition-all text-xl uppercase tracking-widest"
                        >
                            Retour à l'accueil
                        </button>
                    </div>
                </section>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="bg-gray-100 py-10 md:py-16" suppressHydrationWarning>
                <div className="container mx-auto px-4 max-w-7xl text-center md:text-left" suppressHydrationWarning>
                    <h1 className="text-2xl md:text-4xl font-bold text-[#143D59] mb-3 md:mb-4">
                        Contactez Guinex
                    </h1>
                    <p className="text-gray-700 text-base md:text-lg mb-3 md:mb-4">
                        Une question ? Un besoin de livraison ? Une demande de partenariat ?
                    </p>
                    <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto md:mx-0">
                        Notre équipe est disponible pour vous répondre rapidement et organiser vos livraisons dans les meilleures conditions.
                    </p>
                </div>
            </section>

            {/* Split Section: Entreprises / Particuliers */}
            <section className="py-10 md:py-20 border-b border-gray-200" suppressHydrationWarning>
                <div className="container mx-auto px-4 max-w-7xl" suppressHydrationWarning>
                    <div className="flex flex-col md:flex-row md:space-x-12 lg:space-x-24 space-y-10 md:space-y-0" suppressHydrationWarning>
                        {/* Pour les entreprises */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-xl md:text-2xl font-bold text-[#143D59] mb-3 md:mb-4">
                                Pour les entreprises
                            </h2>
                            <p className="text-gray-700 mb-4 md:mb-6 text-base leading-relaxed">
                                Vous souhaitez mettre en place la livraison de repas pour vos équipes ou bénéficier d'un service coursier professionnel pour vos documents et colis ?
                            </p>
                            <p className="text-gray-700 text-base">
                                Contactez-nous pour une offre adaptée à votre entreprise.
                            </p>
                        </div>

                        {/* Divider for desktop */}
                        <div className="hidden md:block w-px bg-gray-400 self-stretch"></div>

                        {/* Pour les particuliers */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-xl md:text-2xl font-bold text-[#143D59] mb-3 md:mb-4">
                                Pour les particuliers
                            </h2>
                            <p className="text-gray-700 mb-4 md:mb-6 text-base leading-relaxed">
                                Besoin d'envoyer un colis, un document ou de vous faire livrer un repas ?
                            </p>
                            <p className="text-gray-700 text-base">
                                Guinex vous accompagne avec un service simple, rapide et fiable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info & Form Section */}
            <section className="py-10 md:py-20 flex-grow">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
                        {/* Left: Coordonnées */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#143D59] mb-6 md:mb-8 text-center md:text-left">
                                Nos coordonnées
                            </h2>
                            <div className="space-y-5 md:space-y-6">
                                <div className="flex items-start justify-center md:justify-start space-x-4">
                                    <MapPin className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                                    <span className="text-base md:text-lg text-black text-center md:text-left">
                                        Zone d'intervention : Conakry
                                    </span>
                                </div>
                                <div className="flex items-start justify-center md:justify-start space-x-4">
                                    <Phone className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                                    <a
                                        href="https://api.whatsapp.com/message/YSOEJ42GH54ED1?autoload=1&app_absent=0"
                                        target="_blank"
                                        className="text-base md:text-lg text-black text-center md:text-left hover:text-[#F4B41A] transition-colors underline decoration-1 underline-offset-4"
                                    >
                                        Téléphone / WhatsApp : 610 29 20 29
                                    </a>
                                </div>
                                <div className="flex items-start justify-center md:justify-start space-x-4">
                                    <Mail className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                                    <span className="text-base md:text-lg text-black text-center md:text-left">
                                        Email : guinex.contact@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Formulaire */}
                        <div className="bg-gray-100/50 p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-xl md:text-2xl font-bold text-[#143D59] mb-5 md:mb-6 text-center md:text-left">
                                Formulaire de contact
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        name="nom"
                                        required
                                        value={formData.nom}
                                        onChange={handleInputChange}
                                        placeholder="Nom"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4B41A] focus:border-transparent bg-white text-gray-900 text-sm md:text-base"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="telephone"
                                        required
                                        value={formData.telephone}
                                        onChange={handleInputChange}
                                        placeholder="Téléphone"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4B41A] focus:border-transparent bg-white text-gray-900 text-sm md:text-base"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4B41A] focus:border-transparent bg-white text-gray-900 text-sm md:text-base"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Message"
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4B41A] focus:border-transparent bg-white text-gray-900 resize-none text-sm md:text-base"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#F4B41A] hover:bg-[#d9a016] text-[#143D59] font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-base md:text-lg shadow-sm flex items-center justify-center gap-2 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        "Envoyez ma demande"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
