"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <main className="min-h-screen flex flex-col relative bg-white overflow-x-hidden">
            <Header />

            {/* Hero Section with Title */}
            <div className="relative w-full flex flex-col items-center justify-start pt-16 md:pt-24 pb-12 md:pb-20 overflow-hidden">

                {/* Background Image & Gradient Sync */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services/backgroundservice.png"
                        alt="Background Service"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                        quality={100}
                    />
                    {/* Stronger white gradient at the top AND bottom to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white/95"></div>
                </div>

                <div className="container mx-auto max-w-7xl px-4 relative z-10 text-center">
                    <h1
                        className="text-[40px] md:text-6xl font-bold text-[#143D59] mb-16 pt-10"
                        style={{
                            textShadow: '2px 0 0 #F4B41A, -2px 0 0 #F4B41A, 0 2px 0 #F4B41A, 0 -2px 0 #F4B41A, 1px 1px 0 #F4B41A, -1px -1px 0 #F4B41A, 1px -1px 0 #F4B41A, -1px 1px 0 #F4B41A, 0 10px 15px rgba(0,0,0,0.2)'
                        }}
                    >
                        Nos services
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto px-2 md:px-4 mb-16 md:mb-20">
                        {/* Card 1: Livraison de repas */}
                        <div className="flex flex-col w-full">
                            {/* Card Header - Transparent style */}
                            <div className="bg-[#B0C4D6]/50 backdrop-blur-md py-3 md:py-4 px-4 md:px-6 text-center flex items-center justify-center space-x-3 md:space-x-4 rounded-t-2xl shadow-lg border-b border-white/20 w-full z-10 relative">
                                <div className="w-6 h-6 md:w-8 md:h-8 relative flex-shrink-0">
                                    <Image src="/images/icons/repasicon.png" fill alt="Repas" className="object-contain" />
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#143D59]">
                                    Repas
                                </h3>
                            </div>
                            {/* Card Body - Transparent style */}
                            <div className="bg-white/20 backdrop-blur-sm rounded-b-2xl shadow-xl hover:shadow-2xl transition-all p-6 sm:p-8 md:p-10 flex-grow border border-white/10 border-t-0 w-full">
                                <div className="text-center space-y-4">
                                    <h4 className="text-xl md:text-2xl font-bold text-[#143D59]">Livraison de repas</h4>
                                    <p className="text-[#143D59] text-lg md:text-xl font-medium leading-tight opacity-90">
                                        Pour les entreprises et les particuliers
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Service coursier */}
                        <div className="flex flex-col w-full">
                            {/* Card Header - Transparent style */}
                            <div className="bg-[#B0C4D6]/50 backdrop-blur-md py-3 md:py-4 px-4 md:px-6 text-center flex items-center justify-center space-x-3 md:space-x-4 rounded-t-2xl shadow-lg border-b border-white/20 w-full z-10 relative">
                                <div className="w-6 h-6 md:w-8 md:h-8 relative flex-shrink-0">
                                    <Image src="/images/icons/serviceicon.png" fill alt="Coursier" className="object-contain" />
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#143D59]">
                                    Coursier
                                </h3>
                            </div>
                            {/* Card Body - Transparent style */}
                            <div className="bg-white/20 backdrop-blur-sm rounded-b-2xl shadow-xl hover:shadow-2xl transition-all p-6 sm:p-8 md:p-10 flex-grow border border-white/10 border-t-0 w-full">
                                <div className="text-center space-y-4">
                                    <h4 className="text-xl md:text-2xl font-bold text-[#143D59]">Service coursier</h4>
                                    <p className="text-[#143D59] text-lg md:text-xl font-medium leading-tight opacity-90">
                                        Documents et petits colis
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pourquoi choisir Guinex - Added safe margin and stronger background visibility */}
                    <div className="mt-12 md:mt-32 max-w-5xl mx-auto px-4 relative z-20 pb-16">
                        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#143D59] mb-6 md:mb-10">
                            Pourquoi choisir Guinex ?
                        </h2>

                        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 bg-white/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl md:bg-transparent md:p-0 md:backdrop-blur-none transition-all">
                            <p className="text-lg md:text-2xl text-[#143D59] font-medium leading-snug">
                                Rapidité, professionnalisme et fiabilité pour vos livraisons à Conakry.
                            </p>
                            <p className="text-lg md:text-2xl text-[#143D59] font-medium leading-snug">
                                Un service adapté aux entreprises comme aux particuliers, avec suivi des envois et gain de temps pour vos équipes.
                            </p>
                            <p className="text-xl md:text-[28px] font-bold text-[#143D59] pt-2 md:pt-4">
                                Guinex, une solution locale pensée pour les réalités du terrain.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
