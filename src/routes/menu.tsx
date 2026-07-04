import { createFileRoute } from "@tanstack/react-router";
import dining from "@/assets/dining.png.asset.json";
import cocktails from "@/assets/cocktails.jpg.asset.json";
import lounge from "@/assets/lounge.jpg.asset.json";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — D' Valley's Arena" },
      { name: "description", content: "Gourmet cuisine, signature cocktails and premium bottle service at D' Valley's Arena. A menu that communicates luxury, energy and community." },
      { property: "og:title", content: "Menu — D' Valley's Arena" },
      { property: "og:description", content: "The menu communicates luxury, energy, and community." },
      { property: "og:url", content: "/menu" },
      { property: "og:image", content: dining.url },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

const kitchen = [
  {
    section: "Signatures",
    items: [
      { name: "Valley Wagyu Rice Bowl", copy: "Slow-braised wagyu, jollof-glazed rice, charred peppers.", price: "38" },
      { name: "Amber Rack of Lamb", copy: "Honey-mustard crust, saffron jus, roasted heritage carrots.", price: "46" },
      { name: "Truffle Yassa Chicken", copy: "Free-range poulet, caramelised onion, black truffle.", price: "34" },
    ],
  },
  {
    section: "Small Plates",
    items: [
      { name: "Suya Tuna Tataki", copy: "Yellow-fin, suya crust, ponzu, micro cilantro.", price: "22" },
      { name: "Plantain & Burrata", copy: "Sweet plantain, buffalo burrata, chilli honey.", price: "18" },
      { name: "Crispy Salt Prawns", copy: "Tempura prawns, scotch bonnet aioli, lime.", price: "24" },
    ],
  },
  {
    section: "The Bar",
    items: [
      { name: "Golden Valley", copy: "Bourbon, elderflower, gold leaf, smoked orange.", price: "19" },
      { name: "Absolut Watermelon Spritz", copy: "Watermelon vodka, lime, prosecco, mint.", price: "17" },
      { name: "Champagne Service", copy: "Curated selection from grower estates. Bottle from…", price: "120" },
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
          {/* Sticky Visual */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28 space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10">
                <img src={dining.url} alt="D' Valley's signature service" className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-6 vignette-bottom">
                  <p className="font-serif text-xl text-white leading-snug">
                    "Every order is communicated to the kitchen within <em className="text-amber-glow not-italic">5 minutes</em> — ensuring peak presentation."
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The menu communicates luxury, energy, and community. Sourced weekly. Prepared to order. Presented with intention.
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
                    <li key={it.name} className="py-6 flex gap-6 items-baseline">
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

      {/* Cocktail & Bottle Experience */}
      <section className="section-dark py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="text-xs tracking-[0.4em] uppercase text-amber-glow">The Cocktail & Bottle Experience</span>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl text-white">Premium mixology,<br/>day and night.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { img: lounge.url, tag: "Nighttime", title: "Signature Cocktails" },
              { img: cocktails.url, tag: "Daytime", title: "Poolside Sips" },
            ].map((c) => (
              <article key={c.title} className="group relative overflow-hidden rounded-sm border border-white/10 aspect-[4/3]">
                <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 vignette-bottom" />
                <div className="absolute bottom-0 p-8">
                  <span className="text-[0.65rem] tracking-[0.35em] uppercase text-amber-glow">{c.tag}</span>
                  <h3 className="mt-2 font-serif text-3xl text-white">{c.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
