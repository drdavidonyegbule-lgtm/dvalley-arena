import { createFileRoute } from "@tanstack/react-router";
import { Crown, Clock, Users, Sparkles } from "lucide-react";
import festival from "@/assets/lounge.jpg.asset.json";
import nightlife from "@/assets/nightlife.jpg.asset.json";
import turf from "@/assets/turf.png.asset.json";
import gym from "@/assets/gym.png.asset.json";
import sipPaint from "@/assets/sip-paint.png.asset.json";
import clubLogo from "@/assets/club-logo-clean.png.asset.json";
import heroVideo from "@/assets/events-hero.mp4.asset.json";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Lifestyle — D' Valley's Arena" },
      { name: "description", content: "Ladies' Nights, football on the arena turf, fitness challenges, Sip & Paint evenings and VIP nightlife at D' Valley's Arena." },
      { property: "og:title", content: "Events at D' Valley's Arena" },
      { property: "og:description", content: "Immersive, high-energy programming every week." },
      { property: "og:url", content: "/events" },
      { property: "og:image", content: festival.url },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

const weekly = [
  { day: "Mon", title: "Recovery Sessions", tag: "Fitness", copy: "Guided cool-downs, mobility & recovery classes in the arena studio.", time: "6:00 PM" },
  { day: "Tue", title: "Bottle Tuesday", tag: "Nightlife", copy: "Curated pours, half-price premium bottles for the early set.", time: "9:00 PM" },
  { day: "Wed", title: "Ladies' Night", tag: "Signature", copy: "Complimentary cocktail flight, guest DJs and open-terrace lounge.", time: "8:00 PM" },
  { day: "Thu", title: "Fitness Challenges", tag: "Fitness", copy: "Prize-winning strength & endurance nights coached by our elite team.", time: "7:00 PM" },
  { day: "Fri", title: "Happy Hours", tag: "Lounge", copy: "Two-for-one signatures, small plates and rooftop sunset vibes.", time: "5:00 PM" },
  { day: "Sat", title: "The Main Room", tag: "Nightlife", copy: "Headline DJ residency, bottle service and confetti drop at midnight.", time: "10:00 PM" },
];

const experiences = [
  {
    img: turf.url,
    tag: "The Arena Turf",
    title: "Night football, floodlights on.",
    copy: "Full-size, tournament-grade 5-a-side pitch under stadium lighting. Book leagues, private matches, or drop-in for open sessions.",
    span: "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    img: gym.url,
    tag: "The Fitness Zone",
    title: "Hexagon-lit performance floor.",
    copy: "Signature hexagonal ceiling, full rack of Olympic weights, and coach-led programming built for the family.",
    span: "md:col-span-2 aspect-[16/10]",
  },
  {
    img: sipPaint.url,
    tag: "Sip & Paint Evenings",
    title: "Community, canvases & cocktails.",
    copy: "Monthly guided painting nights with signature cocktails, roses on every table, and easels for every guest.",
    span: "md:col-span-2 aspect-[16/10]",
  },
];

function EventsPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <video
          src={heroVideo.url}
          autoPlay
          loop
          muted
          playsInline
          poster={festival.url}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-20 pt-32">
          <span className="text-xs tracking-[0.5em] uppercase text-amber-glow mb-4">Weekly Programming</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight max-w-4xl">High-energy nights.<br/><em className="text-amber-glow not-italic">Every single week.</em></h1>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-white">This Week</h2>
            <span className="text-xs tracking-[0.4em] uppercase text-white/50">7 Days · 7 Vibes</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {weekly.map((e) => (
              <article key={e.day} className="group relative overflow-hidden rounded-sm border border-white/10 bg-card p-8 transition-all hover:border-amber-glow">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="font-serif text-6xl text-amber-glow leading-none">{e.day}</div>
                    <span className="text-[0.65rem] tracking-[0.35em] uppercase text-white/50 mt-2 block">{e.tag}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-white/60"><Clock size={12} />{e.time}</div>
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Experience Grid */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <span className="text-xs tracking-[0.4em] uppercase text-amber-glow">The Experience Grid</span>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl text-white leading-tight">More than a venue.<br/>A lifestyle campus.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4 md:auto-rows-[220px]">
            {experiences.map((x) => (
              <article key={x.tag} className={`group relative overflow-hidden rounded-sm border border-white/10 ${x.span}`}>
                <img src={x.img} alt={x.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 vignette-bottom" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-[0.65rem] tracking-[0.35em] uppercase text-amber-glow">{x.tag}</span>
                  <h3 className="mt-2 font-serif text-2xl md:text-3xl text-white">{x.title}</h3>
                  <p className="mt-2 text-sm text-white/75 max-w-md">{x.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nightlife Curation — VIP */}
      <section className="section-dark py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          {/* Club sub-brand header */}
          <div className="flex flex-col items-center text-center mb-16">
            <img
              src={clubLogo.url}
              alt="D' Valley's Club"
              className="h-28 w-28 md:h-36 md:w-36 object-contain invert"
            />
            <span className="mt-6 text-xs tracking-[0.5em] uppercase text-amber-glow">Nightlife Curation</span>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl text-white leading-tight">D' Valley's Club<br/>after dark.</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-amber-glow/40">
              <img src={nightlife.url} alt="VIP bottle service" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full border border-amber-glow bg-black/60 px-3 py-1.5 backdrop-blur">
                <Crown size={14} className="text-amber-glow" />
                <span className="text-[0.65rem] tracking-[0.35em] uppercase text-amber-glow">Gold Tag</span>
              </div>
            </div>
            <div>
              <span className="text-xs tracking-[0.4em] uppercase text-amber-glow">VIP Protocol</span>
              <h3 className="mt-3 font-serif text-4xl md:text-5xl text-white leading-tight">The VIP Experience.</h3>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                VIP guests are flagged in our booking system with a gold tag. Enjoy a dedicated host, pre-set curated tables, and a guaranteed 3-minute service response time.
              </p>
              <div className="mt-10 grid gap-4">
                {[
                  { icon: Crown, label: "Dedicated Host", copy: "One-to-one concierge from arrival to departure." },
                  { icon: Sparkles, label: "Curated Tables", copy: "Pre-set with your signature spirits and bespoke garnishes." },
                  { icon: Clock, label: "3-Minute Service", copy: "Guaranteed response window on every request, every time." },
                  { icon: Users, label: "Family Access", copy: "Priority reservations across all five pillars." },
                ].map((f) => (
                  <div key={f.label} className="flex gap-4 p-5 rounded-sm border border-white/10 bg-card hover:border-amber-glow/50 transition-colors">
                    <div className="shrink-0 w-10 h-10 rounded-full border border-amber-glow/50 grid place-items-center text-amber-glow"><f.icon size={16}/></div>
                    <div>
                      <div className="text-white font-medium">{f.label}</div>
                      <div className="text-sm text-muted-foreground">{f.copy}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/contact" className="btn-amber btn-amber-hover mt-10">Request VIP Access</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
