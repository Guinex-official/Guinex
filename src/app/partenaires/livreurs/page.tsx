"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Wallet, Clock, Users, ShieldCheck, CheckCircle2, Loader2, PartyPopper } from "lucide-react";
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

        if (files.cv) data.append('cv', files.cv);
        if (files.id) data.append('id', files.id);

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
            <section className="w-full py-20 md:py-28 bg-[#eff1f3]/50 flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#143D59] text-center mb-16 tracking-tight">
                    Pourquoi devenir <span className="text-[#F4B41A]">livreur Guinex</span> ?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4 md:px-8">
                    {[
                        {
                            title: "Revenus réguliers",
                            text: "Gagnez de l'argent à chaque course effectuée en ville.",
                            icon: Wallet,
                            color: "bg-[#143D59]/10 text-[#143D59]"
                        },
                        {
                            title: "Horaires flexibles",
                            text: "Choisissez vos créneaux et travaillez à votre propre rythme.",
                            icon: Clock,
                            color: "bg-[#F4B41A]/10 text-[#F4B41A]"
                        },
                        {
                            title: "Equipe sérieuse",
                            text: "Rejoignez une organisation fiable et bien structurée.",
                            icon: Users,
                            color: "bg-[#143D59]/10 text-[#143D59]"
                        },
                        {
                            title: "Respect & Sécurité",
                            text: "Nous valorisons votre sécurité et votre bien-être au quotidien.",
                            icon: ShieldCheck,
                            color: "bg-[#F4B41A]/10 text-[#F4B41A]"
                        }
                    ].map((benefit, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group">
                            <div className={`p-4 rounded-2xl mb-6 transition-transform group-hover:scale-110 ${benefit.color}`}>
                                <benefit.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-extrabold text-[#143D59] mb-4">{benefit.title}</h3>
                            <p className="text-[#143D59]/70 font-medium leading-relaxed">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section: Conditions and Form (Parcours Express) */}
            <section id="formulaire-candidature" className="w-full py-14 bg-white flex flex-col items-center">
                <div className="w-full max-w-6xl px-4 md:px-8">
                    <div className="flex flex-col items-center text-center mb-10">
                        <span className="text-[#F4B41A] font-bold text-sm tracking-[0.3em] uppercase mb-4">Rejoignez-nous</span>
                        <h2 className="text-4xl md:text-5xl font-black text-[#143D59] mb-4">
                            Votre <span className="text-[#F4B41A]">Parcours Express</span>
                        </h2>
                        <p className="text-gray-500 font-medium max-w-xl">
                            Devenez partenaire en quelques minutes. Vérifiez vos prérequis et remplissez votre dossier.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left: Interactive Checklist (Prêt à démarrer ?) */}
                        <div className="lg:col-span-5 flex flex-col">
                            <div className="bg-[#143D59] rounded-[2rem] p-6 md:p-8 shadow-2xl relative overflow-hidden group">
                                {/* Decorative circle */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full transition-transform group-hover:scale-110 duration-700"></div>

                                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-5 relative z-10">
                                    Prêt à <span className="text-[#F4B41A]">démarrer</span> ?
                                </h3>

                                <ul className="space-y-4 relative z-10">
                                    {[
                                        { title: "Permis de conduire", icon: "🪪", desc: "Valide pour la conduite de moto." },
                                        { title: "Téléphone Android", icon: "📱", desc: "Pour recevoir vos commandes via l'app." },
                                        { title: "Connaissance de Conakry", icon: "🗺️", desc: "Savoir se repérer dans les quartiers." },
                                        { title: "Pièce d'identité", icon: "🆔", desc: "Carte d'identité ou passeport." },
                                        { title: "Maitrise digitale", icon: "💬", desc: "Utiliser WhatsApp et Google Maps." }
                                    ].map((item, index) => (
                                        <li key={index} className="flex gap-3 items-center">
                                            <div className="bg-white/10 w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 border border-white/10">
                                                {item.icon}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-white font-bold text-sm">{item.title}</span>
                                                <span className="text-white/60 text-xs">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#F4B41A] flex items-center justify-center animate-pulse">
                                        <CheckCircle2 className="w-6 h-6 text-[#143D59]" />
                                    </div>
                                    <p className="text-white/80 font-medium text-sm">
                                        Si vous cochez tout, vous êtes <br /> <span className="text-[#F4B41A] font-bold">le partenaire idéal !</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Guided Form (Parcours Express) */}
                        <div className="lg:col-span-7">
                            <div className="bg-[#eff1f3]/50 rounded-[2rem] p-6 md:p-8 border border-gray-100 shadow-xl">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    {/* Phase 1: Votre Profil */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="w-8 h-8 rounded-full bg-[#F4B41A] text-[#143D59] flex items-center justify-center font-black text-sm">1</div>
                                            <h4 className="text-base font-extrabold text-[#143D59] uppercase tracking-wider">Votre Profil</h4>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-xs font-black text-[#143D59]/60 uppercase ml-4">Nom Complet</label>
                                                <input
                                                    type="text"
                                                    name="nom"
                                                    required
                                                    value={formData.nom}
                                                    onChange={handleInputChange}
                                                    placeholder="Ex: Amadou Diallo"
                                                    className="w-full p-3 rounded-xl border-2 border-transparent focus:border-[#F4B41A] focus:outline-none shadow-sm bg-white text-[#143D59] font-bold transition-all text-sm"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-xs font-black text-[#143D59]/60 uppercase ml-4">Téléphone (WhatsApp)</label>
                                                <input
                                                    type="tel"
                                                    name="telephone"
                                                    required
                                                    value={formData.telephone}
                                                    onChange={handleInputChange}
                                                    placeholder="6XX XX XX XX"
                                                    className="w-full p-3 rounded-xl border-2 border-transparent focus:border-[#F4B41A] focus:outline-none shadow-sm bg-white text-[#143D59] font-bold transition-all text-sm"
                                                />
                                            </div>
                                            <div className="md:col-span-2 flex flex-col gap-2">
                                                <label className="text-xs font-black text-[#143D59]/60 uppercase ml-4">Quartier de résidence</label>
                                                <input
                                                    type="text"
                                                    name="quartier"
                                                    required
                                                    value={formData.quartier}
                                                    onChange={handleInputChange}
                                                    placeholder="Ex: Ratoma, Conakry"
                                                    className="w-full p-3 rounded-xl border-2 border-transparent focus:border-[#F4B41A] focus:outline-none shadow-sm bg-white text-[#143D59] font-bold transition-all text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phase 2: Votre Dossier */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="w-8 h-8 rounded-full bg-[#F4B41A] text-[#143D59] flex items-center justify-center font-black text-sm">2</div>
                                            <h4 className="text-base font-extrabold text-[#143D59] uppercase tracking-wider">Votre Dossier</h4>
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            {/* Questions interactives */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-3">
                                                    <span className="text-[#143D59] font-bold text-sm ml-2">Possédez-vous une moto ?</span>
                                                    <div className="flex bg-white rounded-2xl p-1 gap-1 border-2 border-transparent shadow-sm">
                                                        <button
                                                            type="button"
                                                            onClick={() => setFormData(p => ({ ...p, hasMoto: true }))}
                                                            className={`flex-1 py-2 rounded-xl font-black text-sm transition-all ${formData.hasMoto ? 'bg-[#143D59] text-white shadow-md' : 'text-[#143D59]/40 hover:bg-gray-50'}`}
                                                        >
                                                            OUI
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setFormData(p => ({ ...p, hasMoto: false }))}
                                                            className={`flex-1 py-2 rounded-xl font-black text-sm transition-all ${!formData.hasMoto ? 'bg-[#F4B41A] text-[#143D59] shadow-md' : 'text-[#143D59]/40 hover:bg-gray-50'}`}
                                                        >
                                                            NON
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <span className="text-[#143D59] font-bold text-sm ml-2">Avez-vous un permis ?</span>
                                                    <div className="flex bg-white rounded-2xl p-1 gap-1 border-2 border-transparent shadow-sm">
                                                        <button
                                                            type="button"
                                                            onClick={() => setFormData(p => ({ ...p, hasPermis: true }))}
                                                            className={`flex-1 py-2 rounded-xl font-black text-sm transition-all ${formData.hasPermis ? 'bg-[#143D59] text-white shadow-md' : 'text-[#143D59]/40 hover:bg-gray-50'}`}
                                                        >
                                                            OUI
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setFormData(p => ({ ...p, hasPermis: false }))}
                                                            className={`flex-1 py-2 rounded-xl font-black text-sm transition-all ${!formData.hasPermis ? 'bg-[#F4B41A] text-[#143D59] shadow-md' : 'text-[#143D59]/40 hover:bg-gray-50'}`}
                                                        >
                                                            NON
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Disponibilité */}
                                            <div className="flex flex-col gap-3">
                                                <span className="text-[#143D59] font-bold text-sm ml-2">Votre disponibilité</span>
                                                <div className="flex bg-white rounded-2xl p-1 gap-1 border-2 border-transparent shadow-sm">
                                                    <button
                                                        type="button"
                                                        onClick={() => setFormData(p => ({ ...p, disponibilite: "Temps plein" }))}
                                                        className={`flex-1 py-2 rounded-xl font-black text-sm transition-all ${formData.disponibilite === "Temps plein" ? 'bg-[#F4B41A] text-[#143D59] shadow-md' : 'text-[#143D59]/40 hover:bg-gray-50'}`}
                                                    >
                                                        TEMPS PLEIN
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setFormData(p => ({ ...p, disponibilite: "Temps partiel" }))}
                                                        className={`flex-1 py-2 rounded-xl font-black text-sm transition-all ${formData.disponibilite === "Temps partiel" ? 'bg-[#F4B41A] text-[#143D59] shadow-md' : 'text-[#143D59]/40 hover:bg-gray-50'}`}
                                                    >
                                                        TEMPS PARTIEL
                                                    </button>
                                                </div>
                                            </div>

                                            {/* File Uploads stylized */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs font-black text-[#143D59]/60 uppercase ml-2">CV (Optionnel)</label>
                                                    <div
                                                        onClick={() => cvInputRef.current?.click()}
                                                        className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-[#F4B41A] hover:bg-[#F4B41A]/5 transition-all group"
                                                    >
                                                        <input type="file" ref={cvInputRef} className="hidden" onChange={(e) => handleFileChange(e, 'cv')} accept=".pdf,.doc,.docx" />
                                                        <span className={`text-sm font-bold truncate max-w-full ${files.cv ? 'text-[#143D59]' : 'text-gray-400'}`}>
                                                            {files.cv ? files.cv.name : "Cliquez pour uploader"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs font-black text-[#143D59]/60 uppercase ml-2">Pièce d'identité (Recto)</label>
                                                    <div
                                                        onClick={() => idInputRef.current?.click()}
                                                        className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-[#F4B41A] hover:bg-[#F4B41A]/5 transition-all group"
                                                    >
                                                        <input type="file" ref={idInputRef} className="hidden" onChange={(e) => handleFileChange(e, 'id')} accept="image/*,.pdf" />
                                                        <span className={`text-sm font-bold truncate max-w-full ${files.id ? 'text-[#143D59]' : 'text-gray-400'}`}>
                                                            {files.id ? files.id.name : "Cliquez pour uploader"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Final Submit */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#F4B41A] text-[#143D59] font-black py-4 rounded-xl shadow-lg hover:bg-yellow-500 transition-all text-base uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-70 group"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                                Validation express...
                                            </>
                                        ) : (
                                            <>
                                                Envoyer ma candidature
                                                <CheckCircle2 className="w-6 h-6 text-[#143D59] group-hover:scale-110 transition-transform" />
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
