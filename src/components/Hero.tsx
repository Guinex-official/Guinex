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
        <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden" suppressHydrationWarning>
            {/* Background Image Optimized */}
            <div className="absolute inset-0 z-0" suppressHydrationWarning>
                <Image
                    src="/images/hero/backgroundhero.png"
                    alt="Background Hero"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-7xl px-4 z-10 relative h-full flex items-start pt-10 md:items-center md:pt-0" suppressHydrationWarning>
                <div className="max-w-3xl text-white mb-8 md:mb-40" suppressHydrationWarning>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight">
                        <span className="block md:inline text-white">La livraison </span>
                        <span className="block md:inline text-[#F4B41A]">simple, rapide</span>{" "}
                        <span className="block md:inline whitespace-nowrap text-white">et professionnelle <span className="font-extralight text-white">en Guinée</span></span>
                    </h1>

                    <div className="flex flex-wrap items-center gap-x-2 text-sm sm:text-lg md:text-xl lg:text-2xl mb-12 md:mb-16 font-light max-w-xl" suppressHydrationWarning>
                        {services.map((service, index) => (
                            <div key={service} className="flex items-center">
                                <span
                                    className="hero-service-item"
                                    style={{
                                        opacity: index < visibleCount ? 1 : 0,
                                        transform: index < visibleCount
                                            ? (highlightedIndex === index ? 'translateY(-2px)' : 'translateY(0)')
                                            : 'translateY(10px)',
                                        color: highlightedIndex === index ? '#F4B41A' : 'rgba(255, 255, 255, 0.9)',
                                        transition: 'opacity 0.6s ease-out, color 0.5s ease-in-out, transform 0.4s ease-out'
                                    }}
                                >
                                    {service}
                                </span>
                                {index < services.length - 1 && (
                                    <span
                                        className="hero-service-dot"
                                        style={{
                                            opacity: index < visibleCount - 1 ? 0.3 : 0,
                                            transition: 'opacity 0.6s ease-out'
                                        }}
                                    >
                                        .
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-block bg-[#F4B41A] text-[#143D59] font-bold py-3 px-8 md:py-4 md:px-10 rounded-full shadow-xl hover:bg-yellow-400 transition-all transform hover:-translate-y-1 active:scale-95 text-base md:text-lg"
                    >
                        Nous contacter
                    </button>
                </div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}

