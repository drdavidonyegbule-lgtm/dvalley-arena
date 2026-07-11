import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bike, UtensilsCrossed, Wine, Sparkles } from "lucide-react";
const deliveryBag = { url: "/delivery-bag.png" };
const afangImg = { url: "/afang.jpg" };
const bitterleafImg = { url: "/bitterleaf.jpg" };
const egusiImg = { url: "/egusi.jpg" };
const whiteSoupImg = { url: "/white-soup.jpg" };
const seafoodOkroImg = { url: "/seafood-okro.jpg" };
const nativeSoupImg = { url: "/native-soup.jpg" };
const catfishPeppersoupImg = { url: "/catfish-peppersoup.jpg" };
const goatPeppersoupImg = { url: "/goat-peppersoup.jpg" };
export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — D' Valley's Arena | Food, Drinks & Specials in Bori, Rivers State" },
      { name: "description", content: "Explore the full D' Valley's Arena menu — signature soups, proteins, cocktails, wines, milkshakes and DVA specials. Fresh Nigerian cuisine and premium mixology in Bori, Rivers State." },
      { name: "keywords", content: "D Valley's Arena menu, restaurant Bori Rivers State, Afang soup, Nkwobi, Isi Ewu, cocktails Rivers State, DVA special rice" },
      { property: "og:title", content: "Menu — D' Valley's Arena" },
      { property: "og:description", content: "Food, drinks and DVA specials — curated for the family." },
      { property: "og:url", content: "https://dvalleysarena.com/menu" },
    ],
    links: [{ rel: "canonical", href: "https://dvalleysarena.com/menu" }],
  }),
  component: MenuPage,
});

type Item = { name: string; price: string; img: string; alt: string };
type Category = { name: string; items: Item[] };
type Tier = { id: string; label: string; tagline: string; icon: typeof UtensilsCrossed; categories: Category[] };

const u = (id: string) => `https://images.unsplash.com/${id}?w=800&q=80&auto=format&fit=crop`;

// Categorical fallback images (well-known, stable Unsplash IDs) — used if a specific photo fails to load
const FALLBACK = {
  soup: u("photo-1547592180-85f173990554"),
  meat: u("photo-1544025162-d76694265947"),
  rice: u("photo-1596797038530-2c107229654b"),
  wine: u("photo-1510812431401-41d2bd2722f3"),
  beer: u("photo-1618889482923-38250401a84e"),
  spirit: u("photo-1569529465841-dfecdab7503b"),
  cocktail: u("photo-1551024709-8f23befc6f87"),
  shake: u("photo-1572490122747-3968b75cc699"),
  smoothie: u("photo-1638176066666-ffb2f013c7dd"),
  topping: u("photo-1517593456156-e5b5b21d0691"),
};

