import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Wine, Martini, ChevronRight } from "lucide-react";

const BASE_URL = "https://dvalleysarena.com";

export const Route = createFileRoute("/full-menu")({
  head: () => ({
    meta: [
      { title: "Full Menu & Price List — D' Valley's Arena | Lounge & Club, Bori, Rivers State" },
      { name: "description", content: "The complete, itemized D' Valley's Arena price list. Every food and drink item across the Lounge Menu and the Club Menu, with exact prices in Naira (₦). No pictures, just names and prices." },
      { name: "keywords", content: "D Valley's Arena full menu, D Valley's Arena price list, lounge menu prices Bori, club menu prices Bori, drinks price list Rivers State, wine prices Bori, cocktail prices Rivers State" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "D' Valley's Arena" },
      { property: "og:title", content: "Full Menu & Price List — D' Valley's Arena" },
      { property: "og:description", content: "Every item and price at D' Valley's Arena, across the Lounge Menu and the Club Menu. Prices in Nigerian Naira (₦)." },
      { property: "og:url", content: `${BASE_URL}/full-menu` },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "D' Valley's Arena full menu and price list" },
      { property: "og:locale", content: "en_NG" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Full Menu & Price List — D' Valley's Arena" },
      { name: "twitter:description", content: "Every item and price at D' Valley's Arena, across the Lounge Menu and the Club Menu." },
      { name: "twitter:image", content: `${BASE_URL}/og-image.png` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/full-menu` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(menuJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(fullMenuFaqJsonLd) },
    ],
  }),
  component: FullMenuPage,
});

type Item = { name: string; price: string };
type Category = { name: string; items: Item[] };
type MenuList = { id: string; label: string; icon: typeof Wine; categories: Category[] };

const loungeMenu: Category[] = [
  {
    name: "Wine",
    items: [
      { name: "Four Cousins", price: "19,500" },
      { name: "Sweet Kiss", price: "18,000" },
      { name: "Toma Toma", price: "15,000" },
      { name: "Asconi Agor", price: "20,000" },
      { name: "Pascoral Comrata", price: "18,000" },
      { name: "Carlo Rosie Red", price: "25,000" },
      { name: "Dellan Red Wine", price: "18,000" },
      { name: "4th Street (Red)", price: "18,000" },
      { name: "4th Street (White)", price: "18,000" },
      { name: "Andre Rose", price: "23,000" },
      { name: "Baron De La Vallee", price: "18,000" },
      { name: "William Lawson's", price: "23,000" },
      { name: "Martinelli's", price: "25,000" },
      { name: "Bon Voyage", price: "22,000" },
    ],
  },
  {
    name: "Extra Bitters",
    items: [
      { name: "Ashanti Bitters", price: "1,500" },
      { name: "De General", price: "1,500" },
      { name: "Orijin Bitters", price: "1,500" },
      { name: "Vibes Bitters", price: "1,500" },
      { name: "Malibu Liqueur", price: "25,000" },
      { name: "Gordon's Gin", price: "15,000" },
      { name: "Gordon's Moringa", price: "4,000" },
      { name: "Aromatic Bitters", price: "55,000" },
      { name: "Riunite Moscato (Small)", price: "5,000" },
      { name: "Riunite Lambrusco Moscato (Big)", price: "18,000" },
    ],
  },
  {
    name: "Spirits",
    items: [
      { name: "Campari (1L)", price: "31,000" },
      { name: "Campari (75cl)", price: "25,000" },
      { name: "Campari (20cl)", price: "13,000" },
      { name: "Smirnoff Vodka", price: "12,000" },
      { name: "Magic Moment", price: "15,000" },
      { name: "Beefeater Gin", price: "25,000" },
      { name: "Kahlua", price: "25,000" },
      { name: "Jägermeister", price: "40,000" },
      { name: "Bacardi White", price: "25,000" },
      { name: "Don Simon", price: "6,000" },
      { name: "Fearless", price: "1,200" },
      { name: "Predator", price: "1,200" },
      { name: "American Honey", price: "30,000" },
      { name: "Best", price: "18,500" },
      { name: "Baileys Pink", price: "25,000" },
      { name: "Baileys Black", price: "25,000" },
      { name: "Bacardi", price: "25,000" },
      { name: "Rebena", price: "1,500" },
      { name: "OL Meca Tequila", price: "25,000" },
      { name: "Black Bullet", price: "3,000" },
    ],
  },
  {
    name: "Barman's Specials",
    items: [
      { name: "BIGTEE Sea-breeze", price: "10,000" },
      { name: "Old Fashioned", price: "9,000" },
      { name: "Cosmopolitan", price: "9,000" },
      { name: "Electric Cocktail", price: "10,000" },
    ],
  },
  {
    name: "Cocktails",
    items: [
      { name: "Long Island", price: "10,000" },
      { name: "Strawberry Daiquiri", price: "9,000" },
      { name: "Tequila Sunrise", price: "9,000" },
      { name: "Piña Colada", price: "9,000" },
      { name: "Screaming Orgasm", price: "10,000" },
      { name: "Margarita", price: "9,000" },
      { name: "Mojito", price: "9,000" },
      { name: "Blue Heaven", price: "9,000" },
      { name: "Rainbow Paradise", price: "9,000" },
      { name: "Barbie Girl", price: "9,000" },
      { name: "Espresso Martini", price: "9,000" },
    ],
  },
  {
    name: "Mocktails",
    items: [
      { name: "Virgin Mojito", price: "8,000" },
      { name: "Virgin Piña Colada", price: "8,000" },
      { name: "Shirley Temple", price: "8,000" },
      { name: "Sweet Sunrise", price: "8,000" },
      { name: "Fruit Punch", price: "8,000" },
      { name: "Virgin Hawaiian", price: "8,000" },
      { name: "Lemonade", price: "8,000" },
      { name: "Frozen Strawberry", price: "8,000" },
    ],
  },
  {
    name: "Energy Drinks",
    items: [
      { name: "Red Bull", price: "3,000" },
      { name: "Monster Energy", price: "2,000" },
    ],
  },
  {
    name: "Beer",
    items: [
      { name: "Desperado (Big Can)", price: "3,500" },
      { name: "Heineken (Can)", price: "3,000" },
      { name: "33 Beer", price: "3,000" },
    ],
  },
  {
    name: "D'Valley Special Pepper Soup",
    items: [
      { name: "Seafood Okro", price: "5,000" },
      { name: "Native Soup", price: "5,000" },
      { name: "Catfish Pepper Soup", price: "4,000" },
      { name: "Goatmeat Pepper Soup", price: "4,000" },
    ],
  },
  {
    name: "Rice, Pasta & Others",
    items: [
      { name: "Jollof Rice", price: "3,000" },
      { name: "Coconut Rice", price: "4,000" },
      { name: "Fried Rice", price: "3,500" },
      { name: "White Rice", price: "2,500" },
      { name: "Boiled Yam (Pepper Soup)", price: "2,500" },
      { name: "Boiled Yam (Any Sauce)", price: "2,500" },
      { name: "Asun Rice", price: "4,000" },
      { name: "Jollof Pasta / Tomato Sauce", price: "4,500" },
      { name: "White Pasta / Tomato Sauce", price: "4,000" },
      { name: "D'VA's Special Rice (Native Jollof Rice with Shrimps, Minced Meat & Fillings)", price: "10,000" },
      { name: "Noodles (Loaded Noodles)", price: "6,500" },
    ],
  },
  {
    name: "Milkshakes",
    items: [
      { name: "Banana Cream Shake", price: "10,000" },
      { name: "Strawberry Milkshake", price: "10,000" },
      { name: "Oreo Shake", price: "12,000" },
      { name: "Chocolate Milkshake", price: "8,000" },
      { name: "Vanilla Milkshake", price: "8,000" },
    ],
  },
  {
    name: "Smoothies",
    items: [
      { name: "Breakfast Banana Smoothie", price: "7,000" },
      { name: "Something Nutty", price: "8,000" },
      { name: "Weight Gain Smoothie", price: "8,000" },
      { name: "Fruity Smoothie", price: "7,000" },
    ],
  },
  {
    name: "Freshly Squeezed Juice",
    items: [
      { name: "Orange Juice", price: "3,500" },
      { name: "Pineapple Juice", price: "3,500" },
      { name: "Watermelon Juice", price: "3,500" },
      { name: "Mixed Fruits Extravaganza", price: "4,000" },
    ],
  },
  {
    name: "Extra Toppings",
    items: [
      { name: "Granola", price: "2,000" },
      { name: "Almond", price: "2,500" },
      { name: "Coconut Flakes", price: "2,000" },
      { name: "Cashew Nuts", price: "2,000" },
    ],
  },
  {
    name: "Parfait",
    items: [{ name: "Parfait", price: "6,500" }],
  },
  {
    name: "Soft Drinks",
    items: [
      { name: "Coke (Pet)", price: "1,000" },
      { name: "Water", price: "500" },
      { name: "Coke (Can)", price: "1,000" },
      { name: "Fanta (Pet)", price: "1,000" },
      { name: "Fanta (Can)", price: "1,000" },
      { name: "Sprite (Can)", price: "1,000" },
      { name: "Betta Malt (Can)", price: "1,200" },
      { name: "Maltina (Can)", price: "1,200" },
      { name: "Guinness Malt", price: "1,200" },
      { name: "Cranberry Juice", price: "15,000" },
      { name: "Exotic", price: "5,000" },
      { name: "Chivita Active", price: "5,000" },
      { name: "Hollandia Yoghurt (Plain)", price: "5,000" },
      { name: "Five Alive Berry Blast", price: "3,500" },
      { name: "Five Alive Pulpy", price: "3,500" },
      { name: "Schweppes", price: "1,000" },
      { name: "Vita Milk", price: "3,000" },
      { name: "Imperial Crown", price: "3,000" },
      { name: "Red Bull", price: "3,500" },
    ],
  },
  {
    name: "Soups",
    items: [
      { name: "Afang", price: "3,500" },
      { name: "Bitter-Leaf", price: "3,000" },
      { name: "Egusi", price: "3,000" },
      { name: "Okro", price: "3,000" },
      { name: "Vegetable", price: "3,500" },
      { name: "Ogbono", price: "3,500" },
      { name: "White Soup", price: "4,500" },
      { name: "Oha", price: "3,500" },
      { name: "Ofe-Nsala", price: "4,500" },
    ],
  },
  {
    name: "Swallow",
    items: [
      { name: "Poundo", price: "1,500" },
      { name: "Eba", price: "800" },
      { name: "Fufu", price: "700" },
      { name: "Semo", price: "1,000" },
    ],
  },
  {
    name: "Proteins",
    items: [
      { name: "Chicken Wings", price: "2,500" },
      { name: "Goatmeat", price: "1,500" },
      { name: "Cowhead", price: "2,000" },
      { name: "Beef", price: "1,500" },
      { name: "Peppered Snails", price: "3,000" },
      { name: "Gizzards", price: "3,000" },
      { name: "Chicken", price: "4,500" },
      { name: "Prawns", price: "5,000" },
      { name: "Turkey", price: "9,000" },
    ],
  },
  {
    name: "Special",
    items: [
      { name: "French Fries", price: "3,000" },
      { name: "Egg Sauce", price: "2,500" },
      { name: "Fried / Boiled Eggs", price: "1,500" },
      { name: "Nkwobi", price: "10,000" },
      { name: "Isi Ewu", price: "15,000" },
      { name: "Salad", price: "1,000" },
    ],
  },
];

const clubMenu: Category[] = [
  {
    name: "Wine",
    items: [
      { name: "Four Cousins", price: "30,000" },
      { name: "Buseet Leigg", price: "30,000" },
      { name: "Toma Toma", price: "20,000" },
      { name: "Asconi Agor", price: "30,000" },
      { name: "Carlo Rosie Red", price: "40,000" },
      { name: "Declan", price: "30,000" },
      { name: "4th Street (Red)", price: "30,000" },
      { name: "4th Street (White)", price: "30,000" },
    ],
  },
  {
    name: "Tequila",
    items: [
      { name: "Buen Amigo", price: "45,000" },
      { name: "Casamigos Blanco", price: "250,000" },
      { name: "Olmeca Blanco", price: "80,000" },
      { name: "Don Julio", price: "650,000" },
      { name: "Azul", price: "600,000" },
    ],
  },
  {
    name: "Champagne",
    items: [
      { name: "Belaire", price: "110,000" },
      { name: "Angelus Sparkling Rosé", price: "70,000" },
      { name: "Andre Rosé", price: "35,000" },
    ],
  },
  {
    name: "Vodka",
    items: [{ name: "Flirt Vodka", price: "30,000" }],
  },
  {
    name: "Soft Drinks",
    items: [
      { name: "Water", price: "1,500" },
      { name: "Coke", price: "2,000" },
      { name: "Red Bull", price: "3,000" },
      { name: "Cranberry Juice", price: "15,000" },
      { name: "Exotic", price: "10,000" },
      { name: "Chivita Active", price: "10,000" },
      { name: "Monster Energy", price: "4,000" },
      { name: "Hollandia", price: "8,000" },
    ],
  },
  {
    name: "Brandy",
    items: [
      { name: "Hennessy VS", price: "110,000" },
      { name: "Hennessy VSOP", price: "200,000" },
      { name: "Hennessy XO", price: "700,000" },
      { name: "Martell VS", price: "120,000" },
      { name: "Martell Blue Swift", price: "150,000" },
    ],
  },
  {
    name: "Whiskey",
    items: [
      { name: "Jameson Black", price: "90,000" },
      { name: "Jameson Green", price: "50,000" },
      { name: "American Honey", price: "40,000" },
      { name: "William Lawson's", price: "30,000" },
      { name: "Martinelli's", price: "40,000" },
      { name: "Baron De La Vallee", price: "30,000" },
      { name: "Black Mustang", price: "20,000" },
    ],
  },
  {
    name: "Shisha",
    items: [
      { name: "Shisha", price: "7,000" },
      { name: "De Valley's Special Shisha", price: "20,000" },
    ],
  },
];

const menus: MenuList[] = [
  { id: "lounge", label: "Lounge Menu", icon: Martini, categories: loungeMenu },
  { id: "club", label: "Club Menu", icon: Wine, categories: clubMenu },
];

// Helpers ---------------------------------------------------------------

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const priceToNumber = (price: string) => price.replace(/,/g, "");

// Structured data (schema.org Menu) --------------------------------------
// Built directly from the same data rendered on the page, so the JSON-LD
// can never drift out of sync with what a visitor (or a crawler/agent) sees.

const categoriesToMenuSections = (categories: Category[]) =>
  categories.map((cat) => ({
    "@type": "MenuSection",
    name: cat.name,
    hasMenuItem: cat.items.map((it) => ({
      "@type": "MenuItem",
      name: it.name,
      offers: {
        "@type": "Offer",
        price: priceToNumber(it.price),
        priceCurrency: "NGN",
      },
    })),
  }));

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": `${BASE_URL}/full-menu#menu`,
  name: "D' Valley's Arena Full Menu",
  description: "Complete, itemized price list for D' Valley's Arena, covering the Lounge Menu and the Club Menu.",
  inLanguage: "en",
  url: `${BASE_URL}/full-menu`,
  hasMenuSection: [
    { "@type": "MenuSection", name: "Lounge Menu", hasMenuSection: categoriesToMenuSections(loungeMenu) },
    { "@type": "MenuSection", name: "Club Menu", hasMenuSection: categoriesToMenuSections(clubMenu) },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Menu", item: `${BASE_URL}/menu` },
    { "@type": "ListItem", position: 3, name: "Full Menu", item: `${BASE_URL}/full-menu` },
  ],
};

const faqs = [
  {
    q: "What is the difference between the Lounge Menu and the Club Menu at D' Valley's Arena?",
    a: "The Lounge Menu covers everyday dining, soups, proteins, cocktails, mocktails and drinks at standard pricing. The Club Menu covers premium bottle service in the nightclub — wines, tequila, champagne, brandy, whiskey and shisha — priced for VIP club service.",
  },
  {
    q: "Where can I see full prices for food and drinks at D' Valley's Arena?",
    a: "The complete, itemized price list for every food and drink item at D' Valley's Arena is on this page, covering both the Lounge Menu and the Club Menu, name and price only.",
  },
  {
    q: "What currency are D' Valley's Arena menu prices listed in?",
    a: "All prices on the D' Valley's Arena menu are listed in Nigerian Naira (₦).",
  },
];

const fullMenuFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// Component ---------------------------------------------------------------

function MenuTable({ categories, listId }: { categories: Category[]; listId: string }) {
  return (
    <div className="space-y-14">
      {categories.map((cat) => {
        const anchorId = `${listId}-${slugify(cat.name)}`;
        return (
          <article key={cat.name} id={anchorId} className="scroll-mt-40">
            <header className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-amber-glow/40" />
              <h3 className="font-serif text-2xl md:text-3xl text-amber-glow whitespace-nowrap">{cat.name}</h3>
              <div className="h-px flex-1 bg-amber-glow/40" />
            </header>
            <table className="w-full border-collapse">
              <caption className="sr-only">{cat.name} price list</caption>
              <thead>
                <tr className="sr-only">
                  <th scope="col">Item</th>
                  <th scope="col">Price (Naira)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 border-y border-white/10">
                {cat.items.map((it) => (
                  <tr key={it.name} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-3 px-1 text-white/90">{it.name}</td>
                    <td className="py-3 px-1 text-right shrink-0 font-serif text-amber-glow whitespace-nowrap">₦{it.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        );
      })}
    </div>
  );
}

function FullMenuPage() {
  const [active, setActive] = useState<string>("lounge");

  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-28">
        <ol className="mx-auto max-w-5xl px-6 flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/40">
          <li><Link to="/" className="hover:text-amber-glow transition-colors">Home</Link></li>
          <li aria-hidden="true"><ChevronRight size={12} /></li>
          <li><Link to="/menu" className="hover:text-amber-glow transition-colors">Menu</Link></li>
          <li aria-hidden="true"><ChevronRight size={12} /></li>
          <li className="text-amber-glow" aria-current="page">Full Menu</li>
        </ol>
      </nav>

      <section className="pt-8 pb-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-xs tracking-[0.5em] uppercase text-amber-glow">Complete Price List</span>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl text-white">Full Menu.</h1>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Every item and every price at D' Valley's Arena, Bori, Rivers State, across the Lounge Menu and the Club Menu. Name and price only, prices in Nigerian Naira (₦).
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-[72px] z-30 bg-black/85 backdrop-blur border-y border-white/10">
        <div role="tablist" aria-label="Menu selector" className="mx-auto max-w-5xl px-6 flex flex-wrap items-center justify-center gap-2 md:gap-4 py-4">
          {menus.map((m) => {
            const Icon = m.icon;
            const isActive = m.id === active;
            return (
              <button
                key={m.id}
                id={`tab-${m.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${m.id}`}
                onClick={() => setActive(m.id)}
                className={`flex items-center gap-2 px-5 md:px-7 py-3 rounded-sm border text-xs md:text-sm tracking-[0.3em] uppercase transition-all ${
                  isActive
                    ? "border-amber-glow bg-amber-glow/10 text-amber-glow"
                    : "border-white/15 text-white/70 hover:text-white hover:border-white/40"
                }`}
              >
                <Icon size={16} />
                {m.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Both menus are always rendered in the markup — only visibility toggles.
          This keeps every item and price readable by search crawlers, LLM
          browsing agents, and anyone with JavaScript disabled, not just the
          tab that happens to be open. */}
      {menus.map((m) => (
        <section
          key={m.id}
          id={`panel-${m.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${m.id}`}
          hidden={active !== m.id}
          className="py-16"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-14 text-center">
              <h2 className="mt-3 font-serif text-4xl md:text-6xl text-white">{m.label}</h2>
            </div>
            <MenuTable categories={m.categories} listId={m.id} />
          </div>
        </section>
      ))}

      {/* FAQ — visible content backing the FAQPage structured data above */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <span className="text-xs tracking-[0.4em] uppercase text-amber-glow">Good to Know</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-white">Menu Questions.</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-sm border border-white/10 bg-card p-6">
                <h3 className="font-serif text-lg text-white">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
