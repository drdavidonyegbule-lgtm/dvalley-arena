import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Wine, Dumbbell, Music4, Coffee } from "lucide-react";
const building = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/442a384a-4e01-48fe-85c5-fe47e4808f5f/dvalleys-building.png" };
const dining = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/a5c22cb1-d315-4620-a711-329e55e6fe59/dining.png" };
const festival = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/c9d82373-9520-43b3-a108-a386037effe9/lounge.jpg" }; // festival crowd (men laughing)
const poolside = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/d86370a9-0ab9-4eb6-b370-e0084058ffa8/poolside.jpg" };
const nightlife = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/89c5911b-0210-4197-bd66-146710ad303e/nightlife.jpg" };
const lounge = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/72dda1b8-4299-4339-940e-55ea45f26251/lounge-friends.jpg" };
const cocktails = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/64a568b5-5cd7-4d4e-b5dc-298bf4255c30/cocktails.jpg" };
const diningSocial = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/a91d0070-d63e-4acc-bef5-cef3d849210f/dining-social.jpg" };
const friends = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/737df65f-fe06-4b23-a8c6-e3934f85bbd7/logo.png" };
const gym = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/1c22a520-4399-4830-99c0-981626d39d1c/gym.png" };
const brandLogo = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/7356f974-89dc-4c61-ace3-585f608c1cd8/dvalleys-logo-clean.png" };
const scene25 = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/1f436418-048a-4402-ad3d-8b00972567e7/scene-25.jpg" };
const scene21 = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/32f7e4e0-a718-4a04-8514-4e43c9c53c95/scene-21.jpg" };
const scene23 = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/d459f8ce-5990-45aa-a54d-08b406aa5958/scene-23.jpg" };
const scene30 = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/c510d8ce-3d1b-469c-b008-12321cec87c0/scene-30.jpg" };
const scene33 = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/73cdeb48-1bbd-4a16-8888-559cb8cac57e/scene-33.jpg" };
const scene34 = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/62def491-c076-4e50-9e54-a352e8cb2095/scene-34.jpg" };
const scene37 = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/3704806a-e914-4d46-bbcb-98b348c7a048/scene-37.jpg" };
const gymHex = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/7cff63e4-308d-442c-a58c-cb72abc28c2d/gym-hex.jpg" };
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "D' Valley's Arena — Welcome to the Family" },
      { name: "description", content: "A premier multi-concept lifestyle destination. Hospitality, entertainment, fitness, nightlife and lounge for global trendsetters." },
      { property: "og:title", content: "D' Valley's Arena — Welcome to the Family" },
      { property: "og:description", content: "A premier multi-concept lifestyle destination. Hospitality, entertainment, fitness, nightlife and lounge for global trendsetters." },
      { property: "og:url", content: "https://dvalleysarena.com/" },
    ],
    links: [{ rel: "canonical", href: "https://dvalleysarena.com/" }],
  }),
  component: HomePage,
});

const heroSlides = [
  { img: building.url, tag: "The Arena" },
  { img: scene25.url, tag: "D' Valley's Club" },
  { img: dining.url, tag: "Hospitality" },
  { img: festival.url, tag: "Entertainment" },
  { img: poolside.url, tag: "Lounge" },
];


const pillars = [
  { title: "Hospitality", copy: "Seamless, luxury-grade service delivery.", img: dining.url, icon: Coffee },
  { title: "Entertainment", copy: "Immersive, high-energy programming every week.", img: festival.url, icon: Sparkles },
  { title: "Gym & Fitness", copy: "Premium fitness environment with expert coaching.", img: gym.url, icon: Dumbbell },
  { title: "Clubbing & Nightlife", copy: "Electrifying atmosphere with world-class DJs.", img: nightlife.url, icon: Music4 },
  { title: "Lounge", copy: "Sophisticated, relaxed ambiance for every occasion.", img: lounge.url, icon: Wine },
];

const gallery = [
  scene21.url, scene23.url, scene30.url, scene33.url, scene34.url, scene37.url,
  poolside.url, cocktails.url, diningSocial.url, friends.url, festival.url, nightlife.url, gymHex.url,
];


