import type { Dict } from "./types";

// Opening hours, shipping terms, payment methods and legal details are placeholders until confirmed by the shop (see README).
export const de: Dict = {
  lang: "de",
  locale: "de-AT",
  meta: {
    title: "CBD Shop Wien 1080 – CBD Öl, Blüten & Kosmetik | Cannaplace",
    description:
      "CBD Shop in Wien-Josefstadt: laborgeprüfte CBD Öle, Blüten & Kosmetik, persönliche Beratung und Versand in ganz Österreich. Jetzt entdecken bei Cannaplace 1080.",
  },
  announcement: [
    "Laborgeprüfte Qualität",
    "Diskreter Versand in ganz Österreich",
    "Persönliche Beratung im Shop · Josefstädter Str. 56",
  ],
  nav: {
    shop: "Shop",
    flowers: "CBD Blüten",
    oils: "CBD Öle",
    cosmetics: "Kosmetik",
    accessories: "Zubehör",
    guide: "Ratgeber",
    about: "Über uns",
  },
  header: {
    skip: "Zum Inhalt springen",
    home: "Cannaplace – zur Startseite",
    search: "Suche",
    account: "Kundenkonto",
    cart: "Warenkorb",
    call: "Anrufen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache",
    wishlist: "Merkliste",
    accountTitle: "Kundenkonto",
    accountText:
      "Login und Bestellübersicht kommen mit dem Start des Onlineshops. Deine Merkliste funktioniert schon jetzt – gespeichert in deinem Browser.",
    searchPanel: {
      title: "Shop durchsuchen",
      placeholder: "Produkte, Ratgeber, Themen …",
      close: "Suche schließen",
      empty: "Keine Treffer für „{q}“. Versuch es mit einem anderen Begriff – oder ruf uns an, wir helfen gerne weiter.",
      popular: "Beliebte Suchen",
      results: { one: "{n} Treffer", other: "{n} Treffer" },
      suggestions: ["CBD Öl", "Kosmetik", "Grinder", "Laborbericht", "Versand", "Terpene"],
      groups: { product: "Produkte", category: "Kategorien", article: "Ratgeber", page: "Seiten" },
    },
  },
  intro: {
    eyebrow: "CBD Shop in Wien-Josefstadt",
    title: "Hanf, wie er sein sollte.",
    rating: "5,0 · 127 Google-Bewertungen",
    thc: "THC < 0,3 % · laborgeprüft",
  },
  promo: {
    label: "Aktionen und Empfehlungen",
    slide: "Banner {n} von {total}",
    prev: "Vorheriges Banner",
    next: "Nächstes Banner",
    pause: "Automatischen Wechsel anhalten",
    play: "Automatischen Wechsel starten",
  },
  valueProps: [
    { icon: "flask", title: "Laborgeprüft", text: "Jede Charge mit Analysezertifikat eines unabhängigen Labors." },
    { icon: "chat", title: "Persönliche Beratung", text: "Im Shop in der Josefstadt oder telefonisch – wir nehmen uns Zeit." },
    { icon: "package", title: "Diskreter Versand", text: "Neutral verpackt und schnell bei dir – in ganz Österreich." },
    { icon: "tag", title: "Faire Preise", text: "Premium-Qualität zu ehrlichen Preisen, direkt vom Fachhändler." },
  ],
  categories: { eyebrow: "Sortiment", title: "Finde, was zu dir passt", link: "Alle Produkte ansehen" },
  bestsellers: { eyebrow: "Beliebt im Shop", title: "Unsere Bestseller", link: "Alle Produkte" },
  lab: {
    eyebrow: "Transparenz",
    titleLine1: "Geprüft. Dokumentiert.",
    titleLine2: "Für dich einsehbar.",
    text: "Zu jedem Produkt stellen wir das Analysezertifikat (COA) eines unabhängigen Labors bereit. So siehst du schwarz auf weiß, was drin ist – und was nicht.",
    checklist: [
      "Cannabinoid-Profil mit exaktem CBD-Gehalt",
      "THC unter dem gesetzlichen Grenzwert von 0,3 %",
      "Geprüft auf Pestizide, Schwermetalle und Lösungsmittel",
    ],
    button: "Alle Laborberichte",
  },
  store: {
    eyebrow: "Besuch uns",
    title: "Mitten in der Josefstadt",
    text: "Komm vorbei, schnupper rein und lass dich beraten. In unserem Shop findest du das komplette Sortiment – und ehrliche Empfehlungen statt Verkaufsgespräche.",
    hours: "Mo–Fr 10:30–19:00 · Sa 11:00–17:00",
    route: "Route planen",
    call: "Anrufen",
    more: "Kontakt & Anfahrt",
    mapAlt: "Karte: Cannaplace in der Josefstädter Straße 56, 1080 Wien",
  },
  reviews: {
    eyebrow: "Bewertungen",
    title: "Das sagen unsere Kundinnen und Kunden",
    text: "Ehrliche Beratung und geprüfte Qualität – davon erzählen die Bewertungen auf unserem Google-Profil.",
    summary: "{count} Bewertungen auf Google",
    all: "Alle Bewertungen auf Google",
    source: { google: "Google-Bewertung", shop: "Bewertung im Shop" },
    translated: "Aus dem Englischen übersetzt",
    inviteTitle: "Schon bei uns gewesen?",
    inviteText:
      "Erzähl anderen von deinem Besuch: Deine Bewertung auf Google hilft uns – und allen, die in Wien einen ehrlichen CBD Shop suchen.",
    inviteCta: "Bewertung schreiben",
  },
  journal: { eyebrow: "Ratgeber", title: "Wissen rund um CBD", link: "Zum Ratgeber", readMore: "Weiterlesen" },
  homeSeo: {
    eyebrow: "CBD Shop Wien",
    title: "Dein CBD Shop in Wien-Josefstadt",
    body: [
      {
        type: "p",
        text: "Cannaplace 1080 ist dein CBD Fachgeschäft in der Josefstädter Straße 56 im 8. Wiener Gemeindebezirk. Bei uns findest du ein bewusst ausgewähltes Sortiment: [CBD Öle](/shop/cbd-oel/) mit 5 bis 20 % CBD, aromatische [CBD Blüten](/shop/cbd-blueten/), pflegende [CBD Kosmetik](/shop/cbd-kosmetik/) und praktisches [Zubehör](/shop/zubehoer/) wie Grinder und Aufbewahrungsgläser.",
      },
      {
        type: "p",
        text: "Qualität heißt für uns Transparenz. Zu jedem Produkt gibt es ein Analysezertifikat eines unabhängigen Labors, das Cannabinoid-Profil und THC-Gehalt dokumentiert und Pestizide sowie Schwermetalle ausschließt. Die Werte der aktuellen Chargen findest du jederzeit unter [Laborberichte](/laborberichte/).",
      },
      {
        type: "p",
        text: "Im Shop nehmen wir uns Zeit für deine Fragen – ehrlich, verständlich und ohne Heilversprechen. CBD-Öle, Kosmetik und Zubehör kannst du auch online bestellen; wir liefern diskret in ganz Österreich. CBD-Blüten bekommst du dagegen nur bei uns im Geschäft: Seit 2025 fallen Hanfblüten in Österreich unter das Tabakmonopol, ein Versand ist nicht erlaubt. Was genau gilt, erklären wir im Artikel [CBD in Österreich: Was ist erlaubt?](/ratgeber/cbd-legal-oesterreich/)",
      },
    ],
    faqTitle: "Häufige Fragen",
    faq: [
      {
        q: "Wo finde ich den CBD Shop Cannaplace in Wien?",
        a: "Unser Geschäft liegt in der Josefstädter Straße 56 im 8. Bezirk (Josefstadt). Mit den Öffis erreichst du uns mit der Straßenbahnlinie 2 oder der U6 (Station Josefstädter Straße).",
      },
      {
        q: "Wann hat der CBD Shop geöffnet?",
        a: "Montag bis Freitag von 10:30 bis 19:00 Uhr und Samstag von 11:00 bis 17:00 Uhr. An Sonn- und Feiertagen ist geschlossen.",
      },
      {
        q: "Ist CBD in Österreich legal?",
        a: "Ja. CBD-Produkte mit einem THC-Gehalt von höchstens 0,3 % sind in Österreich legal. CBD-Öle werden als Aromaöle verkauft, für CBD-Blüten gelten seit 2025 die Regeln des Tabakmonopols.",
      },
      {
        q: "Kann ich CBD auch online bestellen?",
        a: "CBD-Öle, Kosmetik und Zubehör versenden wir in ganz Österreich. CBD-Blüten verkaufen wir nur im Geschäft, weil ihr Versand gesetzlich nicht erlaubt ist.",
      },
      {
        q: "Macht CBD high?",
        a: "Nein. CBD wirkt nicht berauschend. Verantwortlich für den Rausch ist THC – und dessen Gehalt liegt bei unseren Produkten unter 0,3 %.",
      },
    ],
  },
  newsletter: {
    title: "Neuheiten & Angebote zuerst erfahren",
    text: "Melde dich für unseren Newsletter an – mit Wissen rund um CBD, neuen Sorten und exklusiven Angeboten. Kein Spam, versprochen.",
    placeholder: "Deine E-Mail-Adresse",
    button: "Anmelden",
    note: "Abmeldung jederzeit möglich. Mehr in unserer Datenschutzerklärung.",
    success: "Danke! Die Anmeldung wird in der fertigen Version aktiviert.",
  },
  footer: {
    description:
      "Moderner CBD Shop im 8. Bezirk: hochwertige, legale CBD-Produkte, persönliche Beratung und faire Preise.",
    shopTitle: "Shop",
    allProducts: "Alle Produkte",
    serviceTitle: "Service",
    legalTitle: "Rechtliches",
    contactTitle: "Kontakt",
    hoursShort: "Mo–Fr 10:30–19:00 · Sa 11:00–17:00",
    copyright: "© 2026 Cannaplace 1080 CBD Shop. Alle Rechte vorbehalten.",
    legal: "Verkauf nur an Personen ab 18 Jahren · Alle Produkte mit THC < 0,3 % · Keine Arzneimittel",
    withdrawal: "Widerrufsrecht",
    withdrawalHash: "rueckgabe-widerruf",
    operator: "Betreiberin",
    register: "Firmenbuch",
    vat: "UID",
    credit: "Website & SEO:",
  },
  common: {
    home: "Startseite",
    breadcrumb: "Brotkrümelnavigation",
    faqTitle: "Häufige Fragen",
    productCount: { one: "{n} Produkt", other: "{n} Produkte" },
    inStoreOnly: "Nur im Geschäft",
    exploreCategories: "Weitere Kategorien",
  },
  listing: {
    filterLabel: "Nach Kategorie filtern",
    all: "Alle",
    sortLabel: "Sortieren",
    sort: { featured: "Empfohlen", priceAsc: "Preis aufsteigend", priceDesc: "Preis absteigend", name: "Name A–Z" },
  },
  product: {
    meta: {
      title: "{name} kaufen{lab} | Cannaplace 1080",
      titleInStore: "{name} ({category}) – nur im Shop in Wien | Cannaplace 1080",
      lab: " – laborgeprüft",
      description: "{short} Cannaplace 1080, CBD Shop Wien.",
    },
    addToCart: "In den Warenkorb",
    wishlist: "Auf die Merkliste",
    wishlistShort: "Merken",
    inclVat: "inkl. 20 % MwSt.",
    badges: { bestseller: "Bestseller", new: "Neu" },
    shippingAvailable: "Versand in ganz Österreich oder Abholung im Shop",
    inStoreText:
      "Hanfblüten fallen in Österreich unter das Tabakmonopol. Du bekommst dieses Produkt deshalb nur in unserem Geschäft in der Josefstädter Straße 56 – ohne Versand und nur ab 18 Jahren.",
    route: "Route planen",
    trust: [
      "Laborgeprüft – Analysezertifikat zur aktuellen Charge",
      "Persönliche Beratung im Shop oder am Telefon",
      "Diskret und neutral verpackt",
    ],
    descriptionTitle: "Beschreibung",
    specsTitle: "Eigenschaften",
    coaTitle: "Laborbericht",
    coaText:
      "Die wichtigsten Werte der aktuellen Charge. Das vollständige Zertifikat zeigen wir dir gerne im Shop oder schicken es dir auf Anfrage.",
    coaLink: "Laborbericht ansehen",
    coaArchive: "Im Laborarchiv ansehen",
    faqTitle: "Häufige Fragen zu {name}",
    faqShipping: [
      {
        q: "Wie schnell wird {name} geliefert?",
        a: "Wir versenden {name} diskret innerhalb Österreichs. In der Regel ist deine Bestellung in 2–4 Werktagen bei dir. Alternativ holst du sie kostenlos im Shop in der Josefstädter Straße 56 ab.",
      },
      {
        q: "Kann ich {name} vor dem Kauf im Shop ansehen?",
        a: "Ja. Unser gesamtes Sortiment in der Kategorie {category} findest du auch im Geschäft in der Josefstadt. Wir beraten dich gerne persönlich.",
      },
    ],
    faqInStore: [
      {
        q: "Warum kann ich {name} nicht online bestellen?",
        a: "Hanfblüten fallen in Österreich unter das Tabakmonopol, der Versandhandel ist nicht erlaubt. {name} bekommst du deshalb ausschließlich in unserem Geschäft in der Josefstädter Straße 56.",
      },
      {
        q: "Ab welchem Alter bekomme ich {name}?",
        a: "Hanfblüten geben wir – wie Tabakwaren – nur an Personen ab 18 Jahren ab. Bitte nimm einen Lichtbildausweis mit.",
      },
    ],
    faqCoa: {
      q: "Gibt es zu {name} einen Laborbericht?",
      a: "Ja. Für {name} liegt ein Analysezertifikat eines unabhängigen Labors vor (Charge {batch}). Die wichtigsten Werte findest du auf dieser Seite und unter Laborberichte.",
    },
    related: "Das könnte dir auch gefallen",
  },
  coa: {
    title: "Analysezertifikat",
    batch: "Charge {batch}",
    badge: "Geprüft",
    thcNote: "unter 0,3 %",
    pesticides: "Pestizide",
    heavyMetals: "Schwermetalle",
    notDetected: "nicht nachweisbar",
    footer: "Unabhängiges Labor · ISO/IEC 17025",
    tested: "Analyse {date}",
    currentBatches: "Aktuelle Chargen",
    toProduct: "Zum Produkt",
    pdf: "Vollständiges Zertifikat (PDF)",
  },
  article: {
    toc: "Inhalt",
    author: "Team Cannaplace 1080",
    authorRole: "CBD Fachgeschäft in Wien-Josefstadt",
    published: "Veröffentlicht am {date}",
    updated: "Aktualisiert am {date}",
    readingTime: "{n} Min. Lesezeit",
    productsTitle: "Passende Produkte",
    moreTitle: "Weitere Artikel",
    disclaimer:
      "Dieser Artikel dient der allgemeinen Information und ersetzt keine ärztliche oder rechtliche Beratung. CBD-Produkte sind keine Arzneimittel.",
  },
  shop: {
    meta: {
      title: "CBD Shop online: Öle, Blüten, Kosmetik & Zubehör | Cannaplace",
      description:
        "Alle Produkte aus unserem CBD Shop in Wien: laborgeprüfte CBD Öle, Blüten (nur im Geschäft), Kosmetik und Zubehör – Versand in ganz Österreich oder Abholung in 1080 Wien.",
    },
    eyebrow: "Shop",
    h1: "Alle CBD Produkte",
    intro:
      "Laborgeprüfte CBD Öle, aromatische Blüten, pflegende Kosmetik und durchdachtes Zubehör – ausgewählt von unserem Team in Wien-Josefstadt.",
    body: [
      { type: "h2", text: "Online bestellen oder im Shop abholen" },
      {
        type: "p",
        text: "CBD-Öle, Kosmetik und Zubehör verschicken wir diskret in ganz Österreich. Du kannst deine Bestellung aber auch persönlich in der Josefstädter Straße 56 abholen und dich dabei gleich beraten lassen. Alle Details findest du unter [Versand & Zahlung](/versand-zahlung/).",
      },
      { type: "h2", text: "Unser Qualitätsversprechen" },
      {
        type: "ul",
        items: [
          "**Laborgeprüft:** Zu jeder Charge gibt es ein Analysezertifikat eines unabhängigen Labors – mehr unter [Laborberichte](/laborberichte/).",
          "**THC unter 0,3 %:** Alle Produkte halten den gesetzlichen Grenzwert ein.",
          "**Ehrliche Beratung:** Wir erklären, statt zu versprechen – ohne Heilversprechen und ohne Verkaufsdruck.",
          "**Faire Preise:** Premium-Qualität zu ehrlichen Preisen, direkt vom Fachhändler.",
        ],
      },
    ],
    faq: [
      {
        q: "Welche Produkte versendet ihr?",
        a: "CBD-Öle, CBD-Kosmetik und Zubehör versenden wir in ganz Österreich. CBD-Blüten verkaufen wir ausschließlich im Geschäft.",
      },
      {
        q: "Kann ich online bestellen und im Shop abholen?",
        a: "Ja. Wähle bei der Bestellung einfach die Abholung im Shop in der Josefstädter Straße 56 – wir legen deine Produkte für dich bereit.",
      },
      {
        q: "Woran erkenne ich, wie viel CBD in einem Produkt steckt?",
        a: "Die Konzentration steht in der Produktbeschreibung und auf dem Etikett. Die gemessenen Werte der aktuellen Charge findest du im Laborbericht des jeweiligen Produkts.",
      },
    ],
  },
  categoryPages: {
    flowers: {
      slug: "cbd-blueten",
      name: "CBD Blüten",
      meta: {
        title: "CBD Blüten in Wien – nur im Geschäft in 1080 | Cannaplace",
        description:
          "CBD Blüten in Wien: Lemon Haze, Orange Bud und OG Kush mit THC unter 0,3 % und Laborbericht – erhältlich nur im Geschäft in der Josefstädter Straße 56, 1080 Wien.",
      },
      h1: "CBD Blüten in Wien",
      intro:
        "Aromatische CBD-Blüten mit einem THC-Gehalt unter 0,3 % – jede Sorte mit Laborbericht zur aktuellen Charge. Hanfblüten fallen in Österreich seit 2025 unter das Tabakmonopol. Du bekommst sie deshalb nur bei uns im Geschäft in der Josefstädter Straße 56, nicht im Versand.",
      body: [
        { type: "h2", text: "CBD Blüten kaufen in Wien: nur im Geschäft" },
        {
          type: "p",
          text: "Seit einem Erkenntnis des Verwaltungsgerichtshofs im Jänner 2025 gelten rauchbare Hanfblüten in Österreich als Monopolware. Verkauft werden dürfen sie in Trafiken und – mit einer Übergangslizenz bis Ende 2028 – in Hanf-Fachgeschäften, verschickt werden dürfen sie nicht. Deshalb findest du unsere CBD-Blüten ausschließlich im Shop in der Josefstadt. Die Hintergründe liest du im Artikel [CBD in Österreich: Was ist erlaubt?](/ratgeber/cbd-legal-oesterreich/)",
        },
        { type: "h2", text: "Woran du hochwertige CBD-Blüten erkennst" },
        {
          type: "ul",
          items: [
            "**Laborbericht:** Ein aktuelles Analysezertifikat zeigt CBD- und THC-Gehalt der Charge und schließt Pestizide und Schwermetalle aus.",
            "**Aussehen:** Gut getrocknete Blüten sind kompakt, sauber geschnitten und zeigen deutlich sichtbare Harzdrüsen (Trichome).",
            "**Aroma:** Ein klares, sortentypisches Aroma spricht für sorgfältige Trocknung und Lagerung.",
            "**Lagerung:** In luftdichten, lichtgeschützten Gläsern bleiben Blüten länger aromatisch – zum Beispiel im [UV-Aufbewahrungsglas](/shop/zubehoer/uv-aufbewahrungsglas-100-ml/).",
          ],
        },
        { type: "h2", text: "Unsere Sorten im Überblick" },
        {
          type: "p",
          text: "[Lemon Haze](/shop/cbd-blueten/lemon-haze/) ist frisch und zitronig, [Orange Bud](/shop/cbd-blueten/orange-bud/) fruchtig-süß und [OG Kush](/shop/cbd-blueten/og-kush/) erdig-würzig mit einer Note von Kiefer. Welche Sorte gerade vorrätig ist, zeigen wir dir gerne direkt im Shop.",
        },
      ],
      faq: [
        {
          q: "Kann ich CBD-Blüten online bestellen?",
          a: "Nein. Hanfblüten fallen in Österreich unter das Tabakmonopol, der Versandhandel ist nicht erlaubt. Unsere CBD-Blüten bekommst du ausschließlich im Geschäft in der Josefstädter Straße 56.",
        },
        {
          q: "Sind CBD-Blüten in Österreich legal?",
          a: "Ja, sofern der THC-Gehalt höchstens 0,3 % beträgt. Seit 2025 gelten für den Verkauf die Regeln des Tabakmonopols: Blüten dürfen in Trafiken und bis Ende 2028 in lizenzierten Hanf-Fachgeschäften verkauft werden.",
        },
        {
          q: "Wie viel THC enthalten eure CBD-Blüten?",
          a: "Alle Sorten liegen unter dem gesetzlichen Grenzwert von 0,3 % THC. Den genauen Wert der aktuellen Charge findest du im Laborbericht auf der jeweiligen Produktseite.",
        },
        {
          q: "Ab welchem Alter darf ich CBD-Blüten kaufen?",
          a: "Hanfblüten geben wir – wie Tabakwaren – nur an Personen ab 18 Jahren ab. Bitte nimm einen Lichtbildausweis mit.",
        },
      ],
    },
    oils: {
      slug: "cbd-oel",
      name: "CBD Öle",
      meta: {
        title: "CBD Öl kaufen in Wien – 5 %, 10 % & 20 % | Cannaplace",
        description:
          "CBD Öl kaufen in Wien: laborgeprüfte Aromaöle mit 5, 10 und 20 % CBD und Analysezertifikat zu jeder Charge. Versand in ganz Österreich oder Abholung in 1080 Wien.",
      },
      h1: "CBD Öl kaufen in Wien",
      intro:
        "Laborgeprüfte CBD-Öle mit 5, 10 und 20 % CBD – mit Analysezertifikat zu jeder Charge. Bestell online mit Versand in ganz Österreich oder hol dein Öl persönlich in der Josefstädter Straße 56 ab.",
      body: [
        { type: "h2", text: "Welche Konzentration passt zu dir?" },
        {
          type: "p",
          text: "Die Prozentangabe zeigt, wie viel CBD in einer Flasche steckt. Bei 10 ml entspricht 1 % rund 100 mg CBD. Wer CBD kennenlernen möchte, startet häufig mit 5 %, höhere Konzentrationen sind vor allem für erfahrene Kundinnen und Kunden interessant.",
        },
        {
          type: "table",
          head: ["Öl", "CBD pro 10 ml", "Für wen?"],
          rows: [
            ["[CBD Aromaöl 5 %](/shop/cbd-oel/cbd-aromaoel-5/)", "500 mg", "zum Kennenlernen"],
            ["[CBD Aromaöl 10 %](/shop/cbd-oel/cbd-aromaoel-10/)", "1.000 mg", "unser Allrounder"],
            ["[CBD Aromaöl 20 %](/shop/cbd-oel/cbd-aromaoel-20/)", "2.000 mg", "für Erfahrene"],
          ],
        },
        { type: "h2", text: "Worauf du beim Kauf von CBD Öl achten solltest" },
        {
          type: "ul",
          items: [
            "**Analysezertifikat:** Es sollte von einem unabhängigen Labor stammen und zur Chargennummer auf der Flasche passen. Wie du es liest, erklärt unser [Ratgeber zum Analysezertifikat](/ratgeber/analysezertifikat-lesen/).",
            "**THC-Gehalt:** In Österreich gilt ein Grenzwert von 0,3 %.",
            "**Menge in mg:** Seriöse Anbieter nennen neben dem Prozentwert auch die CBD-Menge pro Flasche.",
            "**Trägeröl:** Hanfsamenöl ist ein bewährtes Trägeröl für CBD-Extrakte.",
            "**Seriöse Beratung:** Vorsicht bei Heilversprechen – sie sind für CBD-Produkte nicht erlaubt.",
          ],
        },
        { type: "h2", text: "Warum CBD-Öle in Österreich als Aromaöl verkauft werden" },
        {
          type: "p",
          text: "CBD-Extrakte gelten in der EU als neuartige Lebensmittel (Novel Food) und haben bisher keine Zulassung als Lebensmittel oder Nahrungsergänzungsmittel. In Österreich werden CBD-Öle deshalb als Aromaöle angeboten und sind als „nicht zum Verzehr bestimmt“ gekennzeichnet.",
        },
        { type: "h2", text: "Beratung im CBD Shop in Wien" },
        {
          type: "p",
          text: "Du möchtest die Öle vorher sehen oder hast Fragen zur Konzentration? Komm in unseren Shop in der Josefstädter Straße 56 – wir nehmen uns Zeit und beraten dich ehrlich, ohne Verkaufsdruck.",
        },
      ],
      faq: [
        {
          q: "Was bedeutet 10 % CBD?",
          a: "10 % bedeutet, dass 10 ml Öl rund 1.000 mg CBD enthalten. Die exakten Werte der aktuellen Charge stehen im Laborbericht.",
        },
        {
          q: "Warum steht „nicht zum Verzehr bestimmt“ auf dem Etikett?",
          a: "CBD-Extrakte haben in der EU noch keine Zulassung als Lebensmittel (Novel Food). CBD-Öle werden in Österreich deshalb als Aromaöle verkauft und entsprechend gekennzeichnet.",
        },
        {
          q: "Wie lagere ich CBD Öl richtig?",
          a: "Am besten kühl, dunkel und gut verschlossen. So bleiben Aroma und Inhaltsstoffe länger erhalten. Das Haltbarkeitsdatum findest du auf der Flasche.",
        },
        {
          q: "Versendet ihr CBD Öl?",
          a: "Ja, wir versenden CBD-Öle diskret verpackt in ganz Österreich. Du kannst deine Bestellung auch im Shop in der Josefstädter Straße 56 abholen.",
        },
      ],
    },
    cosmetics: {
      slug: "cbd-kosmetik",
      name: "Kosmetik",
      meta: {
        title: "CBD Kosmetik: Balsam, Handcreme & Lippenpflege | Cannaplace",
        description:
          "CBD Kosmetik aus unserem Shop in Wien: CBD Balsam, Handcreme und Lippenbalsam mit Hanfsamenöl – Versand in ganz Österreich oder im Geschäft in 1080 Wien erhältlich.",
      },
      h1: "CBD Kosmetik",
      intro:
        "Pflegende Balsame, Cremes und Lippenpflege mit CBD und Hanfsamenöl – für trockene, beanspruchte Haut und den Alltag in der Stadt. Versand in ganz Österreich oder direkt im Shop in der Josefstadt.",
      body: [
        { type: "h2", text: "CBD in der Hautpflege" },
        {
          type: "p",
          text: "In Kosmetik wird CBD als pflegender Inhaltsstoff eingesetzt, häufig kombiniert mit Hanfsamenöl, das reich an ungesättigten Fettsäuren ist. CBD-Kosmetik ist in der EU erlaubt, wenn sie – wie jedes Kosmetikprodukt – der EU-Kosmetikverordnung entspricht. Heilversprechen gehören nicht dazu: Kosmetik pflegt, sie heilt nicht.",
        },
        { type: "h2", text: "Balsam, Creme oder Lippenpflege?" },
        {
          type: "ul",
          items: [
            "**[CBD Balsam Lavendel](/shop/cbd-kosmetik/cbd-balsam-lavendel/):** reichhaltig, für sehr trockene Stellen wie Hände, Ellbogen oder Füße.",
            "**[CBD Handcreme](/shop/cbd-kosmetik/cbd-handcreme/):** leicht und schnell einziehend – für jeden Tag.",
            "**[CBD Lippenbalsam](/shop/cbd-kosmetik/cbd-lippenbalsam/):** schützt die Lippen bei Kälte und Wind.",
          ],
        },
        { type: "h2", text: "Tipps für die Anwendung" },
        {
          type: "ul",
          items: [
            "Neue Produkte zuerst an einer kleinen Hautstelle testen.",
            "Nur äußerlich anwenden und nicht auf verletzte Haut auftragen.",
            "Nach dem Öffnen innerhalb der angegebenen Zeit verbrauchen – das Tiegel-Symbol auf der Verpackung zeigt, wie viele Monate.",
          ],
        },
      ],
      faq: [
        {
          q: "Ist CBD-Kosmetik in Österreich legal?",
          a: "Ja. CBD-Kosmetik darf verkauft werden, wenn sie der EU-Kosmetikverordnung entspricht und der THC-Grenzwert eingehalten wird.",
        },
        {
          q: "Enthält CBD-Kosmetik THC?",
          a: "Unsere Kosmetik hält den gesetzlichen THC-Grenzwert ein. Die Werte der aktuellen Chargen findest du unter Laborberichte.",
        },
        {
          q: "Für welche Hauttypen eignet sich der CBD Balsam?",
          a: "Der reichhaltige Balsam eignet sich besonders für trockene und beanspruchte Haut. Bei empfindlicher Haut empfehlen wir, ihn zuerst an einer kleinen Stelle zu testen.",
        },
        {
          q: "Wie lange ist CBD-Kosmetik haltbar?",
          a: "Ungeöffnet gilt das Datum auf der Verpackung. Nach dem Öffnen zeigt das Tiegel-Symbol (z. B. „12M“), wie viele Monate das Produkt verwendet werden kann.",
        },
      ],
    },
    accessories: {
      slug: "zubehoer",
      name: "Zubehör",
      meta: {
        title: "Grinder & Zubehör kaufen in Wien | Cannaplace 1080",
        description:
          "Grinder aus Holz und Metall, UV-Aufbewahrungsgläser und mehr: Zubehör aus unserem CBD Shop in Wien – Versand in ganz Österreich oder Abholung in 1080 Wien.",
      },
      h1: "Grinder & Zubehör",
      intro:
        "Grinder aus Holz und Metall und lichtgeschützte Aufbewahrungsgläser – Zubehör, das wir selbst gerne verwenden. Versand in ganz Österreich oder Abholung im Shop.",
      body: [
        { type: "h2", text: "Den richtigen Grinder finden" },
        {
          type: "ul",
          items: [
            "**2-teilig oder 4-teilig?** Ein 2-teiliger Grinder ist kompakt und schnell sauber. 4-teilige Modelle haben zusätzlich ein Sieb und ein Fach, in dem sich feine Pollen sammeln.",
            "**Holz oder Metall?** Holz-Grinder sind warm in der Haptik, Metall-Grinder besonders robust und leicht zu reinigen.",
            "**Durchmesser:** 50 mm passen in jede Tasche, ab 60 mm hast du mehr Platz und mehr Grip.",
          ],
        },
        { type: "h2", text: "Kräuter richtig aufbewahren" },
        {
          type: "p",
          text: "Licht, Luft und Wärme lassen Aromen verfliegen. Ideal sind luftdichte Gläser an einem kühlen, dunklen Ort. Violettglas wie bei unserem [UV-Aufbewahrungsglas](/shop/zubehoer/uv-aufbewahrungsglas-100-ml/) filtert zusätzlich einen Großteil des Lichts.",
        },
        { type: "h2", text: "So reinigst du deinen Grinder" },
        {
          type: "ol",
          items: [
            "Grinder vollständig zerlegen und Reste mit einer weichen Bürste entfernen.",
            "Metallteile in warmem Wasser mit etwas Spülmittel oder in Isopropylalkohol einweichen.",
            "Holzteile nur trocken oder mit einem leicht feuchten Tuch reinigen – niemals einweichen.",
            "Alle Teile vollständig trocknen lassen, bevor du den Grinder wieder zusammensetzt.",
          ],
        },
      ],
      faq: [
        {
          q: "Was ist der Unterschied zwischen 2- und 4-teiligen Grindern?",
          a: "Ein 2-teiliger Grinder besteht aus Deckel und Mahlkammer. 4-teilige Grinder haben zusätzlich eine Auffangkammer mit Sieb und ein Pollenfach.",
        },
        {
          q: "Wie oft sollte ich meinen Grinder reinigen?",
          a: "Das hängt davon ab, wie oft du ihn verwendest. Spätestens wenn sich das Gewinde schwer drehen lässt, ist eine Reinigung fällig.",
        },
        {
          q: "Versendet ihr Zubehör?",
          a: "Ja, Grinder, Gläser und weiteres Zubehör versenden wir in ganz Österreich. Natürlich kannst du alles auch im Shop abholen.",
        },
      ],
    },
  },
  guide: {
    meta: {
      title: "CBD Ratgeber: Grundlagen, Qualität & Recht | Cannaplace",
      description:
        "CBD Ratgeber aus Wien: Grundlagen, Vollspektrum vs. Isolat, Terpene, Laborberichte, Lagerung und Rechtslage in Österreich – plus CBD-Lexikon von A bis Z.",
    },
    eyebrow: "Ratgeber",
    h1: "CBD Ratgeber: Wissen rund um CBD",
    intro:
      "Ehrlich, verständlich und ohne Heilversprechen: Hier erklären wir die Grundlagen zu CBD, zur Qualität und zur Rechtslage in Österreich – und im Lexikon die wichtigsten Begriffe von A bis Z.",
    topics: {
      basics: {
        title: "Grundlagen",
        text: "Was CBD ist, wie sich Extrakte unterscheiden und was Terpene mit dem Aroma zu tun haben.",
      },
      quality: {
        title: "Qualität & Lagerung",
        text: "Laborberichte verstehen und CBD-Produkte so lagern, dass sie lange gut bleiben.",
      },
      law: {
        title: "Recht in Österreich",
        text: "THC-Grenzwert, Aromaöl, Kosmetik und das Tabakmonopol für Hanfblüten.",
      },
    },
    glossaryTeaser: {
      eyebrow: "Lexikon",
      title: "CBD-Lexikon: Begriffe von A bis Z",
      text: "Von Analysezertifikat bis Vollspektrum – die wichtigsten Begriffe rund um CBD kurz erklärt.",
      link: "Zum Lexikon",
    },
  },
  glossary: {
    slug: "lexikon",
    label: "Lexikon",
    eyebrow: "Ratgeber",
    title: "CBD-Lexikon: Begriffe von A bis Z",
    meta: {
      title: "CBD-Lexikon: Begriffe rund um CBD erklärt | Cannaplace",
      description:
        "Analysezertifikat, Breitspektrum, CBG, Terpene, Tabakmonopol: Das CBD-Lexikon von Cannaplace 1080 erklärt die wichtigsten Begriffe rund um CBD kurz und verständlich.",
    },
    lead: "Die wichtigsten Begriffe rund um CBD, Qualität und Rechtslage in Österreich – kurz, verständlich und ohne Heilversprechen erklärt.",
    jump: "Springe zu Buchstabe",
    terms: [
      {
        term: "Analysezertifikat (COA)",
        text: "Prüfbericht eines Labors zu einer bestimmten Charge (Certificate of Analysis). Er dokumentiert das Cannabinoid-Profil, etwa CBD- und THC-Gehalt, und meist auch Prüfungen auf Pestizide, Schwermetalle und Lösungsmittel. Schritt für Schritt erklärt: [Analysezertifikat lesen](/ratgeber/analysezertifikat-lesen/).",
      },
      {
        term: "Aromaöl",
        text: "Bezeichnung, unter der CBD-Öle in Österreich verkauft werden. Sie sind laut Kennzeichnung nicht zum Verzehr bestimmt, weil CBD-Extrakte als Lebensmittel eine Zulassung als Novel Food bräuchten.",
      },
      {
        term: "Breitspektrum",
        text: "Extrakt, der neben CBD weitere Pflanzenstoffe wie Cannabinoide und Terpene enthält, aus dem das THC aber weitgehend entfernt wurde. Mehr dazu: [Vollspektrum, Breitspektrum, Isolat](/ratgeber/vollspektrum-breitspektrum-isolat/).",
      },
      {
        term: "Cannabinoide",
        text: "Gruppe von Pflanzenstoffen, die vor allem in der Hanfpflanze vorkommen. Bekannt sind über hundert, darunter CBD, CBG, CBN und THC.",
      },
      {
        term: "CBD (Cannabidiol)",
        text: "Nicht berauschendes Cannabinoid aus Nutzhanf und namensgebender Inhaltsstoff von CBD-Ölen, -Blüten und -Kosmetik. Die Grundlagen: [Was ist CBD?](/ratgeber/was-ist-cbd/)",
      },
      {
        term: "CBG (Cannabigerol)",
        text: "Cannabinoid, das in Nutzhanf meist nur in kleinen Mengen vorkommt. Viele Analysezertifikate weisen den CBG-Gehalt zusätzlich aus.",
      },
      {
        term: "Charge",
        text: "Menge eines Produkts, die unter gleichen Bedingungen hergestellt wurde. Die Chargennummer auf dem Etikett sollte mit der auf dem Analysezertifikat übereinstimmen.",
      },
      {
        term: "CO₂-Extraktion",
        text: "Verfahren, bei dem Cannabinoide und Terpene mit Kohlendioxid unter Druck aus der Pflanze gelöst werden. Es arbeitet ohne organische Lösungsmittel und ist bei CBD-Extrakten weit verbreitet.",
      },
      {
        term: "Decarboxylierung",
        text: "Umwandlung der sauren Vorstufen CBDA und THCA in CBD und THC durch Wärme. Laborberichte weisen deshalb oft auch die Säureformen aus und rechnen sie in den Gesamtgehalt ein.",
      },
      {
        term: "Entourage-Effekt",
        text: "Hypothese, nach der die Inhaltsstoffe der Hanfpflanze im Zusammenspiel anders wirken als einzeln. Sie ist wissenschaftlich nicht abschließend belegt.",
      },
      {
        term: "Grinder",
        text: "Mühle zum Zerkleinern von Kräutern und Blüten. Modelle mit Siebfach sammeln zusätzlich feine Pflanzenpartikel. Unsere Auswahl: [Zubehör](/shop/zubehoer/).",
      },
      {
        term: "Hanfsamenöl",
        text: "Aus den Samen der Hanfpflanze gepresstes Speiseöl. Es enthält selbst kaum Cannabinoide und dient in CBD-Ölen als Trägeröl.",
      },
      {
        term: "Isolat",
        text: "Nahezu reines CBD, meist mit über 99 % Reinheit, ohne weitere Pflanzenstoffe wie Terpene oder andere Cannabinoide.",
      },
      {
        term: "Kosmetikverordnung",
        text: "EU-Verordnung (EG) Nr. 1223/2009. Sie regelt, welche Inhaltsstoffe Kosmetik enthalten darf und wie sie gekennzeichnet wird. CBD-Kosmetik muss diese Vorgaben erfüllen und vor dem Verkauf im EU-Kosmetikportal (CPNP) gemeldet werden.",
      },
      {
        term: "MCT-Öl",
        text: "Öl aus mittelkettigen Triglyceriden, meist aus Kokos- oder Palmkernöl gewonnen. Neben Hanfsamenöl ein häufiges Trägeröl für CBD-Extrakte.",
      },
      {
        term: "Monopolverwaltung",
        text: "Die Monopolverwaltung GmbH verwaltet in Österreich das Tabakmonopol. Hanf-Fachgeschäfte können bei ihr eine Lizenz beantragen, um Hanfblüten übergangsweise bis Ende 2028 zu verkaufen.",
      },
      {
        term: "Novel Food",
        text: "Lebensmittel, die vor dem 15. Mai 1997 in der EU nicht in nennenswertem Umfang verzehrt wurden. CBD-Extrakte gelten als Novel Food und dürfen ohne Zulassung nicht als Lebensmittel verkauft werden.",
      },
      {
        term: "Nutzhanf",
        text: "Hanfsorten aus dem EU-Sortenkatalog, die nur sehr wenig THC bilden. Aus ihnen werden CBD-Produkte hergestellt.",
      },
      {
        term: "Tabakmonopol",
        text: "In Österreich ist der Handel mit Tabakwaren staatlich geregelt. Seit 2025 fallen auch rauchbare Hanfblüten darunter – sie dürfen nicht versendet und nur an Personen ab 18 Jahren verkauft werden. Hintergründe: [CBD in Österreich](/ratgeber/cbd-legal-oesterreich/).",
      },
      {
        term: "Terpene",
        text: "Aromastoffe, die Pflanzen wie Hanf, Zitrusfrüchten oder Lavendel ihren typischen Duft geben, etwa Myrcen, Limonen oder Linalool. Mehr dazu: [Terpene erklärt](/ratgeber/terpene/).",
      },
      {
        term: "THC (Tetrahydrocannabinol)",
        text: "Berauschendes Cannabinoid der Hanfpflanze. In Österreich dürfen Hanfprodukte höchstens 0,3 % THC enthalten.",
      },
      {
        term: "Trägeröl",
        text: "Öl, in dem der CBD-Extrakt gelöst ist – meist Hanfsamenöl oder MCT-Öl. Es bestimmt Geschmack, Konsistenz und Haltbarkeit eines CBD-Öls mit.",
      },
      {
        term: "Trichome",
        text: "Feine Harzdrüsen auf Blüten und Blättern der Hanfpflanze. In ihnen entstehen Cannabinoide und Terpene.",
      },
      {
        term: "Vollspektrum",
        text: "Extrakt, der das natürliche Profil der Pflanze abbildet: CBD, weitere Cannabinoide, Terpene – und THC in Spuren unter dem gesetzlichen Grenzwert.",
      },
    ],
  },
  wishlist: {
    slug: "merkliste",
    label: "Merkliste",
    eyebrow: "Deine Auswahl",
    title: "Merkliste",
    meta: {
      title: "Merkliste | Cannaplace 1080 CBD Shop Wien",
      description:
        "Deine gemerkten Produkte bei Cannaplace 1080: CBD Öle, Kosmetik und Zubehör vergleichen, später bestellen oder im Shop in der Josefstädter Straße 56 ansehen.",
    },
    lead: "Alle Produkte, die du mit dem Herz markiert hast – zum Vergleichen, Bestellen oder Ansehen im Shop.",
    emptyTitle: "Deine Merkliste ist noch leer",
    emptyText: "Tippe bei einem Produkt auf das Herz, um es hier zu speichern.",
    emptyCta: "Produkte entdecken",
    clear: "Merkliste leeren",
    note: "Die Merkliste wird nur in diesem Browser gespeichert – ohne Konto und ohne Cookies.",
  },
  pages: {
    lab: {
      slug: "laborberichte",
      label: "Laborberichte",
      eyebrow: "Transparenz",
      title: "Laborberichte für unsere CBD Produkte",
      meta: {
        title: "Laborberichte (COA) für alle CBD Produkte | Cannaplace 1080",
        description:
          "Laborberichte zu unseren CBD Ölen, Blüten und Kosmetik: CBD- und THC-Werte der aktuellen Chargen, geprüft von einem unabhängigen Labor – Cannaplace 1080 Wien.",
      },
      lead: "Zu jedem Produkt gibt es ein Analysezertifikat (Certificate of Analysis, COA) eines unabhängigen Labors. Hier findest du die wichtigsten Werte der aktuellen Chargen – schwarz auf weiß.",
      body: [
        { type: "h2", text: "Was wir prüfen lassen" },
        {
          type: "ul",
          items: [
            "**Cannabinoid-Profil:** CBD, CBG und weitere Cannabinoide mit exaktem Gehalt.",
            "**THC:** Jede Charge liegt unter dem gesetzlichen Grenzwert von 0,3 %.",
            "**Schadstoffe:** Pestizide, Schwermetalle und Lösungsmittelrückstände.",
          ],
        },
        { type: "h2", text: "So liest du die Werte" },
        {
          type: "p",
          text: "Die Prozentwerte beziehen sich auf das Gewicht bzw. Volumen des Produkts. „Nicht nachweisbar“ bedeutet, dass ein Stoff unter der Nachweisgrenze des Labors liegt. Eine ausführliche Anleitung findest du im Ratgeber [So liest du ein Analysezertifikat richtig](/ratgeber/analysezertifikat-lesen/).",
        },
        {
          type: "p",
          text: "Das vollständige PDF-Zertifikat zeigen wir dir gerne im Shop oder schicken es dir auf Anfrage – ruf uns einfach an.",
        },
      ],
      faq: [
        {
          q: "Wie oft lasst ihr eure Produkte testen?",
          a: "Jede Charge wird von einem unabhängigen Labor analysiert. Mit jeder neuen Charge aktualisieren wir die Werte auf dieser Seite.",
        },
        {
          q: "Warum weicht der CBD-Wert leicht vom Etikett ab?",
          a: "Hanf ist ein Naturprodukt und Messverfahren haben Toleranzen. Kleine Abweichungen von wenigen Zehntelprozent sind normal.",
        },
      ],
    },
    about: {
      slug: "ueber-uns",
      label: "Über uns",
      eyebrow: "Über uns",
      title: "Über Cannaplace 1080",
      meta: {
        title: "Über uns – CBD Fachgeschäft in Wien-Josefstadt | Cannaplace",
        description:
          "Cannaplace 1080 ist dein CBD Fachgeschäft in der Josefstädter Straße 56: laborgeprüfte Produkte, ehrliche Beratung und faire Preise mitten im 8. Bezirk in Wien.",
      },
      lead: "Wir sind ein CBD Fachgeschäft mitten in der Josefstadt – mit einem klaren Anspruch: Hanf, wie er sein sollte. Laborgeprüft, ehrlich erklärt und fair bepreist.",
      body: [
        { type: "h2", text: "Unser Anspruch" },
        {
          type: "p",
          text: "CBD ist ein Vertrauensprodukt. Deshalb verkaufen wir nur, was wir guten Gewissens empfehlen können. Zu jedem Produkt gibt es ein Analysezertifikat eines unabhängigen Labors – die Werte findest du unter [Laborberichte](/laborberichte/).",
        },
        { type: "h2", text: "Wofür wir stehen" },
        {
          type: "ul",
          items: [
            "**Transparenz:** Laborberichte zu jeder Charge, klare Angaben zu CBD- und THC-Gehalt.",
            "**Ehrliche Beratung:** Wir erklären, statt zu versprechen. Heilversprechen gibt es bei uns nicht – CBD-Produkte sind keine Arzneimittel.",
            "**Faire Preise:** Premium-Qualität zu ehrlichen Preisen, direkt vom Fachhändler.",
            "**Verantwortung:** Verkauf ausschließlich an Erwachsene und Einhaltung aller gesetzlichen Vorgaben – auch beim Tabakmonopol für Hanfblüten.",
          ],
        },
        { type: "h2", text: "Unser Shop in der Josefstadt" },
        {
          type: "p",
          text: "Du findest uns in der Josefstädter Straße 56 im 8. Bezirk. Komm vorbei, schnupper rein und lass dich beraten – das komplette Sortiment ist vor Ort erhältlich. Öffnungszeiten und Anfahrt findest du unter [Kontakt](/kontakt/).",
        },
      ],
    },
    contact: {
      slug: "kontakt",
      label: "Kontakt",
      eyebrow: "Kontakt & Anfahrt",
      title: "CBD Shop in der Josefstädter Straße 56",
      meta: {
        title: "Kontakt & Öffnungszeiten – CBD Shop Wien 1080 | Cannaplace",
        description:
          "So erreichst du den CBD Shop Cannaplace 1080: Josefstädter Straße 56, 1080 Wien. Öffnungszeiten, Telefonnummer und Anfahrt mit Straßenbahn 2 und U6.",
      },
      lead: "Komm vorbei, ruf an oder schreib uns auf Instagram – wir freuen uns auf dich.",
      body: [
        {
          type: "p",
          text: "Du hast Fragen zu einem Produkt oder möchtest wissen, ob eine bestimmte Blütensorte gerade vorrätig ist? Ruf uns während der Öffnungszeiten an – wir beraten dich gerne auch telefonisch.",
        },
      ],
    },
    shipping: {
      slug: "versand-zahlung",
      label: "Versand & Zahlung",
      eyebrow: "Service",
      title: "Versand, Abholung & Zahlung",
      meta: {
        title: "Versand & Zahlung: CBD Lieferung in Österreich | Cannaplace",
        description:
          "Diskreter CBD Versand in ganz Österreich, Abholung im Shop in 1080 Wien und 14 Tage Widerrufsrecht – plus warum wir CBD-Blüten nicht versenden. Infos von Cannaplace 1080.",
      },
      lead: "CBD-Öle, Kosmetik und Zubehör liefern wir diskret in ganz Österreich. Oder du holst deine Bestellung persönlich bei uns in der Josefstadt ab.",
      body: [
        { type: "h2", text: "Versand innerhalb Österreichs" },
        {
          type: "ul",
          items: [
            "Versand mit der Österreichischen Post, diskret und neutral verpackt.",
            "Lieferzeit: in der Regel 2–4 Werktage.",
            "Versandkosten: € 4,90 – ab einem Bestellwert von € 50 versandkostenfrei.",
            "Versand derzeit nur innerhalb Österreichs.",
          ],
        },
        { type: "h2", text: "Abholung im Shop" },
        {
          type: "p",
          text: "Bestell online und hol deine Produkte kostenlos in der Josefstädter Straße 56 ab. Wir melden uns, sobald alles für dich bereitliegt.",
        },
        { type: "h2", text: "Was wir nicht versenden" },
        {
          type: "p",
          text: "**CBD-Blüten verschicken wir nicht.** Hanfblüten fallen in Österreich unter das Tabakmonopol, der Versandhandel ist verboten. Unsere [CBD Blüten](/shop/cbd-blueten/) bekommst du deshalb ausschließlich im Geschäft – ab 18 Jahren.",
        },
        { type: "h2", text: "Zahlung" },
        {
          type: "p",
          text: "Im Onlineshop bezahlst du mit Kreditkarte, Debitkarte, Apple Pay, Google Pay oder per Überweisung. Im Geschäft zahlst du bar oder mit Karte.",
        },
        { type: "h2", text: "Rückgabe & Widerruf" },
        {
          type: "p",
          text: "Bei Online-Bestellungen hast du ein 14-tägiges Widerrufsrecht ab Erhalt der Ware. Ausgenommen sind versiegelte Produkte, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde. Ruf uns einfach an – wir kümmern uns um alles Weitere.",
        },
      ],
      faq: [
        { q: "Wie lange dauert der Versand?", a: "Innerhalb Österreichs ist deine Bestellung in der Regel nach 2–4 Werktagen bei dir." },
        { q: "Versendet ihr auch nach Deutschland?", a: "Derzeit versenden wir nur innerhalb Österreichs." },
        { q: "Wird diskret verpackt?", a: "Ja, wir versenden in neutraler Verpackung ohne Hinweis auf den Inhalt." },
      ],
    },
    faq: {
      slug: "faq",
      label: "FAQ",
      eyebrow: "Hilfe",
      title: "Häufige Fragen",
      meta: {
        title: "FAQ: Häufige Fragen zu CBD & unserem Shop | Cannaplace 1080",
        description:
          "Antworten auf häufige Fragen zu CBD: Legalität in Österreich, THC-Grenzwert, Laborberichte, Versand und unser Shop in der Josefstädter Straße 56 in Wien.",
      },
      lead: "Die wichtigsten Antworten rund um CBD, unsere Produkte und den Shop. Deine Frage ist nicht dabei? Ruf uns an oder komm vorbei.",
      body: [],
      groups: [
        {
          title: "CBD & Rechtliches",
          items: [
            {
              q: "Ist CBD in Österreich legal?",
              a: "Ja. CBD-Produkte mit höchstens 0,3 % THC sind legal. CBD-Öle werden als Aromaöle verkauft, CBD-Kosmetik muss der EU-Kosmetikverordnung entsprechen, und für Hanfblüten gilt seit 2025 das Tabakmonopol.",
            },
            {
              q: "Macht CBD high?",
              a: "Nein. CBD wirkt nicht berauschend. Für den Rausch von Cannabis ist THC verantwortlich, dessen Gehalt bei legalen CBD-Produkten unter 0,3 % liegt.",
            },
            {
              q: "Kann CBD bei einem Drogentest auffallen?",
              a: "Drogentests suchen in der Regel nach THC bzw. dessen Abbauprodukten, nicht nach CBD. Da auch legale Produkte THC-Spuren enthalten können, ist ein positives Ergebnis aber nicht völlig ausgeschlossen.",
            },
          ],
        },
        {
          title: "Produkte & Qualität",
          items: [
            {
              q: "Woher weiß ich, was in einem Produkt steckt?",
              a: "Zu jedem Produkt gibt es ein Analysezertifikat eines unabhängigen Labors. Die wichtigsten Werte findest du unter Laborberichte und auf der jeweiligen Produktseite.",
            },
            {
              q: "Was bedeutet die Prozentangabe bei CBD-Öl?",
              a: "Sie gibt den CBD-Anteil an. 10 % in einer 10-ml-Flasche entsprechen rund 1.000 mg CBD.",
            },
            {
              q: "Sind CBD-Produkte Arzneimittel?",
              a: "Nein. CBD-Produkte sind keine Arzneimittel und ersetzen keine ärztliche Behandlung. Wenn du Medikamente nimmst, sprich vor der Verwendung mit deiner Ärztin oder deinem Arzt.",
            },
          ],
        },
        {
          title: "Bestellung & Versand",
          items: [
            {
              q: "Wohin liefert ihr?",
              a: "Wir versenden CBD-Öle, Kosmetik und Zubehör innerhalb Österreichs. CBD-Blüten gibt es nur im Geschäft.",
            },
            {
              q: "Kann ich meine Bestellung im Shop abholen?",
              a: "Ja, die Abholung in der Josefstädter Straße 56 ist kostenlos. Wir melden uns, sobald alles bereitliegt.",
            },
            {
              q: "Kann ich Produkte zurückgeben?",
              a: "Bei Online-Bestellungen hast du ein 14-tägiges Widerrufsrecht. Ausgenommen sind versiegelte Hygieneprodukte, deren Versiegelung nach der Lieferung entfernt wurde. Details findest du unter Versand & Zahlung.",
            },
          ],
        },
        {
          title: "Unser Shop",
          items: [
            {
              q: "Wo ist der Shop?",
              a: "In der Josefstädter Straße 56 im 8. Bezirk. Du erreichst uns mit der Straßenbahnlinie 2 oder der U6 (Station Josefstädter Straße).",
            },
            {
              q: "Wann habt ihr geöffnet?",
              a: "Montag bis Freitag von 10:30 bis 19:00 Uhr, Samstag von 11:00 bis 17:00 Uhr.",
            },
            {
              q: "Gibt es eine Altersgrenze?",
              a: "Ja. Wir verkaufen ausschließlich an Personen ab 18 Jahren.",
            },
          ],
        },
      ],
    },
    imprint: {
      slug: "impressum",
      label: "Impressum",
      eyebrow: "Rechtliches",
      title: "Impressum",
      meta: {
        title: "Impressum | Cannaplace 1080 CBD Shop Wien",
        description:
          "Impressum und Offenlegung gemäß § 5 ECG und § 25 MedienG von Cannaplace 1080 CBD Shop, Josefstädter Straße 56, 1080 Wien.",
      },
      lead: "Informationen gemäß § 5 E-Commerce-Gesetz, § 14 Unternehmensgesetzbuch und Offenlegung gemäß § 25 Mediengesetz.",
      body: [
        {
          type: "note",
          text: "Vor dem Launch bestätigen: Firmenwortlaut und Firmenbuchdaten stammen aus dem öffentlichen Firmenbuch. Die Angaben in eckigen Klammern ergänzt der Shop.",
        },
        {
          type: "table",
          rows: [
            ["Unternehmen", "CANNAPLACE OG"],
            ["Rechtsform", "Offene Gesellschaft (OG)"],
            ["Geschäftsbezeichnung", "Cannaplace 1080 CBD Shop"],
            ["Sitz", "Wien"],
            ["Anschrift", "Josefstädter Straße 56, 1080 Wien, Österreich"],
            ["Telefon", "+43 676 7731571"],
            ["E-Mail", "[E-Mail-Adresse]"],
            ["Firmenbuchnummer", "FN 619212g"],
            ["Firmenbuchgericht", "Handelsgericht Wien"],
            ["UID-Nummer", "[ATU…]"],
            ["Unternehmensgegenstand", "Handel mit Hanf- und CBD-Produkten sowie Zubehör"],
            ["Gewerbebehörde", "[zuständiges Magistratisches Bezirksamt]"],
            ["Kammer", "Wirtschaftskammer Wien"],
            ["Rechtsvorschriften", "Gewerbeordnung, abrufbar im [Rechtsinformationssystem des Bundes](https://www.ris.bka.gv.at)"],
          ],
        },
        { type: "h2", text: "Offenlegung gemäß § 25 Mediengesetz" },
        {
          type: "p",
          text: "Medieninhaberin: CANNAPLACE OG, Josefstädter Straße 56, 1080 Wien. Grundlegende Richtung: Information über Sortiment und Leistungen von Cannaplace 1080 sowie allgemeine Informationen rund um CBD.",
        },
        { type: "h2", text: "Website & Suchmaschinenoptimierung" },
        {
          type: "p",
          text: "Konzept, Umsetzung und SEO: [Getflowly](https://getflowly.at)",
        },
        { type: "h2", text: "Haftung für Inhalte" },
        {
          type: "p",
          text: "Wir erstellen die Inhalte dieser Website mit größter Sorgfalt. Für Richtigkeit, Vollständigkeit und Aktualität – insbesondere zu rechtlichen Themen – können wir dennoch keine Gewähr übernehmen. Unsere Ratgeber-Artikel ersetzen keine ärztliche oder rechtliche Beratung.",
        },
      ],
    },
    privacy: {
      slug: "datenschutz",
      label: "Datenschutz",
      eyebrow: "Rechtliches",
      title: "Datenschutzerklärung",
      meta: {
        title: "Datenschutzerklärung | Cannaplace 1080 CBD Shop Wien",
        description:
          "Wie Cannaplace 1080 mit deinen Daten umgeht: keine Tracking-Cookies, lokale Speicherung der Altersbestätigung und deine Rechte nach der DSGVO.",
      },
      lead: "Der Schutz deiner Daten ist uns wichtig. Hier erfährst du, welche Daten beim Besuch dieser Website verarbeitet werden.",
      body: [
        {
          type: "note",
          text: "Entwurf: Diese Datenschutzerklärung beschreibt die aktuelle Vorschau der Website. Vor dem Launch muss sie rechtlich geprüft und um Onlineshop, Newsletter und Zahlungsanbieter ergänzt werden.",
        },
        { type: "h2", text: "Verantwortlicher" },
        {
          type: "p",
          text: "CANNAPLACE OG, Josefstädter Straße 56, 1080 Wien, Telefon +43 676 7731571, E-Mail: [E-Mail-Adresse].",
        },
        { type: "h2", text: "Keine Tracking-Cookies" },
        {
          type: "p",
          text: "Diese Website verwendet keine Cookies zu Analyse- oder Werbezwecken und bindet keine Tracking-Dienste ein. Schriftarten werden von unserem eigenen Server geladen, nicht von Drittanbietern.",
        },
        { type: "h2", text: "Lokale Speicherung im Browser" },
        {
          type: "p",
          text: "Damit du die Altersabfrage nicht bei jedem Besuch erneut bestätigen musst, speichern wir deine Bestätigung lokal in deinem Browser (Local Storage). Gleiches gilt für deine Merkliste und die gewählte Schriftvariante in der Vorschau. Diese Informationen verlassen dein Gerät nicht und lassen sich jederzeit über die Browser-Einstellungen löschen.",
        },
        { type: "h2", text: "Hosting und Server-Logfiles" },
        {
          type: "p",
          text: "Beim Aufruf der Website verarbeitet unser Hosting-Anbieter technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit des Zugriffs sowie die aufgerufene Seite, um die Website auszuliefern und abzusichern (Art. 6 Abs. 1 lit. f DSGVO). [Hosting-Anbieter und Speicherdauer ergänzen.]",
        },
        { type: "h2", text: "Externe Links" },
        {
          type: "p",
          text: "Links zu Google Maps, unseren Google-Bewertungen und Instagram öffnen die Dienste der jeweiligen Anbieter. Erst beim Klick werden Daten an diese Anbieter übertragen; es gelten deren Datenschutzbestimmungen.",
        },
        { type: "h2", text: "Deine Rechte" },
        {
          type: "p",
          text: "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenn du glaubst, dass die Verarbeitung deiner Daten gegen das Datenschutzrecht verstößt, kannst du dich bei der Österreichischen Datenschutzbehörde beschweren (Barichgasse 40–42, 1030 Wien, [dsb.gv.at](https://www.dsb.gv.at)).",
        },
      ],
    },
    terms: {
      slug: "agb",
      label: "AGB",
      eyebrow: "Rechtliches",
      title: "Allgemeine Geschäftsbedingungen",
      meta: {
        title: "AGB | Cannaplace 1080 CBD Shop Wien",
        description:
          "Allgemeine Geschäftsbedingungen für Bestellungen im Onlineshop von Cannaplace 1080 – dem CBD Shop in der Josefstädter Straße 56 in Wien.",
      },
      lead: "Die Allgemeinen Geschäftsbedingungen für Bestellungen im Onlineshop veröffentlichen wir hier mit dem Start des Onlineshops.",
      body: [
        { type: "note", text: "Platzhalter: Die AGB werden vor dem Launch des Onlineshops ergänzt." },
        {
          type: "p",
          text: "Bei Fragen zu Bestellung, Versand oder Rückgabe erreichst du uns telefonisch unter +43 676 7731571 oder direkt im Shop. Informationen zu Lieferung und Widerruf findest du unter [Versand & Zahlung](/versand-zahlung/).",
        },
      ],
      noindex: true,
    },
  },
  contact: {
    city: "1080 Wien",
    addressTitle: "Adresse",
    hoursTitle: "Öffnungszeiten",
    phoneTitle: "Telefon",
    socialTitle: "Instagram",
    transitTitle: "Anreise mit den Öffis",
    transit:
      "Die Straßenbahnlinie 2 fährt direkt durch die Josefstädter Straße, die U6 hält in der Station Josefstädter Straße.",
    hoursTable: [
      ["Montag – Freitag", "10:30 – 19:00"],
      ["Samstag", "11:00 – 17:00"],
      ["Sonn- und Feiertage", "geschlossen"],
    ],
  },
  contactCta: {
    title: "Unsicher, was zu dir passt?",
    text: "Wir beraten dich persönlich – im Shop in der Josefstädter Straße 56 oder am Telefon.",
    call: "Anrufen",
    route: "Route planen",
  },
  ageGate: {
    title: "Bist du 18 Jahre oder älter?",
    text: "Unsere Produkte sind ausschließlich für Erwachsene bestimmt. Bitte bestätige dein Alter, um fortzufahren.",
    yes: "Ja, ich bin 18+",
    no: "Nein",
    denied: "Schade – unsere Seite ist leider nur für Erwachsene zugänglich.",
  },
  cart: { added: "Zum Warenkorb hinzugefügt" },
  fontSwitch: { label: "Schrift", preview: "Vorschau", a: "A · Jost", b: "B · Syne" },
};
