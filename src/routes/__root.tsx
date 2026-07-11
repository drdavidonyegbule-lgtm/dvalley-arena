import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
// lovable-error-reporting removed
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif text-amber-glow">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This page doesn't exist or has been moved.</p>
        <div className="mt-6">
          <Link to="/" className="btn-amber btn-amber-hover">Return home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    console.error("Root error:", error);
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-amber btn-amber-hover">Try again</button>
          <a href="/" className="btn-amber btn-amber-hover">Go home</a>
        </div>
      </div>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["NightClub", "Restaurant", "BarOrPub", "HealthClub"],
      "name": "D' Valley's Arena",
      "description": "A premier multi-concept lifestyle destination featuring hospitality, entertainment, fitness, nightlife, and lounge.",
      "servesCuisine": "International, Nigerian",
      "priceRange": "$$$",
      "url": "https://dvalleysarena.com",
      "telephone": "+2349067527359",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 3 Pius Akere Street, Munna-Bori, Off Akanto Street",
        "addressLocality": "Bori",
        "addressRegion": "Rivers State",
        "addressCountry": "NG"
      },
      "slogan": "Where great taste meets precious moments together.",
      "sameAs": ["https://www.instagram.com/dvalleyarena"]
    },
    {
      "@type": "Organization",
      "name": "D' Valley's Arena",
      "url": "https://dvalleysarena.com",
      "telephone": "+2349067527359",
      "sameAs": ["https://www.instagram.com/dvalleyarena"]
    }
  ]
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "D' Valley's Arena — Welcome to the Family" },
      { name: "description", content: "A premier multi-concept lifestyle destination. Hospitality, entertainment, fitness, nightlife and lounge for global trendsetters." },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:site_name", content: "D' Valley's Arena" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "D' Valley's Arena — Welcome to the Family" },
      { property: "og:description", content: "A premier multi-concept lifestyle destination. Hospitality, entertainment, fitness, nightlife and lounge for global trendsetters." },
      { name: "robots", content: "index, follow" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "D' Valley's Arena — Welcome to the Family" },
      { name: "twitter:description", content: "A premier multi-concept lifestyle destination. Hospitality, entertainment, fitness, nightlife and lounge for global trendsetters." },
      { property: "og:image", content: "https://dvalleysarena.com/og-image.png" },
      { name: "twitter:image", content: "https://dvalleysarena.com/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}
