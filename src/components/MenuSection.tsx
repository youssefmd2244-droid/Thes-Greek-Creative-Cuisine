import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { MenuItem, Language } from '../types';
import { MENU_ITEMS } from '../data';

interface MenuSectionProps {
  lang: Language;
}

// 3D tilt card — desktop only
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    // Only on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    el.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateZ(8px)`;
    el.style.boxShadow = `${-x * 1.2}px ${y * 1.2}px 32px rgba(212,175,55,0.18)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    el.style.boxShadow = '';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transition: 'transform 0.15s ease, box-shadow 0.15s ease', willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

export default function MenuSection({ lang }: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState<'food' | 'chefs' | 'drinks' | 'addons'>('food');

  const t = {
    titleEn: 'Creative Culinary Showcase',
    titleEl: 'Δημιουργικό Γαστρονομικό Μενού',
    subtitleEn: 'Crafted with premium Aegean ingredients, combining ancestral Greek methods with avant-garde visual performance.',
    subtitleEl: 'Φτιαγμένο με εκλεκτά υλικά του Αιγαίου, συνδυάζοντας τις πατροπαράδοτες μεθόδους με τη σύγχρονη παρουσίαση.',
    tabFoodEn: 'Food',
    tabFoodEl: 'Φαγητό',
    tabChefsEn: "Chef's Choice",
    tabChefsEl: 'Επιλογές Σεφ',
    tabDrinksEn: 'Drinks & Wines',
    tabDrinksEl: 'Ποτά & Κρασιά',
    tabAddonsEn: 'Add-ons & Desserts',
    tabAddonsEl: 'Συνοδευτικά & Γλυκά',
    orderBtnEn: 'Order Now',
    orderBtnEl: 'Παραγγελία Τώρα',
    currency: '€'
  };

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeTab);

  const getWhatsAppLink = (item: MenuItem) => {
    const itemName = lang === 'en' ? item.nameEn : item.nameEl;
    const itemPrice = `${item.price}${t.currency}`;
    const basePhone = '302103212858';
    const textEn = `Hello Thes! I would like to order: "${itemName}" (${itemPrice}). Please let me know the preparation time. Thank you!`;
    const textEl = `Γεια σας! Θα ήθελα να παραγγείλω το πιάτο: "${itemName}" (${itemPrice}). Παρακαλώ ενημερώστε με για τον χρόνο προετοιμασίας. Ευχαριστώ!`;
    const encodedText = encodeURIComponent(lang === 'en' ? textEn : textEl);
    return `https://wa.me/${basePhone}?text=${encodedText}`;
  };

  return (
    <section id="menu" className="py-24 bg-[#070c18]/90 relative border-t border-[#d4af37]/10">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-[#d4af37] block mb-3 font-display"
          >
            {lang === 'en' ? 'Gourmet Selection' : 'Γαστρονομική Επιλογή'}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-widest font-normal mb-6"
          >
            {lang === 'en' ? t.titleEn : t.titleEl}
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.3 }}
            className="text-[#ece8e1]/70 font-serif text-lg leading-relaxed italic"
          >
            {lang === 'en' ? t.subtitleEn : t.subtitleEl}
          </motion.p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 max-w-xl mx-auto">
          {[
            { key: 'food', labelEn: t.tabFoodEn, labelEl: t.tabFoodEl },
            { key: 'chefs', labelEn: t.tabChefsEn, labelEl: t.tabChefsEl },
            { key: 'drinks', labelEn: t.tabDrinksEn, labelEl: t.tabDrinksEl },
            { key: 'addons', labelEn: t.tabAddonsEn, labelEl: t.tabAddonsEl }
          ].map((tab) => {
            const isSelected = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as 'food' | 'chefs' | 'drinks' | 'addons')}
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 font-sans font-medium cursor-pointer flex-1 text-center min-w-[140px] ${
                  isSelected
                    ? 'bg-[#d4af37] text-[#050914] shadow-[0_4px_20px_rgba(212,175,55,0.35)]'
                    : 'bg-[#0b1224] text-white hover:text-luxury-gold border border-luxury-gold/15 hover:border-luxury-gold/40'
                }`}
              >
                {lang === 'en' ? tab.labelEn : tab.labelEl}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <TiltCard className="bg-[#091122] rounded-2xl overflow-hidden border border-[#d4af37]/10 flex flex-col h-full group">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-luxury-navy">
                    <img
                      src={item.image}
                      alt={lang === 'en' ? item.nameEn : item.nameEl}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#091122]/90 via-transparent to-transparent opacity-60" />

                    {((lang === 'en' && item.badgeEn) || (lang === 'el' && item.badgeEl)) && (
                      <span className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#b48c26] text-[#050914] font-sans font-semibold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        {lang === 'en' ? item.badgeEn : item.badgeEl}
                      </span>
                    )}

                    {/* Price badge — food & chef's choice */}
                    {(activeTab === 'food' || activeTab === 'chefs') && (
                      <span className="absolute bottom-4 right-4 bg-luxury-navy/95 backdrop-blur border border-luxury-gold text-luxury-gold text-sm font-semibold px-4 py-1.5 rounded-lg shadow-xl font-mono">
                        {item.price} {t.currency}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-display font-medium text-lg leading-snug text-white group-hover:text-[#d4af37] transition-colors mb-2.5">
                        {lang === 'en' ? item.nameEn : item.nameEl}
                      </h3>
                      <p className="text-gray-400 font-serif text-sm leading-relaxed italic line-clamp-3 mb-6">
                        {lang === 'en' ? item.descriptionEn : item.descriptionEl}
                      </p>
                    </div>

                    <motion.a
                      href={getWhatsAppLink(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full bg-[#0d172e] hover:bg-luxury-gold text-luxury-stone hover:text-luxury-navy py-3 px-5 rounded-xl border border-luxury-gold/30 hover:border-transparent text-xs uppercase tracking-widest font-sans font-medium hover:shadow-[0_4px_15px_rgba(212,175,55,0.2)] focus:outline-none transition-all cursor-pointer group/btn"
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingBag className="w-4 h-4 text-luxury-gold group-hover/btn:text-luxury-navy h-4 w-4" />
                      <span>{lang === 'en' ? t.orderBtnEn : t.orderBtnEl}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                    </motion.a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
