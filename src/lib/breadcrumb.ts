const BASE = "https://global-saffron-gate.lovable.app";

export function breadcrumbJsonLd(trail: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${BASE}${t.path}`,
    })),
  };
}

export function breadcrumbScript(trail: Array<{ name: string; path: string }>) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, ...trail])),
  };
}
