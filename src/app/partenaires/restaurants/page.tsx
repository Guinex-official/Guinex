"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ShoppingBag, LayoutDashboard, Zap, TrendingUp, Coins, Truck } from "lucide-react";
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
                    <div className="absolute inset-0 bg-[#143D59]/60 backdrop-blur-sm"></div>
                </div>

                <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center">

                    {/* Hero Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-extrabold text-white text-center leading-tight mb-8 md:mb-20 lg:mb-24 max-w-4xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] px-2">
                        Optimisez la livraison de vos repas et <br className="hidden md:block" />
                        développez vos ventes avec Guinex
                    </h1>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                        {/* Card 1: Commandes */}
                        <div className="flex flex-col h-full bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
                            <div className="bg-[#F4B41A] p-4 flex items-center justify-center gap-3">
                                <ShoppingBag className="w-5 h-5 text-[#143D59] shrink-0" />
                                <h3 className="text-sm md:text-base font-extrabold text-[#143D59] uppercase tracking-wide">Recevoir des commandes</h3>
                            </div>
                            <div className="p-6 flex items-center justify-center flex-grow bg-[#eff1f3]">
                                <p className="text-[#143D59] text-center text-sm md:text-base font-bold leading-relaxed">
                                    Recevez les commandes <br /> de vos clients
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Gestion */}
                        <div className="flex flex-col h-full bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
                            <div className="bg-[#143D59] p-4 flex items-center justify-center gap-3">
                                <LayoutDashboard className="w-5 h-5 text-[#F4B41A] shrink-0" />
                                <h3 className="text-sm md:text-base font-extrabold text-white uppercase tracking-wide">Gestion simplifiée</h3>
                            </div>
                            <div className="p-6 flex items-center justify-center flex-grow bg-[#eff1f3]">
                                <p className="text-[#143D59] text-center text-sm md:text-base font-bold leading-relaxed">
                                    Suivez et gérez <br /> facilement vos livraisons
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Livraison */}
                        <div className="flex flex-col h-full bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
                            <div className="bg-[#F4B41A] p-4 flex items-center justify-center gap-3">
                                <Zap className="w-5 h-5 text-[#143D59] shrink-0" />
                                <h3 className="text-sm md:text-base font-extrabold text-[#143D59] uppercase tracking-wide">Livraison rapide</h3>
                            </div>
                            <div className="p-6 flex items-center justify-center flex-grow bg-[#eff1f3]">
                                <p className="text-[#143D59] text-center text-sm md:text-base font-bold leading-relaxed">
                                    Nos livreurs livrent <br /> rapidement vos repas
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
                            Pourquoi devenir partenaire Guinex
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {/* Feature 1: Ventes */}
                        <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#F4B41A]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#F4B41A]/20 transition-colors">
                                <TrendingUp className="w-6 h-6 text-[#F4B41A]" />
                            </div>
                            <h3 className="text-lg font-bold text-[#143D59] mb-2">Ventes</h3>
                            <p className="text-[#143D59]/60 text-sm font-medium leading-relaxed">Augmentez vos revenus mensuels</p>
                        </div>

                        {/* Feature 2: Commission */}
                        <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#143D59]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#143D59]/20 transition-colors">
                                <Coins className="w-6 h-6 text-[#143D59]" />
                            </div>
                            <h3 className="text-lg font-bold text-[#143D59] mb-2">Commission</h3>
                            <p className="text-[#143D59]/60 text-sm font-medium leading-relaxed">Tarification Juste et avantageuse</p>
                        </div>

                        {/* Feature 3: Fiabilité */}
                        <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#143D59]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#143D59]/20 transition-colors">
                                <Truck className="w-6 h-6 text-[#143D59]" />
                            </div>
                            <h3 className="text-lg font-bold text-[#143D59] mb-2">Fiabilité</h3>
                            <p className="text-[#143D59]/60 text-sm font-medium leading-relaxed">Une livraison sûre et garantie</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full pt-4 pb-20 flex flex-col items-center text-center px-4">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F4B41A] text-[#143D59] font-extrabold py-3.5 md:py-4 px-10 md:px-14 rounded-xl shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all text-base md:text-lg uppercase tracking-widest active:scale-95"
                >
                    Devenir partenaire
                </button>
            </section>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <Footer />
        </main>
    );
}
