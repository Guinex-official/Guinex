"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, Loader2, PartyPopper } from "lucide-react";
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

    const [files, setFiles] = useState<{ cv: File | null; id: File | null }>({
        cv: null,
        id: null,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Refs for hidden file inputs
    const cvInputRef = useRef<HTMLInputElement>(null);
    const idInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'cv' | 'id') => {
        if (e.target.files && e.target.files[0]) {
            setFiles(prev => ({ ...prev, [type]: e.target.files![0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 2000);
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
                    />
                    <div className="absolute inset-0 bg-white/50"></div>
                </div>

                <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center">
                    {/* Hero Title with white outline/glow for readability */}
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white text-center leading-tight mb-8 px-2"
                        style={{
                            filter: 'drop-shadow(2px 2px 0 #F4B41A) drop-shadow(-2px -2px 0 #F4B41A) drop-shadow(2px -2px 0 #F4B41A) drop-shadow(-2px 2px 0 #F4B41A)'
                        }}
                    >
                        Devenez livreur Guinex
                    </h1>

                    <p className="text-[#143D59] text-center text-lg md:text-2xl font-bold max-w-2xl mb-12 px-4 leading-relaxed tracking-tight">
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
            <section className="w-full py-16 md:py-24 bg-white flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#143D59] text-center mb-16">
                    Pourquoi devenir livreur Guinex
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4 md:px-8">
                    {[
                        { title: "Revenus réguliers", text: "Gagnez de l'argent à chaque course" },
                        { title: "Horaires flexibles", text: "choisissez vos horaires et travaillez à votre rythme" },
                        { title: "Organisation professionnelle", text: "Travaillez avec une équipe serieuse et organisée" },
                        { title: "Respect et sécurité", text: "Rejoignez une entreprise qui valorise votre sécurité et votre bien être" }
                    ].map((benefit, i) => (
                        <div key={i} className="flex flex-col group">
                            {/* Card Header matching Services style (without icon) */}
                            <div className="bg-[#D1D9E1] py-4 px-6 text-center flex items-center justify-center rounded-t-2xl shadow-md w-full z-10 relative">
                                <h3 className="text-base font-bold text-[#143D59] leading-tight line-clamp-1">{benefit.title}</h3>
                            </div>
                            {/* Card Body matching Services style */}
                            <div className="bg-[#eff1f3] rounded-b-2xl shadow-sm group-hover:shadow-md transition-shadow p-8 flex-grow border border-gray-100 border-t-0 w-full flex items-center justify-center min-h-[140px]">
                                <p className="text-[#143D59] text-center font-medium text-sm md:text-base leading-relaxed">
                                    {benefit.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section: Conditions and Form */}
            <section id="formulaire-candidature" className="w-full py-16 md:py-24 bg-white flex flex-col items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl px-4 md:px-8">

                    {/* Left: Conditions */}
                    <div className="flex flex-col pt-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#143D59] mb-10">
                            Conditions pour postuler
                        </h2>

                        <ul className="space-y-6">
                            {[
                                "Avoir un permis de conduire",
                                "Avoir un téléphone Android",
                                "Bien connaître la ville",
                                "Pièce d'identité valide",
                                "Savoir lire et utiliser WhatsApp / Google Maps"
                            ].map((condition, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="bg-[#25D366] rounded-md p-1 mt-1 shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-[#143D59] font-bold text-lg md:text-xl">{condition}</span>
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
                                    ref={cvInputRef}
                                    className="hidden"
                                    onChange={(e) => handleFileChange(e, 'cv')}
                                    accept=".pdf,.doc,.docx"
                                />
                                <div
                                    onClick={() => cvInputRef.current?.click()}
                                    className="flex items-center rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white cursor-pointer group hover:border-[#F4B41A]/50 transition-colors"
                                >
                                    <div className="bg-[#143D59] text-white px-5 py-4 font-bold text-sm md:text-base whitespace-nowrap group-hover:bg-[#1c4d6f] transition-colors">
                                        Choisir un fichier
                                    </div>
                                    <span className={`px-5 text-sm md:text-base italic truncate ${files.cv ? 'text-[#143D59] font-medium' : 'text-gray-400'}`}>
                                        {files.cv ? files.cv.name : "Aucun fichier choisi (CV)"}
                                    </span>
                                </div>

                                <input
                                    type="file"
                                    ref={idInputRef}
                                    className="hidden"
                                    onChange={(e) => handleFileChange(e, 'id')}
                                    accept="image/*,.pdf"
                                />
                                <div
                                    onClick={() => idInputRef.current?.click()}
                                    className="flex items-center rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white cursor-pointer group hover:border-[#F4B41A]/50 transition-colors"
                                >
                                    <div className="bg-[#F4B41A] text-[#143D59] px-5 py-4 font-bold text-sm md:text-base whitespace-nowrap group-hover:bg-yellow-500 transition-colors">
                                        Choisir un fichier
                                    </div>
                                    <span className={`px-5 text-sm md:text-base italic truncate ${files.id ? 'text-[#143D59] font-medium' : 'text-gray-400'}`}>
                                        {files.id ? files.id.name : "Aucun fichier choisi (ID)"}
                                    </span>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#F4B41A] text-[#143D59] font-extrabold py-5 rounded-xl shadow-lg hover:bg-yellow-500 transition-all text-xl md:text-2xl mt-6 uppercase tracking-wider flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
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
        </main>
    );
}
