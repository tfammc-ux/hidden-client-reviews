import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://hidden-client-reviews.lovable.app";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b29b3eb2-1838-4ab3-a121-8af9d78cf8f1/id-preview-005926cb--2f0cf106-a84d-4d3e-86c7-eb3acecb7917.lovable.app-1777392947185.png";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cliente Oculto — Avaliações Google reais para o seu negócio" },
      { name: "description", content: "Avaliações Google 100% reais escritas por contas portuguesas. Pacotes desde 300€, sem mensalidades. Garantia de entrega ou devolução total." },
      { name: "author", content: "Cliente Oculto" },
      { name: "keywords", content: "avaliações Google, reviews Google, comprar avaliações Google, reputação online, marketing digital Portugal, reviews reais, cliente oculto" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:site_name", content: "Cliente Oculto" },
      { property: "og:locale", content: "pt_PT" },
      { property: "og:title", content: "Cliente Oculto — Avaliações Google reais para o seu negócio" },
      { property: "og:description", content: "Avaliações Google 100% reais escritas por contas portuguesas. Pacotes desde 300€, sem mensalidades. Garantia de entrega ou devolução total." },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cliente Oculto — Avaliações Google reais para o seu negócio" },
      { name: "twitter:description", content: "Avaliações Google 100% reais escritas por contas portuguesas. Pacotes desde 300€, sem mensalidades." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;900&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Cliente Oculto",
          description: "Serviço português de avaliações Google reais para aumentar a reputação online de negócios locais.",
          url: SITE_URL,
          image: OG_IMAGE,
          telephone: "+351930918066",
          priceRange: "€€",
          areaServed: "PT",
          address: { "@type": "PostalAddress", addressCountry: "PT" },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "120",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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
  return <Outlet />;
}
