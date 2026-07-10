import { Link } from "@tanstack/react-router";
const logo = { url: "https://dvalley-arena.lovable.app/__l5e/assets-v1/7356f974-89dc-4c61-ace3-585f608c1cd8/dvalleys-logo-clean.png" };
import { Instagram, MapPin } from "lucide-react";

// Simple TikTok glyph (lucide has no official icon in this version)
function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.6 6.8a5.6 5.6 0 0 1-3.4-1.2 5.6 5.6 0 0 1-2.1-3.4h-3.3v13.4a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V9.6a6 6 0 0 0-.8-.1 6 6 0 1 0 6 6V9.1a8.8 8.8 0 0 0 5.5 1.9V7.7c-.1 0-.1-.1 0-.9z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="section-dark border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo.url} alt="D' Valley's Arena" style={{ height: 88, width: "auto" }} className="mb-6" />
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            A premier multi-concept lifestyle destination. Hospitality, entertainment, fitness, nightlife and lounge — under one roof.
          </p>
          <address className="not-italic mt-6 flex gap-3 items-start text-sm text-white/80 max-w-sm">
            <MapPin size={16} className="text-amber-glow shrink-0 mt-0.5" />
            <span>D' Valley's Arena, No. 3 Pius Akere Street, Munna-Bori, Off Akanto Street, Bori, Rivers State.</span>
          </address>
          <p className="text-xs tracking-[0.3em] uppercase text-amber-glow mt-6">Pour · Sip · Stir · Remember</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/events" className="hover:text-amber-glow transition-colors">Events</Link></li>
            <li><Link to="/menu" className="hover:text-amber-glow transition-colors">Menu</Link></li>
            <li><Link to="/about" className="hover:text-amber-glow transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-amber-glow transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">Connect</h4>
          <div className="flex gap-3">
            <a href="https://instagram.com/dvalleyarena" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/15 grid place-items-center hover:border-amber-glow hover:text-amber-glow transition-colors"><Instagram size={16} /></a>
            <a href="https://tiktok.com/@dvalleyarena" aria-label="TikTok" className="w-9 h-9 rounded-full border border-white/15 grid place-items-center hover:border-amber-glow hover:text-amber-glow transition-colors"><TikTokIcon size={16} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} VGP Media Technologies. All rights reserved.</span>
          <span>Trendsetters aged 18–35 · Global family</span>
        </div>
      </div>
    </footer>
  );
}
