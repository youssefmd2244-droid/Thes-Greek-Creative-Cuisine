import { motion } from 'motion/react';
import { Code, ShoppingCart, BarChart, Palette, CheckCircle, ExternalLink, Mail } from 'lucide-react';
import { Language } from '../types';

interface IconCodeShowcaseProps {
  lang: Language;
}

export default function IconCodeShowcase({ lang }: IconCodeShowcaseProps) {
  // Translations
  const t = {
    badge: lang === 'en' ? 'OUR DIGITAL ARCHITECTS' : 'ΟΙ ΨΗΦΙΑΚΟΙ ΜΑΣ ΑΡΧΙΤΕΚΤΟΝΕΣ',
    title: lang === 'en' ? 'The Craft by ICON Code' : 'Η Δημιουργία της ICON Code',
    intro: lang === 'en' 
      ? 'ICON Code is a leading digital solutions firm dedicated to empowering businesses with cutting-edge technology. Connect with the ICON Code team for high-end digital solutions in Egypt 🇪🇬, Saudi Arabia 🇸🇦, and the UAE 🇦🇪.'
      : 'Η ICON Code είναι μια κορυφαία εταιρεία ψηφιακών λύσεων, αφοσιωμένη στην ενδυνάμωση επιχειρήσεων με τεχνολογία αιχμής. Για επικοινωνία με την ομάδα της ICON Code, η οποία παρέχει υπηρεσίες παγκόσμιας κλάσης σε Αίγυπτο 🇪🇬, Σαουδική Αραβία 🇸🇦 και ΗΑΕ 🇦🇪.',
    contactTitle: lang === 'en' ? 'Direct support & consultation' : 'Άμεση Υποστήριξη & Διαβούλευση',
    egyptOff: lang === 'en' ? 'Sales Office, Egypt' : 'Γραφείο Πωλήσεων, Αίγυπτος',
    ksaOff: lang === 'en' ? 'Tech Support, Saudi Arabia' : 'Τεχνική Υποστήριξη, Σαουδική Αραβία',
    callUs: lang === 'en' ? 'Call Support' : 'Κλήση Υποστήριξης',
    chatWhatsApp: lang === 'en' ? 'Chat on WhatsApp' : 'Συνομιλία στο WhatsApp',
    founded: lang === 'en' ? 'Founded 2023' : 'Έτος Ίδρυσης 2023',
    founderLabel: lang === 'en' ? 'Contact' : 'Επικοινωνία',
  };

  const services = [
    {
      icon: Code,
      titleEn: 'Tailored Web Development',
      titleEl: 'Σχεδιασμός Κλασικών Ιστοσελίδων',
      descEn: 'Modern, high-performance web applications and progressive web apps (PWAs) with zero latency.',
      descEl: 'Σύγχρονες ιστοσελίδες υψηλών ταχυτήτων (PWA) που λειτουργούν χωρίς διακοπή, ακόμα και εκτός σύνδεσης.',
      tag: 'Next.js / React'
    },
    {
      icon: ShoppingCart,
      titleEn: 'Bespoke E-commerce',
      titleEl: 'Ηλεκτρονικό Εμπόριο (E-commerce)',
      descEn: 'Scaling retail brands with secure custom checkouts, payment channels, and swift user flows.',
      descEl: 'Ανάπτυξη ηλεκτρονικών καταστημάτων, βελτιστοποιημένων για πωλήσεις με ασφαλείς πληρωμές.',
      tag: 'Custom Platforms'
    },
    {
      icon: BarChart,
      titleEn: 'Advanced Cashier Systems',
      titleEl: 'Έξυπνα Συστήματα Ταμειακής (POS)',
      descEn: 'Robust, server-synchronized pos cashier software custom-built for high-pressure fine dining environments.',
      descEl: 'Αξιόπιστο λογισμικό ταμείου με άμεσο συγχρονισμό, ιδανικό για εστιατόρια υψηλών απαιτήσεων.',
      tag: 'POS Integrated'
    },
    {
      icon: Palette,
      titleEn: 'Creative Branding Designs',
      titleEl: 'Δημιουργικό Graphic Design & GRC',
      descEn: 'Artistic visuals, premium menu layout setups, video curation, professional photoshop work, and customized GRC architecture planning.',
      descEl: 'Εταιρική ταυτότητα, σχεδίαση μενού, επεξεργασία βίντεο, Photoshop και αρχιτεκτονικός σχεδιασμός GRC.',
      tag: 'Brand Identity'
    }
  ];

  return (
    <section id="icon-code" className="py-24 bg-[#050914] relative border-t border-[#d4af37]/10">
      
      {/* Decorative backdrop mesh */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-900/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] block mb-3 font-display">
            {t.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-widest font-normal mb-6">
            {t.title}
          </h2>
          <div className="w-16 h-[1px] bg-[#d4af37] mb-6" />
          <p className="text-[#ece8e1]/80 text-base leading-relaxed max-w-2xl font-sans">
            {t.intro}
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono text-[#d4af37]">
            <span className="flex items-center gap-1.5 bg-[#091122] px-3 py-1 rounded border border-[#d4af37]/25">
              <CheckCircle className="w-3.5 h-3.5 text-green-400" /> {t.founded}
            </span>
            <span className="flex items-center gap-1.5 bg-[#091122] px-3 py-1 rounded border border-[#d4af37]/25">
              <CheckCircle className="w-3.5 h-3.5 text-green-400" /> {lang === 'en' ? 'Connect with: ICON Code Team' : 'Επικοινωνία: Ομάδα ICON Code'}
            </span>
          </div>
        </div>

        {/* Bento Grid Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#091122] border border-[#d4af37]/15 p-8 rounded-2xl flex flex-col justify-between group hover:border-[#d4af37]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#d4af37]/10 to-[#f1cc5b]/10 border border-[#d4af37]/35 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#050914] transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-[#12203d] px-2.5 py-1 rounded text-gray-400 tracking-wider">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-white group-hover:text-[#d4af37] transition-colors mb-3">
                    {lang === 'en' ? service.titleEn : service.titleEl}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                    {lang === 'en' ? service.descEn : service.descEl}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#d4af37] group-hover:translate-x-1.5 transition-transform duration-300">
                  <span>{lang === 'en' ? 'Learn more' : 'Μάθετε περισσότερα'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Support & Action Portal */}
        <div className="bg-gradient-to-br from-[#0c162b] to-[#060b16] border border-[#d4af37]/20 p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1877F2]/5 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Mail className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-lg font-serif text-white mb-2">{t.contactTitle}</h4>
              <p className="text-gray-400 text-xs sm:text-sm max-w-xl font-sans">
                {lang === 'en' 
                  ? 'Get in touch with the ICON Code Team and our professional engineers to create premium web environments and point-of-sale configurations.'
                  : 'Επικοινωνήστε με την ομάδα της ICON Code και τους έμπειρους μηχανικούς μας για κορυφαίες ιστοσελίδες ή συστήματα POS.'}
              </p>
            </div>
          </div>

          {/* Action Links & Phone numbers */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto self-stretch lg:self-center">
            {/* Egypt Office */}
            <div className="flex-1 lg:flex-none p-4 rounded-xl bg-luxury-navy border border-gray-800 flex flex-col justify-between">
              <div className="text-[10px] uppercase font-mono text-gray-500 mb-2">{t.egyptOff}</div>
              <div className="font-mono text-sm text-white mb-3 font-semibold">+20 109 455 5299</div>
              <div className="flex gap-2">
                <a
                  href="tel:+201094555299"
                  className="flex-1 text-center bg-[#d4af37] hover:bg-[#f1cc5b] text-[#050914] text-xs font-sans font-semibold py-1.5 px-3 rounded transition-colors"
                >
                  {t.callUs}
                </a>
                <a
                  href="https://wa.me/201094555299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-green-600 hover:bg-green-500 text-white text-xs font-sans font-semibold py-1.5 px-3 rounded transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* KSA Technical Support */}
            <div className="flex-1 lg:flex-none p-4 rounded-xl bg-luxury-navy border border-gray-800 flex flex-col justify-between">
              <div className="text-[10px] uppercase font-mono text-gray-500 mb-2">{t.ksaOff}</div>
              <div className="font-mono text-sm text-white mb-3 font-semibold">+966 9200 28226</div>
              <div className="flex gap-2">
                <a
                  href="tel:+966920028226"
                  className="flex-1 text-center bg-[#d4af37] hover:bg-[#f1cc5b] text-[#050914] text-xs font-sans font-semibold py-1.5 px-4 rounded transition-colors"
                >
                  {t.callUs}
                </a>
                <a
                  href="https://wa.me/966920028226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-green-600 hover:bg-green-500 text-white text-xs font-sans font-semibold py-1.5 px-4 rounded transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
