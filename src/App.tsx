import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Clock, MapPin, Phone, MessageSquare, Star, Sparkles, ChevronDown, Award, Compass, Heart, Facebook, Mail, MessageCircle } from 'lucide-react';

import { Language } from './types';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import IconCodeShowcase from './components/IconCodeShowcase';
import FloatingControls from './components/FloatingControls';
import { TESTIMONIALS } from './data';

// Bidirectional scroll-reveal wrapper
// Slides up from below when entering, slides up and fades when leaving above
function Reveal({
  children,
  delay = 0,
  className = '',
  y = 48,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.12, margin: '0px 0px -40px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('el'); // Defaulting to Greek as requested

  // Prevent background glitching & track scroll progress
  useEffect(() => {
    // Global scrolling adjustments if required
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'el' ? 'en' : 'el'));
  };

  // Main UI Translations
  const t = {
    heroTitle: 'THES',
    heroTaglineEn: 'Greek Creative Cuisine',
    heroTaglineEl: 'Greek Creative Cuisine',
    heroDescEn: 'An epicurean sanctuary in Psiri, Athens, elevating timeless Hellenic gastronomy through technical innovation and artistic expression.',
    heroDescEl: 'Ένα γαστρονομικό καταφύγιο στου Ψυρρή, που εξυψώνει την κλασική ελληνική κουζίνα μέσα από σύγχρονες τεχνικές και καλλιτεχνική έκφραση.',
    exploreMenuEn: 'Explore Our Menu',
    exploreMenuEl: 'Εξερευνήστε το Μενού',
    bookTableEn: 'Call to Reserve',
    bookTableEl: 'Κράτηση Τραπεζιού',
    
    // Philosophy Section
    aboutLabelEn: 'Our Philosophy',
    aboutLabelEl: 'Η Φιλοσοφία Μας',
    aboutTitleEn: 'Where Antiquity Meets Tomorrow',
    aboutTitleEl: 'Όταν η Παράδοση Συναντά το Αύριο',
    aboutPara1En: 'Nestled on Taki Street in the historic core of Psiri, Thes represents a courageous renaissance of Greek culinary arts. We reject the generic and the expected; here, locally-sourced ingredients from the Aegean islands are transformed with modern culinary techniques.',
    aboutPara1El: 'Στην οδό Τάκη, στην ιστορική καρδιά του Ψυρρή, το Thes αντιπροσωπεύει μια τολμηρή αναγέννηση της ελληνικής γαστρονομίας. Απορρίπτουμε το συνηθισμένο. Εδώ, εκλεκτά προϊόντα από τα ελληνικά νησιά μεταμορφώνονται με σύγχρονες γαστρονομικές τεχνικές.',
    aboutPara2En: 'Our dining room marries raw, warm masonry stone walls with deep slate accents, intimate custom-molded lights, and fresh red flowers—crafting a sophisticated Athenian ambiance that feeds all five senses.',
    aboutPara2El: 'Η σάλα μας συνδυάζει τους ζεστούς, πέτρινους τοίχους με βαθιές αποχρώσεις του μπλε και του γκρι, αρωματικά φρέσκα λουλούδια και ατμοσφαιρικό φωτισμό – δημιουργώντας μια εκλεπτυσμένη αθηναϊκή ατμόσφαιρα.',
    
    // Testimonials
    criticsEn: 'What Gastronomers Say',
    criticsEl: 'Τι Λένε οι Κριτικοί Μας',
    
    // Location Info Card
    locationCardEn: 'Visit Our Sanctuary',
    locationCardEl: 'Επισκεφθείτε Μας',
    addressEn: 'Taki 16, Athina 105 54, Greece',
    addressEl: 'Τάκη 16, Ψυρρή, Αθήνα 105 54',
    workingHoursEn: 'Mon - Sun: 13:00 - 00:00',
    workingHoursEl: 'Δεύτερα - Κυριακή: 13:00 - 00:00',
    directionsEn: 'Open Google Maps',
    directionsEl: 'Οδηγίες στους Χάρτες',

    // Footer
    footerMottoEn: 'Bespoke Hellenic gastronomy, delivered with uncompromising precision.',
    footerMottoEl: 'Εξατομικευμένη ελληνική γαστρονομία, σχεδιασμένη με ασυμβίβαστη ακρίβεια.',
    rightsEn: 'All rights reserved.',
    rightsEl: 'Με επιφύλαξη παντός δικαιώματος.',
    creatorTextEn: 'Crafted with passion by technology partner',
    creatorTextEl: 'Δημιουργήθηκε με πάθος από τον ψηφιακό συνεργάτη'
  };

  return (
    <div id="application-container" className="font-sans antialiased bg-luxury-navy text-luxury-stone overflow-x-hidden">
      
      {/* 1. Header with Language states */}
      <Header lang={lang} setLang={setLang} langToggle={toggleLanguage} />

      {/* 2. Immaculate Hero Intro Section */}
      <section id="home" className="relative min-h-[92vh] flex items-center justify-center py-20 px-6">
        
        {/* Ambient video-vibe background picture using high quality dim restaurant light scene */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1920"
            alt="Thes Restaurant Ambiance"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.25] scale-102"
          />
          {/* Subtle slow gold radial shadow */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050914]/75 to-[#050914]" />
          {/* Blue / Gold color splash gradient */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#050914] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050914] to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          
          {/* Olive Branch Accent Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="w-16 h-16 rounded-full border border-luxury-gold/40 flex items-center justify-center bg-luxury-navy/80 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
              <Compass className="w-8 h-8 text-luxury-gold animate-spin-slow" />
            </div>
          </motion.div>

          {/* Majestic Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.18em] text-white font-normal leading-none select-none mb-4"
          >
            {t.heroTitle}
          </motion.h1>

          {/* Sophisticated Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="flex items-center gap-4 justify-center mb-8"
          >
            <span className="h-1px w-10 bg-luxury-gold/50" />
            <h2 className="text-sm sm:text-base tracking-[0.3em] text-[#d4af37] uppercase font-display font-medium">
              {lang === 'en' ? t.heroTaglineEn : t.heroTaglineEl}
            </h2>
            <span className="h-1px w-10 bg-luxury-gold/50" />
          </motion.div>

          {/* Premium Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-300 font-serif text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto italic mb-12"
          >
            "{lang === 'en' ? t.heroDescEn : t.heroDescEl}"
          </motion.p>

          {/* Interactive Button Calls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#menu"
              className="w-full sm:w-auto bg-[#d4af37] hover:bg-[#f1cc5b] text-[#050914] py-4 px-8 rounded-full text-xs uppercase tracking-widest font-sans font-semibold transition-all shadow-[0_5px_25px_rgba(212,175,55,0.4)] cursor-pointer hover:scale-102"
            >
              {lang === 'en' ? t.exploreMenuEn : t.exploreMenuEl}
            </a>
            
            <a
              href="tel:+302103212858"
              className="w-full sm:w-auto bg-[#091122]/90 hover:bg-[#d4af37]/15 text-[#ece8e1] hover:text-[#d4af37] border border-[#d4af37]/30 hover:border-[#d4af37] py-4 px-8 rounded-full text-xs uppercase tracking-widest font-sans font-semibold transition-all backdrop-blur cursor-pointer"
            >
              {lang === 'en' ? t.bookTableEn : t.bookTableEl}
            </a>
          </motion.div>

          {/* Micro Animation indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 cursor-pointer"
          >
            <a href="#about" aria-label="Scroll down">
              <ChevronDown className="w-5 h-5 text-luxury-gold" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. About Us / Culinary Philosophy (Authentic Athens dining presentation) */}
      <section id="about" className="py-24 bg-[#050914] relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image Composition resembling Athens rustic masonry wall atmosphere & cozy food setups */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4">
            
            {/* Main cozy restaurant light scene */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.8 }}
              className="col-span-8 overflow-hidden rounded-2xl border border-luxury-gold/10 aspect-[4/5] bg-luxury-navy shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
                alt="Cozy Athenian stone interior lighting"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Side premium food setting */}
            <div className="col-span-4 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.12 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="overflow-hidden rounded-2xl border border-luxury-gold/10 aspect-square bg-luxury-navy shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=400"
                  alt="High-end Greek appetizer plate"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.12 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="overflow-hidden rounded-2xl border border-luxury-gold/10 bg-[#0d1527] flex-grow flex flex-col justify-center items-center p-4 text-center shadow-lg"
              >
                <Award className="w-8 h-8 text-luxury-gold mb-2" />
                <span className="font-display text-[9px] uppercase tracking-widest text-[#d4af37] font-bold">
                  Top 10 Global
                </span>
                <span className="text-[10px] text-gray-400 mt-1">
                  Travellers Choice
                </span>
              </motion.div>
            </div>
            
          </div>

          {/* Column 2: Editorial Philosophy Text Column */}
          <Reveal delay={0.15} className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] block mb-3 font-display">
              {lang === 'en' ? t.aboutLabelEn : t.aboutLabelEl}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-white tracking-widest font-normal mb-6">
              {lang === 'en' ? t.aboutTitleEn : t.aboutTitleEl}
            </h3>
            
            <div className="w-12 h-[1px] bg-luxury-gold mb-8" />

            <div className="space-y-6 text-[#ece8e1]/85 font-sans text-sm sm:text-base leading-relaxed">
              <p className="font-serif italic text-lg text-gray-300">
                "{lang === 'en' ? t.aboutPara1En : t.aboutPara1El}"
              </p>
              <p>
                {lang === 'en' ? t.aboutPara2En : t.aboutPara2El}
              </p>
            </div>

            {/* Quick stats elements */}
            <div className="grid grid-cols-3 gap-4 mt-12 border-t border-luxury-gold/10 pt-8 font-display">
              <div>
                <span className="block text-2xl font-semibold text-[#d4af37]">100%</span>
                <span className="block text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                  {lang === 'en' ? 'Fresh Aegean' : 'Φρέσκα Υλικά'}
                </span>
              </div>
              <div>
                <span className="block text-2xl font-semibold text-[#d4af37]">#8</span>
                <span className="block text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                  {lang === 'en' ? 'In World list' : 'Στην Παγκόσμια Λίστα'}
                </span>
              </div>
              <div>
                <span className="block text-2xl font-semibold text-[#d4af37]">0km</span>
                <span className="block text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                  {lang === 'en' ? 'Local craft' : 'Τοπικά Προϊόντα'}
                </span>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 4. The Menu Section (Food, Drinks, Addons with dynamic WhatsApp preorder text) */}
      <MenuSection lang={lang} />

      {/* 5. Ambient Testimonials segment */}
      <section id="team" className="py-24 bg-[#050914] relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] block mb-3 font-display">
              {lang === 'en' ? 'The Guest Ledger' : 'Το Βιβλίο των Φιλοξενούμενων'}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white tracking-widest font-normal uppercase">
              {lang === 'en' ? t.criticsEn : t.criticsEl}
            </h3>
            <div className="w-12 h-[1px] bg-luxury-gold mx-auto mt-4" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((test, idx) => (
              <Reveal key={test.id} delay={idx * 0.12}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                className="bg-[#091122] border border-luxury-gold/10 p-8 rounded-2xl flex flex-col justify-between shadow-lg"
              >
                <div className="mb-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1.5 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                  {/* Critic Content */}
                  <p className="text-gray-300 font-serif italic text-base leading-relaxed">
                    "{lang === 'en' ? test.textEn : test.textEl}"
                  </p>
                </div>
                {/* Author Info */}
                <div className="border-t border-luxury-gold/10 pt-4 flex items-center justify-between">
                  <div>
                    <h5 className="font-display text-sm tracking-wider text-white font-semibold">
                      {test.name}
                    </h5>
                    <span className="text-xs text-luxury-gold font-sans block mt-0.5">
                      {lang === 'en' ? test.roleEn : test.roleEl}
                    </span>
                  </div>
                  <Sparkles className="w-5 h-5 text-luxury-gold/30" />
                </div>
              </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Professional Digital Solutions Partner: ICON Code Section */}
      <IconCodeShowcase lang={lang} />

      {/* 7. Beautiful Location Spotlight & Hours Info Card */}
      <section id="location-spotlight" className="py-24 bg-[#070c18] border-t border-[#d4af37]/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Columns left: Detail Panel */}
            <Reveal className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] block mb-3 font-display">
                  {lang === 'en' ? 'Reservations & Address' : 'Κρατήσεις & Διεύθυνση'}
                </span>
                <h3 className="font-display text-3xl text-white tracking-widest font-normal">
                  {lang === 'en' ? t.locationCardEn : t.locationCardEl}
                </h3>
                <div className="w-16 h-[1px] bg-luxury-gold mt-4" />
              </div>

              {/* Specific info bullets */}
              <div className="space-y-6 font-sans">
                {/* Address block */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold border border-luxury-gold/25">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                      {lang === 'en' ? 'Location' : 'Τοποθεσία'}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {lang === 'en' ? t.addressEn : t.addressEl}
                    </p>
                  </div>
                </div>

                {/* Opening hours block */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold border border-luxury-gold/25">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                      {lang === 'en' ? 'Operating Hours' : 'Ωράριο Λειτουργίας'}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {lang === 'en' ? t.workingHoursEn : t.workingHoursEl}
                    </p>
                  </div>
                </div>

                {/* Telephone line block */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold border border-luxury-gold/25">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                      {lang === 'en' ? 'Direct Telephone Link' : 'Άμεση Γραμμή'}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      +30 21 0321 2858
                    </p>
                  </div>
                </div>
              </div>

              {/* Premium, Non-Floating Social & Contact Hub (Facebook, Messenger, Email, Location) */}
              <div className="pt-6 border-t border-luxury-gold/10 space-y-4">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-3">
                  {lang === 'en' ? 'Interactive Contact & Socials' : 'Διαδραστική Επικοινωνία & Socials'}
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Facebook Button */}
                  <a
                    href="https://web.facebook.com/profile.php?id=100049612575790&cah=2&rwtsid=cSUdRS1dwClKT650g#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#091122]/90 hover:bg-[#1877F2]/15 border border-[#d4af37]/25 hover:border-[#1877F2]/50 p-3.5 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-all">
                      <Facebook className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[11px] font-semibold text-white group-hover:text-[#d4af37] transition-colors leading-none mb-1">Facebook</span>
                      <span className="block text-[9px] text-gray-500 leading-none">@thes.creative</span>
                    </div>
                  </a>

                  {/* Facebook Messenger Button */}
                  <a
                    href="https://m.me/100049612575790"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#091122]/90 hover:bg-[#00B2FF]/15 border border-[#d4af37]/25 hover:border-[#00B2FF]/50 p-3.5 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#00B2FF]/10 flex items-center justify-center text-[#00B2FF] group-hover:bg-[#00B2FF] group-hover:text-white transition-all">
                      <MessageCircle className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[11px] font-semibold text-white group-hover:text-[#d4af37] transition-colors leading-none mb-1">Messenger</span>
                      <span className="block text-[9px] text-gray-500 leading-none">Thes Message Portal</span>
                    </div>
                  </a>

                  {/* Email Button */}
                  <a
                    href="mailto:thespsirri@gmail.com"
                    className="flex items-center gap-3 bg-[#091122]/90 hover:bg-[#d4af37]/15 border border-[#d4af37]/25 hover:border-[#d4af37]/50 p-3.5 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-black transition-all">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-left truncate">
                      <span className="block text-[11px] font-semibold text-white group-hover:text-[#d4af37] transition-colors leading-none mb-1">Gmail Support</span>
                      <span className="block text-[9px] text-gray-400 truncate leading-none">thespsirri@gmail.com</span>
                    </div>
                  </a>

                  {/* Location Map Button */}
                  <a
                    href="https://share.google/7ctgf2izqnaMsJqup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#091122]/90 hover:bg-luxury-gold hover:text-black border border-[#d4af37]/35 p-3.5 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-[#d4af37]/25 flex items-center justify-center text-[#d4af37] group-hover:bg-black/10 group-hover:text-black transition-all">
                      <Compass className="w-4.5 h-4.5 animate-spin-slow" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[11px] font-semibold text-white group-hover:text-black transition-colors leading-none mb-1">{lang === 'en' ? 'Directions' : 'Οδηγίες'}</span>
                      <span className="block text-[9px] text-gray-400 group-hover:text-black/80 transition-colors leading-none">{lang === 'en' ? 'Open in Maps' : 'Χάρτης Google'}</span>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Column right: Map Representation / high fidelity location visual cards */}
            <Reveal delay={0.2} className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                className="bg-[#091122] rounded-2xl overflow-hidden border border-luxury-gold/25 shadow-2xl aspect-[16/10] relative flex items-center justify-center group"
              >
                {/* Fake luxury static dark map rendering with golden trace elements */}
                <div className="absolute inset-0 bg-[#050914] flex flex-col justify-center items-center p-8 text-center bg-[radial-gradient(#1c2942_1px,transparent_1px)] [background-size:16px_16px]">
                  {/* Aesthetic crosshairs for mapping location accuracy */}
                  <div className="relative mb-6">
                    <span className="absolute -inset-8 rounded-full border border-[#d4af37]/35 animate-ping" />
                    <div className="w-16 h-16 rounded-full bg-luxury-gold/15 border-2 border-luxury-gold flex items-center justify-center text-[#d4af37] cursor-pointer shadow-xl">
                      <MapPin className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="font-display text-white tracking-widest text-lg font-medium mb-2.5">
                    {lang === 'en' ? 'Thes Athens Core' : 'Κέντρο Αθήνας - Thes'}
                  </h4>
                  <p className="font-serif italic text-gray-400 text-sm max-w-md">
                    {lang === 'en' 
                      ? 'Taki 16 (Psiri), Athens, 105 54. Situated 5 minutes away from Monastiraki station.'
                      : 'Τάκη 16 (Ψυρρή), Αθήνα, 105 54. Μόλις 5 λεπτά με τα πόδια από το σταθμό Μοναστηράκι.'}
                  </p>
                  
                  {/* Click Map action Overlay */}
                  <a
                    href="https://share.google/7ctgf2izqnaMsJqup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-[#050914]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col p-4"
                  >
                    <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
                      {lang === 'en' ? 'Launch Google Maps Navigation' : 'Άνοιγμα στο Google Maps'}
                    </span>
                    <span className="text-[11px] text-gray-400">
                      {lang === 'en' ? 'Address: Taki 16, Athens, Greece' : 'Διεύθυνση: Τάκη 16, Ψυρρή, Αθήνα'}
                    </span>
                  </a>
                </div>
              </motion.div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 8. Elegant Editorial Global Footer */}
      <footer className="bg-[#040812] border-t border-luxury-gold/15 py-16 px-6 relative text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Logo brand monogram */}
          <div className="w-12 h-12 rounded-full border border-luxury-gold flex items-center justify-center bg-luxury-navy mb-6">
            <span className="font-display text-sm text-[11px] text-luxury-gold tracking-widest font-semibold">TH.</span>
          </div>

          {/* Subtitle / Moto */}
          <p className="font-serif text-gray-400 text-base italic leading-relaxed max-w-md mb-8">
            {lang === 'en' ? t.footerMottoEn : t.footerMottoEl}
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap gap-6 justify-center text-xs uppercase tracking-widest text-gray-400 mb-12">
            <a href="#about" className="hover:text-[#d4af37] transition-colors">
              {lang === 'en' ? 'Philosophy' : 'Φιλοσοφία'}
            </a>
            <span className="text-luxury-gold/30">•</span>
            <a href="#menu" className="hover:text-[#d4af37] transition-colors">
              {lang === 'en' ? 'Menu' : 'Μενού'}
            </a>
            <span className="text-luxury-gold/30">•</span>
            <a href="#icon-code" className="hover:text-[#d4af37] transition-colors">
              {lang === 'en' ? 'Digital Partner' : 'Ψηφιακός Συνεργάτης'}
            </a>
            <span className="text-luxury-gold/30">•</span>
            <a href="https://share.google/7ctgf2izqnaMsJqup" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">
              {lang === 'en' ? 'Directions' : 'Οδηγίες'}
            </a>
          </div>

          <div className="w-12 h-[1px] bg-luxury-gold/20 mb-8" />

          {/* Footer copyright with professional credit for ICON Code */}
          <div className="text-[11px] tracking-wider text-gray-500 font-sans space-y-2">
            <div>
              &copy; {new Date().getFullYear()} THES Greek Creative Cuisine. {lang === 'en' ? t.rightsEn : t.rightsEl}
            </div>
            <div className="text-[10px] text-gray-600 flex flex-wrap items-center justify-center gap-1">
              <span>{lang === 'en' ? t.creatorTextEn : t.creatorTextEl}</span>
              <a
                href="#icon-code"
                className="text-luxury-gold/80 hover:text-luxury-gold transition-colors font-medium underline uppercase tracking-widest"
              >
                ICON Code
              </a>
              <span className="text-[#d4af37]">({lang === 'en' ? 'Connect with ICON Code Team' : 'Επικοινωνήστε με την ομάδα ICON Code'})</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 9. Floating Continuous Controls (Phone Right, WhatsApp Left) */}
      <FloatingControls lang={lang} />
      
    </div>
  );
}
