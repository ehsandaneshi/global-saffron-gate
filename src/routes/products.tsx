import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PageShell, PageHeader } from "@/components/PageShell";
import heroImg from "@/assets/hero-saffron-nabat.jpg";
import productsImg from "@/assets/products-display.jpg";
import saffronImg from "@/assets/saffron-threads.jpg";
import factoryImg from "@/assets/factory-interior.jpg";
import { cn } from "@/lib/utils";

const products = [
  { name: "Premium Saffron Nabat", cat: "saffron", brand: "Seagol", img: heroImg, pack: "200g · 500g · 1kg · Bulk", desc: "نبات زعفرانی پریمیوم با زعفران سرگل ایرانی — Premium Persian saffron rock candy crafted from authentic Sargol saffron." },
  { name: "Crystal Nabat Classic", cat: "crystal", brand: "Manbod", img: productsImg, pack: "250g · 500g · 5kg", desc: "نبات کریستالی شفاف و خالص — Pure crystal Persian rock candy (nabat) for tea and traditional sweets." },
  { name: "Stick Nabat — Gift Box", cat: "stick", brand: "Seagol", img: productsImg, pack: "12pcs · 24pcs · 48pcs", desc: "نبات چوبی هدیه در جعبه پریمیوم — Saffron-infused stick nabat in luxury gift box, ideal for export." },
  { name: "Saffron Crystal Sticks", cat: "stick", brand: "Seagol", img: heroImg, pack: "10pcs · 20pcs", desc: "نبات چوبی زعفرانی — Saffron crystal sticks, hand-finished Persian confectionery." },
  { name: "Rose & Cardamom Nabat", cat: "flavored", brand: "Dorsin", img: saffronImg, pack: "150g · 300g", desc: "نبات طعم‌دار گل محمدی و هل — Flavored Persian rock candy with rose and cardamom." },
  { name: "Lemon & Mint Nabat", cat: "flavored", brand: "Dorsin", img: saffronImg, pack: "150g · 300g", desc: "نبات طعم‌دار لیمو و نعناع — Refreshing lemon and mint Persian sweets." },
  { name: "Bulk Saffron Nabat 25kg", cat: "bulk", brand: "Seagol", img: factoryImg, pack: "25kg sack · Container", desc: "نبات زعفرانی فله صادراتی — Bulk saffron nabat for wholesale and container export." },
  { name: "Luxury Gift Collection", cat: "gift", brand: "Seagol", img: productsImg, pack: "Wooden box · Premium", desc: "کلکسیون هدیه لوکس نبات و زعفران — Luxury wooden gift box with Persian saffron sweets." },
  { name: "Export Carton Pack", cat: "export", brand: "Manbod", img: factoryImg, pack: "Custom · OEM", desc: "بسته‌بندی صادراتی OEM و برند اختصاصی — OEM and private-label export carton packing." },
];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "محصولات: نبات زعفرانی، نبات چوبی، شیرینی سنتی و زعفران | کارخانه سیگل" },
      { name: "description", content: "کاتالوگ کامل محصولات سیگل: نبات زعفرانی، نبات چوبی، نبات شاخه‌ای، آبنبات طعم‌دار، نبات هدیه و بسته‌بندی صادراتی فله. Premium Persian saffron nabat, crystal candy, flavored sticks, gift packs and bulk export packaging." },
      { name: "keywords", content: "نبات, نبات زعفرانی, نبات چوبی, نبات شاخه ای, نبات کریستالی, آبنبات, شکرپنیر, نبات هدیه, نبات فله, زعفران ایرانی, شیرینی سنتی, خرید عمده نبات, saffron nabat, Persian rock candy, crystal sugar candy, saffron sticks, bulk nabat, wholesale Persian sweets, حلويات الزعفران, سكر نبات" },
      { property: "og:title", content: "محصولات نبات و زعفران سیگل — Seagol Products" },
      { property: "og:description", content: "کاتالوگ کامل نبات زعفرانی، نبات چوبی، شیرینی سنتی و بسته‌بندی صادراتی." },
      { property: "og:url", content: "https://global-saffron-gate.lovable.app/products" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://global-saffron-gate.lovable.app/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Seagol Factory — Persian Saffron Nabat, Crystal Candy & Traditional Sweets",
          url: "https://global-saffron-gate.lovable.app/products",
          numberOfItems: products.length,
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: p.name,
              description: p.desc,
              brand: { "@type": "Brand", name: p.brand },
              category: p.cat,
              image: `https://global-saffron-gate.lovable.app${p.img as unknown as string}`,
              manufacturer: { "@type": "Organization", name: "Seagol Factory" },
              countryOfOrigin: "IR",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "USD",
                seller: { "@type": "Organization", name: "Seagol Factory" },
                businessFunction: "https://schema.org/Sell",
                eligibleQuantity: { "@type": "QuantitativeValue", unitText: p.pack },
                url: "https://global-saffron-gate.lovable.app/export",
              },
            },
          })),
        }),
      },
    ],
  }),
  component: ProductsPage,
});

const cats = [
  { id: "all", k: "filter_all" as const },
  { id: "saffron", k: "cat_saffron_nabat" as const },
  { id: "crystal", k: "cat_crystal_nabat" as const },
  { id: "stick", k: "cat_stick_nabat" as const },
  { id: "flavored", k: "cat_flavored_nabat" as const },
  { id: "bulk", k: "cat_bulk" as const },
  { id: "gift", k: "cat_gift" as const },
  { id: "export", k: "cat_export" as const },
];

function ProductsPage() {
  const { t } = useI18n();
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? products : products.filter((p) => p.cat === filter);
  return (
    <PageShell>
      <PageHeader eyebrow={t("nav_products")} title={t("page_products_title")} lead={t("page_products_lead")} />
      <section className="py-12 container-page">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold transition",
                filter === c.id
                  ? "bg-[image:var(--gradient-saffron)] text-primary-foreground border-transparent"
                  : "border-border bg-card text-foreground/75 hover:border-[color:var(--saffron-deep)]",
              )}
            >
              {t(c.k)}
            </button>
          ))}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article key={p.name} className="surface-card overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--saffron-deep)]">{p.brand}</div>
                <h3 className="mt-1 font-display text-lg font-bold">{p.name}</h3>
                <div className="mt-3 text-xs text-muted-foreground">{p.pack}</div>
                <a href="/#inquiry" className="mt-4 inline-flex text-sm font-semibold text-[color:var(--saffron-deep)]">{t("cta_export_inquiry")} →</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
