import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Award, ShieldCheck, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({ meta: [{ title: "Certifications — Seagol Factory" }, { name: "description", content: "ISO 22000, HACCP, Halal, GMP, FDA — international quality and food safety standards." }] }),
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
              <div className="mt-4 font-display text-lg font-bold">{c.n}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.d}</div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
