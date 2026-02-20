import Image from "next/image";

export default function Services() {
    return (
        <section id="services" className="pt-10 pb-24 md:py-32 bg-white relative overflow-hidden" suppressHydrationWarning>
            <div className="container mx-auto max-w-7xl px-4 relative z-10" suppressHydrationWarning>
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20" suppressHydrationWarning>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#143D59] mb-8">
                        À qui s'adresse Guinex ?
                    </h2>
                    <div className="h-1.5 w-20 bg-[#F4B41A] mx-auto rounded-full" suppressHydrationWarning></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-5xl mx-auto" suppressHydrationWarning>
                    {/* Card 1: Entreprises */}
                    <div className="flex flex-col h-full bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300" suppressHydrationWarning>
                        {/* Card Header */}
                        <div className="bg-[#143D59] py-4 px-6 text-center flex items-center justify-center space-x-3 w-full z-10 relative">
                            <Image src="/images/icons/entrepriseicon.png" width={24} height={24} alt="icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" priority />
                            <h3 className="text-sm md:text-base font-extrabold text-[#F4B41A] uppercase tracking-wide">
                                Pour les entreprises
                            </h3>
                        </div>
                        {/* Card Body */}
                        <div className="bg-[#eff1f3] p-6 md:p-10 flex-grow w-full border border-gray-100 border-t-0">
                            <ul className="space-y-6">
                                <li className="flex items-center justify-start text-[#143D59] text-base md:text-lg font-medium">
                                    <div className="mr-4 flex-shrink-0 bg-white p-2 rounded-lg shadow-sm" suppressHydrationWarning>
                                        <Image src="/images/icons/repasicon.png" width={24} height={24} alt="icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" priority />
                                    </div>
                                    <span className="leading-tight">Livraison de repas pour les équipes</span>
                                </li>
                                <li className="flex items-center justify-start text-[#143D59] text-base md:text-lg font-medium">
                                    <div className="mr-4 flex-shrink-0 bg-white p-2 rounded-lg shadow-sm" suppressHydrationWarning>
                                        <Image src="/images/icons/serviceicon.png" width={24} height={24} alt="icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" priority />
                                    </div>
                                    <span className="leading-tight">Service coursier</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Particuliers */}
                    <div className="flex flex-col h-full bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300" suppressHydrationWarning>
                        {/* Card Header */}
                        <div className="bg-[#F4B41A] py-4 px-6 text-center flex items-center justify-center space-x-3 w-full z-10 relative">
                            <Image src="/images/icons/manicon.png" width={24} height={24} alt="icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" priority />
                            <h3 className="text-sm md:text-base font-extrabold text-[#143D59] uppercase tracking-wide">
                                Pour les particuliers
                            </h3>
                        </div>
                        {/* Card Body */}
                        <div className="bg-[#eff1f3] p-6 md:p-10 flex-grow w-full border border-gray-100 border-t-0">
                            <ul className="space-y-6">
                                <li className="flex items-center justify-start text-[#143D59] text-base md:text-lg font-medium">
                                    <div className="mr-4 flex-shrink-0 bg-white p-2 rounded-lg shadow-sm" suppressHydrationWarning>
                                        <Image src="/images/icons/repasicon.png" width={24} height={24} alt="icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" priority />
                                    </div>
                                    <span className="leading-tight">Livraison de repas</span>
                                </li>
                                <li className="flex items-center justify-start text-[#143D59] text-base md:text-lg font-medium">
                                    <div className="mr-4 flex-shrink-0 bg-white p-2 rounded-lg shadow-sm" suppressHydrationWarning>
                                        <Image src="/images/icons/colisicon.png" width={24} height={24} alt="icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" priority />
                                    </div>
                                    <span className="leading-tight">Livraison de colis</span>
                                </li>
                                <li className="flex items-center justify-start text-[#143D59] text-base md:text-lg font-medium">
                                    <div className="mr-4 flex-shrink-0 bg-white p-2 rounded-lg shadow-sm" suppressHydrationWarning>
                                        <Image src="/images/icons/document.png" width={24} height={24} alt="icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" priority />
                                    </div>
                                    <span className="leading-tight">Courses et documents</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
