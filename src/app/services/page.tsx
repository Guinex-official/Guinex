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
                    {/* Gradient only for Desktop or bottom of image? */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/50 to-white/95 md:from-white md:via-white/50 md:to-white/95"></div>
                </div>

                {/* Content Section */}
                <div className="relative w-full bg-transparent md:bg-transparent md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-center z-10 pt-16 md:pt-0 pb-20 md:pb-0">
                    <div className="container mx-auto max-w-7xl px-4 text-center">
                        <h1
                            className="text-[40px] md:text-6xl font-bold text-[#143D59] mb-16 md:pt-10"
                            style={{
                                textShadow: '2px 0 0 #F4B41A, -2px 0 0 #F4B41A, 0 2px 0 #F4B41A, 0 -2px 0 #F4B41A, 1px 1px 0 #F4B41A, -1px -1px 0 #F4B41A, 1px -1px 0 #F4B41A, -1px 1px 0 #F4B41A, 0 10px 15px rgba(0,0,0,0.2)'
                            }}
                        >
                            Nos services
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto px-2 md:px-4 mb-8 md:mb-12">
                            {/* Card 1: Livraison de repas */}
                            <div className="flex flex-col w-full">
                                {/* Card Header - Transparent style */}
                                <div className="bg-[#B0C4D6]/50 backdrop-blur-md md:backdrop-blur-md py-3 md:py-4 px-4 md:px-6 text-center flex items-center justify-center space-x-3 md:space-x-4 rounded-t-2xl shadow-lg border border-gray-100 md:border-white/20 border-b-0 w-full z-10 relative">
                                    <div className="w-6 h-6 md:w-8 md:h-8 relative flex-shrink-0">
                                        <Image src="/images/icons/repasicon.png" fill alt="Repas" className="object-contain" priority />
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#143D59]">
                                        Repas
                                    </h3>
                                </div>
                                {/* Card Body */}
                                <div className="bg-[#F0F4F8] md:bg-white/20 backdrop-blur-none md:backdrop-blur-sm rounded-b-2xl shadow-xl hover:shadow-2xl transition-all p-6 sm:p-8 md:p-10 flex-grow border border-gray-100 md:border-white/10 w-full">
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
                                <div className="bg-[#B0C4D6]/50 backdrop-blur-md md:backdrop-blur-md py-3 md:py-4 px-4 md:px-6 text-center flex items-center justify-center space-x-3 md:space-x-4 rounded-t-2xl shadow-lg border border-gray-100 md:border-white/20 border-b-0 w-full z-10 relative">
                                    <div className="w-6 h-6 md:w-8 md:h-8 relative flex-shrink-0">
                                        <Image src="/images/icons/serviceicon.png" fill alt="Coursier" className="object-contain" priority />
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#143D59]">
                                        Coursier
                                    </h3>
                                </div>
                                {/* Card Body */}
                                <div className="bg-[#F0F4F8] md:bg-white/20 backdrop-blur-none md:backdrop-blur-sm rounded-b-2xl shadow-xl hover:shadow-2xl transition-all p-6 sm:p-8 md:p-10 flex-grow border border-gray-100 md:border-white/10 w-full">
                                    <div className="text-center space-y-4">
                                        <h4 className="text-xl md:text-2xl font-bold text-[#143D59]">Service coursier</h4>
                                        <p className="text-[#143D59] text-lg md:text-xl font-medium leading-tight opacity-90">
                                            Documents et petits colis
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pourquoi choisir Guinex */}
                        <div className="mt-8 md:mt-12 max-w-5xl mx-auto px-4 relative z-20 pb-0">
                            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#143D59] mb-6 md:mb-10">
                                Pourquoi choisir Guinex ?
                            </h2>

                            <div className="max-w-4xl mx-auto space-y-1 md:space-y-2 bg-white/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-3xl transition-all">
                                <p className="text-lg md:text-2xl text-[#143D59] font-medium leading-tight">
                                    Rapidité, professionnalisme et fiabilité pour vos livraisons à Conakry.
                                </p>
                                <p className="text-lg md:text-2xl text-[#143D59] font-medium leading-tight">
                                    Un service adapté aux entreprises comme aux particuliers, avec suivi des envois et gain de temps pour vos équipes.
                                </p>
                                <p className="text-xl md:text-[28px] font-bold text-[#143D59]">
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
