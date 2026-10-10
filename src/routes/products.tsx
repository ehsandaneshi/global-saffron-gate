import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbScript } from "@/lib/breadcrumb";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PageShell, PageHeader } from "@/components/PageShell";
const stickAsset = { url: "/images/products/sigol-stick-nabat.jpeg" };
const branchAsset = { url: "/images/products/sigol-branch.jpeg" };
const damaskRoseAsset = { url: "/images/products/sigol-damask-rose.png" };
const roseAsset = { url: "/images/products/sigol-rose.jpeg" };
const lemonVerbenaAsset = { url: "/images/products/sigol-lemon-verbena.jpeg" };
const cinnamonAsset = { url: "/images/products/sigol-cinnamon.jpeg" };
const gingerAsset = { url: "/images/products/sigol-ginger.jpeg" };
const mintAsset = { url: "/images/products/sigol-mint.jpeg" };
const orangeBlossomAsset = { url: "/images/products/sigol-orange-blossom.jpeg" };
const hibiscusAsset = { url: "/images/products/sigol-hibiscus.jpeg" };
const cardamomAsset = { url: "/images/products/sigol-cardamom.jpeg" };
const saffronFlavorAsset = { url: "/images/products/sigol-saffron.jpeg" };
import { cn } from "@/lib/utils";

type Product = {
  name: string;
  cat: "stick" | "branch" | "flavored";
  brand: string;
  img: string;
  pack: string;
  desc: string;
  nameKey?: "cat_stick_nabat" | "cat_branch_nabat";
  flavorKey?:
    | "flavor_damask_rose" | "flavor_rose" | "flavor_lemon_verbena" | "flavor_cinnamon"
    | "flavor_ginger" | "flavor_mint" | "flavor_orange_blossom" | "flavor_hibiscus"
    | "flavor_cardamom" | "flavor_saffron";
};

