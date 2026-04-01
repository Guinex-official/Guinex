"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, Loader2, PartyPopper, MessageSquare, Clock, ShieldCheck } from "lucide-react";
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
                const errorData = await response.json();
                alert(`Erreur: ${errorData.message || "Une erreur est survenue"} (${errorData.error || "détail inconnu"})`);
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
                <section className="flex-grow flex flex-col items-center justify-center py-24 px-4 text-center bg-gray-50">
                    <div className="bg-white p-12 md:p-20 rounded-[2rem] shadow-2xl flex flex-col items-center max-w-2xl w-full border border-gray-100 animate-fade-in-up">
                        <div className="bg-[#F4B41A] p-6 rounded-full mb-8 shadow-xl shadow-yellow-100/50 animate-bounce">
                            <PartyPopper className="w-12 h-12 text-[#143D59]" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-[#143D59] mb-6 tracking-tight">
                            Message reçu !
                        </h1>
                        <p className="text-[#143D59] text-xl font-medium mb-10 opacity-90 leading-relaxed">
                            Merci <span className="text-[#F4B41A]">{formData.nom}</span>. Nous avons bien reçu votre demande et notre équipe vous contactera très prochainement.
                        </p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="bg-[#143D59] text-white font-bold py-5 px-12 rounded-full shadow-lg hover:bg-[#1c4d6f] transition-all transform hover:-translate-y-1 active:scale-95 text-xl uppercase tracking-widest"
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
        <main className="min-h-screen bg-white flex flex-col overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center overflow-hidden" suppressHydrationWarning>
                <div className="absolute inset-0 z-0" suppressHydrationWarning>
                    <Image
                        src="/images/hero/backgroundhero.png"
                        alt="Contact Guinex"
                        fill
                        priority
                        className="object-cover !object-right md:!object-center"
                    />
                    <div className="absolute inset-0 bg-[#143D59]/80 backdrop-blur-[2px]"></div>
                </div>

                <div className="container mx-auto max-w-7xl px-4 z-10 relative" suppressHydrationWarning>
                    <div className="max-w-3xl animate-fade-in-up text-center lg:text-left mx-auto lg:mx-0">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Contactez <span className="text-[#F4B41A]">Guinex</span>
                        </h1>
                        <p className="text-white/90 text-sm sm:text-base md:text-xl lg:text-2xl font-light leading-relaxed mb-4">
                            Une question&nbsp;? Un besoin de livraison&nbsp;? Une demande de partenariat&nbsp;?
                        </p>
                        <p className="text-white/80 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Notre équipe est disponible pour vous répondre rapidement et organiser vos livraisons dans les meilleures conditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Side by Side */}
            <section className="py-20 md:py-32 bg-white relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Left Column: Info & Trust */}
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#143D59] mb-8 text-center lg:text-left">
                                    Nos <span className="text-[#F4B41A]">Coordonnées</span>
                                </h2>
                                <div className="space-y-6">
                                    {/* WhatsApp Card */}
                                    <a
                                        href="https://api.whatsapp.com/message/YSOEJ42GH54ED1"
                                        target="_blank"
                                        className="group flex flex-col sm:flex-row items-center p-4 sm:p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-[#F4B41A] hover:bg-white hover:shadow-xl transition-all duration-300 text-center sm:text-left"
                                    >
                                        <div className="bg-[#F4B41A]/10 p-3 sm:p-4 rounded-xl group-hover:bg-[#F4B41A] transition-colors duration-300 flex-shrink-0 mb-4 sm:mb-0">
                                            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#143D59]" />
                                        </div>
                                        <div className="sm:ml-6 min-w-0">
                                            <p className="text-[10px] sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">WhatsApp & Téléphone</p>
                                            <p className="text-lg sm:text-xl font-bold text-[#143D59]">610 29 20 29</p>
                                        </div>
                                    </a>

                                    {/* Email Card */}
                                    <div className="group flex flex-col sm:flex-row items-center p-4 sm:p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-[#143D59] hover:bg-white hover:shadow-xl transition-all duration-300 text-center sm:text-left">
                                        <div className="bg-[#143D59]/10 p-3 sm:p-4 rounded-xl group-hover:bg-[#143D59] transition-colors duration-300 flex-shrink-0 mb-4 sm:mb-0">
                                            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#143D59] group-hover:text-white" />
                                        </div>
                                        <div className="sm:ml-6 min-w-0 flex-1">
                                            <p className="text-[10px] sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">Email</p>
                                            <p className="text-base sm:text-xl font-bold text-[#143D59] break-all">guinex.contact@gmail.com</p>
                                        </div>
                                    </div>

                                    {/* Location Card */}
                                    <div className="group flex flex-col sm:flex-row items-center p-4 sm:p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-[#143D59] hover:bg-white hover:shadow-xl transition-all duration-300 text-center sm:text-left">
                                        <div className="bg-[#143D59]/10 p-3 sm:p-4 rounded-xl group-hover:bg-[#143D59] transition-colors duration-300 flex-shrink-0 mb-4 sm:mb-0">
                                            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#143D59] group-hover:text-white" />
                                        </div>
                                        <div className="sm:ml-6 min-w-0">
                                            <p className="text-[10px] sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">Zone d'intervention</p>
                                            <p className="text-lg sm:text-xl font-bold text-[#143D59]">Conakry, Guinée</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Features */}
                            <div className="bg-[#143D59] p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
                                <h3 className="text-2xl font-bold text-white mb-8 relative z-10 text-center lg:text-left">Pourquoi nous choisir ?</h3>
                                <div className="max-w-max mx-auto lg:mx-0 space-y-6 relative z-10">
                                    <div className="flex items-center space-x-4 group/item">
                                        <div className="w-10 h-10 bg-[#F4B41A] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-500/20 group-hover/item:scale-110 transition-transform">
                                            <Clock className="w-5 h-5 text-[#143D59]" />
                                        </div>
                                        <span className="text-white text-lg font-semibold tracking-wide">Réponse ultra-rapide</span>
                                    </div>
                                    <div className="flex items-center space-x-4 group/item">
                                        <div className="w-10 h-10 bg-[#F4B41A] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-500/20 group-hover/item:scale-110 transition-transform">
                                            <ShieldCheck className="w-5 h-5 text-[#143D59]" />
                                        </div>
                                        <span className="text-white text-lg font-semibold tracking-wide">Service 100% sécurisé</span>
                                    </div>
                                    <div className="flex items-center space-x-4 group/item">
                                        <div className="w-10 h-10 bg-[#F4B41A] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-500/20 group-hover/item:scale-110 transition-transform">
                                            <MessageSquare className="w-5 h-5 text-[#143D59]" />
                                        </div>
                                        <span className="text-white text-lg font-semibold tracking-wide">Support personnalisé</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Interactive Form */}
                        <div className="lg:col-span-7">
                            <div className="relative z-10 text-center lg:text-left">
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#143D59] mb-8">
                                    Envoyez-nous un <span className="text-[#F4B41A]">message</span>
                                </h2>
                            </div>

                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
                                <div className="absolute -top-6 -right-6 text-gray-50 hidden md:block pointer-events-none select-none">
                                    <MessageSquare size={180} strokeWidth={1} />
                                </div>

                                <div className="relative z-10 text-center lg:text-left">
                                    <p className="text-gray-500 mb-10 text-lg max-w-xl mx-auto lg:mx-0">Remplissez ce formulaire et nous reviendrons vers vous en moins de 24h.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#143D59] ml-1">Nom complet</label>
                                            <input
                                                type="text"
                                                name="nom"
                                                required
                                                value={formData.nom}
                                                onChange={handleInputChange}
                                                placeholder="Fils Presley"
                                                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-50 focus:border-[#F4B41A] outline-none bg-gray-50/50 transition-all text-[#143D59] placeholder:text-gray-300 font-medium"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#143D59] ml-1">Téléphone</label>
                                            <input
                                                type="tel"
                                                name="telephone"
                                                required
                                                value={formData.telephone}
                                                onChange={handleInputChange}
                                                placeholder="6xx xx xx xx"
                                                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-50 focus:border-[#F4B41A] outline-none bg-gray-50/50 transition-all text-[#143D59] placeholder:text-gray-300 font-medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#143D59] ml-1">Adresse Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="votre@email.com"
                                            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-50 focus:border-[#F4B41A] outline-none bg-gray-50/50 transition-all text-[#143D59] placeholder:text-gray-300 font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#143D59] ml-1">Votre message</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Comment pouvons-nous vous aider ?"
                                            rows={5}
                                            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-50 focus:border-[#F4B41A] outline-none bg-gray-50/50 transition-all text-[#143D59] placeholder:text-gray-300 font-medium resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#F4B41A] hover:bg-[#e2a618] text-[#143D59] font-bold py-3.5 md:py-4 px-8 rounded-full transition-all duration-300 text-base md:text-lg shadow-xl shadow-yellow-900/10 flex items-center justify-center gap-3 disabled:opacity-70 group"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                                Envoi en cours...
                                            </>
                                        ) : (
                                            <>
                                                Envoyer ma demande
                                                <MessageSquare className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
