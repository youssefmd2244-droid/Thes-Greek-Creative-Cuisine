import { motion } from 'motion/react';
import { Globe, Menu as Hamburger, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  langToggle: () => void;
}

export default function Header({ lang, setLang, langToggle }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Translations
  const navItems = [
    { labelEn: 'Home', labelEl: 'Αρχική', href: '#home' },
    { labelEn: 'About Us', labelEl: 'Το Εστιατόριο', href: '#about' },
    { labelEn: 'Menu', labelEl: 'Μενού', href: '#menu' },
    { labelEn: 'The Team', labelEl: 'Η Ομάδα', href: '#team' },
    { labelEn: 'ICON Code Code', labelEl: 'ICON Code', href: '#icon-code' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-45 bg-[#050914]/85 backdrop-blur-md border-b border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-full border border-luxury-gold flex items-center justify-center bg-[#091122] shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
            <span className="font-display text-xs text-luxury-gold tracking-widest font-semibold">T.</span>
          </div>
          <div>
            <span className="block font-display text-sm tracking-[0.25em] text-white uppercase group-hover:text-luxury-gold transition-colors">
              thes
            </span>
            <span className="block text-[8px] tracking-[0.18em] text-[#d4af37] uppercase font-light">
              greek creative cuisine
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-widest text-[#ece8e1]/75 hover:text-luxury-gold transition-colors font-sans py-1 relative group"
            >
              {lang === 'en' ? item.labelEn : item.labelEl}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions & Language Toggle */}
        <div className="flex items-center gap-4">
          {/* Dual Toggle Button with Premium Animation */}
          <button
            onClick={langToggle}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-luxury-gold/30 hover:border-luxury-gold bg-[#0e1629] text-xs font-mono uppercase tracking-wider text-luxury-stone hover:text-luxury-gold cursor-pointer transition-all"
            title={lang === 'en' ? 'Αλλαγή σε Ελληνικά' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-luxury-gold animate-spin-slow" />
            <span>{lang === 'en' ? 'Ελληνικά (GR)' : 'English (EN)'}</span>
          </button>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-luxury-stone hover:text-luxury-gold cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Hamburger className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          id="mobile-nav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#050914] border-b border-luxury-gold/25 absolute left-0 right-0 p-6 z-50 flex flex-col gap-6 shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest text-luxury-stone hover:text-luxury-gold transition-colors font-sans border-b border-luxury-gold/10 pb-2"
              >
                {lang === 'en' ? item.labelEn : item.labelEl}
              </a>
            ))}
          </div>

          <div className="flex justify-between items-center bg-[#0d1629] p-3 rounded-lg border border-luxury-gold/20">
            <span className="text-xs text-gray-400">
              {lang === 'en' ? 'Selected Language:' : 'Επιλεγμένη Γλώσσα:'}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setLang('el');
                  setIsOpen(false);
                }}
                className={`px-3 py-1 text-xs rounded font-mono ${
                  lang === 'el'
                    ? 'bg-luxury-gold text-[#050914] font-semibold'
                    : 'text-luxury-stone hover:text-white'
                }`}
              >
                ΕΛ
              </button>
              <button
                onClick={() => {
                  setLang('en');
                  setIsOpen(false);
                }}
                className={`px-3 py-1 text-xs rounded font-mono ${
                  lang === 'en'
                    ? 'bg-luxury-gold text-[#050914] font-semibold'
                    : 'text-luxury-stone hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