const products: Product[] = [
  {
    name: "Stick Nabat — نبات چوبی",
    nameKey: "cat_stick_nabat",
    cat: "stick",
    brand: "Sigol",
    img: stickAsset.url,
    pack: "12pcs · 24pcs · 48pcs · Bulk",
    desc: "نبات چوبی سی گل — Persian stick rock candy (nabat chubi), crystallized on wooden sticks, ideal for tea service, HORECA and gift packs.",
  },
  {
    name: "Branch Nabat — نبات شاخه",
    nameKey: "cat_branch_nabat",
    cat: "branch",
    brand: "Sigol",
    img: branchAsset.url,
    pack: "250g · 500g · 1kg · 25kg bulk",
    desc: "نبات شاخه سی گل — Persian branch rock candy (nabat shakhe), naturally crystallized golden sugar branches for retail and bulk export.",
  },
  { name: "Flavored Nabat — Damask Rose", flavorKey: "flavor_damask_rose", cat: "flavored", brand: "Dorsin", img: damaskRoseAsset.url, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار گل محمدی — Flavored Persian nabat with Damask rose." },
  { name: "Flavored Nabat — Rose", flavorKey: "flavor_rose", cat: "flavored", brand: "Dorsin", img: roseAsset.url, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار گل رز — Flavored Persian nabat with rose." },
  { name: "Flavored Nabat — Lemon Verbena", flavorKey: "flavor_lemon_verbena", cat: "flavored", brand: "Dorsin", img: lemonVerbenaAsset.url, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار به لیمو — Flavored Persian nabat with lemon verbena." },
  { name: "Flavored Nabat — Cinnamon", flavorKey: "flavor_cinnamon", cat: "flavored", brand: "Dorsin", img: cinnamonAsset.url, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار دارچین — Flavored Persian nabat with cinnamon." },
  { name: "Flavored Nabat — Ginger", flavorKey: "flavor_ginger", cat: "flavored", brand: "Dorsin", img: gingerAsset.url, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار زنجبیل — Flavored Persian nabat with ginger." },
  { name: "Flavored Nabat — Mint", flavorKey: "flavor_mint", cat: "flavored", brand: "Dorsin", img: mintAsset.url, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار نعنا — Flavored Persian nabat with mint." },
  { name: "Flavored Nabat — Orange Blossom", flavorKey: "flavor_orange_blossom", cat: "flavored", brand: "Manbod", img: orangeBlossomAsset.url, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار بهارنارنج — Flavored Persian nabat with orange blossom." },
  { name: "Flavored Nabat — Hibiscus", flavorKey: "flavor_hibiscus", cat: "flavored", brand: "Manbod", img: hibiscusAsset.url, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار چای ترش — Flavored Persian nabat with hibiscus." },
  { name: "Flavored Nabat — Cardamom", flavorKey: "flavor_cardamom", cat: "flavored", brand: "Manbod", img: cardamomAsset.url, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار هل — Flavored Persian nabat with cardamom." },
  { name: "Flavored Nabat — Saffron", flavorKey: "flavor_saffron", cat: "flavored", brand: "Sigol", img: saffronFlavorAsset.url, pack: "150g · 300g · 500g · Bulk", desc: "نبات طعم‌دار زعفران — Flavored Persian nabat with premium Sargol saffron." },
];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "محصولات نبات چوبی، شاخه و طعم‌دار | سی گل" },
      { name: "description", content: "کاتالوگ محصولات سی گل در سه دسته: نبات چوبی، نبات شاخه و نبات طعم‌دار با ۱۰ طعم. Persian rock candy for wholesale and export." },
      { name: "keywords", content: "نبات, نبات چوبی, نبات شاخه, نبات طعم دار, نبات زعفران, نبات گل محمدی, نبات هل, نبات دارچین, نبات نعنا, نبات بهارنارنج, نبات چای ترش, نبات زنجبیل, نبات به لیمو, زعفران ایرانی, شیرینی سنتی, خرید عمده نبات, stick nabat, branch nabat, flavored nabat, Persian rock candy, saffron nabat" },
      { property: "og:title", content: "محصولات نبات سی گل — Stick, Branch, Crystal & Flavored Nabat" },
      { property: "og:description", content: "سه دسته اصلی محصولات سی گل: نبات چوبی، نبات شاخه و نبات طعم‌دار با ۱۰ طعم." },
      { property: "og:url", content: "https://global-saffron-gate.lovable.app/products" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://global-saffron-gate.lovable.app/products" }],
    scripts: [
      breadcrumbScript([{ name: "Products", path: "/products" }]),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Sigol Factory — Stick Nabat, Branch Nabat & Flavored Nabat",
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
              manufacturer: { "@type": "Organization", name: "Sigol Factory" },
              countryOfOrigin: "IR",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "USD",
                seller: { "@type": "Organization", name: "Sigol Factory" },
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
  { id: "stick", k: "cat_stick_nabat" as const },
  { id: "branch", k: "cat_branch_nabat" as const },
  { id: "flavored", k: "cat_flavored_nabat" as const },
];

function ProductsPage() {
  const { t } = useI18n();
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? products : products.filter((p) => p.cat === filter);
  return (
    <PageShell>
      <PageHeader eyebrow={t("nav_products")} title={t("page_products_title")} lead={t("page_products_lead")} />
      <section className="py-12 md:py-20 container-page luxury-reveal">
        <div className="flex flex-wrap gap-2 rounded-lg border border-border/70 bg-card/65 p-2 shadow-[var(--shadow-soft)] backdrop-blur">
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
          {filtered.map((p) => {
            const title = p.nameKey
              ? t(p.nameKey)
              : `${t("cat_flavored_nabat")} — ${p.flavorKey ? t(p.flavorKey) : p.name}`;
            return (
               <article key={p.name} className="surface-card ornamental-border overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                   <img src={p.img} alt={title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-extrabold">{title}</h3>
                  <a href="/#inquiry" className="mt-3 inline-flex text-sm font-semibold text-[color:var(--saffron-deep)] transition-colors hover:text-primary">{t("cta_buy_export")} →</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