const tiers: Tier[] = [
  {
    id: "food",
    label: "Food",
    tagline: "Kitchen · Fresh Nigerian & Continental",
    icon: UtensilsCrossed,
    categories: [
      {
        name: "Soup",
        items: [
          { name: "Afang Soup", price: "2,500", img: afangImg.url, alt: "Bowl of Afang soup with leafy waterleaf greens and assorted meat" },
          { name: "Bitter-leaf Soup", price: "2,500", img: bitterleafImg.url, alt: "Bitter-leaf soup with assorted meat and tripe" },
          { name: "Egusi Soup", price: "2,500", img: egusiImg.url, alt: "Thick egusi melon-seed soup served with pounded yam" },
          { name: "White Soup (Afia Efere)", price: "4,000", img: whiteSoupImg.url, alt: "Peppery white soup Afia Efere" },
        ],
      },
      {
        name: "Special Soup",
        items: [
          { name: "Seafood Okro", price: "5,000", img: seafoodOkroImg.url, alt: "Seafood okro soup with prawns, crab and fish" },
          { name: "Native Soup", price: "5,000", img: nativeSoupImg.url, alt: "Rivers State native soup served with pounded yam" },
          { name: "Catfish Peppersoup", price: "3,000", img: catfishPeppersoupImg.url, alt: "Steaming catfish peppersoup in bowl" },
          { name: "Goat meat Peppersoup", price: "3,000", img: goatPeppersoupImg.url, alt: "Peppery goat meat peppersoup with spices" },
        ],
      },
      {
        name: "Proteins",
        items: [
          { name: "Turkey", price: "9,000", img: u("photo-1574672280600-4accfa5b6f98"), alt: "Grilled turkey portion, seasoned" },
          { name: "Chicken Wings", price: "2,500", img: u("photo-1567620832903-9fc6debc209f"), alt: "Crispy grilled chicken wings" },
          { name: "Chicken", price: "4,000", img: u("photo-1598103442097-8b74394b95c6"), alt: "Grilled chicken plate" },
          { name: "Peppered Snail", price: "15,000", img: u("photo-1544025162-d76694265947"), alt: "Peppered snail delicacy in rich sauce" },
        ],
      },
      {
        name: "Extras",
        items: [
          { name: "French Fries", price: "15,000", img: u("photo-1573080496219-bb080dd4f877"), alt: "Golden crispy French fries" },
          { name: "Small Chops (Beef/Chicken)", price: "1,500", img: u("photo-1541014741259-de529411b96a"), alt: "Nigerian small chops platter — samosas and puff-puff" },
          { name: "Nkwobi", price: "10,000", img: u("photo-1544025162-d76694265947"), alt: "Traditional Nkwobi spiced cow-foot" },
          { name: "Isi Ewu", price: "15,000", img: u("photo-1625938144755-652e08e359b7"), alt: "Isi Ewu — spiced goat head delicacy" },
        ],
      },
      {
        name: "Rice & Pasta",
        items: [
          { name: "Jollof Rice", price: "2,800", img: u("photo-1604329760661-e71dc83f8f26"), alt: "Nigerian party jollof rice" },
          { name: "Coconut Rice", price: "3,200", img: u("photo-1516684732162-798a0062be99"), alt: "Fragrant coconut rice plated" },
          { name: "Fried Rice", price: "2,800", img: u("photo-1603133872878-684f208fb84b"), alt: "Nigerian fried rice with vegetables" },
          { name: "Asun Rice", price: "2,000", img: u("photo-1596797038530-2c107229654b"), alt: "Asun rice topped with spiced goat meat" },
        ],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    tagline: "Bar · Wines, Spirits & Signature Mixology",
    icon: Wine,
    categories: [
      {
        name: "Wine",
        items: [
          { name: "Four Cousins", price: "15,000", img: u("photo-1510812431401-41d2bd2722f3"), alt: "Bottle of red wine, sweet varietal" },
          { name: "Carlo Rossi Red", price: "25,000", img: u("photo-1553361371-9b22f78e8b1d"), alt: "Large red wine bottle with glass" },
          { name: "4th Street (Red)", price: "10,000", img: u("photo-1568213816046-0ee1c42bd559"), alt: "Red wine served in a glass" },
          { name: "Andre Rose", price: "20,000", img: u("photo-1547595628-c61a29f496f0"), alt: "Chilled rose sparkling wine" },
        ],
      },
      {
        name: "Energy & Beer",
        items: [
          { name: "Red Bull", price: "3,000", img: u("photo-1622543925917-3007d8b0c88f"), alt: "Chilled energy drink can on ice" },
          { name: "Monster Energy", price: "2,000", img: u("photo-1622543925917-3007d8b0c88f"), alt: "Energy drink can, chilled" },
          { name: "Heineken Can", price: "1,500", img: u("photo-1618889482923-38250401a84e"), alt: "Chilled green beer can" },
          { name: "Desperado Big Can", price: "3,000", img: u("photo-1618889482923-38250401a84e"), alt: "Tequila-flavoured beer can" },
        ],
      },
      {
        name: "Spirits & Liquors",
        items: [
          { name: "Campari 1L", price: "31,000", img: u("photo-1569529465841-dfecdab7503b"), alt: "Bottle of red bitter aperitif" },
          { name: "Smirnoff Vodka XL", price: "8,000", img: u("photo-1550985616-10810253b84d"), alt: "Clear vodka bottle on bar" },
          { name: "Beefeater Gin", price: "25,000", img: u("photo-1514362545857-3bc16c4c7d1b"), alt: "London Dry gin bottle" },
          { name: "Jagermeister", price: "9,000", img: u("photo-1569529465841-dfecdab7503b"), alt: "Herbal digestif liqueur bottle" },
        ],
      },
      {
        name: "Cocktails",
        items: [
          { name: "Long Island Iced Tea", price: "10,000", img: u("photo-1541107117648-3ee98c25da55"), alt: "Long Island Iced Tea in tall glass with lemon" },
          { name: "Strawberry Daiquiri", price: "9,000", img: u("photo-1587223962930-cb7f31384c19"), alt: "Frozen strawberry daiquiri cocktail" },
          { name: "Tequila Sunrise", price: "9,000", img: u("photo-1470337458703-46ad1756a187"), alt: "Tequila Sunrise with orange and grenadine" },
          { name: "Pina Colada", price: "9,000", img: u("photo-1560512823-829485b8bf24"), alt: "Pina Colada in coconut glass with pineapple" },
        ],
      },
      {
        name: "Mocktails",
        items: [
          { name: "Virgin Mojito", price: "8,000", img: u("photo-1551024709-8f23befc6f87"), alt: "Virgin mojito with lime and fresh mint" },
          { name: "Virgin Pina Colada", price: "8,000", img: u("photo-1560512823-829485b8bf24"), alt: "Non-alcoholic pina colada mocktail" },
          { name: "Shirley Temple", price: "8,000", img: u("photo-1587223962930-cb7f31384c19"), alt: "Shirley Temple mocktail with cherry" },
          { name: "Sweet Sunrise", price: "8,000", img: u("photo-1470337458703-46ad1756a187"), alt: "Sweet sunrise mocktail with grenadine" },
        ],
      },
      {
        name: "Barman's Specials",
        items: [
          { name: "BIGTEE Sea-breeze", price: "10,000", img: u("photo-1470337458703-46ad1756a187"), alt: "Signature sea-breeze cocktail" },
          { name: "Old Fashioned", price: "9,000", img: u("photo-1514362545857-3bc16c4c7d1b"), alt: "Classic Old Fashioned whiskey cocktail" },
          { name: "Cosmopolitan", price: "9,000", img: u("photo-1587223962930-cb7f31384c19"), alt: "Cosmopolitan cocktail in martini glass" },
          { name: "Electric Cocktail", price: "10,000", img: u("photo-1541107117648-3ee98c25da55"), alt: "Electric-blue signature cocktail" },
        ],
      },
    ],
  },
  {
    id: "specials",
    label: "Specials",
    tagline: "The DVA Signature · Chef & Wellness Curations",
    icon: Sparkles,
    categories: [
      {
        name: "DVA's Special Rice",
        items: [
          { name: "DVA's Special Rice", price: "10,000", img: u("photo-1596797038530-2c107229654b"), alt: "DVA signature jollof rice with shrimps and minced meat" },
          { name: "Jollof Pasta", price: "4,000", img: u("photo-1604329760661-e71dc83f8f26"), alt: "Nigerian jollof pasta in tomato spice base" },
          { name: "White Pasta / Tomato Sauce", price: "4,000", img: u("photo-1551183053-bf91a1d81141"), alt: "White pasta with rich tomato sauce" },
          { name: "White Rice & Stew", price: "2,800", img: u("photo-1516684732162-798a0062be99"), alt: "Steamed white rice with Nigerian stew" },
        ],
      },
      {
        name: "Milkshakes",
        items: [
          { name: "Banana Cream Shake", price: "8,000", img: u("photo-1553787499-6f9133860278"), alt: "Banana cream milkshake with whipped topping" },
          { name: "Strawberry Milkshake", price: "8,000", img: u("photo-1553530666-ba11a90a0868"), alt: "Pink strawberry milkshake with straw" },
          { name: "Oreo Shake", price: "10,000", img: u("photo-1572490122747-3968b75cc699"), alt: "Oreo cookie milkshake in tall glass" },
          { name: "Chocolate Milkshake", price: "8,000", img: u("photo-1572490122747-3968b75cc699"), alt: "Rich chocolate milkshake with whipped cream" },
        ],
      },
      {
        name: "Smoothies",
        items: [
          { name: "Breakfast Banana Smoothie", price: "7,000", img: u("photo-1600271886742-f049cd451bba"), alt: "Banana breakfast smoothie in glass" },
          { name: "Something Nutty", price: "8,000", img: u("photo-1502741338009-cac2772e18bc"), alt: "Nutty smoothie with almonds" },
          { name: "Weight-Gain Smoothie", price: "8,000", img: u("photo-1610970881699-44a5587cabec"), alt: "Protein weight-gain smoothie in tall glass" },
          { name: "Fruity Smoothie", price: "7,000", img: u("photo-1638176066666-ffb2f013c7dd"), alt: "Colourful fruity smoothie" },
        ],
      },
      {
        name: "Parfait & Toppings",
        items: [
          { name: "Cup Parfait (350ml)", price: "5,000", img: u("photo-1488477181946-6428a0291777"), alt: "Layered yoghurt parfait cup with fruit" },
          { name: "Granola Topping", price: "2,000", img: u("photo-1517593456156-e5b5b21d0691"), alt: "Crunchy granola topping" },
          { name: "Almond Topping", price: "2,500", img: u("photo-1508061253366-f7da158b6d46"), alt: "Sliced almond topping" },
          { name: "Cashew Nuts Topping", price: "2,000", img: u("photo-1567892737950-30c4db37cd89"), alt: "Cashew nuts topping in bowl" },
        ],
      },
    ],
  },
];

// Best-effort category fallback per category name
const categoryFallback = (categoryName: string): string => {
  const n = categoryName.toLowerCase();
  if (n.includes("soup")) return FALLBACK.soup;
  if (n.includes("protein") || n.includes("extra")) return FALLBACK.meat;
  if (n.includes("rice") || n.includes("pasta")) return FALLBACK.rice;
  if (n.includes("wine")) return FALLBACK.wine;
  if (n.includes("energy") || n.includes("beer")) return FALLBACK.beer;
  if (n.includes("spirit") || n.includes("liquor")) return FALLBACK.spirit;
  if (n.includes("cocktail") || n.includes("mocktail") || n.includes("barman")) return FALLBACK.cocktail;
  if (n.includes("milkshake")) return FALLBACK.shake;
  if (n.includes("smoothie")) return FALLBACK.smoothie;
  if (n.includes("parfait") || n.includes("topping")) return FALLBACK.topping;
  return FALLBACK.meat;
};

function MenuPage() {
  const [tier, setTier] = useState<string>("food");
  const active = tiers.find((t) => t.id === tier)!;

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-xs tracking-[0.5em] uppercase text-amber-glow">Premium Curation</span>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl text-white">The Menu.</h1>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Three tiers. One family. From heritage soups to signature mixology and chef specials — every plate and pour is prepared to order.
          </p>
        </div>
      </section>

      {/* Tier Switch */}
      <section className="sticky top-[72px] z-30 bg-black/85 backdrop-blur border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-center gap-2 md:gap-4 py-4">
          {tiers.map((t) => {
            const Icon = t.icon;
            const isActive = t.id === tier;
            return (
              <button
                key={t.id}
                onClick={() => setTier(t.id)}
                className={`flex items-center gap-2 px-5 md:px-7 py-3 rounded-sm border text-xs md:text-sm tracking-[0.3em] uppercase transition-all ${
                  isActive
                    ? "border-amber-glow bg-amber-glow/10 text-amber-glow"
                    : "border-white/15 text-white/70 hover:text-white hover:border-white/40"
                }`}
              >
                <Icon size={16} />
                {t.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="text-[0.65rem] tracking-[0.5em] uppercase text-amber-glow">{active.tagline}</span>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl text-white">{active.label} Menu</h2>
            <p className="mt-3 text-xs tracking-[0.3em] uppercase text-white/40">Prices in Nigerian Naira (₦)</p>
          </div>

          <div className="space-y-20">
            {active.categories.map((cat) => (
              <article key={cat.name}>
                <header className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-amber-glow/40" />
                  <h3 className="font-serif text-3xl md:text-4xl text-amber-glow whitespace-nowrap">{cat.name}</h3>
                  <div className="h-px flex-1 bg-amber-glow/40" />
                </header>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {cat.items.map((it) => (
                    <div
                      key={it.name}
                      className="group relative overflow-hidden rounded-sm border border-white/10 bg-card transition-all hover:border-amber-glow/60"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={it.img}
                          alt={it.alt}
                          loading="lazy"
                          onError={(e) => {
                            const el = e.currentTarget;
                            const fb = categoryFallback(cat.name);
                            if (el.src !== fb) el.src = fb;
                          }}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="font-serif text-lg text-white leading-tight min-h-[3rem]">{it.name}</h4>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-[0.6rem] tracking-[0.35em] uppercase text-white/40">Signature</span>
                          <span className="font-serif text-xl text-amber-glow">₦{it.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Takeaway / Delivery */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-amber-glow/40 bg-card">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <img src={deliveryBag.url} alt="D' Valley's Arena branded takeaway packaging" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-5">
                <Bike size={18} className="text-amber-glow" />
                <span className="text-[0.65rem] tracking-[0.4em] uppercase text-amber-glow">Home Delivery & Pickup</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">A taste to remember —<br/>delivered.</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Our full menu, plated for the road in D' Valley's branded packaging. Order via the concierge line, and we'll dispatch within the hour across Rivers State.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50">Direct Line</div>
                  <div className="text-amber-glow font-medium mt-1">0707 346 0398</div>
                </div>
                <div>
                  <div className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50">Handle</div>
                  <div className="text-white font-medium mt-1">@dvalleyarena</div>
                </div>
              </div>
              <a
                href="https://wa.me/2347073460398"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber btn-amber-hover mt-10 self-start"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
