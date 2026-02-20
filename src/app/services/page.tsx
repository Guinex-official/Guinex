"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <main className="min-h-screen flex flex-col relative bg-transparent overflow-x-hidden">
            <Header />

            {/* Main Wrapper */}
            <div className="relative w-full flex flex-col md:block">

                {/* Background Image Section */}
                <div className="absolute inset-0 w-full h-full md:relative md:h-auto md:aspect-[1.49/1] overflow-hidden z-0">
                    <Image
                        src="/images/services/backgroundservice.png"
                        alt="Background Service"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                        quality={100}
                    />
                    {/* Clean Solid Overlay */}
                    <div className="absolute inset-0 bg-[#143D59]/60 backdrop-blur-sm"></div>
                </div>

                {/* Content Section */}
                <div className="relative w-full bg-transparent md:bg-transparent md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-center z-10 pt-20 md:pt-0 pb-24 md:pb-0">
                    <div className="container mx-auto max-w-7xl px-4 text-center">
                        <h1
                            className="text-[40px] md:text-7xl font-bold text-white mb-12 md:pt-10 drop-shadow-xl"
                        >
                            Nos services
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto px-4 mb-20">
                            {/* Card 1: Livraison de repas */}
                            <div className="flex flex-col w-full">
                                {/* Card Header - Consistent Solid Style */}
                                <div className="bg-[#D1D9E1] py-3 px-5 text-center flex items-center justify-center space-x-3 rounded-t-2xl shadow-md border-b-0 w-full z-10 relative">
                                    <div className="w-5 h-5 md:w-7 md:h-7 relative flex-shrink-0">
                                        <Image src="/images/icons/repasicon.png" fill alt="Repas" className="object-contain" priority sizes="32px" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-[#143D59]">
                                        Repas
                                    </h3>
                                </div>
                                {/* Card Body - Solid light background */}
                                <div className="bg-[#eff1f3] rounded-b-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-10 flex-grow border border-gray-100 border-t-0 w-full">
                                    <div className="text-center space-y-4">
                                        <h4 className="text-xl md:text-2xl font-bold text-[#143D59]">Livraison de repas</h4>
                                        <div className="h-1 w-12 bg-[#F4B41A] mx-auto rounded-full"></div>
                                        <p className="text-[#143D59] text-base md:text-lg font-medium leading-relaxed opacity-90">
                                            Pour les entreprises et les particuliers
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Service coursier */}
                            <div className="flex flex-col w-full">
                                {/* Card Header - Consistent Solid Style */}
                                <div className="bg-[#D1D9E1] py-3 px-5 text-center flex items-center justify-center space-x-3 rounded-t-2xl shadow-md border-b-0 w-full z-10 relative">
                                    <div className="w-5 h-5 md:w-7 md:h-7 relative flex-shrink-0">
                                        <Image src="/images/icons/serviceicon.png" fill alt="Coursier" className="object-contain" priority sizes="32px" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-[#143D59]">
                                        Coursier
                                    </h3>
                                </div>
                                {/* Card Body - Solid light background */}
                                <div className="bg-[#eff1f3] rounded-b-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-10 flex-grow border border-gray-100 border-t-0 w-full">
                                    <div className="text-center space-y-4">
                                        <h4 className="text-xl md:text-2xl font-bold text-[#143D59]">Service coursier</h4>
                                        <div className="h-1 w-12 bg-[#F4B41A] mx-auto rounded-full"></div>
                                        <p className="text-[#143D59] text-base md:text-lg font-medium leading-relaxed opacity-90">
                                            Documents et petits colis
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pourquoi choisir Guinex */}
                        <div className="mt-12 max-w-5xl mx-auto px-4 relative z-20 pb-0 text-center">
                            <h2 className="text-[32px] sm:text-[40px] md:text-[52px] font-bold text-white mb-8 drop-shadow-lg">
                                Pourquoi choisir <span className="text-[#F4B41A]">Guinex ?</span>
                            </h2>

                            <div className="max-w-4xl mx-auto space-y-4 bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/20 shadow-xl">
                                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                                    Rapidité, professionnalisme et fiabilité pour vos livraisons à Conakry.
                                </p>
                                <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed">
                                    Un service adapté aux entreprises comme aux particuliers, avec suivi des envois et gain de temps pour vos équipes.
                                </p>
                                <p className="text-xl md:text-2xl font-bold text-[#F4B41A] uppercase tracking-tight">
                                    Guinex, une solution locale pensée pour les réalités du terrain.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
