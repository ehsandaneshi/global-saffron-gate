import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageShell, PageHeader } from "@/components/PageShell";
import heroImg from "@/assets/hero-saffron-nabat.jpg";
import factoryImg from "@/assets/factory-interior.jpg";
import productsImg from "@/assets/products-display.jpg";
import saffronImg from "@/assets/saffron-threads.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "بلاگ نبات و زعفران | اخبار صنعت شیرینی ایرانی — Seagol Blog" },
      { name: "description", content: "مقالات تخصصی درباره نبات زعفرانی، زعفران ایرانی، شیرینی سنتی، صادرات و آموزش محصول از کارخانه سیگل. Industry insights, export news and product education on Persian saffron nabat and confectionery." },
      { name: "keywords", content: "بلاگ نبات, مقالات زعفران, اخبار صادرات نبات, شیرینی ایرانی, آموزش نبات زعفرانی, saffron blog, Persian nabat articles, Iranian confectionery news" },
      { property: "og:title", content: "بلاگ سیگل — نبات، زعفران و شیرینی" },
      { property: "og:description", content: "مقالات تخصصی صنعت نبات زعفرانی، زعفران ایرانی و صادرات شیرینی." },
      { property: "og:url", content: "https://global-saffron-gate.lovable.app/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://global-saffron-gate.lovable.app/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { t } = useI18n();
  const posts = [
    { c: t("blog_cat_industry"), title: "The Global Saffron Trade in 2026", img: saffronImg, date: "Mar 12" },
    { c: t("blog_cat_export"), title: "Opening New Export Routes via Bandar Abbas", img: factoryImg, date: "Feb 28" },
    { c: t("blog_cat_product"), title: "Why Persian Nabat Is the World's Purest Rock Candy", img: heroImg, date: "Feb 09" },
    { c: t("blog_cat_company"), title: "Seagol Expands Dorsin Line for European Buyers", img: productsImg, date: "Jan 22" },
    { c: t("blog_cat_industry"), title: "Halal Certification and Global Confectionery", img: heroImg, date: "Jan 11" },
    { c: t("blog_cat_export"), title: "Container Shipping Best Practices for Sweets", img: factoryImg, date: "Dec 18" },
  ];
  return (
    <PageShell>
      <PageHeader eyebrow={t("nav_blog")} title={t("page_blog_title")} lead={t("page_blog_lead")} />
      <section className="py-20 container-page">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <a key={p.title} href="#" className="surface-card overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex justify-between text-[10px] uppercase tracking-[0.25em]">
                  <span className="text-[color:var(--saffron-deep)]">{p.c}</span>
                  <span className="text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
