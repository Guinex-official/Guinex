"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ConstructionPlaceholderProps {
    title: string;
}

export default function ConstructionPlaceholder({ title }: ConstructionPlaceholderProps) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow flex items-center justify-center py-20 px-4">
                <div className="max-w-2xl w-full text-center">
                    <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#F4B41A]/10 text-[#F4B41A]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 1113.5 17.25l-5.83-5.83m5.83 5.83l3.07 3.07a4.5 4.5 0 00-6.36-6.36l-3.07 3.07m7.08-5.23a9.003 9.003 0 00-12.39 12.39l3.07-3.07m7.08-5.23l3.07-3.07a4.5 4.5 0 016.36 6.36l-3.07 3.07m-7.08 5.23a9.003 9.003 0 01-12.39-12.39l3.07 3.07m7.08-5.23l3.07-3.07" />
                        </svg>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#143D59] mb-6">
                        {title}
                    </h1>

                    <div className="h-1.5 w-24 bg-[#F4B41A] mx-auto rounded-full mb-8"></div>

                    <p className="text-xl md:text-2xl text-[#143D59]/60 font-light mb-12">
                        Cette page est actuellement <span className="text-[#143D59] font-medium italic underline decoration-[#F4B41A] decoration-2">en cours</span> de développement pour mieux vous servir.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link
                            href="/"
                            className="bg-[#143D59] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#1c4d70] transition-all transform hover:-translate-y-1 active:scale-95"
                        >
                            Retour à l'accueil
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
