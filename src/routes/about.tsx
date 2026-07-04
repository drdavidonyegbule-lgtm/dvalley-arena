import { createFileRoute } from "@tanstack/react-router";
import poolside from "@/assets/poolside.jpg.asset.json";
import diningSocial from "@/assets/dining-social.jpg.asset.json";
import { Award, Heart, Zap, Shield } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — D' Valley's Arena" },
      { name: "description", content: "D' Valley's Arena is a multi-concept lifestyle destination built around five pillars: hospitality, entertainment, fitness, nightlife and lounge." },
      { property: "og:title", content: "About D' Valley's Arena" },
      { property: "og:description", content: "More than a venue. A global family." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: poolside.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Excellence", copy: "We pursue the highest standard in every interaction, every detail, every day." },
  { icon: Heart, title: "Hospitality First", copy: "Every guest deserves to feel valued, seen, and genuinely welcomed." },
  { icon: Zap, title: "Innovation", copy: "We constantly evolve our offerings, service models, and guest experiences." },
  { icon: Shield, title: "Safety & Responsibility", copy: "We prioritize the safety of every guest and team member." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-xs tracking-[0.5em] uppercase text-amber-glow">Our Story</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05]">
            More Than a Venue.<br/><em className="text-amber-glow not-italic">A Global Family.</em>
          </h1>
          <p className="mt-10 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            D' Valley's Arena is a premier multi-concept lifestyle and entertainment destination built around five core experience pillars: world-class hospitality, high-energy entertainment, state-of-the-art fitness, vibrant nightlife, and a sophisticated lounge environment. We deliver world-class facilities and a culture of hospitality that makes every guest feel like a <em className="not-italic text-amber-glow font-medium">KING</em>.
          </p>
        </div>
      </section>

      <section className="section-dark py-24 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="text-xs tracking-[0.4em] uppercase text-amber-glow">Core Values</span>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl text-white">The Operating System.</h2>
          </div>
          <div className="grid gap-px bg-border rounded-sm overflow-hidden border border-border md:grid-cols-2">
            {values.map((v) => (
              <article key={v.title} className="bg-background p-10 md:p-12">
                <v.icon className="text-amber-glow mb-6" size={32} />
                <h3 className="font-serif text-3xl text-white mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10">
            <img src={poolside.url} alt="Authentic human connection at D' Valley's" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 p-10 md:p-16 max-w-2xl">
              <p className="font-serif text-3xl md:text-4xl text-white leading-tight">
                "We build spaces where connection happens naturally — and moments become memories."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src={diningSocial.url} alt="Community at D' Valley's" className="w-full aspect-[4/5] object-cover rounded-sm border border-white/10" />
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-amber-glow">Global Trendsetters</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-white">Built for the ones who set the pace.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our community is 18–35. Ambitious. Cultured. Connected. From boardroom to dance floor, from morning workout to midnight bottle service — D' Valley's is engineered for the full spectrum of a modern lifestyle.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div><div className="font-serif text-4xl text-amber-glow">5</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Pillars</div></div>
              <div><div className="font-serif text-4xl text-amber-glow">48h</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Reply</div></div>
              <div><div className="font-serif text-4xl text-amber-glow">3′</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">VIP Service</div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
