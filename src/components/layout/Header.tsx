import { Link } from "@tanstack/react-router";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";
import { cn } from "@/lib/utils";

const langs: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "EN", native: "English" },
  { code: "fa", label: "FA", native: "فارسی" },
  { code: "ar", label: "AR", native: "العربية" },
];

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t("nav_home") },
    { to: "/about", label: t("nav_about") },
    { to: "/products", label: t("nav_products") },
    { to: "/manufacturing", label: t("nav_manufacturing") },
    { to: "/certifications", label: t("nav_certifications") },
    { to: "/export", label: t("nav_export") },
    { to: "/blog", label: t("nav_blog") },
    { to: "/contact", label: t("nav_contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="persian-strip" aria-hidden="true" />
      <div className="container-page flex h-16 items-center gap-2 sm:gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0 shrink">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-saffron)] shadow-[var(--shadow-elegant)]">
            <span className="font-display text-base font-bold text-primary-foreground">S</span>
          </div>
          <div className="min-w-0">
            <div className="font-display text-sm sm:text-base font-bold leading-none text-foreground truncate">{t("brand_name")}</div>
            <div className="hidden sm:block text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">Persian Heritage · Global Reach</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 mx-auto">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/75 hover:text-foreground" }}
              className="px-3 py-2 text-sm font-medium transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ms-auto lg:ms-0 flex items-center gap-2 shrink-0">
          <div className="flex items-center rounded-full border border-border bg-card p-0.5">
            <Globe className="ms-2 h-3.5 w-3.5 text-muted-foreground hidden sm:inline-block" />
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={cn(
                  "px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-semibold rounded-full transition-all",
                  lang === l.code
                    ? "bg-[image:var(--gradient-saffron)] text-primary-foreground shadow-[var(--shadow-soft)]"
                    : "text-muted-foreground hover:text-foreground",
                )}
                title={l.native}
                aria-label={`Switch to ${l.native}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground hover:opacity-90 transition"
          >
            {t("nav_export_inquiry")}
          </Link>

          <button
            className="lg:hidden inline-grid h-9 w-9 place-items-center rounded-md border border-border"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-page py-3 flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-foreground/85"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
