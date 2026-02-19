"use client";

import { useEffect, useState } from "react";
import { X, Mail, MessageCircle } from "lucide-react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [isAnimate, setIsAnimate] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setTimeout(() => setIsAnimate(true), 10);
        } else {
            document.body.style.overflow = "unset";
            setIsAnimate(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className={`absolute inset-0 bg-[#143D59]/60 backdrop-blur-sm transition-opacity duration-300 ${isAnimate ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className={`relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 ${isAnimate ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
            >
                {/* Header */}
                <div className="bg-[#143D59] p-6 text-white text-center relative">
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="mx-auto w-16 h-1 w-1 bg-[#F4B41A] rounded-full mb-4"></div>
                    <h2 className="text-2xl font-bold">Nous contacter</h2>
                    <p className="text-white/80 font-light mt-1 text-sm">Comment préférez-vous nous joindre ?</p>
                </div>

                {/* Body */}
                <div className="p-8 space-y-4">
                    <a
                        href="https://wa.me/224610292029?text=Bonjour%20Guinex,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-5 rounded-2xl border-2 border-green-500/10 hover:border-green-500/30 hover:bg-green-50 transition-all group"
                    >
                        <div className="bg-green-500 p-3 rounded-xl text-white mr-4 group-hover:scale-110 transition-transform">
                            <MessageCircle className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-[#143D59] text-lg">WhatsApp</h3>
                            <p className="text-gray-500 text-sm">Discuter en direct avec notre équipe</p>
                        </div>
                    </a>

                    <a
                        href="mailto:guinex.contact@gmail.com?subject=Demande%20d'information%20Guinex"
                        className="flex items-center p-5 rounded-2xl border-2 border-[#143D59]/10 hover:border-[#143D59]/30 hover:bg-slate-50 transition-all group"
                    >
                        <div className="bg-[#143D59] p-3 rounded-xl text-white mr-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-[#143D59] text-lg">Email</h3>
                            <p className="text-gray-500 text-sm">Nous envoyer un message détaillé</p>
                        </div>
                    </a>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 p-4 text-center">
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Guinex Livraison Express</p>
                </div>
            </div>
        </div>
    );
}
