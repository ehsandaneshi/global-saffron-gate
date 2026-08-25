import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbScript } from "@/lib/breadcrumb";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PageShell, PageHeader } from "@/components/PageShell";
import stickImg from "@/assets/nabat-stick.jpg";
import branchImg from "@/assets/nabat-branch.jpg";
import flavoredImg from "@/assets/nabat-flavored.jpg";
import floralImg from "@/assets/nabat-floral.jpg";
import herbalImg from "@/assets/nabat-herbal.jpg";
import saffronFlavorImg from "@/assets/nabat-saffron-flavor.jpg";
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
    img: stickImg,
    pack: "12pcs · 24pcs · 48pcs · Bulk",
    desc: "نبات چوبی سیگل — Persian stick rock candy (nabat chubi), crystallized on wooden sticks, ideal for tea service, HORECA and gift packs.",
  },
  {
    name: "Branch Nabat — نبات شاخه",
    nameKey: "cat_branch_nabat",
    cat: "branch",
    brand: "Sigol",
    img: branchImg,
    pack: "250g · 500g · 1kg · 25kg bulk",
    desc: "نبات شاخه سیگل — Persian branch rock candy (nabat shakhe), naturally crystallized golden sugar branches for retail and bulk export.",
  },
  { name: "Flavored Nabat — Damask Rose", flavorKey: "flavor_damask_rose", cat: "flavored", brand: "Dorsin", img: floralImg, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار گل محمدی — Flavored Persian nabat with Damask rose." },
  { name: "Flavored Nabat — Rose", flavorKey: "flavor_rose", cat: "flavored", brand: "Dorsin", img: floralImg, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار گل رز — Flavored Persian nabat with rose." },
  { name: "Flavored Nabat — Lemon Verbena", flavorKey: "flavor_lemon_verbena", cat: "flavored", brand: "Dorsin", img: herbalImg, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار به لیمو — Flavored Persian nabat with lemon verbena." },
  { name: "Flavored Nabat — Cinnamon", flavorKey: "flavor_cinnamon", cat: "flavored", brand: "Dorsin", img: herbalImg, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار دارچین — Flavored Persian nabat with cinnamon." },
  { name: "Flavored Nabat — Ginger", flavorKey: "flavor_ginger", cat: "flavored", brand: "Dorsin", img: herbalImg, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار زنجبیل — Flavored Persian nabat with ginger." },
  { name: "Flavored Nabat — Mint", flavorKey: "flavor_mint", cat: "flavored", brand: "Dorsin", img: herbalImg, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار نعنا — Flavored Persian nabat with mint." },
  { name: "Flavored Nabat — Orange Blossom", flavorKey: "flavor_orange_blossom", cat: "flavored", brand: "Manbod", img: floralImg, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار بهارنارنج — Flavored Persian nabat with orange blossom." },
  { name: "Flavored Nabat — Hibiscus", flavorKey: "flavor_hibiscus", cat: "flavored", brand: "Manbod", img: flavoredImg, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار چای ترش — Flavored Persian nabat with hibiscus." },
  { name: "Flavored Nabat — Cardamom", flavorKey: "flavor_cardamom", cat: "flavored", brand: "Manbod", img: flavoredImg, pack: "150g · 300g · 500g", desc: "نبات طعم‌دار هل — Flavored Persian nabat with cardamom." },
  { name: "Flavored Nabat — Saffron", flavorKey: "flavor_saffron", cat: "flavored", brand: "Sigol", img: saffronFlavorImg, pack: "150g · 300g · 500g · Bulk", desc: "نبات طعم‌دار زعفران — Flavored Persian nabat with premium Sargol saffron." },
];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "محصولات: نبات چوبی، نبات شاخه و نبات طعم‌دار | کارخانه سیگل" },
      { name: "description", content: "کاتالوگ محصولات سیگل در سه دسته: نبات چوبی، نبات شاخه و نبات طعم‌دار با طعم‌های گل محمدی، گل رز، به لیمو، دارچین، زنجبیل، نعنا، بهارنارنج، چای ترش، هل و زعفران. Persian stick nabat, branch nabat and flavored nabat for wholesale and export." },
      { name: "keywords", content: "نبات, نبات چوبی, نبات شاخه, نبات طعم دار, نبات زعفران, نبات گل محمدی, نبات هل, نبات دارچین, نبات نعنا, نبات بهارنارنج, نبات چای ترش, نبات زنجبیل, نبات به لیمو, زعفران ایرانی, شیرینی سنتی, خرید عمده نبات, stick nabat, branch nabat, flavored nabat, Persian rock candy, saffron nabat" },
      { property: "og:title", content: "محصولات نبات سیگل — Stick, Branch & Flavored Nabat" },
      { property: "og:description", content: "سه دسته اصلی محصولات سیگل: نبات چوبی، نبات شاخه و نبات طعم‌دار با ۱۰ طعم." },
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
          {filtered.map((p) => {
            const title = p.nameKey
              ? t(p.nameKey)
              : `${t("cat_flavored_nabat")} — ${t(p.flavorKey!)}`;
            return (
              <article key={p.name} className="surface-card overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--saffron-deep)]">{p.brand}</div>
                  <h3 className="mt-1 font-display text-xl font-extrabold">{title}</h3>
                  <div className="mt-3 text-xs text-muted-foreground">{p.pack}</div>
                  <a href="/#inquiry" className="mt-4 inline-flex text-sm font-semibold text-[color:var(--saffron-deep)]">{t("cta_export_inquiry")} →</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
