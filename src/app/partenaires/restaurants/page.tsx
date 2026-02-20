"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ui/ContactModal";

export default function RestaurantsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full min-h-[500px] md:min-h-[700px] flex flex-col items-center justify-center pt-16 pb-12 md:pt-24 md:pb-32 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services/backgroundrestaurant.png"
                        alt="Background Restaurants"
                        fill
                        className="object-cover"
                        style={{ objectFit: 'cover' }}
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-white/65"></div>
                </div>

                <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center">

                    {/* Hero Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#143D59] text-center leading-tight mb-8 md:mb-20 lg:mb-24 max-w-4xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)] px-2">
                        Optimisez la livraison de vos repas et <br className="hidden md:block" />
                        développez vos ventes avec Guinex
                    </h1>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-5xl">
                        {/* Card 1 */}
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-md flex flex-col h-full transform transition-all hover:shadow-lg border border-white/50">
                            <div className="bg-[#143D59]/5 p-4 text-center border-b border-gray-100">
                                <h3 className="text-base md:text-lg font-bold text-[#143D59]">Recevoir des commandes</h3>
                            </div>
                            <div className="p-6 md:p-10 flex items-center justify-center flex-grow">
                                <p className="text-[#143D59] text-center text-base md:text-lg font-medium leading-relaxed">
                                    Recevez les commandes <br /> de vos clients
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-md flex flex-col h-full transform transition-all hover:shadow-lg border border-white/50">
                            <div className="bg-[#143D59]/5 p-4 text-center border-b border-gray-100">
                                <h3 className="text-base md:text-lg font-bold text-[#143D59]">Gestion simplifiée</h3>
                            </div>
                            <div className="p-6 md:p-10 flex items-center justify-center flex-grow">
                                <p className="text-[#143D59] text-center text-base md:text-lg font-medium leading-relaxed">
                                    Suivez et gérez <br /> facilement vos livraisons
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg flex flex-col h-full transform transition-all hover:shadow-xl border border-white/50">
                            <div className="bg-[#143D59]/5 p-4 text-center border-b border-gray-100">
                                <h3 className="text-base md:text-lg font-bold text-[#143D59]">Livraison rapide</h3>
                            </div>
                            <div className="p-6 md:p-10 flex items-center justify-center flex-grow">
                                <p className="text-[#143D59] text-center text-base md:text-lg font-medium leading-relaxed">
                                    Nos livreurs livrent <br /> rapidement vos repas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* "Pourquoi devenir partenaire Guinex" Section */}
            <section className="w-full py-12 md:py-20 bg-white flex flex-col items-center px-4">
                <div className="w-full max-w-4xl border-[2px] border-[#143D59] rounded-3xl p-6 md:p-14 relative bg-white shadow-sm">
                    <h2 className="text-xl md:text-3xl font-bold text-center text-[#143D59] mb-10 md:mb-16 italic">
                        Pourquoi devenir partenaire Guinex
                    </h2>

                    <div className="flex flex-col items-center gap-4 md:gap-6 max-w-3xl mx-auto">
                        {/* Top Row: 2 cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
                            {/* Pill 1 */}
                            <div className="bg-[#DAE1E7] rounded-xl px-6 py-4 md:px-10 md:py-6 flex flex-col items-center justify-center shadow-sm transform hover:scale-[1.02] transition-transform border border-gray-200">
                                <h3 className="text-lg md:text-xl font-bold text-black leading-tight">Augmentez</h3>
                                <p className="text-base md:text-lg font-medium text-black opacity-80">vos ventes</p>
                            </div>

                            {/* Pill 2 */}
                            <div className="bg-[#DAE1E7] rounded-xl px-6 py-4 md:px-10 md:py-6 flex flex-col items-center justify-center shadow-sm transform hover:scale-[1.02] transition-transform border border-gray-200">
                                <h3 className="text-lg md:text-xl font-bold text-black leading-tight">Commission</h3>
                                <p className="text-base md:text-lg font-medium text-black opacity-80">avantageuse</p>
                            </div>
                        </div>

                        {/* Bottom Row: 1 centered card */}
                        <div className="w-full max-w-[280px] md:max-w-[320px]">
                            {/* Pill 3 */}
                            <div className="bg-[#DAE1E7] rounded-xl px-6 py-4 md:px-10 md:py-6 flex flex-col items-center justify-center shadow-sm transform hover:scale-[1.02] transition-transform border border-gray-200 w-full">
                                <p className="text-lg md:text-xl font-bold text-black text-center">Livraison fiable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full pt-4 pb-20 flex flex-col items-center text-center px-4">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F4B41A] text-[#143D59] font-extrabold py-4 md:py-5 px-10 md:px-20 rounded-2xl shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all text-lg md:text-2xl uppercase tracking-widest active:scale-95"
                >
                    Devenir partenaire
                </button>
            </section>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <Footer />
        </main>
    );
}
