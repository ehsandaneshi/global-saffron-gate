import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbScript } from "@/lib/breadcrumb";
import { useI18n } from "@/lib/i18n";
import { PageShell, PageHeader } from "@/components/PageShell";
import { InquiryForm } from "./index";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تماس با کارخانه سیگل | سفارش نبات زعفرانی و زعفران — Contact" },
      { name: "description", content: "تماس با تیم صادرات کارخانه سیگل برای سفارش نبات زعفرانی، زعفران ایرانی و شیرینی سنتی. تلفن، ایمیل، واتساپ و آدرس کارخانه در مشهد. Talk to our export team — phone, email, WhatsApp, factory address in Mashhad, Iran." },
      { name: "keywords", content: "تماس با سیگل, سفارش نبات, خرید عمده نبات زعفرانی, تامین کننده زعفران مشهد, تماس صادرات نبات, contact Seagol, order saffron nabat, wholesale Persian sweets contact" },
      { property: "og:title", content: "تماس با کارخانه سیگل — Contact Seagol" },
      { property: "og:description", content: "سفارش و استعلام نبات زعفرانی، زعفران ایرانی و شیرینی سنتی برای بازارهای داخلی و صادراتی." },
      { property: "og:url", content: "https://global-saffron-gate.lovable.app/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://global-saffron-gate.lovable.app/contact" }],
    scripts: [breadcrumbScript([{ name: "Contact", path: "/contact" }])],
  }),
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
