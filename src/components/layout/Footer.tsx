import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logoAsset from "@/assets/sigol-logo.png.asset.json";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="dark-luxury mt-24 text-[color:var(--cream)] overflow-hidden">
      <div className="persian-strip" aria-hidden="true" />
       <div className="container-page relative py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="لوگوی کارخانه سی گل"
              className="h-12 w-12 shrink-0 object-contain"
            />
            <div className="font-display text-lg font-bold">{t("brand_name")}</div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed opacity-70">{t("footer_about")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Sigol", "Manbod", "Dorsin"].map((b) => (
               <span key={b} className="rounded-full border border-[color:var(--gold)]/25 bg-[color:var(--cream)]/5 px-3 py-1 text-xs tracking-wider uppercase">
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
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span><span className="text-[color:var(--gold)]">{t("contact_shop")}:</span> {t("contact_shop_address")}</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>{t("contact_shop_phone")}</span></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span><span className="text-[color:var(--gold)]">{t("contact_factory")}:</span> {t("contact_factory_address")}</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>{t("contact_factory_phone")}</span></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" />{t("contact_email")}</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" />{t("contact_whatsapp")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--cream)]/10">
        <div className="container-page py-5 flex flex-wrap gap-3 justify-between text-xs opacity-60">
          <span>© {new Date().getFullYear()} Sigol Factory. {t("footer_rights")}</span>
          <span>Designed for global export · EN · فارسی · العربية</span>
        </div>
      </div>
    </footer>
  );
}
