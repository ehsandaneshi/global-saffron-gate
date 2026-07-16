import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbScript } from "@/lib/breadcrumb";
import { useI18n } from "@/lib/i18n";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Target, Eye, Heart, Factory, Award, Globe2 } from "lucide-react";
import factoryImg from "@/assets/factory-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "درباره کارخانه سیگل | تولیدکننده نبات زعفرانی و شیرینی ایرانی — About Seagol Factory" },
      { name: "description", content: "سه دهه تجربه در تولید نبات زعفرانی، زعفران ایرانی و شیرینی سنتی با کیفیت صادراتی. آشنایی با ماموریت، چشم‌انداز و تاریخچه کارخانه سیگل. Three decades of Persian saffron nabat & confectionery craftsmanship for global markets." },
      { name: "keywords", content: "درباره سیگل, کارخانه نبات, تاریخچه تولید نبات, نبات زعفرانی رفسنجان, زعفران ایرانی, شیرینی سنتی, about Seagol, Persian saffron manufacturer, Iranian nabat factory" },
      { property: "og:title", content: "درباره کارخانه سیگل — About Seagol Factory" },
      { property: "og:description", content: "سه دهه تخصص در تولید نبات، زعفران و شیرینی سنتی ایرانی برای بازارهای جهانی." },
      { property: "og:url", content: "https://global-saffron-gate.lovable.app/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://global-saffron-gate.lovable.app/about" }],
    scripts: [breadcrumbScript([{ name: "About", path: "/about" }])],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  const blocks = [
    { i: Target, t: t("about_mission_t"), b: t("about_mission_b") },
    { i: Eye, t: t("about_vision_t"), b: t("about_vision_b") },
    { i: Heart, t: t("about_values_t"), b: t("about_values_b") },
  ];
  return (
    <PageShell>
      <PageHeader eyebrow={t("nav_about")} title={t("page_about_title")} lead={t("page_about_lead")} />
      <section className="py-20 container-page grid md:grid-cols-2 gap-12 items-center">
        <img src={factoryImg} alt="Factory" loading="lazy" className="rounded-3xl shadow-[var(--shadow-elegant)] aspect-[4/3] object-cover" />
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--saffron-deep)]">{t("about_history_t")}</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">{t("about_eyebrow")}</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{t("about_history_b")}</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { i: Factory, n: "30+", l: t("stats_years") },
              { i: Award, n: "6", l: t("certs_eyebrow") },
              { i: Globe2, n: "28+", l: t("stats_countries") },
            ].map((s) => (
              <div key={s.l} className="text-center surface-card p-4">
                <s.i className="h-5 w-5 mx-auto text-[color:var(--saffron-deep)]" />
                <div className="mt-2 font-display text-2xl font-bold">{s.n}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-card border-y border-border">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {blocks.map((b) => (
            <div key={b.t} className="surface-card p-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-saffron)] text-primary-foreground">
                <b.i className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl md:text-3xl font-extrabold">{b.t}</h3>
              <p className="mt-3 text-muted-foreground">{b.b}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
