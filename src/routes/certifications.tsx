import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbScript } from "@/lib/breadcrumb";
import { useI18n } from "@/lib/i18n";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Award, ShieldCheck, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "گواهینامه‌ها: ISO 22000، HACCP، حلال و FDA | کارخانه سیگل — Certifications" },
      { name: "description", content: "گواهینامه‌های بین‌المللی کیفیت و ایمنی غذایی برای نبات زعفرانی، زعفران ایرانی و شیرینی سنتی سیگل: ISO 22000، HACCP، Halal، GMP، FDA و ارگانیک. International food safety & quality certifications for Persian saffron nabat and confectionery." },
      { name: "keywords", content: "گواهینامه نبات, ایزو ۲۲۰۰۰, HACCP, حلال, FDA, GMP, نبات ارگانیک, زعفران ارگانیک, ایمنی غذایی, halal certified saffron candy, ISO 22000 nabat, organic Iranian saffron" },
      { property: "og:title", content: "گواهینامه‌های بین‌المللی سیگل — Seagol Certifications" },
      { property: "og:description", content: "ISO 22000، HACCP، Halal، FDA و سایر استانداردهای جهانی برای محصولات نبات و زعفران." },
      { property: "og:url", content: "https://global-saffron-gate.lovable.app/certifications" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://global-saffron-gate.lovable.app/certifications" }],
    scripts: [breadcrumbScript([{ name: "Certifications", path: "/certifications" }])],
  }),
  component: CertPage,
});

const certs = [
  { n: "ISO 22000", d: "Food Safety Management" },
  { n: "HACCP", d: "Hazard Analysis & Critical Control Points" },
  { n: "HALAL", d: "Halal Certified Production" },
  { n: "ISO 9001", d: "Quality Management System" },
  { n: "GMP", d: "Good Manufacturing Practice" },
  { n: "FDA", d: "U.S. Food and Drug Administration" },
  { n: "Organic", d: "Certified Organic Saffron" },
  { n: "Export License", d: "Iran Ministry of Industry" },
];

function CertPage() {
  const { t } = useI18n();
  return (
    <PageShell>
      <PageHeader eyebrow={t("nav_certifications")} title={t("page_certifications_title")} lead={t("page_certifications_lead")} />
      <section className="py-20 container-page">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c, i) => (
            <div key={c.n} className="surface-card p-6 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-saffron)] text-primary-foreground mx-auto">
                {i % 3 === 0 ? <Award className="h-7 w-7" /> : i % 3 === 1 ? <ShieldCheck className="h-7 w-7" /> : <BadgeCheck className="h-7 w-7" />}
              </div>
              <div className="mt-4 font-display text-xl font-extrabold">{c.n}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.d}</div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
