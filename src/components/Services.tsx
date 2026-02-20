import Image from "next/image";

export default function Services() {
    return (
        <section id="services" className="pt-6 pb-24 md:py-32 bg-white relative overflow-hidden" suppressHydrationWarning>
            <div className="container mx-auto max-w-7xl px-4 relative z-10" suppressHydrationWarning>
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20" suppressHydrationWarning>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#143D59] mb-8">
                        À qui s'adresse Guinex ?
                    </h2>
                    <div className="h-1.5 w-20 bg-[#F4B41A] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-5xl mx-auto" suppressHydrationWarning>
                    {/* Card 1: Entreprises */}
                    <div className="flex flex-col">
                        {/* Card Header */}
                        <div className="bg-[#D1D9E1] py-3 px-6 text-center flex items-center justify-center space-x-3 rounded-t-2xl shadow-md w-full z-10 relative">
                            <Image src="/images/icons/entrepriseicon.png" width={24} height={24} alt="icon" className="w-6 h-6 object-contain" priority />
                            <h3 className="text-lg md:text-xl font-bold text-[#143D59]">
                                Pour les entreprises
                            </h3>
                        </div>
                        {/* Card Body */}
                        <div className="bg-[#eff1f3] rounded-b-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex-grow border border-gray-100 border-t-0 w-full">
                            <ul className="space-y-6">
                                <li className="flex items-center text-[#143D59] text-base md:text-lg">
                                    <div className="mr-4 flex-shrink-0">
                                        <Image src="/images/icons/repasicon.png" width={24} height={24} alt="icon" className="w-6 h-6 object-contain" priority />
                                    </div>
                                    <span>Livraison de repas pour les équipes</span>
                                </li>
                                <li className="flex items-center text-[#143D59] text-base md:text-lg">
                                    <div className="mr-4 flex-shrink-0">
                                        <Image src="/images/icons/serviceicon.png" width={24} height={24} alt="icon" className="w-6 h-6 object-contain" priority />
                                    </div>
                                    <span>Service coursier</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Particuliers */}
                    <div className="flex flex-col">
                        {/* Card Header */}
                        <div className="bg-[#D1D9E1] py-3 px-6 text-center flex items-center justify-center space-x-3 rounded-t-2xl shadow-md w-full z-10 relative">
                            <Image src="/images/icons/manicon.png" width={24} height={24} alt="icon" className="w-6 h-6 object-contain" priority />
                            <h3 className="text-lg md:text-xl font-bold text-[#143D59]">
                                Pour les particuliers
                            </h3>
                        </div>
                        {/* Card Body */}
                        <div className="bg-[#eff1f3] rounded-b-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex-grow border border-gray-100 border-t-0 w-full">
                            <ul className="space-y-6">
                                <li className="flex items-center text-[#143D59] text-base md:text-lg">
                                    <div className="mr-4 flex-shrink-0">
                                        <Image src="/images/icons/repasicon.png" width={24} height={24} alt="icon" className="w-6 h-6 object-contain" priority />
                                    </div>
                                    <span>Livraison de repas</span>
                                </li>
                                <li className="flex items-center text-[#143D59] text-base md:text-lg">
                                    <div className="mr-4 flex-shrink-0">
                                        <Image src="/images/icons/colisicon.png" width={24} height={24} alt="icon" className="w-6 h-6 object-contain" priority />
                                    </div>
                                    <span>Livraison de colis</span>
                                </li>
                                <li className="flex items-center text-[#143D59] text-base md:text-lg">
                                    <div className="mr-4 flex-shrink-0">
                                        <Image src="/images/icons/document.png" width={24} height={24} alt="icon" className="w-6 h-6 object-contain" priority />
                                    </div>
                                    <span>Courses et documents</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
