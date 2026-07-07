import { createFileRoute } from "@tanstack/react-router";
import { Bike } from "lucide-react";
import dining from "@/assets/dining.png.asset.json";
import foodPlate from "@/assets/food-plate.png.asset.json";
import foodBag from "@/assets/food-bag.png.asset.json";
import shakes from "@/assets/shakes.jpg.asset.json";
import mixology from "@/assets/mixology.jpg.asset.json";
import deliveryBag from "@/assets/delivery-bag.png.png.asset.json";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — D' Valley's Arena" },
      { name: "description", content: "Gourmet cuisine, signature cocktails, artisan shakes, and branded takeaway service at D' Valley's Arena." },
      { property: "og:title", content: "Menu — D' Valley's Arena" },
      { property: "og:description", content: "The menu communicates luxury, energy, and community." },
      { property: "og:url", content: "/menu" },
      { property: "og:image", content: foodPlate.url },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

const kitchen = [
  {
    section: "Signatures",
    items: [
      { name: "Valley Wagyu Rice Bowl", copy: "Slow-braised wagyu, jollof-glazed rice, charred peppers.", price: "38", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80&auto=format&fit=crop" },
      { name: "Amber Rack of Lamb", copy: "Honey-mustard crust, saffron jus, roasted heritage carrots.", price: "46", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80&auto=format&fit=crop" },
      { name: "Truffle Yassa Chicken", copy: "Free-range poulet, caramelised onion, black truffle.", price: "34", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80&auto=format&fit=crop" },
    ],
  },
  {
    section: "Small Plates",
    items: [
      { name: "Suya Tuna Tataki", copy: "Yellow-fin, suya crust, ponzu, micro cilantro.", price: "22", img: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&q=80&auto=format&fit=crop" },
      { name: "Plantain & Burrata", copy: "Sweet plantain, buffalo burrata, chilli honey.", price: "18", img: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80&auto=format&fit=crop" },
      { name: "Crispy Salt Prawns", copy: "Tempura prawns, scotch bonnet aioli, lime.", price: "24", img: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&q=80&auto=format&fit=crop" },
    ],
  },
  {
    section: "The Bar",
    items: [
      { name: "Golden Valley", copy: "Bourbon, elderflower, gold leaf, smoked orange.", price: "19", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80&auto=format&fit=crop" },
      { name: "Absolut Watermelon Spritz", copy: "Watermelon vodka, lime, prosecco, mint.", price: "17", img: "https://images.unsplash.com/photo-1541107117648-3ee98c25da55?w=400&q=80&auto=format&fit=crop" },
      { name: "Champagne Service", copy: "Curated selection from grower estates. Bottle from…", price: "120", img: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=400&q=80&auto=format&fit=crop" },
    ],
  },
];

function MenuPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-xs tracking-[0.5em] uppercase text-amber-glow">Premium Curation</span>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl text-white">The Menu.</h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10">
          {/* Sticky Visual — asymmetrical two-column signature grid */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 row-span-2">
                  <img src={foodPlate.url} alt="Grilled wings, salad and gourmet plating" className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 p-4 vignette-bottom">
                    <span className="text-[0.6rem] tracking-[0.3em] uppercase text-amber-glow">Signature Plate</span>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-sm border border-white/10">
                  <img src={foodBag.url} alt="Gourmet rice bowl with champagne" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-sm border border-white/10">
                  <img src={dining.url} alt="Service at D' Valley's" className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The menu communicates luxury, energy, and community. Sourced weekly. Prepared to order. Presented with intention. Every ticket is fired within <span className="text-amber-glow">5 minutes</span>.
              </p>
            </div>
          </div>

          {/* Scrollable menu */}
          <div className="lg:col-span-3 space-y-16">
            {kitchen.map((sec) => (
              <div key={sec.section}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-amber-glow/40" />
                  <h2 className="font-serif text-3xl text-amber-glow whitespace-nowrap">{sec.section}</h2>
                  <div className="h-px flex-1 bg-amber-glow/40" />
                </div>
                <ul className="divide-y divide-border">
                  {sec.items.map((it) => (
                    <li key={it.name} className="py-6 flex gap-5 items-start">
                      <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 overflow-hidden rounded-sm border border-white/10">
                        <img src={it.img} alt={it.name} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="font-serif text-xl text-white">{it.name}</h3>
                          <div className="flex-1 border-b border-dotted border-white/20 mx-3" />
                          <span className="text-amber-glow font-medium">${it.price}</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground max-w-xl">{it.copy}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dessert & Mixology Showcase */}
      <section className="section-dark py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="text-xs tracking-[0.4em] uppercase text-amber-glow">Desserts & Mixology</span>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl text-white">Sweet indulgence,<br/>crafted with theatre.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { img: shakes.url, tag: "Artisan Shakes", title: "Cookies, Cream & Confetti", copy: "Hand-spun shakes crowned with sprinkles, cotton candy and a full cookie stack." },
              { img: mixology.url, tag: "Signature Mixology", title: "The Tall Pour", copy: "Chocolate-drizzled dessert cocktails engineered for the moment the lights drop." },
            ].map((c) => (
              <article key={c.title} className="group relative overflow-hidden rounded-sm border border-white/10 aspect-[4/5]">
                <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 vignette-bottom" />
                <div className="absolute bottom-0 p-8">
                  <span className="text-[0.65rem] tracking-[0.35em] uppercase text-amber-glow">{c.tag}</span>
                  <h3 className="mt-2 font-serif text-3xl text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/70 max-w-sm">{c.copy}</p>
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
                Our full signature menu, plated for the road in D' Valley's branded packaging. Order via the concierge line, and we'll dispatch within the hour across Rivers State.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50">Direct Line</div>
                  <div className="text-amber-glow font-medium mt-1">0908 218 758</div>
                </div>
                <div>
                  <div className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50">Handle</div>
                  <div className="text-white font-medium mt-1">@dvalleyarena</div>
                </div>
              </div>
              <a href="/contact" className="btn-amber btn-amber-hover mt-10 self-start">Order Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
