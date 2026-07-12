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
      "@id": "https://dvalleysarena.com/#business",
      "name": "D' Valley's Arena",
      "alternateName": "DValleys Arena",
      "description": "D' Valley's Arena is Bori's premier multi-concept lifestyle destination featuring signature drinks, gourmet meals, a platinum fitness area, velvet nightclub, and premium lounge. Located at No. 3 Pius Akere Street, Bori, Rivers State, Nigeria.",
      "servesCuisine": ["Nigerian", "Continental", "International"],
      "priceRange": "$$$",
      "url": "https://dvalleysarena.com",
      "telephone": "+2349067527359",
      "email": "concierge@dvalleysarena.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 3 Pius Akere Street, Munna-Bori, Off Akanto Street",
        "addressLocality": "Bori",
        "addressRegion": "Rivers State",
        "addressCountry": "NG",
        "postalCode": "500261"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 4.6977,
        "longitude": 7.3586
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "17:00",
          "closes": "02:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Friday", "Saturday"],
          "opens": "17:00",
          "closes": "04:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "14:00",
          "closes": "00:00"
        }
      ],
      "hasMap": "https://maps.google.com/?q=No.+3+Pius+Akere+Street+Bori+Rivers+State+Nigeria",
      "image": "https://dvalleysarena.com/og-image.png",
      "logo": "https://dvalleysarena.com/dvalleys-logo-clean.png",
      "slogan": "Where great taste meets precious moments together.",
      "currenciesAccepted": "NGN",
      "paymentAccepted": "Cash, Transfer",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "VIP Bottle Service", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Live DJ", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Fitness Gym", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Arena Turf", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Outdoor Lounge", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Food Delivery", "value": true }
      ],
      "sameAs": [
        "https://www.instagram.com/dvalleyarena"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://dvalleysarena.com/#organization",
      "name": "D' Valley's Arena",
      "url": "https://dvalleysarena.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dvalleysarena.com/dvalleys-logo-clean.png",
        "width": 400,
        "height": 400
      },
      "telephone": "+2349067527359",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 3 Pius Akere Street, Munna-Bori, Off Akanto Street",
        "addressLocality": "Bori",
        "addressRegion": "Rivers State",
        "addressCountry": "NG"
      },
      "sameAs": [
        "https://www.instagram.com/dvalleyarena"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is D' Valley's Arena located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "D' Valley's Arena is located at No. 3 Pius Akere Street, Munna-Bori, Off Akanto Street, Bori, Rivers State, Nigeria. Call 0906 752 7359 for directions."
          }
        },
        {
          "@type": "Question",
          "name": "What is D' Valley's Arena?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "D' Valley's Arena is a premier multi-concept lifestyle destination in Bori, Rivers State. It features five pillars: a premium lounge, velvet nightclub, platinum fitness area, gourmet restaurant, and live entertainment programming every week."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book a VIP table at D' Valley's Arena?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a VIP table at D' Valley's Arena by calling 0906 752 7359, messaging on WhatsApp at the same number, or submitting an inquiry at dvalleysarena.com/contact. All bookings are confirmed within 48 hours."
          }
        },
        {
          "@type": "Question",
          "name": "What events does D' Valley's Arena host weekly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "D' Valley's Arena hosts weekly events including Ladies' Night every Wednesday, Bottle Tuesday, Fitness Challenges on Thursdays, Happy Hours on Fridays, and The Main Room DJ residency every Saturday night."
          }
        },
        {
          "@type": "Question",
          "name": "Does D' Valley's Arena offer food delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. D' Valley's Arena offers home delivery and pickup across Rivers State. Order via WhatsApp on 0707 346 0398 and your order will be dispatched within the hour in D' Valley's branded packaging."
          }
        },
        {
          "@type": "Question",
          "name": "What food does D' Valley's Arena serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "D' Valley's Arena serves Nigerian and continental cuisine including Afang soup, Egusi, Native soup, Seafood Okro, Jollof rice, DVA Special Rice, Nkwobi, Isi Ewu, grilled proteins, and a full bar with cocktails, wines, spirits, milkshakes, and smoothies."
          }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://dvalleysarena.com/#website",
      "url": "https://dvalleysarena.com",
      "name": "D' Valley's Arena",
      "description": "Official website of D' Valley's Arena — Bori's premier lifestyle destination.",
      "publisher": {
        "@id": "https://dvalleysarena.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://dvalleysarena.com/menu"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "D' Valley's Arena — Premium Lounge, Nightclub & Lifestyle Destination in Bori, Rivers State" },
      { name: "description", content: "D' Valley's Arena is Bori's premier multi-concept lifestyle destination. Signature drinks, gourmet meals, platinum fitness, velvet nightclub, and lounge. No. 3 Pius Akere Street, Bori, Rivers State. Call 0906 752 7359." },
      { name: "keywords", content: "D Valley's Arena, lounge Bori Rivers State, nightclub Bori, restaurant Bori, fitness gym Bori, lifestyle destination Rivers State, premium lounge Port Harcourt, VIP Bori" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "D' Valley's Arena" },
      { property: "og:site_name", content: "D' Valley's Arena" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "D' Valley's Arena — Welcome to the Family" },
      { property: "og:description", content: "A premier multi-concept lifestyle destination. Hospitality, entertainment, fitness, nightlife and lounge in Bori, Rivers State." },
      { property: "og:image", content: "https://dvalleysarena.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "D' Valley's Arena — Bori's premier lifestyle destination" },
      { property: "og:locale", content: "en_NG" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "D' Valley's Arena — Welcome to the Family" },
      { name: "twitter:description", content: "A premier multi-concept lifestyle destination. Hospitality, entertainment, fitness, nightlife and lounge in Bori, Rivers State." },
      { name: "twitter:image", content: "https://dvalleysarena.com/og-image.png" },
      { name: "twitter:image:alt", content: "D' Valley's Arena — Bori's premier lifestyle destination" },
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
