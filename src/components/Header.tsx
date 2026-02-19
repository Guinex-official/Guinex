"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ContactModal from "./ui/ContactModal";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPartnersOpen, setIsPartnersOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [currentHash, setCurrentHash] = useState("");
    const pathname = usePathname();
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };

        // Listen for internal hash changes
        window.addEventListener("hashchange", handleHashChange);

        // Initial check on mount
        setCurrentHash(window.location.hash);

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    // Close menu on scroll or click outside
    useEffect(() => {
        const handleInteraction = (event: MouseEvent | Event) => {
            // Close on scroll
            if (event.type === "scroll") {
                setIsMenuOpen(false);
                setIsPartnersOpen(false);
                return;
            }

            // Close on click outside
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
                setIsPartnersOpen(false);
            }
        };

        if (isMenuOpen || isPartnersOpen) {
            window.addEventListener("scroll", handleInteraction, { passive: true });
            document.addEventListener("mousedown", handleInteraction);
        }

        return () => {
            window.removeEventListener("scroll", handleInteraction);
            document.removeEventListener("mousedown", handleInteraction);
        };
    }, [isMenuOpen, isPartnersOpen]);

    const partnerLinks = [
        { name: "Entreprise", href: "/partenaires/entreprise" },
        { name: "Restaurants", href: "/partenaires/restaurants" },
        { name: "Livreurs", href: "/partenaires/livreurs" },
    ];

    const isActive = (path: string, hash?: string) => {
        if (path === "/") {
            // Special handling for hash-based sections on the home page
            if (hash) {
                return pathname === "/" && currentHash === hash;
            }
            // "Accueil" is active if at root and NO specific section hash
            return pathname === "/" && (currentHash === "" || currentHash === "#" || currentHash === "#top");
        }
        return pathname.startsWith(path);
    };

    const isPartnerActive = pathname.startsWith("/partenaires");

    return (
        <header ref={headerRef} className="sticky top-0 z-50 bg-white shadow-sm" suppressHydrationWarning>
            <div className="container mx-auto max-w-7xl px-4 py-3 md:py-5 flex justify-between items-center" suppressHydrationWarning>
                {/* Logo Container */}
                <div className="flex-shrink-0 w-[120px] md:w-[150px]" suppressHydrationWarning>
                    <Link href="/">
                        <Image
                            src="/images/brand/logoheader.png"
                            alt="Guinex Logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-1 justify-center space-x-12 lg:space-x-16 items-center font-bold text-lg">
                    <Link
                        href="/"
                        className={`transition-colors ${isActive("/") ? "text-[#F4B41A]" : "text-[#143D59] hover:text-[#F4B41A]"}`}
                        onClick={() => setCurrentHash("")}
                    >
                        Accueil
                    </Link>
                    <Link
                        href="/#services"
                        className={`transition-colors ${isActive("/", "#services") ? "text-[#F4B41A]" : "text-[#143D59] hover:text-[#F4B41A]"}`}
                        onClick={() => setCurrentHash("#services")}
                    >
                        Services
                    </Link>

                    {/* Partners Dropdown */}
                    <div className="relative group" suppressHydrationWarning>
                        <button
                            onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                            className={`flex items-center transition-colors font-bold text-lg focus:outline-none ${isPartnerActive ? "text-[#F4B41A]" : "text-[#143D59] hover:text-[#F4B41A]"}`}
                        >
                            Partenaires
                            <svg className={`ml-1 w-4 h-4 transition-transform ${isPartnersOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isPartnersOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-2 z-50 animate-reveal-subtle">
                                {partnerLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="block px-4 py-2 text-[#143D59] hover:bg-gray-50 hover:text-[#F4B41A] transition-colors text-base font-medium"
                                        onClick={() => setIsPartnersOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        href="/a-propos"
                        className={`transition-colors ${isActive("/a-propos") ? "text-[#F4B41A]" : "text-[#143D59] hover:text-[#F4B41A]"}`}
                    >
                        À propos
                    </Link>
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="text-[#143D59] hover:text-[#F4B41A] transition-colors font-bold text-lg"
                    >
                        Contact
                    </button>
                </nav>

                {/* Mobile Menu Button / Spacer for centering */}
                <div className="flex-shrink-0 w-[120px] md:w-[150px] flex justify-end" suppressHydrationWarning>
                    <button
                        className="md:hidden text-[#143D59]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t p-8 flex flex-col space-y-8 shadow-lg absolute w-full left-0 top-full font-bold">
                    <Link
                        href="/"
                        className={isActive("/") ? "text-[#F4B41A]" : "text-[#143D59]"}
                        onClick={() => {
                            setIsMenuOpen(false);
                            setCurrentHash("");
                        }}
                    >
                        Accueil
                    </Link>
                    <Link
                        href="/#services"
                        className={isActive("/", "#services") ? "text-[#F4B41A]" : "text-[#143D59]"}
                        onClick={() => {
                            setIsMenuOpen(false);
                            setCurrentHash("#services");
                        }}
                    >
                        Services
                    </Link>

                    {/* Mobile Partner Links (Flattened) */}
                    {partnerLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={pathname.startsWith(link.href) ? "text-[#F4B41A]" : "text-[#143D59]"}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/a-propos"
                        className={isActive("/a-propos") ? "text-[#F4B41A]" : "text-[#143D59]"}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        À propos
                    </Link>
                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            setIsContactModalOpen(true);
                        }}
                        className="text-[#143D59] hover:text-[#F4B41A] text-left font-bold"
                    >
                        Contact
                    </button>
                </div>
            )}

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </header>
    );
}



