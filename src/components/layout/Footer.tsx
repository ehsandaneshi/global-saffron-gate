import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 bg-[color:var(--ink)] text-[color:var(--cream)]">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-saffron)]">
              <span className="font-display font-bold">S</span>
            </div>
            <div className="font-display text-lg font-bold">{t("brand_name")}</div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed opacity-70">{t("footer_about")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Seagol", "Manbod", "Dorsin"].map((b) => (
              <span key={b} className="rounded-full border border-white/15 px-3 py-1 text-xs tracking-wider uppercase">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-[color:var(--gold)]">{t("footer_quick")}</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:text-[color:var(--gold)]">{t("nav_about")}</Link></li>
            <li><Link to="/products" className="hover:text-[color:var(--gold)]">{t("nav_products")}</Link></li>
            <li><Link to="/manufacturing" className="hover:text-[color:var(--gold)]">{t("nav_manufacturing")}</Link></li>
            <li><Link to="/export" className="hover:text-[color:var(--gold)]">{t("nav_export")}</Link></li>
            <li><Link to="/certifications" className="hover:text-[color:var(--gold)]">{t("nav_certifications")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-[color:var(--gold)]">{t("footer_contact")}</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />{t("contact_address")}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" />{t("contact_phone")}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" />{t("contact_email")}</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" />WhatsApp</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-wrap gap-3 justify-between text-xs opacity-60">
          <span>© {new Date().getFullYear()} Seagol Factory. {t("footer_rights")}</span>
          <span>Designed for global export · EN · فارسی · العربية</span>
        </div>
      </div>
    </footer>
  );
}
