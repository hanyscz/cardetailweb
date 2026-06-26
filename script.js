/* -------------------------------------------------------------
   CARDETAIL - Interactive Logic & Localization
   ------------------------------------------------------------- */

// --- Phone Numbers config per language ---
const phoneConfig = {
    cs: {
        number: "+420 775 360 488",
        href: "tel:+420775360488",
        raw: "420775360488"
    },
    de: {
        number: "+420 604 409 729",
        href: "tel:+420604409729",
        raw: "420604409729"
    },
    en: {
        number: "+420 775 360 488",
        href: "tel:+420775360488",
        raw: "420775360488"
    }
};

// --- Gallery Samples Configuration ---
const gallerySamples = {
    1: { before: "images/pred_01.jpg", after: "images/po_01.jpg" },
    2: { before: "images/pred_02.jpg", after: "images/po_02.jpg" },
    3: { before: "images/pred_03.jpg", after: "images/po_03.jpg" }
};

// --- Localization Dictionary ---
const translations = {
    // Navigation
    nav_services: {
        cs: "Služby",
        de: "Leistungen",
        en: "Services"
    },
    nav_pricing: {
        cs: "Ceník",
        de: "Preise",
        en: "Pricing"
    },
    nav_about: {
        cs: "Proč my",
        de: "Über uns",
        en: "Why us"
    },
    nav_gallery: {
        cs: "Galerie",
        de: "Galerie",
        en: "Gallery"
    },
    nav_contact: {
        cs: "Kontakt",
        de: "Kontakt",
        en: "Contact"
    },
    top_location: {
        cs: "Načeratice 124, Znojmo",
        de: "Načeratice 124, Znojmo (Tschechien)",
        en: "Naceratice 124, Znojmo (Czech Rep.)"
    },
    
    // Hero Section
    hero_badge: {
        cs: "PREMIUM AUTO DETAIL INTERIOR",
        de: "PREMIUM AUTO DETAIL INTERIOR",
        en: "PREMIUM AUTO DETAIL INTERIOR"
    },
    hero_title_1: {
        cs: "Vrátíme vašemu autu",
        de: "Wir geben Ihrem Auto den",
        en: "We will restore the look"
    },
    hero_title_accent: {
        cs: "vzhled i vůni novoty",
        de: "Glanz und Duft eines Neuwagens zurück",
        en: "and scent of a new car"
    },
    hero_desc: {
        cs: "Specializujeme se výhradně na detailní čištění a tepování interiérů vozidel. S maximální péčí zbavíme vaše auto prachu, skvrn, zápachu a bakterií během 4–6 hodin.",
        de: "Wir spezialisieren uns ausschließlich auf die professionelle Tiefenreinigung und Polsterreinigung von Fahrzeuginnenräumen. Mit maximaler Sorgfalt befreien wir Ihr Auto in 4-6 Stunden von Staub, Flecken, Gerüchen und Bakterien.",
        en: "We specialize exclusively in detailed cleaning and deep extraction cleaning of car interiors. With maximum care, we rid your car of dust, stains, odor, and bacteria within 4–6 hours."
    },
    hero_bullet_1: {
        cs: "Vyzvednutí a dovoz auta po Znojmě ZDARMA",
        de: "Kostenloser Hol- und Bringservice im Bezirk Znojmo",
        en: "FREE car pickup and delivery within the Znojmo district"
    },
    hero_bullet_2: {
        cs: "Rychlá realizace za pouhých 4–6 hodin",
        de: "Schnelle Fertigstellung in nur 4–6 Stunden",
        en: "Fast execution in just 4–6 hours"
    },
    hero_bullet_3: {
        cs: "Bezpečné uložení dětských sedaček a věcí",
        de: "Sichere Aufbewahrung von Kindersitzen und Wertsachen",
        en: "Safe storage of child seats and personal belongings"
    },
    hero_cta_wa: {
        cs: "Objednat přes WhatsApp",
        de: "Über WhatsApp anfragen",
        en: "Order via WhatsApp"
    },
    hero_cta_sub: {
        cs: "Naše služby",
        de: "Unsere Leistungen",
        en: "Our Services"
    },
    quality_guarantee: {
        cs: "Prémiová kvalita",
        de: "Premium-Qualität",
        en: "Premium Quality"
    },

    // Value Propositions
    vp_title: {
        cs: "V čem jsme jiní?",
        de: "Was uns auszeichnet?",
        en: "What makes us different?"
    },
    vp_subtitle: {
        cs: "Důvěra, rychlost a bezkonkurenční servis na Znojemsku",
        de: "Vertrauen, Schnelligkeit und unschlagbarer Service in der Region Znojmo",
        en: "Trust, speed and unbeatable service in the Znojmo region"
    },
    vp_1_title: {
        cs: "Dovoz auta zdarma",
        de: "Kostenloser Fahrzeugtransport",
        en: "Free car transport"
    },
    vp_1_desc: {
        cs: "Nemáte čas k nám auto vozit? Po celém okrese Znojmo si pro auto přijedeme a vyčištěné ho dovezeme zpět k vám zcela zdarma. Mimo okres dle domluvy.",
        de: "Keine Zeit, das Auto zu uns zu bringen? Im gesamten Bezirk Znojmo holen wir Ihr Auto ab und bringen es komplett gereinigt wieder zurück - völlig kostenlos. Außerhalb des Bezirks nach Absprache.",
        en: "No time to bring your car? Throughout the Znojmo district, we will pick up your car and return it cleaned back to you completely free of charge. Outside the district by agreement."
    },
    vp_2_title: {
        cs: "Hotovo za 4 až 6 hodin",
        de: "Fertig in 4 bis 6 Stunden",
        en: "Ready in 4 to 6 hours"
    },
    vp_2_desc: {
        cs: "Ráno nám auto předáte (nebo si ho vyzvedneme) a odpoledne s ním můžete odjet. Efektivní a profesionální proces bez zbytečných prodlev.",
        de: "Sie übergeben uns Ihr Auto am Morgen (oder wir holen es ab) und können am Nachmittag bereits wieder sauber losfahren. Effizienter und professioneller Ablauf ohne Verzögerungen.",
        en: "Hand over the car to us in the morning (or let us pick it up) and drive away clean in the afternoon. Efficient and professional process without unnecessary delays."
    },
    vp_3_title: {
        cs: "Bezpečí pro vaše věci",
        de: "Sicherheit für Ihre Sachen",
        en: "Safety for your items"
    },
    vp_3_desc: {
        cs: "Zapomněli jste v autě osobní věci nebo dětské autosedačky? Vše bezpečně uložíme do uzamykatelných boxů a nepoškozené vrátíme při předání.",
        de: "Haben Sie persönliche Gegenstände oder Kindersitze im Auto vergessen? Wir bewahren alles sicher in verschließbaren Boxen auf und geben es Ihnen bei der Übergabe unversehrt zurück.",
        en: "Forgot personal belongings or child seats in the car? We store everything securely in lockable boxes and return them undamaged upon delivery."
    },

    // Services
    services_title: {
        cs: "Ucelený program péče",
        de: "Umfassendes Pflegeprogramm",
        en: "Complete Care Program"
    },
    services_subtitle: {
        cs: "Jedna komplexní služba pro dokonalý interiér bez kompromisů",
        de: "Ein einziger, allumfassender Service für einen makellosen Innenraum ohne Kompromisse",
        en: "One comprehensive service for a perfect interior without compromises"
    },
    srv_1_title: {
        cs: "Důkladné vysávání",
        de: "Gründliches Staubsaugen",
        en: "Thorough Vacuuming"
    },
    srv_1_desc: {
        cs: "Odstraňování prachu, drobků, vlasů a zvířecích chlupů i z těch nejhůře přístupných záhybů.",
        de: "Entfernung von Staub, Krümeln, Haaren und Tierhaaren selbst aus den am schwersten zugänglichen Winkeln.",
        en: "Removal of dust, crumbs, hair, and pet fur from even the hardest to reach folds."
    },
    srv_2_title: {
        cs: "Čištění a obnova povrchů",
        de: "Oberflächenreinigung & Pflege",
        en: "Surface Cleaning & Care"
    },
    srv_2_desc: {
        cs: "Šetrné, ale vysoce efektivní čištění plastů, kůže, Alcantary a veškerých textilních prvků interiéru.",
        de: "Schonende, aber hochwirksame Reinigung von Kunststoffen, Leder, Alcantara und allen textilen Elementen der Innenausstattung.",
        en: "Gentle yet highly effective cleaning of plastics, leather, Alcantara, and all textile elements of the interior."
    },
    srv_3_title: {
        cs: "Dezinfekce interiéru",
        de: "Innenraumdesinfektion",
        en: "Interior Disinfection"
    },
    srv_3_desc: {
        cs: "Hloubková dezinfekce, která účinně ničí bakterie, viry, plísně a roztoče. Vhodné pro rodiny a alergiky.",
        de: "Tiefendesinfektion zur wirksamen Beseitigung von Bakterien, Viren, Schimmelpilzen und Milben. Ideal für Familien und Allergiker.",
        en: "Deep disinfection that effectively destroys bacteria, viruses, molds, and dust mites. Highly suitable for families and allergy sufferers."
    },
    srv_4_title: {
        cs: "Prémiové provonění",
        de: "Premium-Beduftung",
        en: "Premium Scenting"
    },
    srv_4_desc: {
        cs: "Aplikace exkluzivních a dlouhotrvajících vůní, které dodají interiéru pocit svěžesti a čistoty nového vozu.",
        de: "Auftragen von exklusiven und langanhaltenden Düften, die dem Innenraum das Gefühl von Frische und Sauberkeit eines Neuwagens verleihen.",
        en: "Application of exclusive and long-lasting fragrances that give the interior the fresh and clean feel of a new car."
    },
    srv_5_title: {
        cs: "Dlouhodobá ochrana",
        de: "Langzeitschutz",
        en: "Long-term Protection"
    },
    srv_5_desc: {
        cs: "Nanesení speciálních přípravků s UV filtrem, které chrání plasty a kůži před popraskáním, vyblednutím a dalším znečištěním.",
        de: "Auftragen von Spezialprodukten mit UV-Filter, die Kunststoffe und Leder vor Rissbildung, Ausbleichen und erneuter Verschmutzung schützen.",
        en: "Application of special products with a UV filter that protects plastics and leather from cracking, fading, and further re-soiling."
    },
    srv_6_title: {
        cs: "Dokonalé leštění oken",
        de: "Perfekte Glasreinigung",
        en: "Perfect Window Polishing"
    },
    srv_6_desc: {
        cs: "Čištění a leštění všech skleněných ploch bez šmouh, zaručující perfektní výhled a bezpečnost za volantem.",
        de: "Reinigung und Politur aller Glasflächen ohne Schlierenbildung für perfekte Sicht und maximale Sicherheit am Steuer.",
        en: "Cleaning and polishing of all glass surfaces without streaks, ensuring a perfect view and safety behind the wheel."
    },

    // Gallery
    gallery_title: {
        cs: "Výsledky naší práce",
        de: "Ergebnisse unserer Arbeit",
        en: "Results of our work"
    },
    gallery_subtitle: {
        cs: "Vyzkoušejte posuvník a porovnejte stav před a po našem zásahu",
        de: "Nutzen Sie den Schieberegler und vergleichen Sie den Zustand vor und nach unserer Behandlung",
        en: "Try the slider and compare the condition before and after our work"
    },
    slider_before: {
        cs: "PŘED",
        de: "VORHER",
        en: "BEFORE"
    },
    slider_after: {
        cs: "PO",
        de: "NACHHER",
        en: "AFTER"
    },
    gallery_sample_1: {
        cs: "Ošetření plastů",
        de: "Kunststoffpflege",
        en: "Plastic care"
    },
    gallery_sample_2: {
        cs: "Čištění interiéru",
        de: "Innenraumreinigung",
        en: "Interior cleaning"
    },
    gallery_sample_3: {
        cs: "Čištění sedaček",
        de: "Sitzreinigung",
        en: "Seat cleaning"
    },

    // Pricing
    price_title: {
        cs: "Transparentní ceník",
        de: "Transparente Preise",
        en: "Transparent Pricing"
    },
    price_subtitle: {
        cs: "Ceny jsou uvedeny jako rozpětí podle míry znečištění vozidla",
        de: "Die Preise sind als Spanne je nach Verschmutzungsgrad des Fahrzeugs angegeben",
        en: "Prices are listed as a range depending on the level of vehicle pollution"
    },
    price_cat_1: {
        cs: "Osobní automobil",
        de: "PKW",
        en: "Sedan & Hatchback"
    },
    price_note_1: {
        cs: "Běžné znečištění a menší vozy",
        de: "Normale Verschmutzung und kleinere Fahrzeuge",
        en: "Normal dirt level and smaller cars"
    },
    price_cat_2: {
        cs: "SUV & 7místná vozidla",
        de: "SUV & 7-Sitzer",
        en: "SUV & 7-Seater Vehicles"
    },
    price_note_2: {
        cs: "Větší rodinné vozy a SUV",
        de: "Größere Familienautos und SUVs",
        en: "Larger family cars and SUVs"
    },
    price_cat_3: {
        cs: "Dodávky & Extrémní špína",
        de: "Vans & Extreme Verschmutzung",
        en: "Vans & Extreme Dirt"
    },
    price_note_3: {
        cs: "Užitkové vozy a silná znečištění",
        de: "Nutzfahrzeuge und starke Verschmutzungen",
        en: "Commercial vehicles and heavy contamination"
    },
    price_li_1: {
        cs: "Kompletní vysávání a prach",
        de: "Komplettes Staubsaugen und Entstauben",
        en: "Complete vacuuming and dusting"
    },
    price_li_2: {
        cs: "Vyčištění a impregnace plastů",
        de: "Reinigung und Pflege von Kunststoffen",
        en: "Cleaning and dressing of plastics"
    },
    price_li_3: {
        cs: "Tepování / ošetření kůže",
        de: "Polster-Nassreinigung / Lederpflege",
        en: "Deep seat extraction / leather treatment"
    },
    price_li_4: {
        cs: "Dezinfekce a provonění",
        de: "Desinfektion und Beduftung",
        en: "Disinfection and scenting"
    },
    price_li_5: {
        cs: "Čištění 3. řady sedadel / kufru",
        de: "Reinigung der 3. Sitzreihe / des Kofferraums",
        en: "Cleaning of the 3rd row / trunk area"
    },
    price_li_6: {
        cs: "Silně znečištěná vozidla",
        de: "Extrem verschmutzte Fahrzeuge",
        en: "Highly contaminated vehicles"
    },
    price_li_7: {
        cs: "Odstraňování zvířecí srsti",
        de: "Entfernung von Tierhaaren",
        en: "Pet hair removal"
    },
    price_li_8: {
        cs: "Sanace nánosů bláta a prachu",
        de: "Beseitigung von Schlamm- und Staubablagerungen",
        en: "Removal of mud and heavy dust build-up"
    },
    price_li_9: {
        cs: "Hloubkové tepování sedaček",
        de: "Tiefen-Nassreinigung aller Sitze",
        en: "Deep wet extraction of all seats"
    },
    price_popular: {
        cs: "Nejčastější",
        de: "Beliebtest",
        en: "Popular"
    },
    price_cta: {
        cs: "Poptat čištění",
        de: "Reinigung anfragen",
        en: "Request cleaning"
    },
    price_disclaimer: {
        cs: "* Ceny se mohou lišit v závislosti na míře znečištění vozidla (nánosy bláta, chlupy z domácích mazlíčků apod.). Extrémní znečištění odpovídá horní hranici ceníku.",
        de: "* Die Preise können je nach Verschmutzungsgrad des Fahrzeugs (Schlammablagerungen, Tierhaare usw.) variieren. Extreme Verschmutzung entspricht der Obergrenze des Preisrahmens.",
        en: "* Prices may vary depending on the level of vehicle pollution (mud deposits, pet hair, etc.). Extreme pollution corresponds to the upper limit of the price list."
    },
    logistic_note: {
        cs: "Dovoz auta po okrese Znojmo je ZDARMA. Mimo okres dle individuální domluvy.",
        de: "Fahrzeugabholung im Bezirk Znojmo KOSTENLOS. Außerhalb des Bezirks nach individueller Absprache.",
        en: "Car pickup in the Znojmo district is FREE. Outside the district by agreement."
    },

    // Contact Section
    contact_title: {
        cs: "Neváhejte nás kontaktovat",
        de: "Kontaktieren Sie uns gerne",
        en: "Feel free to contact us"
    },
    contact_subtitle: {
        cs: "Zavolejte, napište e-mail nebo rovnou pošlete zprávu na WhatsApp",
        de: "Rufen Sie uns an, schreiben Sie eine E-Mail oder senden Sie eine Nachricht über WhatsApp",
        en: "Call, send an email, or message us directly on WhatsApp"
    },
    contact_subtitle_info: {
        cs: "Kontaktní údaje",
        de: "Kontaktdaten",
        en: "Contact Information"
    },
    c_phone: {
        cs: "Telefon",
        de: "Telefon",
        en: "Phone"
    },
    c_whatsapp: {
        cs: "WhatsApp",
        de: "WhatsApp",
        en: "WhatsApp"
    },
    c_email: {
        cs: "E-mail",
        de: "E-Mail",
        en: "Email"
    },
    c_address: {
        cs: "Kde nás najdete",
        de: "Standort",
        en: "Where to find us"
    },
    open_in_maps: {
        cs: "Otevřít v Google Maps",
        de: "In Google Maps öffnen",
        en: "Open in Google Maps"
    },

    // Footer
    footer_brand_desc: {
        cs: "Prémiová péče o interiér vašeho automobilu na Znojemsku a v příhraničí Rakouska.",
        de: "Premium-Pflege für den Innenraum Ihres Autos in der Region Znojmo und im österreichischen Grenzgebiet.",
        en: "Premium interior care for your car in the Znojmo region and the Austrian border area."
    },
    f_links_title: {
        cs: "Rychlé odkazy",
        de: "Schnelllinks",
        en: "Quick Links"
    },
    f_billing_title: {
        cs: "Fakturační údaje (B2B)",
        de: "Rechnungsdaten (B2B)",
        en: "Billing Info (B2B)"
    },
    f_billing_address: {
        cs: "Adresa: Načeratice 124, 669 02 Znojmo",
        de: "Adresse: Načeratice 124, 669 02 Znojmo (Tschechien)",
        en: "Address: Naceratice 124, 669 02 Znojmo (Czech Rep.)"
    },
    f_tax_note: {
        cs: "Možnost fakturace jako daňový náklad pro firmy.",
        de: "Rechnungsstellung als steuerlich absetzbare Betriebsausgabe für Unternehmen.",
        en: "Invoicing options available as a tax-deductible expense for business entities."
    },
    footer_web_by: {
        cs: "Navrženo týmem Antigravity",
        de: "Entworfen vom Antigravity-Team",
        en: "Designed by Antigravity Team"
    },

    // Cookies
    cookie_msg: {
        cs: "Tento web používá cookies ke zlepšení uživatelského zážitku a analýze návštěvnosti. Prohlížením webu vyjadřujete souhlas s jejich používáním.",
        de: "Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern und den Datenverkehr zu analysieren. Durch die Nutzung der Website stimmen Sie deren Verwendung zu.",
        en: "This website uses cookies to improve user experience and analyze traffic. By browsing the website, you consent to their use."
    },
    cookie_accept: {
        cs: "Rozumím",
        de: "Akzeptieren",
        en: "Accept"
    }
};

