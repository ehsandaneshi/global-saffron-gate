import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PageShell, PageHeader } from "@/components/PageShell";
import { InquiryForm } from "./index";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Seagol Factory" }, { name: "description", content: "Talk to our export team. Phone, email, WhatsApp, and factory address in Mashhad, Iran." }] }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const items = [
    { i: MapPin, l: t("contact_address") },
    { i: Phone, l: t("contact_phone") },
    { i: Mail, l: t("contact_email") },
    { i: MessageCircle, l: "WhatsApp · 24/7" },
  ];
  return (
    <PageShell>
      <PageHeader eyebrow={t("nav_contact")} title={t("page_contact_title")} lead={t("page_contact_lead")} />
      <section className="py-20 container-page grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          {items.map(({ i: Icon, l }) => (
            <div key={l} className="surface-card p-5 flex items-center gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--saffron)]/15 text-[color:var(--saffron-deep)]"><Icon className="h-5 w-5" /></div>
              <div className="text-sm font-medium">{l}</div>
            </div>
          ))}
          <div className="text-xs text-muted-foreground">{t("contact_hours")}</div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-[4/3]">
          <iframe title="Map" src="https://maps.google.com/maps?q=Mashhad,Iran&z=11&output=embed" className="h-full w-full border-0" loading="lazy" />
        </div>
      </section>
      <InquiryForm />
    </PageShell>
  );
}
