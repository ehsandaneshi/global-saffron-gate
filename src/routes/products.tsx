import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PageShell, PageHeader } from "@/components/PageShell";
import heroImg from "@/assets/hero-saffron-nabat.jpg";
import productsImg from "@/assets/products-display.jpg";
import saffronImg from "@/assets/saffron-threads.jpg";
import factoryImg from "@/assets/factory-interior.jpg";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [{ title: "Products — Seagol Factory" }, { name: "description", content: "Complete catalog: saffron nabat, crystal candy, flavored sticks, gift and export packaging." }] }),
  component: ProductsPage,
});

const products = [
  { name: "Premium Saffron Nabat", cat: "saffron", brand: "Seagol", img: heroImg, pack: "200g · 500g · 1kg · Bulk" },
  { name: "Crystal Nabat Classic", cat: "crystal", brand: "Manbod", img: productsImg, pack: "250g · 500g · 5kg" },
  { name: "Stick Nabat — Gift Box", cat: "stick", brand: "Seagol", img: productsImg, pack: "12pcs · 24pcs · 48pcs" },
  { name: "Saffron Crystal Sticks", cat: "stick", brand: "Seagol", img: heroImg, pack: "10pcs · 20pcs" },
  { name: "Rose & Cardamom Nabat", cat: "flavored", brand: "Dorsin", img: saffronImg, pack: "150g · 300g" },
  { name: "Lemon & Mint Nabat", cat: "flavored", brand: "Dorsin", img: saffronImg, pack: "150g · 300g" },
  { name: "Bulk Saffron Nabat 25kg", cat: "bulk", brand: "Seagol", img: factoryImg, pack: "25kg sack · Container" },
  { name: "Luxury Gift Collection", cat: "gift", brand: "Seagol", img: productsImg, pack: "Wooden box · Premium" },
  { name: "Export Carton Pack", cat: "export", brand: "Manbod", img: factoryImg, pack: "Custom · OEM" },
];

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