// Pricing values in different currencies
const prices = {
    cs: {
        currency: " Kč",
        prefix: "",
        val1: "2 100 – 2 300",
        val2: "2 500 – 3 000",
        val3: "3 000 – 3 500"
    },
    de: {
        currency: " €",
        prefix: "ca. ",
        val1: "100 – 120",
        val2: "120 – 150",
        val3: "150 – 200"
    },
    en: {
        currency: " €",
        prefix: "approx. ",
        val1: "100 – 120",
        val2: "120 – 150",
        val3: "150 – 200"
    }
};

// WhatsApp pre-filled templates per language
const waTemplates = {
    cs: "Dobrý den, měl bych zájem o čištění interiéru auta.",
    de: "Hallo, ich interessiere mich für eine Innenreinigung meines Fahrzeugs.",
    en: "Hello, I am interested in interior car detailing."
};

// --- Language Switching Logic ---
let currentLang = localStorage.getItem("preferred_lang") || "cs";

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("preferred_lang", lang);
    
    // Update HTML lang attribute
    document.documentElement.setAttribute("lang", lang);

    // Update active state in language buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
        if (btn.getAttribute("data-lang") === lang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Translate all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });

    // Update prices specifically (handling formatting and currencies)
    const priceData = prices[lang];
    if (priceData) {
        document.querySelectorAll(".price-card").forEach((card, idx) => {
            const valSpan = document.getElementById(`price-val-${idx + 1}`);
            const suffixSpan = card.querySelector(".currency-suffix");
            const prefixSpan = card.querySelector(".currency-prefix");
            
            if (valSpan) valSpan.textContent = priceData[`val${idx + 1}`];
            if (suffixSpan) suffixSpan.textContent = priceData.currency;
            if (prefixSpan) prefixSpan.textContent = priceData.prefix;
        });
    }

    // --- Dynamic Phone Configuration based on Language ---
    const phoneData = phoneConfig[lang] || phoneConfig.cs;
    
    // Top Bar Phone link & text
    const topPhoneLink = document.getElementById("top-phone-link");
    const topPhoneText = document.getElementById("top-phone-text");
    if (topPhoneLink) topPhoneLink.href = phoneData.href;
    if (topPhoneText) topPhoneText.textContent = phoneData.number;
    
    // Contact Panel Phone link
    const contactPhoneLink = document.getElementById("contact-phone-link");
    if (contactPhoneLink) {
        contactPhoneLink.href = phoneData.href;
        contactPhoneLink.textContent = phoneData.number;
    }
    
    // Contact Panel WhatsApp link
    const contactWaLink = document.getElementById("contact-wa-link");
    if (contactWaLink) {
        contactWaLink.href = `https://wa.me/${phoneData.raw}`;
        contactWaLink.textContent = phoneData.number;
    }

    // WhatsApp API links with translated pre-filled messages and correct phone number
    const waText = encodeURIComponent(waTemplates[lang]);
    
    // Hero WhatsApp link
    const heroWaBtn = document.getElementById("hero-wa-btn");
    if (heroWaBtn) {
        heroWaBtn.href = `https://wa.me/${phoneData.raw}?text=${waText}`;
    }

    // Pricing WhatsApp links
    const categoryKeys = ["price_cat_1", "price_cat_2", "price_cat_3"];
    categoryKeys.forEach((key, idx) => {
        const ctaBtn = document.getElementById(`price-wa-btn-${idx + 1}`);
        if (ctaBtn) {
            const categoryName = translations[key][lang];
            let template = "";
            if (lang === "cs") {
                template = `Dobrý den, chci poptat čištění pro: ${categoryName}.`;
            } else if (lang === "de") {
                template = `Hallo, ich möchte eine Innenreinigung anfragen für: ${categoryName}.`;
            } else {
                template = `Hello, I would like to request interior detailing for: ${categoryName}.`;
            }
            ctaBtn.href = `https://wa.me/${phoneData.raw}?text=${encodeURIComponent(template)}`;
        }
    });
}

