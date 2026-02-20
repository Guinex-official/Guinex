"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ui/ContactModal";

export default function EntreprisePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full min-h-[800px] flex flex-col items-center justify-start pt-10 pb-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services/backgrounderestaurant.png"
                        alt="Background Entreprise"
                        fill
                        className="object-cover"
                        style={{ objectFit: 'cover' }}
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/20 to-white/90"></div>
                </div>

                <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center">

                    {/* Hero Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#143D59] text-center leading-tight mt-12 md:mt-24 lg:mt-32 mb-12 md:mb-24 lg:mb-32 drop-shadow-sm max-w-4xl">
                        Gérez facilement toutes vos <br className="hidden md:block" />
                        <span className="text-[#143D59] drop-shadow-md">livraisons professionnelles</span>
                    </h1>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                        {/* Card 1 */}
                        <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg flex flex-col h-full transform transition-transform hover:-translate-y-1 border border-white/20">
                            <div className="bg-white/20 p-4 text-center border-b border-white/10">
                                <h3 className="text-lg font-bold text-[#143D59]">Commandez une course</h3>
                            </div>
                            <div className="p-8 flex items-center justify-center flex-grow">
                                <p className="text-[#143D59] text-center text-lg font-medium leading-relaxed">
                                    Envoyez vos documents <br /> et colis rapidement
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg flex flex-col h-full transform transition-transform hover:-translate-y-1 border border-white/20">
                            <div className="bg-white/30 p-4 text-center border-b-[3px] border-[#F4B41A]">
                                <h3 className="text-lg font-bold text-[#143D59]">Livraisons de repas</h3>
                            </div>
                            <div className="p-8 flex items-center justify-center flex-grow">
                                <p className="text-[#143D59] text-center text-lg font-medium leading-relaxed">
                                    Commandez pour <br /> vos équipes
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg flex flex-col h-full transform transition-transform hover:-translate-y-1 border border-white/20">
                            <div className="bg-white/20 p-4 text-center border-b border-white/10">
                                <h3 className="text-lg font-bold text-[#143D59]">Suivi en temps réel</h3>
                            </div>
                            <div className="p-8 flex items-center justify-center flex-grow">
                                <p className="text-[#143D59] text-center text-lg font-medium leading-relaxed">
                                    Sachez où se trouve <br /> votre livraison
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* "Pourquoi choisir Guinex" Section */}
            <section className="w-full pb-20 pt-10 bg-white flex flex-col items-center">
                <div className="w-full max-w-5xl px-4 border border-[#143D59] rounded-3xl p-8 md:p-12 relative bg-white shadow-sm">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-10">
                        Pourquoi choisir Guinex
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Feature 1 */}
                        <div className="bg-[#EAEAEA] rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
                            <h3 className="text-lg font-bold text-black mb-1">Rapidité</h3>
                            <p className="text-black opacity-80">Livraison express</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-[#EAEAEA] rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
                            <h3 className="text-lg font-bold text-black mb-1">Fiabilité</h3>
                            <p className="text-black opacity-80">Service dédié aux entreprises</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-[#EAEAEA] rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
                            <h3 className="text-lg font-bold text-black mb-1">Sécurité</h3>
                            <p className="text-black opacity-80">Transport sécurisé</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-[#EAEAEA] rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
                            <h3 className="text-lg font-bold text-black mb-1">Gain de temps</h3>
                            <p className="text-black opacity-80">Pour vos équipes</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 flex flex-col items-center text-center bg-white">
                <h2 className="text-2xl md:text-3xl font-bold text-[#143D59] mb-8">
                    Besoin d’une course urgente ?
                </h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-3 bg-[#F4B41A] text-[#143D59] font-bold py-3 px-8 rounded-md shadow-md hover:bg-yellow-500 transition-colors text-lg"
                >
                    <div className="bg-[#25D366] rounded-full p-1">
                        <MessageCircle className="w-5 h-5 text-white" fill="white" />
                    </div>
                    contactez Guinex maintenant
                </button>
            </section>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <Footer />
        </main>
    );
}
