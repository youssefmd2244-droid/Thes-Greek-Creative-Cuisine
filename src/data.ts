import { MenuItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [

  // ===================== ΟΡΕΚΤΙΚΑ / STARTERS =====================
  {
    id: 'food-1',
    nameEn: 'Grilled Corn & Whole-Grain Pitas',
    nameEl: 'Ψητές Πίτες Καλαμποκιού & Ολικής',
    descriptionEn: 'Freshly grilled corn and whole-grain pitas, drizzled with cold-pressed olive oil and fragrant fresh oregano.',
    descriptionEl: 'Φρεσκοψημένες πίτες καλαμποκιού και ολικής άλεσης με εξαιρετικό παρθένο ελαιόλαδο και φρέσκια ρίγανη.',
    price: 4,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Vegan',
    badgeEl: 'Νηστήσιμο'
  },
  {
    id: 'food-2',
    nameEn: 'Avocado Tzatziki',
    nameEl: 'Τζατζίκι Αβοκάντο',
    descriptionEn: '100% Cretan avocado blended with cucumber, organic black garlic and a drizzle of Aegean olive oil.',
    descriptionEl: '100% αβοκάντο Κρήτης με αγγούρι, βιολογικό μαύρο σκόρδο και ελαιόλαδο.',
    price: 10,
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Vegan',
    badgeEl: 'Νηστήσιμο'
  },
  {
    id: 'food-3',
    nameEn: 'White Tarama Mousse',
    nameEl: 'Μους Λευκού Ταραμά',
    descriptionEn: 'Delicate Symian shrimp and Messolonghi bottarga mousse, finished with herb-infused oil.',
    descriptionEl: 'Αέρινο μους από γαριδάκι Συμιακό, αυγοτάραχο Μεσολογγίου και λάδι μυρωδικών.',
    price: 11,
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Chef\'s Pick',
    badgeEl: 'Επιλογή Σεφ'
  },
  {
    id: 'food-4',
    nameEn: 'Tuna Tartare',
    nameEl: 'Ταρτάρ Τόνου',
    descriptionEn: 'Premium tuna tartare with citrus sauce, crunchy pistachios and threads of hot pepper.',
    descriptionEl: 'Ταρτάρ τόνου με σάλτσα εσπεριδοειδών, φιστίκι και ίνες καυτερής πιπεριάς.',
    price: 17,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Signature',
    badgeEl: 'Σπεσιαλιτέ'
  },
  {
    id: 'food-5',
    nameEn: 'Sea Bass Carpaccio',
    nameEl: 'Καρπάτσιο Λαβράκι',
    descriptionEn: 'Thinly sliced sea bass in a village-salad broth, with chives, pepper and fresh thyme.',
    descriptionEl: 'Λεπτές φέτες λαβρακίου σε ζωμό χωριάτικης σαλάτας με σχοινόπρασο, πιπεριά και θυμάρι.',
    price: 17,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    category: 'food'
  },
  {
    id: 'food-6',
    nameEn: 'Triple-Cooked Naxos Potatoes',
    nameEl: 'Πατάτες Νάξου Τριπλομαγειρεμένες',
    descriptionEn: 'Golden triple-cooked Naxos potatoes with Monemvasia goat cheese cream, black truffle oil, smoked paprika and sea salt.',
    descriptionEl: 'Τριπλομαγειρεμένες πατάτες Νάξου με κρέμα κατσικίσιου τυριού Μονεμβασιάς, λάδι μαύρης τρούφας, καπνιστή πάπρικα και ανθό αλατιού.',
    price: 10,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=800',
    category: 'food'
  },
  {
    id: 'food-7',
    nameEn: 'Open Spanakopita',
    nameEl: 'Σπανακόπιτα Ανοιχτή',
    descriptionEn: 'Village-style filo pastry filled with feta, fresh herbs and Dodoni yogurt, served on an olive oil earth.',
    descriptionEl: 'Χωριάτικο φύλλο με φέτα, φρέσκα μυρωδικά, γιαούρτι Δωδώνης και χώμα ελαιόλαδου.',
    price: 11.5,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Vegetarian',
    badgeEl: 'Χορτοφαγικό'
  },
  {
    id: 'food-8',
    nameEn: 'Feta Loukoumades',
    nameEl: 'Λουκουμάδες Φέτας',
    descriptionEn: 'Crispy feta fritters with spicy tomato jam and a cloud of Chios mastic foam.',
    descriptionEl: 'Τραγανοί λουκουμάδες φέτας με πικάντικη μαρμελάδα ντομάτας και αφρό μαστίχας Χίου.',
    price: 11.5,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Fan Favourite',
    badgeEl: 'Αγαπημένο'
  },
  {
    id: 'food-9',
    nameEn: 'Vegan Gyros (×2)',
    nameEl: 'Vegan Γύρος (2τμχ)',
    descriptionEn: 'Crispy legume cones filled with avocado tzatziki, fresh tomato and spring onion.',
    descriptionEl: 'Τραγανά χωνάκια οσπρίων με τζατζίκι αβοκάντο, ντομάτα και φρέσκο κρεμμύδι.',
    price: 9.5,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Vegan',
    badgeEl: 'Νηστήσιμο'
  },
  {
    id: 'food-10',
    nameEn: 'Seafood "Pastitsio"',
    nameEl: '"Παστίτσιο" Θαλασσινών',
    descriptionEn: 'Crispy rice pastry sheets layered with shrimp, sea bream and squid, in tomato sauce, béchamel cream and baked graviera.',
    descriptionEl: 'Τραγανά φύλλα ρυζιού με γαρίδα, τσιπούρα, καλαμάρι, σάλτσα ντομάτας, κρέμα μπεσαμέλ και ψημένη γραβιέρα.',
    price: 13.5,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Award Winning',
    badgeEl: 'Βραβευμένο'
  },

  // ===================== ΣΑΛΑΤΕΣ / SALADS =====================
  {
    id: 'food-11',
    nameEn: 'Greek Village Salad',
    nameEl: 'Ελληνική Σαλάτα',
    descriptionEn: 'Cherry tomatoes, feta, cucumber, spring onion, olives, capers, carob rusks and sun-dried tomato dressing with fresh thyme.',
    descriptionEl: 'Ντοματίνια, φέτα, αγγούρι, φρέσκο κρεμμύδι, ελιά, κάπαρη, παξιμάδια χαρουπιού και σάλτσα λιαστής ντομάτας με θυμάρι.',
    price: 13.5,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    category: 'food'
  },
  {
    id: 'food-12',
    nameEn: 'Cycladic Salad',
    nameEl: 'Κυκλαδίτικη Σαλάτα',
    descriptionEn: 'Tender salad leaves, sour apple, Mykonos louza, Naxos graviera crumble, sunflower seeds, black raisin and citrus dressing.',
    descriptionEl: 'Τρυφερά φύλλα, ξυνόμηλο, λούτζα Μυκόνου, κράμπλ γραβιέρας Νάξου, ηλιόσποροι, μαύρη σταφίδα και ντρέσινγκ εσπεριδοειδών.',
    price: 14,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Signature',
    badgeEl: 'Σπεσιαλιτέ'
  },
  {
    id: 'food-13',
    nameEn: 'Seafood Salad',
    nameEl: 'Θαλασσινή Σαλάτα',
    descriptionEn: 'Tempura shrimp, squid, iceberg, cherry tomatoes, boiled egg, Evrytania prosciutto and anchovy dressing.',
    descriptionEl: 'Γαρίδα τεμπούρα, καλαμάρι, άισμπεργκ, ντοματίνια, βραστό αυγό, προσούτο Ευρυτανίας και σάλτσα αντζούγιας.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80&w=800',
    category: 'food'
  },

  // ===================== ΚΥΡΙΩΣ / MAINS =====================
  {
    id: 'food-14',
    nameEn: 'Cretan Skioufihta Pasta',
    nameEl: 'Σκιουφιχτά Κρήτης',
    descriptionEn: 'Handmade Cretan pasta with chicken, aged anthotyros cheese and roasted tomato-pepper sauce.',
    descriptionEl: 'Χειροποίητα ζυμαρικά Κρήτης με κοτόπουλο, ξηρό ανθότυρο και σάλτσα ψητής ντομάτας-πιπεριάς.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    category: 'food'
  },
  {
    id: 'food-15',
    nameEn: 'Angel Hair Pasta with Seafood',
    nameEl: 'Ζυμαρικά Αγγέλων',
    descriptionEn: 'Clams, mussels, saffron from Kozani and chives in a silky light broth.',
    descriptionEl: 'Αχιβάδες, μύδια, κρόκος Κοζάνης και σχοινόπρασο.',
    price: 21.5,
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Best Seller',
    badgeEl: 'Δημοφιλές'
  },
  {
    id: 'food-16',
    nameEn: 'Briam (Greek Ratatouille)',
    nameEl: 'Μπριάμ',
    descriptionEn: 'Oven-roasted seasonal vegetables with black olive biscuit, fresh herb oil and Epirus feta or vegan option.',
    descriptionEl: 'Μπισκότο μαύρης ελιάς, λάδι φρέσκων μυρωδικών, φέτα Ηπείρου ή νηστίσιμη επιλογή και χώμα ελιάς.',
    price: 13.5,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Vegan Option',
    badgeEl: 'Vegan Επιλογή'
  },
  {
    id: 'food-17',
    nameEn: 'Moussaka',
    nameEl: 'Μουσακάς',
    descriptionEn: 'Vegetable roll filled with beef mince, béchamel cream, Naxos graviera and aromatic Dodoni yogurt.',
    descriptionEl: 'Ρολό λαχανικών με μοσχαρίσιο κιμά, κρέμα μπεσαμέλ, γραβιέρα Νάξου και αρωματικό γιαούρτι Δωδώνης.',
    price: 16.5,
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Award Winning',
    badgeEl: 'Βραβευμένο'
  },
  {
    id: 'food-18',
    nameEn: 'Grilled Squid',
    nameEl: 'Καλαμάρι Σχάρας',
    descriptionEn: 'Char-grilled squid with parsnip purée, bergamot caviar and layered onion textures.',
    descriptionEl: 'Σχάρα καλαμαριού με πουρέ παστινάκι, χαβιάρι μοσχολέμονο και υφές κρεμμυδιού.',
    price: 24,
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Signature',
    badgeEl: 'Σπεσιαλιτέ'
  },
  {
    id: 'food-19',
    nameEn: 'Cephalonia Sea Bream',
    nameEl: 'Τσιπούρα Κεφαλληνίας',
    descriptionEn: 'Filleted fresh sea bream from Cephalonia, baby vegetables and a delicate bisque sauce.',
    descriptionEl: 'Φιλεταρισμένη τσιπούρα Κεφαλληνίας με baby λαχανικά και σάλτσα μπισκ.',
    price: 24,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    category: 'food'
  },
  {
    id: 'food-20',
    nameEn: 'Chef-Smoked Tuna Fillet',
    nameEl: 'Τόνος Φιλέτο',
    descriptionEn: 'In-house chef-smoked tuna with seasonal greens, beetroot salad and walnuts.',
    descriptionEl: 'Καπνιστός από τον σεφ μας τόνος με χόρτα εποχής, παντζαροσαλάτα και καρύδι.',
    price: 26.5,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Chef\'s Special',
    badgeEl: 'Ειδικότητα Σεφ'
  },
  {
    id: 'food-21',
    nameEn: 'Black Pork with Fig Honey',
    nameEl: 'Μαύρος Χοίρος - Συκόμελο',
    descriptionEn: 'Tender black pork with celery root purée, dried figs, walnuts and a hint of orange.',
    descriptionEl: 'Μαύρος χοίρος με πουρέ σελινόριζας, αποξηραμένο σύκο, καρύδια και πορτοκάλι.',
    price: 19,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    category: 'food'
  },
  {
    id: 'food-22',
    nameEn: 'Filleted Lamb in Vine Leaf',
    nameEl: 'Αρνάκι Φιλεταρισμένο',
    descriptionEn: 'Tender lamb wrapped in vine leaf, served with lemon-oil foam and aromatic bulgur wheat.',
    descriptionEl: 'Αρνάκι τυλιγμένο σε αμπελόφυλλο, αφρός λαδολέμονο και πλιγούρι με άρωμα γεμιστών.',
    price: 23,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Best Seller',
    badgeEl: 'Δημοφιλές'
  },
  {
    id: 'food-23',
    nameEn: 'Tagliata of Veal',
    nameEl: 'Ταλιάτα Μόσχου',
    descriptionEn: 'Premium sliced veal with crispy sweet potatoes and aged San Michalis cheese from Syros.',
    descriptionEl: 'Ταλιάτα μόσχου με τραγανές γλυκοπατάτες και Σαν Μιχάλη Σύρου.',
    price: 28.5,
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=800',
    category: 'food',
    badgeEn: 'Premium',
    badgeEl: 'Premium'
  },

  // ===================== CHEF'S CHOICE / ΕΠΙΛΟΓΕΣ ΣΕΦ =====================
  {
    id: 'chefs-1',
    nameEn: 'Lamb Klephtiko Deconstructed',
    nameEl: 'Αρνί Κλέφτικο Αποδομημένο',
    descriptionEn: 'Slow-roasted lamb shoulder in parchment, reimagined with smoked kefalotyri foam, baby vegetables and herb oil.',
    descriptionEl: 'Αρνίσιος ώμος ψημένος σιγά-σιγά σε λαδόκολλα, με αφρό καπνιστού κεφαλοτυριού, μίνι λαχανικά και λάδι μυρωδικών.',
    price: 32,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    category: 'chefs',
    badgeEn: "Chef's Special",
    badgeEl: 'Σπεσιαλ Σεφ'
  },
  {
    id: 'chefs-2',
    nameEn: 'Aegean Lobster Orzo',
    nameEl: 'Κριθαράκι με Αστακό Αιγαίου',
    descriptionEn: 'Half lobster tail over saffron orzo, finished tableside with a rich bisque reduction and fresh dill.',
    descriptionEl: 'Μισή ουρά αστακού πάνω σε κριθαράκι με κρόκο, με πλούσια σάλτσα μπιζκ και φρέσκο άνηθο.',
    price: 38,
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80&w=800',
    category: 'chefs',
    badgeEn: "Chef's Special",
    badgeEl: 'Σπεσιαλ Σεφ'
  },
  {
    id: 'chefs-3',
    nameEn: 'Wagyu Souvlaki Tasting',
    nameEl: 'Δοκιμή Σουβλάκι Wagyu',
    descriptionEn: 'Three skewers of A5 wagyu, charcoal-grilled and paired with truffle pita, smoked aubergine and pomegranate molasses.',
    descriptionEl: 'Τρία καλαμάκια wagyu A5 στα κάρβουνα, με πίτα τρούφας, καπνιστή μελιτζάνα και μελάσα ροδιού.',
    price: 42,
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=800',
    category: 'chefs',
    badgeEn: 'Rare Selection',
    badgeEl: 'Σπάνια Επιλογή'
  },
  {
    id: 'chefs-4',
    nameEn: 'Octopus & Fava Risotto',
    nameEl: 'Ριζότο με Χταπόδι & Φάβα',
    descriptionEn: 'Charcoal-grilled octopus over a velvety Santorini fava risotto, finished with caper crumble and lemon oil.',
    descriptionEl: 'Χταπόδι στα κάρβουνα πάνω σε βελούδινο ριζότο φάβας Σαντορίνης, με κρούστα κάπαρης και λαδολέμονο.',
    price: 27,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
    category: 'chefs',
    badgeEn: "Chef's Special",
    badgeEl: 'Σπεσιαλ Σεφ'
  },
  {
    id: 'chefs-5',
    nameEn: "Chef's Tasting Plate",
    nameEl: 'Πιάτο Δοκιμής Σεφ',
    descriptionEn: 'A curated five-bite journey through the kitchen\'s current creations, changing weekly with the freshest market finds.',
    descriptionEl: 'Ένα επιμελημένο ταξίδι πέντε μπουκιών από τις τρέχουσες δημιουργίες της κουζίνας, που ανανεώνεται κάθε εβδομάδα.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&q=80&w=800',
    category: 'chefs',
    badgeEn: 'Tasting Menu',
    badgeEl: 'Μενού Δοκιμής'
  },
  {
    id: 'chefs-6',
    nameEn: 'Red Mullet & Black Truffle',
    nameEl: 'Μπαρμπούνι με Μαύρη Τρούφα',
    descriptionEn: 'Pan-seared red mullet fillets over celeriac purée, shaved black truffle and a citrus beurre blanc.',
    descriptionEl: 'Φιλέτα μπαρμπούνι στο τηγάνι πάνω σε πουρέ σέλινου, ξυσμένη μαύρη τρούφα και σάλτσα βέρ μπλαν.',
    price: 36,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    category: 'chefs',
    badgeEn: 'Rare Selection',
    badgeEl: 'Σπάνια Επιλογή'
  },

  // ===================== DRINKS =====================
  {
    id: 'drink-1',
    nameEn: 'Prosecco Glass',
    nameEl: 'Prosecco Ποτήρι',
    descriptionEn: 'Classic Italian sparkling wine, fresh and lively with fine bubbles. Served by the glass (120ml).',
    descriptionEl: 'Κλασικό ιταλικό αφρώδες κρασί με ζωντανές φυσαλίδες. Ανά ποτήρι (120ml).',
    price: 5.5,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    category: 'drinks',
    badgeEn: 'Sparkling',
    badgeEl: 'Αφρώδες'
  },
  {
    id: 'drink-2',
    nameEn: 'Santorini Assyrtiko',
    nameEl: 'Ασύρτικο Γαβαλά Σαντορίνης',
    descriptionEn: 'Volcanic white wine from Santorini with sharp minerality, citrus aromas and a long saline finish.',
    descriptionEl: 'Ηφαιστειακό ασύρτικο Σαντορίνης με ορυκτότητα, εσπεριδοειδή και αλμυρή επίγευση.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
    category: 'drinks',
    badgeEn: 'Rare Reserve',
    badgeEl: 'Σπάνιο'
  },
  {
    id: 'drink-3',
    nameEn: 'Naoussa Xinomavro Red',
    nameEl: 'Ξινόμαυρο Αθμά Θυμιόπουλου',
    descriptionEn: 'Structured red wine with notes of sun-dried tomato, black olives and warm spice. Glass served at 150ml.',
    descriptionEl: 'Δομημένο κόκκινο κρασί με νότες λιαστής ντομάτας, μαύρης ελιάς και μπαχαρικών.',
    price: 7,
    image: 'https://images.unsplash.com/photo-1553184118-d20774c4c1db?auto=format&fit=crop&q=80&w=800',
    category: 'drinks'
  },
  {
    id: 'drink-4',
    nameEn: 'Vinsanto Argyros Estate',
    nameEl: 'Βινσάντο Κτήμα Αργυρού',
    descriptionEn: 'Exquisite Santorini dessert wine from sun-dried Assyrtiko grapes with notes of honey, dried fig and apricot.',
    descriptionEl: 'Εξαιρετικό γλυκό κρασί Σαντορίνης από ηλιαστά ασύρτικα σταφύλια, μέλι, σύκο και βερίκοκο.',
    price: 10,
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&q=80&w=800',
    category: 'drinks',
    badgeEn: 'Dessert Wine',
    badgeEl: 'Γλυκό Κρασί'
  },
  {
    id: 'drink-5',
    nameEn: 'Pils Hellas Lager (500ml)',
    nameEl: 'Pils Hellas Lager (500ml)',
    descriptionEn: 'Refreshing Greek lager, light and crisp — the ultimate companion to a Greek summer table.',
    descriptionEl: 'Δροσιστική ελληνική μπύρα, ελαφριά και τραγανή, ιδανική για το ελληνικό καλοκαιρινό τραπέζι.',
    price: 5.5,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=800',
    category: 'drinks'
  },
  {
    id: 'drink-6',
    nameEn: 'Plomari Ouzo',
    nameEl: 'Ούζο Πλωμαρί',
    descriptionEn: 'Iconic Lesvos ouzo with a smooth anise finish, best enjoyed with ice and a side of mezze.',
    descriptionEl: 'Εμβληματικό ούζο Πλωμαρίου με ομαλή γεύση γλυκάνισου, απολαμβάνεται με πάγο.',
    price: 4,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800',
    category: 'drinks',
    badgeEn: 'Greek Spirit',
    badgeEl: 'Ελληνικό Αποστ.'
  },
  {
    id: 'drink-7',
    nameEn: 'Tsipouro Dekaraki (No Anise)',
    nameEl: 'Τσίπουρο Δεκαράκι',
    descriptionEn: 'Pure grape pomace spirit from Thessaly, clean and bold — a true Greek artisan distillate without anise.',
    descriptionEl: 'Αγνό τσίπουρο Θεσσαλίας χωρίς γλυκάνισο, καθαρό και δυνατό. Παραδοσιακή απόσταξη.',
    price: 4,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    category: 'drinks'
  },
  {
    id: 'drink-8',
    nameEn: 'Greek Coffee',
    nameEl: 'Ελληνικός Καφές',
    descriptionEn: 'Traditional slow-brewed Greek coffee, served with a glass of cold water as is the custom.',
    descriptionEl: 'Παραδοσιακός ελληνικός καφές, σερβίρεται με ποτήρι κρύο νερό, όπως το συνηθίζουμε.',
    price: 2,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
    category: 'drinks'
  },

  // ===================== ΓΛΥΚΑ & ADD-ONS / DESSERTS =====================
  {
    id: 'addon-1',
    nameEn: 'Halva Cream',
    nameEl: 'Κρέμα Χαλβά',
    descriptionEn: 'Silky halva cream with lemon syrup, crushed almonds and vanilla ice cream.',
    descriptionEl: 'Βελούδινη κρέμα χαλβά με σιρόπι λεμόνι, αμύγδαλο και παγωτό βανίλια.',
    price: 8.5,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
    category: 'addons',
    badgeEn: 'Traditional',
    badgeEl: 'Παραδοσιακό'
  },
  {
    id: 'addon-2',
    nameEn: 'Gianniotiko',
    nameEl: 'Γιαννιώτικο',
    descriptionEn: 'White chocolate cream, ravani sponge cake, kaïmaki ice cream and rose petal preserve.',
    descriptionEl: 'Κρεμέ λευκής σοκολάτας, ραβανί, παγωτό καϊμάκι και γλυκό τριαντάφυλλο.',
    price: 10,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
    category: 'addons',
    badgeEn: 'Fan Favourite',
    badgeEl: 'Αγαπημένο'
  },
  {
    id: 'addon-3',
    nameEn: 'Vegan Chocolate Pie',
    nameEl: 'Σοκολατόπιτα Vegan',
    descriptionEn: 'Handcrafted vegan chocolate pie with a homemade blackcurrant sauce.',
    descriptionEl: 'Χειροποίητη vegan σοκολατόπιτα με αυθεντική σάλτσα φραγκοστάφυλλο.',
    price: 10,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800',
    category: 'addons',
    badgeEn: 'Vegan',
    badgeEl: 'Νηστήσιμο'
  },
  {
    id: 'addon-4',
    nameEn: 'Artisanal Pita Basket',
    nameEl: 'Καλαθάκι Χειροποίητης Πίτας',
    descriptionEn: 'Freshly baked grain pitas with olive-wood smoked oil, mountain rosemary and fleur de sel.',
    descriptionEl: 'Φρεσκοψημένες πίτες με καπνιστό ελαιόλαδο, δενδρολίβανο και ανθό αλατιού.',
    price: 4,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
    category: 'addons'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Eleanor Vance',
    roleEn: 'Gourmet Critic, London',
    roleEl: 'Κριτικός Γαστρονομίας, Λονδίνο',
    textEn: 'An otherworldly culinary trip. The deconstructed lamb klephtiko is borderline miraculous, and the stone-walled ambiance transports you to a modern Delphi.',
    textEl: 'Ένα θεϊκό γαστρονομικό ταξίδι. Το αποδομημένο αρνί είναι σχεδόν θαύμα, και η ατμόσφαιρα με τους πέτρινους τοίχους σε μεταφέρει στους Δελφούς.',
    rating: 5
  },
  {
    id: 't2',
    name: 'George Papadopoulos',
    roleEn: 'Athens Food Guide',
    roleEl: 'Οδηγός Εστίασης Αθηνών',
    textEn: 'Thes manages to blend raw ancient traditions with elegant modern visual plates. Simply the best creative kitchen in Psiri today.',
    textEl: 'Το εστιατόριο Thes καταφέρνει να συνδυάσει τις αρχέγονες παραδόσεις με την κομψή σύγχρονη παρουσίαση. Ό,τι καλύτερο στου Ψυρρή σήμερα.',
    rating: 5
  }
];