// --- Theme Toggle Logic (Dark/Light) & Dynamic Logo ---
let currentTheme = localStorage.getItem("theme") || "dark";

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    
    const headerLogo = document.getElementById("header-logo");
    const footerLogo = document.getElementById("footer-logo");
    
    if (theme === "dark") {
        if (headerLogo) headerLogo.src = "images/logo_final_white.svg";
        if (footerLogo) footerLogo.src = "images/logo_final_white.svg";
    } else {
        if (headerLogo) headerLogo.src = "images/logo_final.svg";
        if (footerLogo) footerLogo.src = "images/logo_final.svg";
    }
}

// Apply theme on load
applyTheme(currentTheme);

const themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        const activeTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = activeTheme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
    });
}

// --- Before/After Slider Logic ---
const slider = document.getElementById("image-slider");
const sliderHandle = document.getElementById("slider-handle");
const imgAfter = document.querySelector(".img-after");

if (slider && sliderHandle && imgAfter) {
    let isDragging = false;

    function moveSlider(clientX) {
        const rect = slider.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        let percentage = (offsetX / rect.width) * 100;
        
        // Boundaries restriction
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;
        
        // Update DOM elements position/width
        sliderHandle.style.left = `${percentage}%`;
        imgAfter.style.width = `${percentage}%`;
    }

    // Mouse Events
    sliderHandle.addEventListener("mousedown", (e) => {
        isDragging = true;
        e.preventDefault();
    });

    window.addEventListener("mouseup", () => {
        isDragging = false;
    });

    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        moveSlider(e.clientX);
    });

    // Touch Events (Mobile support)
    sliderHandle.addEventListener("touchstart", (e) => {
        isDragging = true;
    });

    window.addEventListener("touchend", () => {
        isDragging = false;
    });

    window.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        if (e.touches.length > 0) {
            moveSlider(e.touches[0].clientX);
        }
    });

    // Handle clicks/taps directly on the slider container
    slider.addEventListener("click", (e) => {
        if (e.target.closest("#slider-handle") || e.target.closest(".slider-selector")) return;
        moveSlider(e.clientX);
    });
}

