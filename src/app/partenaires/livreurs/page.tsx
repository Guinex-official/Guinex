"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, Loader2, PartyPopper, Banknote, Clock, Trophy, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LivreursPage() {
    // Form State
    const [formData, setFormData] = useState({
        nom: "",
        telephone: "",
        quartier: "",
        hasMoto: true,
        hasPermis: true,
        disponibilite: "Temps plein",
    });

    const [files, setFiles] = useState<{ identity: File | null; permit: File | null }>({
        identity: null,
        permit: null,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Refs for hidden file inputs
    const identityInputRef = useRef<HTMLInputElement>(null);
    const permitInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'identity' | 'permit') => {
        if (e.target.files && e.target.files[0]) {
            setFiles(prev => ({ ...prev, [type]: e.target.files![0] }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = new FormData();
        data.append('nom', formData.nom);
        data.append('telephone', formData.telephone);
        data.append('quartier', formData.quartier);
        data.append('hasMoto', String(formData.hasMoto));
        data.append('hasPermis', String(formData.hasPermis));
        data.append('disponibilite', formData.disponibilite);

        if (files.identity) data.append('identity', files.identity);
        if (files.permit) data.append('permit', files.permit);

        try {
            const response = await fetch('/api/livreur', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                setIsSuccess(true);
                // ... (reset state logic)
            } else {
                const errorData = await response.json();
                alert(`Erreur: ${errorData.message || "Une erreur est survenue"} (${errorData.error || "détail inconnu"})`);
            }
        } catch (error) {
            console.error("Erreur:", error);
            alert("Une erreur est survenue lors de l'envoi de la candidature.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <main className="flex flex-col min-h-screen bg-white">
                <Header />
                <section className="flex-grow flex flex-col items-center justify-center py-24 px-4 text-center">
                    <div className="bg-[#F1F4F7] p-12 md:p-20 rounded-3xl shadow-xl flex flex-col items-center max-w-2xl w-full border border-gray-100">
                        <div className="bg-[#25D366] p-6 rounded-full mb-8 shadow-lg shadow-green-100 animate-bounce">
                            <PartyPopper className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-[#143D59] mb-6">
                            Candidature envoyée !
                        </h1>
                        <p className="text-[#143D59] text-xl font-medium mb-10 opacity-80 leading-relaxed">
                            Merci {formData.nom}. Votre demande a été reçue avec succès. Notre équipe vous contactera très prochainement par WhatsApp ou appel.
                        </p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="bg-[#F4B41A] text-[#143D59] font-extrabold py-5 px-12 rounded-xl shadow-lg hover:bg-yellow-500 transition-all text-xl uppercase tracking-widest"
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
        <main className="flex flex-col min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full min-h-[500px] md:min-h-[700px] flex flex-col items-center justify-center pt-16 pb-12 md:pt-24 md:pb-32 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services/backgroundlivreur.png"
                        alt="Devenir livreur Guinex"
                        fill
                        className="object-cover"
                        style={{ objectFit: 'cover' }}
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-[#143D59]/60 backdrop-blur-sm"></div>
                </div>

                <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center">
                    {/* Hero Title with white outline/glow for readability */}
                    <h1
                        className="text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white text-center leading-[1.1] mb-8 px-2"
                        style={{
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                        }}
                    >
                        Devenez livreur Guinex
                    </h1>

                    <p className="text-white text-center text-lg md:text-2xl font-bold max-w-2xl mb-12 px-4 leading-relaxed tracking-tight">
                        Rejoignez une équipe professionnelle et participez au développement d'un service de livraison moderne en Guinée.
                    </p>

                    {/* Hero CTA */}
                    <button
                        onClick={() => document.getElementById('formulaire-candidature')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#F4B41A] text-[#143D59] font-extrabold py-3.5 px-10 md:px-14 rounded-lg shadow-lg hover:bg-yellow-500 transition-all text-sm md:text-lg transform active:scale-95"
                    >
                        Devenir livreur Guinex
                    </button>
                </div>
            </section>

            {/* Section: Pourquoi devenir livreur Guinex */}
            <section className="w-full py-16 md:py-24 bg-[#f7f9fc] flex flex-col items-center">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-14 px-4 text-center">
                    <span className="text-[#F4B41A] font-bold text-sm tracking-[0.3em] uppercase mb-3">Vos avantages</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#143D59]">
                        Pourquoi devenir <span className="text-[#F4B41A]">livreur Guinex</span>
                    </h2>
                    <div className="mt-4 w-16 h-1 rounded-full bg-[#F4B41A]"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4 md:px-8">
                    {[
                        {
                            icon: <Banknote className="w-6 h-6 text-[#143D59]" fill="#143D59" fillOpacity="0.1" />,
                            title: "Revenus réguliers",
                            text: "Gagnez de l'argent à chaque course, avec des paiements fiables et réguliers.",
                            bgColor: "bg-[#143D59]/10",
                            hoverBg: "group-hover:bg-[#143D59]/20"
                        },
                        {
                            icon: <Clock className="w-6 h-6 text-[#F4B41A]" />,
                            title: "Horaires flexibles",
                            text: "Choisissez vos horaires et travaillez à votre propre rythme, en toute liberté.",
                            bgColor: "bg-[#F4B41A]/10",
                            hoverBg: "group-hover:bg-[#F4B41A]/20"
                        },
                        {
                            icon: <Trophy className="w-6 h-6 text-[#143D59]" />,
                            title: "Organisation pro",
                            text: "Travaillez avec une équipe sérieuse, structurée et toujours disponible.",
                            bgColor: "bg-[#143D59]/10",
                            hoverBg: "group-hover:bg-[#143D59]/20"
                        },
                        {
                            icon: <ShieldCheck className="w-6 h-6 text-[#F4B41A]" fill="#F4B41A" fillOpacity="0.1" />,
                            title: "Respect & sécurité",
                            text: "Rejoignez une entreprise qui valorise votre sécurité et votre bien-être.",
                            bgColor: "bg-[#F4B41A]/10",
                            hoverBg: "group-hover:bg-[#F4B41A]/20"
                        }
                    ].map((benefit, i) => (
                        <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className={`w-12 h-12 ${benefit.bgColor} rounded-lg flex items-center justify-center mb-5 ${benefit.hoverBg} transition-colors`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-bold text-[#143D59] mb-2">{benefit.title}</h3>
                            <p className="text-[#143D59]/60 text-sm font-medium leading-relaxed">{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section: Conditions and Form */}

            <section id="formulaire-candidature" className="w-full py-16 md:py-24 bg-white flex flex-col items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl px-4 md:px-8">

                    {/* Left: Conditions */}
                    <div className="flex flex-col pt-8 items-center lg:items-start">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#143D59] mb-10 text-center lg:text-left whitespace-nowrap">
                            Conditions pour postuler
                        </h2>

                        <ul className="space-y-6 w-full max-w-sm lg:max-w-none">
                            {[
                                "Avoir un permis de conduire",
                                "Avoir un téléphone Android",
                                "Bien connaître la ville",
                                "Pièce d'identité valide",
                                "Savoir lire et utiliser WhatsApp / Google Maps"
                            ].map((condition, index) => (
                                <li key={index} className="flex items-start lg:items-center gap-4 justify-start lg:justify-start">
                                    <div className="bg-[#25D366] rounded-md p-1 mt-1 lg:mt-0 shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-[#143D59] font-bold text-lg md:text-xl text-left">
                                        {condition}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-[#F1F4F7]/50 rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col gap-8 relative overflow-hidden">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#143D59] text-center mb-2 whitespace-nowrap">
                            Formulaire de candidature
                        </h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            {/* Text Inputs */}
                            <input
                                type="text"
                                name="nom"
                                required
                                value={formData.nom}
                                onChange={handleInputChange}
                                placeholder="Nom et prénom"
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F4B41A]/50 shadow-sm bg-white text-black placeholder-gray-500"
                            />
                            <input
                                type="tel"
                                name="telephone"
                                required
                                value={formData.telephone}
                                onChange={handleInputChange}
                                placeholder="Numéro de téléphone(whatsapp)"
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F4B41A]/50 shadow-sm bg-white text-black placeholder-gray-500"
                            />
                            <input
                                type="text"
                                name="quartier"
                                required
                                value={formData.quartier}
                                onChange={handleInputChange}
                                placeholder="Quartier de résidence"
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F4B41A]/50 shadow-sm bg-white text-black placeholder-gray-500"
                            />

                            {/* Moto Section */}
                            <div className="flex flex-col gap-4 pt-2">
                                <div className="flex items-center justify-between text-[#143D59] font-semibold text-lg">
                                    <span>Avez-vous une moto?</span>
                                    <div className="flex items-center gap-6">
                                        <button
                                            type="button"
                                            onClick={() => setFormData(p => ({ ...p, hasMoto: true }))}
                                            className="flex items-center gap-2 cursor-pointer outline-none"
                                        >
                                            <div className={`w-5 h-5 rounded-full border-2 border-[#F4B41A] ${formData.hasMoto ? 'bg-[#F4B41A]' : 'bg-transparent'} flex items-center justify-center transition-colors`}>
                                                {formData.hasMoto && <div className="w-2 h-2 rounded-full bg-black/60"></div>}
                                            </div>
                                            <span>Oui</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData(p => ({ ...p, hasMoto: false }))}
                                            className="flex items-center gap-2 cursor-pointer outline-none"
                                        >
                                            <div className={`w-5 h-5 rounded-full border-2 ${!formData.hasMoto ? 'border-[#F4B41A] bg-[#F4B41A]' : 'border-gray-400 bg-transparent'} flex items-center justify-center transition-colors`}>
                                                {!formData.hasMoto && <div className="w-2 h-2 rounded-full bg-black/60"></div>}
                                            </div>
                                            <span>Non</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Permis Section */}
                                <div className="flex items-center justify-between text-[#143D59] font-semibold text-lg">
                                    <span>Avez vous un permis?</span>
                                    <div className="flex items-center gap-6">
                                        <button
                                            type="button"
                                            onClick={() => setFormData(p => ({ ...p, hasPermis: true }))}
                                            className="flex items-center gap-2 cursor-pointer outline-none"
                                        >
                                            <div className={`w-5 h-5 rounded-full border-2 border-[#F4B41A] ${formData.hasPermis ? 'bg-[#F4B41A]' : 'bg-transparent'} flex items-center justify-center transition-colors`}>
                                                {formData.hasPermis && <div className="w-2 h-2 rounded-full bg-black/60"></div>}
                                            </div>
                                            <span>Oui</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData(p => ({ ...p, hasPermis: false }))}
                                            className="flex items-center gap-2 cursor-pointer outline-none"
                                        >
                                            <div className={`w-5 h-5 rounded-full border-2 ${!formData.hasPermis ? 'border-[#F4B41A] bg-[#F4B41A]' : 'border-gray-400 bg-transparent'} flex items-center justify-center transition-colors`}>
                                                {!formData.hasPermis && <div className="w-2 h-2 rounded-full bg-black/60"></div>}
                                            </div>
                                            <span>Non</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Availability Toggle */}
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-[#143D59] font-semibold text-lg">Disponibilité</span>
                                <div className="flex items-center bg-gray-200/50 rounded-xl p-1 gap-1">
                                    <button
                                        type="button"
                                        onClick={() => setFormData(p => ({ ...p, disponibilite: "Temps plein" }))}
                                        className={`text-sm md:text-base px-5 py-2 rounded-lg font-bold transition-all ${formData.disponibilite === "Temps plein" ? "bg-[#143D59] text-white" : "text-[#143D59] hover:bg-gray-300/30"}`}
                                    >
                                        Temps plein
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData(p => ({ ...p, disponibilite: "Temps partiel" }))}
                                        className={`text-sm md:text-base px-5 py-2 rounded-lg font-bold transition-all ${formData.disponibilite === "Temps partiel" ? "bg-[#F4B41A] text-[#143D59]" : "text-[#143D59] hover:bg-gray-300/30"}`}
                                    >
                                        Temps partiel
                                    </button>
                                </div>
                            </div>

                            {/* File Uploads */}
                            <div className="flex flex-col gap-4 pt-2">
                                <input
                                    type="file"
                                    ref={identityInputRef}
                                    className="hidden"
                                    onChange={(e) => handleFileChange(e, 'identity')}
                                    accept=".pdf,.doc,.docx,image/*"
                                />
                                <div
                                    onClick={() => identityInputRef.current?.click()}
                                    className="flex items-center rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white cursor-pointer group hover:border-[#F4B41A]/50 transition-colors"
                                >
                                    <div className="bg-[#143D59] text-white px-5 py-4 font-bold text-sm md:text-base whitespace-nowrap group-hover:bg-[#1c4d6f] transition-colors">
                                        Pièce d'identité
                                    </div>
                                    <span className={`px-5 text-sm md:text-base italic truncate ${files.identity ? 'text-[#143D59] font-medium' : 'text-gray-400'}`}>
                                        {files.identity ? files.identity.name : "Aucun fichier choisi (Pièce d'identité)"}
                                    </span>
                                </div>

                                <input
                                    type="file"
                                    ref={permitInputRef}
                                    className="hidden"
                                    onChange={(e) => handleFileChange(e, 'permit')}
                                    accept="image/*,.pdf"
                                />
                                <div
                                    onClick={() => permitInputRef.current?.click()}
                                    className="flex items-center rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white cursor-pointer group hover:border-[#F4B41A]/50 transition-colors"
                                >
                                    <div className="bg-[#F4B41A] text-[#143D59] px-5 py-4 font-bold text-sm md:text-base whitespace-nowrap group-hover:bg-yellow-500 transition-colors">
                                        Permis de conduire
                                    </div>
                                    <span className={`px-5 text-sm md:text-base italic truncate ${files.permit ? 'text-[#143D59] font-medium' : 'text-gray-400'}`}>
                                        {files.permit ? files.permit.name : "Aucun fichier choisi (Permis)"}
                                    </span>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#F4B41A] text-[#143D59] font-extrabold py-3.5 md:py-4 rounded-xl shadow-lg hover:bg-yellow-500 transition-all text-base md:text-lg mt-6 uppercase tracking-wider flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                        Envoi en cours...
                                    </>
                                ) : (
                                    "Envoyez ma candidature"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
