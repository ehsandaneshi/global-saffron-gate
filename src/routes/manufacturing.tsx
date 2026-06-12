import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageShell, PageHeader } from "@/components/PageShell";
import factoryImg from "@/assets/factory-interior.jpg";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({ meta: [{ title: "Manufacturing — Seagol Factory" }, { name: "description", content: "Modern Persian confectionery manufacturing process, from raw saffron to export-ready cartons." }] }),
  component: ManufacturingPage,
});

function ManufacturingPage() {
  const { t } = useI18n();
  const steps = [
    ["process_1", "process_1_d"],
    ["process_2", "process_2_d"],
    ["process_3", "process_3_d"],
    ["process_4", "process_4_d"],
    ["process_5", "process_5_d"],
  ] as const;
  return (
    <PageShell>
      <PageHeader eyebrow={t("nav_manufacturing")} title={t("page_manufacturing_title")} lead={t("page_manufacturing_lead")} />
      <section className="py-20 container-page">
        <img src={factoryImg} alt="Factory" loading="lazy" className="rounded-3xl shadow-[var(--shadow-elegant)] w-full aspect-[16/8] object-cover" />
        <ol className="mt-16 relative border-s-2 border-[color:var(--saffron)]/30 ps-8 space-y-10">
          {steps.map(([k, d], i) => (
            <li key={k} className="relative">
              <span className="absolute -start-[42px] grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-saffron)] text-primary-foreground font-display font-bold shadow-[var(--shadow-elegant)]">{i + 1}</span>
              <h3 className="font-display text-2xl font-bold">{t(k)}</h3>
              <p className="mt-2 text-muted-foreground max-w-2xl">{t(d)}</p>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