// --- Gallery Sample Selector Logic ---
const imgBeforeEl = document.getElementById("img-before-element");
const imgAfterEl = document.getElementById("img-after-element");

if (imgBeforeEl && imgAfterEl) {
    document.querySelectorAll(".selector-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const sampleId = btn.getAttribute("data-sample");
            const sampleData = gallerySamples[sampleId];
            
            if (sampleData) {
                // Change images
                imgBeforeEl.src = sampleData.before;
                imgAfterEl.src = sampleData.after;
                
                // Reset slider position to 50%
                if (sliderHandle && imgAfter) {
                    sliderHandle.style.left = "50%";
                    imgAfter.style.width = "50%";
                }
                
                // Toggle active state on buttons
                document.querySelectorAll(".selector-btn").forEach(b => {
                    b.classList.remove("active");
                });
                btn.classList.add("active");
            }
        });
    });
}

// --- Mobile Hamburger Menu ---
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking on nav link
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// --- Cookie Consent Bar Logic ---
const cookieBar = document.getElementById("cookie-bar");
const cookieAcceptBtn = document.getElementById("cookie-accept-btn");

if (cookieBar && cookieAcceptBtn) {
    const cookiesAccepted = localStorage.getItem("cookies_accepted");
    
    // If not accepted yet, show the bar
    if (!cookiesAccepted) {
        cookieBar.classList.remove("hidden");
    } else {
        cookieBar.classList.add("hidden");
    }
    
    cookieAcceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookies_accepted", "true");
        cookieBar.classList.add("hidden");
    });
}

// --- Initialize App ---
document.addEventListener("DOMContentLoaded", () => {
    // Setup language dropdown triggers
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            setLanguage(lang);
        });
    });

    // Apply saved or default language
    setLanguage(currentLang);
});