function HomePage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={s.img}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${i === idx ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.img} alt={s.tag} className="absolute inset-0 w-full h-full object-cover slow-zoom" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
          </div>
        ))}

        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-6 pb-24">
          <span key={idx} className="text-[0.7rem] tracking-[0.5em] uppercase text-amber-glow mb-6 fade-up">
            — {heroSlides[idx].tag} —
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.05] max-w-5xl fade-up">
            Welcome to <br className="hidden md:block" />
            <em className="not-italic text-amber-glow">the Family.</em>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl font-light fade-up">
            Where great taste meets precious moments together.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 fade-up">
            <Link to="/contact" className="btn-amber btn-amber-hover">Secure Access</Link>
            <Link to="/menu" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/80 hover:text-amber-glow transition-colors">
              Explore Menu <ArrowRight size={16} />
            </Link>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-[2px] transition-all duration-500 ${i === idx ? "w-10 bg-amber-glow" : "w-6 bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section-dark py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-amber-glow">The Five Pillars</span>
              <h2 className="mt-3 font-serif text-4xl md:text-6xl text-white">One destination.<br/>Five worlds.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              A multi-concept lifestyle brand engineered around five signature experiences. Move seamlessly from workout to dinner to dance floor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {pillars.map((p, i) => (
              <article
                key={p.title}
                className={`group relative overflow-hidden rounded-sm border border-white/10 bg-card ${
                  i === 0 ? "md:col-span-3 md:row-span-2 aspect-[4/5]" :
                  i === 1 ? "md:col-span-3 aspect-[16/9]" :
                  i === 2 ? "md:col-span-2 aspect-square" :
                  i === 3 ? "md:col-span-2 aspect-square" :
                  "md:col-span-2 aspect-square"
                }`}
              >
                <img src={p.img} alt={p.title} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${p.title === "Gym & Fitness" ? "brightness-75" : ""}`} />
                <div className="absolute inset-0 vignette-bottom" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <p.icon size={16} className="text-amber-glow" />
                    <span className="text-[0.65rem] tracking-[0.35em] uppercase text-amber-glow">Pillar 0{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-white/75 max-w-xs">{p.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-24 md:py-32 border-y border-border">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-amber-glow">The Manifesto</span>
          <p className="mt-6 font-serif text-3xl md:text-5xl text-white leading-tight">
            "Every guest deserves to feel valued, seen, and genuinely welcomed. We deliver world-class facilities and a culture of hospitality that makes every guest feel like a <em className="text-amber-glow not-italic">KING</em>."
          </p>
        </div>
      </section>

      {/* SOCIAL PROOF MARQUEE */}
      <section className="section-dark py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-10 flex items-end justify-between">
          <h2 className="font-serif text-3xl md:text-5xl text-white">The Scene</h2>
          <span className="text-xs tracking-[0.4em] uppercase text-white/50">#DValleysFamily</span>
        </div>
        <div className="flex marquee gap-4 w-max">
          {[...gallery, ...gallery].map((src, i) => (
            <div key={i} className="w-[300px] h-[380px] shrink-0 overflow-hidden rounded-sm border border-white/10">
              <img src={src} alt="D' Valley's scene" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <img src={dining.url} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-white">Reserve your seat<br/>at the family table.</h2>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">Private bookings, VIP tables, and custom proposals are prepared and shared within 48 hours.</p>
          <div className="mt-10">
            <Link to="/contact" className="btn-amber btn-amber-hover">Secure Access</Link>
          </div>
        </div>
      </section>

      {/* BRAND MARK CLOSER */}
      <section className="bg-black py-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 flex flex-col items-center text-center gap-6">
          <img
            src={brandLogo.url}
            alt="D' Valley's Arena"
            className="w-[280px] md:w-[420px] h-auto object-contain"
          />
          <p className="text-xs tracking-[0.5em] uppercase text-amber-glow">Pour · Sip · Stir · Remember</p>
          <p className="text-sm text-muted-foreground max-w-md">
            D' Valley's Arena · No. 3 Pius Akere Street, Munna-Bori, Off Akanto Street, Bori, Rivers State.
          </p>
        </div>
      </section>
    </>
  );
}
