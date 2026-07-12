import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
const logo = { url: "/dvalleys-logo-clean.png" };
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Clock, MapPin, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Bookings — D' Valley's Arena | Bori, Rivers State" },
      { name: "description", content: "Book a VIP table, private event, or lounge reservation at D' Valley's Arena, Bori, Rivers State. Call 0906 752 7359 or submit an inquiry. All bookings confirmed within 48 hours." },
      { name: "keywords", content: "book D Valley's Arena, VIP table Bori, private event Rivers State, lounge reservation Bori, contact D Valley's Arena" },
      { property: "og:title", content: "Contact & Bookings — D' Valley's Arena" },
      { property: "og:description", content: "Book a VIP table or private event at D' Valley's Arena, Bori, Rivers State. Response within 48 hours guaranteed." },
      { property: "og:url", content: "https://dvalleysarena.com/contact" },
      { property: "og:image", content: "https://dvalleysarena.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://dvalleysarena.com/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Phone required").max(30),
  tier: z.enum(["Hospitality", "Entertainment", "Gym", "Nightlife", "Lounge"]),
  details: z.string().trim().min(10, "Please share more detail").max(1500),
});

const tiers = ["Hospitality", "Entertainment", "Gym", "Nightlife", "Lounge"] as const;

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      tier: fd.get("tier"),
      details: fd.get("details"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Inquiry received — we'll respond within 48 hours.");
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
  };

  return (
    <>
      <Toaster />
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs tracking-[0.5em] uppercase text-amber-glow">Frictionless Access</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl text-white">Let's build the moment.</h1>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            All inquiries, private bookings and custom proposals are prepared and shared within 48 hours.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-10">
          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-sm border border-amber-glow/30 bg-card p-8 md:p-10">
            <div className="flex justify-center pb-8 border-b border-border mb-8">
              <img src={logo.url} alt="D' Valley's Arena" style={{ height: 80, width: "auto" }} className="opacity-95" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Your full name" required />
              <Field label="Email Address" name="email" type="email" placeholder="you@example.com" required />
              <Field label="Phone Number" name="phone" type="tel" placeholder="+234 000 000 0000" required />
              <div>
                <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-white/60 mb-2">Business Unit</label>
                <select
                  name="tier"
                  defaultValue="Hospitality"
                  className="w-full bg-input border border-border rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-glow transition-colors"
                >
                  {tiers.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-white/60 mb-2">Event Details</label>
              <textarea
                name="details"
                rows={6}
                maxLength={1500}
                placeholder="Date, party size, occasion, spirits preference, any special requests…"
                className="w-full bg-input border border-border rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-glow transition-colors resize-none"
                required
              />
            </div>

            <button type="submit" disabled={submitting} className="btn-amber btn-amber-hover mt-8 w-full disabled:opacity-60">
              {submitting ? "Sending…" : "Submit Inquiry"}
            </button>
          </form>

          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-sm border border-white/10 bg-card p-8">
              <h3 className="font-serif text-2xl text-white mb-4">Operations Status</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All inquiries, private bookings, and custom proposals are prepared and shared within 48 hours. Minimum booking lead times require <span className="text-amber-glow">7 days</span> for lounge/gym spaces and <span className="text-amber-glow">14 days</span> for full venue hire.
              </p>
            </div>

            {[
              { icon: Clock, title: "Response Window", copy: "48 hours — always." },
              { icon: MapPin, title: "Location", copy: "D' Valley's Arena, No. 3 Pius Akere Street, Munna-Bori, Off Akanto Street, Bori, Rivers State." },
              { icon: Mail, title: "Direct Line", copy: "0906 752 7359" },
            ].map((c) => (
              <div key={c.title} className="rounded-sm border border-white/10 bg-card p-6 flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full border border-amber-glow/40 grid place-items-center text-amber-glow"><c.icon size={16}/></div>
                <div>
                  <div className="text-white font-medium">{c.title}</div>
                  <div className="text-sm text-muted-foreground">{c.copy}</div>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-white/60 mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-input border border-border rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-amber-glow transition-colors"
      />
    </div>
  );
}
