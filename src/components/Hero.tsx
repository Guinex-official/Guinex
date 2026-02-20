"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ContactModal from "./ui/ContactModal";

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(0);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const services = ["Repas", "Colis", "Documents", "Courses"];

    useEffect(() => {
        const timers: NodeJS.Timeout[] = [];

        // Phase 1: Initial Sequential Reveal (Happens once)
        services.forEach((_, index) => {
            timers.push(setTimeout(() => {
                setVisibleCount(index + 1);
            }, 600 + index * 400));
        });

        // Phase 2: Looping Highlight
        let loopTimer: NodeJS.Timeout;
        const startHighlightLoop = () => {
            let currentHighlight = 0;

            const runLoop = () => {
                setHighlightedIndex(currentHighlight);

                // Duration for the highlight to stay on
                loopTimer = setTimeout(() => {
                    currentHighlight = (currentHighlight + 1) % services.length;
                    runLoop();
                }, 1500); // 1.5s per service
            };

            runLoop();
        };

        // Start the loop after the initial reveal is finished
        const initialRevealDuration = 600 + services.length * 400 + 500;
        const loopStarter = setTimeout(startHighlightLoop, initialRevealDuration);
        timers.push(loopStarter);

        return () => {
            timers.forEach(clearTimeout);
            if (loopTimer) clearTimeout(loopTimer);
        };
    }, []);

    return (
        <section className="relative w-full min-h-[90vh] md:min-h-screen lg:min-h-0 lg:h-auto lg:aspect-[3.3/1] flex items-center overflow-hidden bg-[#143D59]" suppressHydrationWarning>
            {/* Background Image Optimized */}
            <div className="absolute inset-0 z-0" suppressHydrationWarning>
                <Image
                    src="/images/hero/backgroundhero.png"
                    alt="Background Hero"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-90 md:opacity-100"
                    style={{ objectFit: 'cover' }}
                />
                {/* Premium Gradient Overlay: Enhanced for Mobile Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#143D59]/70 via-[#143D59]/40 to-[#143D59]/90 lg:bg-black/20" suppressHydrationWarning></div>
                {/* Subtle Blur for Depth on Mobile */}
                <div className="absolute inset-0 backdrop-blur-[1px] lg:backdrop-blur-0" suppressHydrationWarning></div>
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-7xl px-4 z-10 relative h-full flex flex-col items-center justify-center lg:items-start lg:justify-center" suppressHydrationWarning>
                <div className="w-full max-w-4xl text-white text-center lg:text-left flex flex-col items-center lg:items-start" suppressHydrationWarning>
                    <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight drop-shadow-2xl lg:text-balance">
                        <span className="text-white">La livraison </span>
                        <span className="text-[#F4B41A]">simple, rapide </span>
                        <span className="text-white">et professionnelle </span>
                        <span className="font-light text-white/90">en Guinée</span>
                    </h1>

                    <div className="w-full flex flex-wrap items-center justify-center lg:justify-start gap-x-3 sm:gap-x-4 gap-y-2 text-lg sm:text-xl md:text-xl lg:text-2xl mb-8 md:mb-10 font-semibold tracking-wide" suppressHydrationWarning>
                        {services.map((service, index) => (
                            <div key={service} className="flex items-center">
                                <span
                                    className="hero-service-item drop-shadow-md"
                                    style={{
                                        opacity: index < visibleCount ? 1 : 0,
                                        transform: index < visibleCount
                                            ? (highlightedIndex === index ? 'translateY(-3px)' : 'translateY(0)')
                                            : 'translateY(15px)',
                                        color: highlightedIndex === index ? '#F4B41A' : 'rgba(255, 255, 255, 0.95)',
                                        transition: 'opacity 0.6s ease-out, color 0.5s ease-in-out, transform 0.4s ease-out'
                                    }}
                                >
                                    {service}
                                </span>
                                {index < services.length - 1 && (
                                    <span
                                        className="hidden sm:inline mx-2 text-[#F4B41A] font-black scale-125 md:scale-150 drop-shadow-sm opacity-60"
                                        style={{
                                            opacity: index < visibleCount - 1 ? 0.6 : 0,
                                            transition: 'opacity 0.6s ease-out'
                                        }}
                                    >
                                        •
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="relative group" suppressHydrationWarning>
                        <div className="absolute -inset-1 bg-[#F4B41A] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300" suppressHydrationWarning></div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="relative bg-[#F4B41A] text-[#143D59] font-extrabold py-3.5 px-10 md:py-4 md:px-12 rounded-full shadow-2xl hover:bg-[#F4B41A] hover:scale-105 transition-all active:scale-95 text-base md:text-lg tracking-wider uppercase"
                        >
                            Nous contacter
                        </button>
                    </div>
                </div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}

