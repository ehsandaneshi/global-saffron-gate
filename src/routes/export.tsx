import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageShell, PageHeader } from "@/components/PageShell";
import { InquiryForm } from "./index";
import { Tag, Settings2, Ship, FileCheck } from "lucide-react";

export const Route = createFileRoute("/export")({
  head: () => ({ meta: [{ title: "Export & Global Partnerships — Seagol Factory" }, { name: "description", content: "Private label, OEM, bulk export, logistics, and complete export documentation for global distributors." }] }),
  component: ExportPage,
});

function ExportPage() {
  const { t } = useI18n();
  const services = [
    { i: Tag, t: t("export_services_pl"), d: t("export_services_pl_d") },
    { i: Settings2, t: t("export_services_oem"), d: t("export_services_oem_d") },
    { i: Ship, t: t("export_services_log"), d: t("export_services_log_d") },
    { i: FileCheck, t: t("export_services_doc"), d: t("export_services_doc_d") },
  ];
  return (
    <PageShell>
      <PageHeader eyebrow={t("nav_export")} title={t("page_export_title")} lead={t("page_export_lead")} />
      <section className="py-20 container-page">
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.t} className="surface-card p-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-saffron)] text-primary-foreground">
                <s.i className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
      <InquiryForm />
    </PageShell>
  );
}
