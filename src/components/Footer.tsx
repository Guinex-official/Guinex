import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#143D59] text-white pt-24 relative overflow-hidden" suppressHydrationWarning>
            <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row relative z-10 pb-16" suppressHydrationWarning>
                {/* Left Column: Logo & Socials */}
                <div className="md:w-fit mb-10 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left md:pr-1 lg:pr-1 w-full md:w-auto" suppressHydrationWarning>
                    <div className="mb-6" suppressHydrationWarning>
                        <Image
                            src="/images/brand/logofooter.png"
                            alt="Guinex Logo Footer"
                            width={150}
                            height={50}
                            className="object-contain w-[140px] md:w-[160px]"
                        />
                    </div>
                    <div className="space-y-3 text-base md:text-lg font-medium w-full flex flex-col items-center md:items-start">
                        <Link href="https://www.facebook.com/profile.php?id=61586797093987&mibextid=wwXIfr" target="_blank" className="block hover:text-[#F4B41A] transition-colors underline decoration-1 underline-offset-4">• Facebook</Link>
                        <Link href="https://www.instagram.com/guinex_livraison?igsh=Z2ZvY3d2dXpjZDhl&utm_source=qr" target="_blank" className="block hover:text-[#F4B41A] transition-colors underline decoration-1 underline-offset-4">• Instagram</Link>
                        <Link href="https://www.linkedin.com/company/guinex-livraison-logistique/about/" target="_blank" className="block hover:text-[#F4B41A] transition-colors underline decoration-1 underline-offset-4">• LinkedIn</Link>
                        <Link href="https://api.whatsapp.com/message/YSOEJ42GH54ED1?autoload=1&app_absent=0" target="_blank" className="block hover:text-[#F4B41A] transition-colors underline decoration-1 underline-offset-4">• Whatsapp</Link>
                    </div>
                </div>

                {/* Middle Column: Contact Info with Separator */}
                <div className="md:w-fit mb-10 md:mb-0 md:mt-28 md:pl-12 lg:pl-16 md:border-l md:border-white/30 space-y-8 flex flex-col items-center md:items-start w-full md:w-auto" suppressHydrationWarning>
                    <a href="tel:224610292029" className="flex flex-col md:flex-row items-center text-base md:text-lg font-medium hover:text-[#F4B41A] transition-colors group/phone text-center md:text-left">
                        <div className="mb-2 md:mb-0 md:mr-4 flex items-center justify-center">
                            <Image src="/images/icons/phoneicon.png" width={24} height={24} alt="Phone" className="w-6 h-6 object-contain" priority />
                        </div>
                        <span className="text-base md:text-lg font-medium">610 29 20 29</span>
                    </a>
                    <div className="flex flex-col md:flex-row items-center text-base md:text-lg font-medium text-center md:text-left">
                        <div className="mb-2 md:mb-0 md:mr-4 flex items-center justify-center">
                            <Image src="/images/icons/cityicon.png" width={24} height={24} alt="City" className="w-6 h-6 object-contain" priority />
                        </div>
                        <span className="text-base md:text-lg font-medium">Conakry, Guinée</span>
                    </div>
                    <a href="mailto:guinex.contact@gmail.com" className="flex flex-col md:flex-row items-center text-base md:text-lg font-medium hover:text-[#F4B41A] transition-colors group/email text-center md:text-left">
                        <div className="mb-2 md:mb-0 md:mr-4 flex items-center justify-center">
                            <Image src="/images/icons/emailicon.png" width={24} height={24} alt="Email" className="w-6 h-6 object-contain" priority />
                        </div>
                        <span className="text-base md:text-lg font-medium shrink-0">guinex.contact@gmail.com</span>
                    </a>
                </div>
                {/* Right Column: Google Play Section */}
                <div className="md:w-fit md:mt-28 md:pl-12 lg:pl-16 md:border-l md:border-white/30 flex flex-col items-center md:items-start w-full md:w-auto mt-10 md:mt-28" suppressHydrationWarning>
                    <div className="flex flex-col items-center md:items-start mb-6 font-black uppercase italic tracking-tighter leading-[0.9]">
                        <span className="text-[#F4B41A] text-2xl md:text-3xl">Application</span>
                        <span className="text-blue-400 text-3xl md:text-4xl">bientôt</span>
                        <span className="text-[#F4B41A] text-2xl md:text-3xl">disponible</span>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-white/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                        <Image
                            src="/images/googleplay.PNG"
                            width={160}
                            height={48}
                            alt="Google Play"
                            className="relative object-contain h-12 w-auto brightness-110"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="container mx-auto max-w-7xl px-4 relative z-10" suppressHydrationWarning>
                <div className="border-t border-white/20 pt-8 pb-12 text-center">
                    <div className="flex flex-col items-center">
                        <p className="text-sm md:text-base text-white/70 font-medium tracking-wide">
                            © 2026 <span className="text-[#F4B41A]">Guinex Livraison Express</span>. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full pointer-events-none opacity-20 md:opacity-100">
                <Image
                    src="/images/shared/backgroundfooter.png"
                    alt="Support"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="right bottom"
                />
            </div>
        </footer>
    );
}
