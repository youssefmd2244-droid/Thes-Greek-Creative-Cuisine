import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface FloatingControlsProps {
  lang: Language;
}

export default function FloatingControls({ lang }: FloatingControlsProps) {
  return (
    <>
      {/* 1. BOTTOM LEFT: WhatsApp Button (Pulsing & Rotating) */}
      <motion.a
        id="floating-whatsapp-btn"
        href="https://wa.me/302103212858"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] border-2 border-white cursor-pointer focus:outline-none"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        whileHover={{ scale: 1.15, filter: "brightness(1.1)" }}
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        {/* Glow pulsing ring around */}
        <span className="absolute inset-0 rounded-full border-4 border-[#25d366] opacity-75 animate-ping" />
      </motion.a>

      {/* 2. BOTTOM RIGHT: Call Button (Pulsing & Rotating) */}
      <motion.a
        id="floating-call-btn"
        href="tel:+302103212858"
        aria-label="Call Restaurant"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-tr from-[#d4af37] to-[#f1cc5b] text-[#050914] rounded-full shadow-[0_8px_30px_rgba(212,175,55,0.4)] border-2 border-white cursor-pointer focus:outline-none"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          scale: {
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        whileHover={{ scale: 1.15, filter: "brightness(1.15)" }}
      >
        <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="absolute inset-0 rounded-full border-4 border-[#d4af37] opacity-75 animate-ping" />
      </motion.a>
    </>
  );
}

