"use client";

import Header from "@/components/Header";
// Assuming Footer component exists, if not I will need to check or mock it.
// Checking page.tsx, it imports Footer from "@/components/Footer".
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Header />

            <div className="flex-grow container mx-auto max-w-7xl px-4 py-8 md:py-12">


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
                    {/* Left Column: Description Text */}
                    <div className="lg:col-span-7 space-y-6 text-gray-800 text-lg leading-relaxed text-center lg:text-left">
                        {/* Main Title */}
                        <h1 className="text-3xl md:text-5xl font-extrabold text-[#143D59] mb-6 md:mb-12 text-center lg:text-left">
                            À propos de Guinex
                        </h1>
                        <p className="text-base md:text-lg">
                            Guinex est une société guinéenne spécialisée dans la livraison rapide, fiable et professionnelle en milieu urbain.
                        </p>
                        <p className="text-base md:text-lg">
                            Nous accompagnons les entreprises et les particuliers en leur proposant des solutions logistiques adaptées à leurs besoins quotidiens : livraison de repas, colis, documents administratifs, courses urgentes et service coursier.
                        </p>
                        <p className="text-base md:text-lg">
                            Face aux défis de mobilité et de rapidité en ville, Guinex a été pensé comme un service de proximité, capable d'assurer des livraisons efficaces, sécurisées et ponctuelles, notamment à Conakry.
                        </p>
                        <p className="text-base md:text-lg">
                            Notre objectif est simple : faciliter le quotidien de nos clients en leur faisant gagner du temps grâce à un service organisé, réactif et digne de confiance.
                        </p>
                    </div>

                    {/* Right Column: Cards */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Mission Card */}
                        <div className="flex flex-col">
                            <div className="bg-[#D1D9E1] py-3 px-6 text-center rounded-t-2xl shadow-sm w-full z-10 relative">
                                <h2 className="text-lg md:text-xl font-bold text-[#143D59]">
                                    Notre mission
                                </h2>
                            </div>
                            <div className="bg-[#eff1f3] rounded-b-2xl shadow-sm hover:shadow-md transition-shadow p-5 md:p-8 border border-gray-100 border-t-0 w-full">
                                <p className="text-gray-800 text-center leading-relaxed text-sm md:text-base">
                                    Offrir en Guinée un service de livraison moderne et structuré, qui répond aux exigences des entreprises et aux besoins des particuliers, avec un haut niveau de professionnalisme.
                                </p>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="flex flex-col">
                            <div className="bg-[#D1D9E1] py-3 px-6 text-center rounded-t-2xl shadow-sm w-full z-10 relative">
                                <h2 className="text-lg md:text-xl font-bold text-[#143D59]">
                                    Notre vision
                                </h2>
                            </div>
                            <div className="bg-[#eff1f3] rounded-b-2xl shadow-sm hover:shadow-md transition-shadow p-5 md:p-8 border border-gray-100 border-t-0 w-full">
                                <p className="text-gray-800 text-center leading-relaxed text-sm md:text-base">
                                    Devenir une présentation nationale dans le domaine de la livraison et de la logistique urbaine, en apportant des solutions innovantes adaptées au contexte local.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pourquoi Guinex Section */}
                <div className="bg-gray-50/50 rounded-3xl p-6 md:p-12 mb-10 md:mb-16 shadow-sm border border-gray-100 max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#143D59] mb-8 text-center">
                        Pourquoi choisir Guinex ?
                    </h2>
                    <ul className="space-y-4 md:space-y-3 max-w-2xl mx-auto">
                        {[
                            "Un service pensé pour le contexte guinéen",
                            "Des livraisons rapides et ponctuelles",
                            "La sécurité et la discrétion à chaque étape",
                            "Un partenaire fiable pour les entreprises",
                            "Une solution pratique pour les particuliers"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start space-x-3 text-base md:text-lg text-gray-800">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="bg-[#22C55E] rounded text-white p-0.5 shadow-sm">
                                        <Check size={16} strokeWidth={4} />
                                    </div>
                                </div>
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer Text */}
                <div className="max-w-4xl mx-auto text-center px-4">
                    <p className="text-lg md:text-2xl text-[#143D59] font-bold leading-relaxed opacity-90">
                        Guinex développe progressivement sa plateforme digitale afin de simplifier les commandes et le suivi des livraisons pour ses partenaires et clients.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
