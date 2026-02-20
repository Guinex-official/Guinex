"use client";

import Header from "@/components/Header";
// Assuming Footer component exists, if not I will need to check or mock it.
// Checking page.tsx, it imports Footer from "@/components/Footer".
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#143D59]/5 blur-[120px] rounded-full z-0"></div>
            <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-[#F4B41A]/5 blur-[100px] rounded-full z-0"></div>
            <div className="absolute top-[40%] right-[10%] w-[20%] h-[20%] bg-[#143D59]/3 blur-[80px] rounded-full z-0"></div>

            <Header />

            <div className="flex-grow container mx-auto max-w-7xl px-4 py-8 md:py-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 items-start">
                    {/* Left Column: Description Text */}
                    <div className="lg:col-span-7 space-y-8 text-gray-800 text-lg leading-relaxed text-center lg:text-left">
                        {/* Main Title */}
                        <div className="relative inline-block mb-4 md:mb-8">
                            <h1 className="text-4xl md:text-6xl font-black text-[#143D59] text-center lg:text-left tracking-tight">
                                À propos de <span className="text-[#F4B41A]">Guinex</span>
                            </h1>
                            <div className="absolute -bottom-2 left-0 w-24 h-1.5 bg-[#F4B41A] rounded-full hidden lg:block"></div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg md:text-xl font-medium text-[#143D59]/90">
                                Guinex est une société guinéenne spécialisée dans la livraison rapide, fiable et professionnelle en milieu urbain.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Nous accompagnons les entreprises et les particuliers en leur proposant des solutions logistiques adaptées à leurs besoins quotidiens : livraison de repas, colis, documents administratifs, courses urgentes et service coursier.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Face aux défis de mobilité et de rapidité en ville, Guinex a été pensé comme un service de proximité, capable d'assurer des livraisons efficaces, sécurisées et ponctuelles, notamment à Conakry.
                            </p>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Notre objectif est simple : faciliter le quotidien de nos clients en leur faisant gagner du temps grâce à un service organisé, réactif et digne de confiance.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Cards */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Mission Card */}
                        <div className="flex flex-col group animate-reveal-right shadow-mission-glow transition-all duration-500 rounded-3xl" style={{ animationDelay: '0.2s' }}>
                            <div className="bg-[#143D59] py-4 px-8 text-center rounded-t-3xl shadow-lg w-full z-10 relative">
                                <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
                                    Notre mission
                                </h2>
                            </div>
                            <div className="bg-white/40 backdrop-blur-md rounded-b-3xl shadow-xl p-6 md:p-10 border border-[#143D59]/10 border-t-0 w-full group-hover:bg-white/60 transition-colors">
                                <p className="text-[#143D59] text-center font-medium leading-relaxed text-base md:text-lg">
                                    Offrir en Guinée un service de livraison moderne et structuré, qui répond aux exigences des entreprises et aux besoins des particuliers, avec un haut niveau de professionnalisme.
                                </p>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="flex flex-col group animate-reveal-left shadow-vision-glow transition-all duration-500 rounded-3xl" style={{ animationDelay: '0.4s' }}>
                            <div className="bg-[#F4B41A] py-4 px-8 text-center rounded-t-3xl shadow-lg w-full z-10 relative">
                                <h2 className="text-xl md:text-2xl font-bold text-[#143D59] uppercase tracking-wider">
                                    Notre vision
                                </h2>
                            </div>
                            <div className="bg-white/40 backdrop-blur-md rounded-b-3xl shadow-xl p-6 md:p-10 border border-[#F4B41A]/20 border-t-0 w-full group-hover:bg-white/60 transition-colors">
                                <p className="text-[#143D59] text-center font-medium leading-relaxed text-base md:text-lg">
                                    Devenir une référence nationale dans le domaine de la livraison et de la logistique urbaine, en apportant des solutions innovantes adaptées au contexte local.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pourquoi Guinex Section */}
                <div className="mb-16 md:mb-24 px-4">
                    <h2 className="text-2xl md:text-4xl font-black text-[#143D59] mb-8 md:mb-12 text-center">
                        Pourquoi choisir <span className="text-[#F4B41A]">Guinex ?</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {[
                            "Un service pensé pour le contexte guinéen",
                            "Des livraisons rapides et ponctuelles",
                            "La sécurité et la discrétion à chaque étape",
                            "Un partenaire fiable pour les entreprises",
                            "Une solution pratique pour les particuliers"
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#F4B41A]/50 hover:translate-y-[-5px] transition-all duration-300 animate-fade-in-up cursor-default group"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="flex-shrink-0">
                                    <div className="bg-[#F4B41A]/20 rounded-full text-[#143D59] p-1 group-hover:bg-[#F4B41A] transition-colors duration-300">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                </div>
                                <span className="font-bold text-[#143D59] text-sm md:text-base leading-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Text */}
                <div className="max-w-4xl mx-auto text-center px-4 mb-8 md:mb-12">
                    <p className="text-xl md:text-3xl text-[#143D59] font-black leading-tight">
                        Guinex développe progressivement sa plateforme digitale afin de simplifier les commandes et le suivi des livraisons pour ses partenaires et clients.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
