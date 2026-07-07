import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/dvalleys-logo-clean.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/70 border-b border-border" : "backdrop-blur-sm bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="D' Valley's Arena"
            style={{ height: 88, width: "auto", objectFit: "contain" }}
            className="md:h-[104px]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-1.5 backdrop-blur-xl">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-white/70 transition-colors hover:text-amber-glow"
              activeProps={{ className: "rounded-full px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-amber-glow bg-white/5" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden md:inline-flex btn-amber btn-amber-hover !py-2 !px-5 !text-[0.7rem]">
          Book
        </Link>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-black/95 backdrop-blur-xl">
          <nav className="flex flex-col p-6 gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm tracking-widest uppercase text-white/80"
                activeProps={{ className: "text-sm tracking-widest uppercase text-amber-glow" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
