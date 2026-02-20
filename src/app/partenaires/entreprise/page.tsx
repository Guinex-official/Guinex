"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Zap, ShieldCheck, Clock, CheckCircle2, Package, Utensils, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ui/ContactModal";

export default function EntreprisePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-start pt-10 pb-16 overflow-hidden">
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
                    {/* Dark Professional Overlay */}
                    <div className="absolute inset-0 bg-[#143D59]/85 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center">

                    {/* Hero Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-[1.1] mt-8 sm:mt-12 md:mt-24 lg:mt-32 mb-8 sm:mb-12 md:mb-16 drop-shadow-md max-w-4xl px-2">
                        Gérez facilement toutes vos <br />
                        <span className="text-[#F4B41A]">livraisons professionnelles</span>
                    </h1>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                        {/* Card 1: Courses */}
                        <div className="flex flex-col h-full bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
                            <div className="bg-[#F4B41A] p-4 flex items-center justify-center gap-3">
                                <Package className="w-5 h-5 text-[#143D59] shrink-0" />
                                <h3 className="text-sm md:text-base font-extrabold text-[#143D59] uppercase tracking-wide">Commandez une course</h3>
                            </div>
                            <div className="p-6 flex items-center justify-center flex-grow bg-[#eff1f3]">
                                <p className="text-[#143D59] text-center text-sm md:text-base font-bold leading-relaxed">
                                    Envoyez vos documents <br /> et colis rapidement
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Repas */}
                        <div className="flex flex-col h-full bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
                            <div className="bg-[#143D59] p-4 flex items-center justify-center gap-3">
                                <Utensils className="w-5 h-5 text-[#F4B41A] shrink-0" />
                                <h3 className="text-sm md:text-base font-extrabold text-white uppercase tracking-wide">Livraisons de repas</h3>
                            </div>
                            <div className="p-6 flex items-center justify-center flex-grow bg-[#eff1f3]">
                                <p className="text-[#143D59] text-center text-sm md:text-base font-bold leading-relaxed">
                                    Commandez pour <br /> vos équipes
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Suivi */}
                        <div className="flex flex-col h-full bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
                            <div className="bg-[#F4B41A] p-4 flex items-center justify-center gap-3">
                                <MapPin className="w-5 h-5 text-[#143D59] shrink-0" />
                                <h3 className="text-sm md:text-base font-extrabold text-[#143D59] uppercase tracking-wide">Suivi en temps réel</h3>
                            </div>
                            <div className="p-6 flex items-center justify-center flex-grow bg-[#eff1f3]">
                                <p className="text-[#143D59] text-center text-sm md:text-base font-bold leading-relaxed">
                                    Sachez où se trouve <br /> votre livraison
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* "Pourquoi choisir Guinex" Section - Premium Minimalist */}
            <section className="w-full pb-12 pt-20 bg-white flex flex-col items-center">
                <div className="w-full max-w-5xl px-4">
                    <div className="flex flex-col items-center mb-12">
                        <div className="h-1 w-12 bg-[#F4B41A] mb-4 rounded-full"></div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#143D59] text-center">
                            Pourquoi choisir Guinex ?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {/* Feature 1: Rapidité */}
                        <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#F4B41A]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#F4B41A]/20 transition-colors">
                                <Zap className="w-6 h-6 text-[#F4B41A]" fill="#F4B41A" fillOpacity="0.2" />
                            </div>
                            <h3 className="text-lg font-bold text-[#143D59] mb-2">Rapidité</h3>
                            <p className="text-[#143D59]/60 text-sm font-medium leading-relaxed">Livraison express en zone urbaine</p>
                        </div>

                        {/* Feature 2: Fiabilité */}
                        <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#143D59]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#143D59]/20 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-[#143D59]" />
                            </div>
                            <h3 className="text-lg font-bold text-[#143D59] mb-2">Fiabilité</h3>
                            <p className="text-[#143D59]/60 text-sm font-medium leading-relaxed">Service dédié aux professionnels</p>
                        </div>

                        {/* Feature 3: Sécurité */}
                        <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#143D59]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#143D59]/20 transition-colors">
                                <ShieldCheck className="w-6 h-6 text-[#143D59]" fill="#143D59" fillOpacity="0.1" />
                            </div>
                            <h3 className="text-lg font-bold text-[#143D59] mb-2">Sécurité</h3>
                            <p className="text-[#143D59]/60 text-sm font-medium leading-relaxed">Transport sécurisé et garanti</p>
                        </div>

                        {/* Feature 4: Gain de temps */}
                        <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#F4B41A]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#F4B41A]/20 transition-colors">
                                <Clock className="w-6 h-6 text-[#F4B41A]" />
                            </div>
                            <h3 className="text-lg font-bold text-[#143D59] mb-2">Flexibilité</h3>
                            <p className="text-[#143D59]/60 text-sm font-medium leading-relaxed">Un gain de temps pour vos équipes</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full pt-4 pb-20 flex flex-col items-center text-center bg-white px-4">
                <div className="flex flex-col items-center mb-8">
                    <span className="text-[#F4B41A] font-bold text-sm tracking-widest uppercase mb-2">Contactez-nous</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#143D59] text-center">
                        Besoin d’une course <span className="text-[#F4B41A]">urgente ?</span>
                    </h2>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#F4B41A] text-[#143D59] font-bold py-3 px-8 rounded-md shadow-md hover:bg-yellow-500 transition-colors text-lg"
                >
                    contactez Guinex maintenant
                </button>
            </section>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <Footer />
        </main>
    );
}
