import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Award, ShieldCheck, Factory, Globe2, Truck, Sparkles,
  PlayCircle, Download, Quote, Send, Phone, Mail, MapPin, MessageCircle,
  Check, Crown, Gift, Package, Beaker, Star,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { PageShell } from "@/components/PageShell";
import heroImg from "@/assets/hero-saffron-nabat.jpg";
import factoryImg from "@/assets/factory-interior.jpg";
import productsImg from "@/assets/products-display.jpg";
import saffronImg from "@/assets/saffron-threads.jpg";

const HOME_TITLE = "نبات زعفرانی، شیرینی سنتی و زعفران ایرانی | کارخانه سیگل — Seagol Factory";
const HOME_DESC = "کارخانه سیگل، تولیدکننده تخصصی نبات زعفرانی، نبات چوبی، نبات شاخه‌ای، آبنبات، شکرپنیر و شیرینی سنتی ایرانی با زعفران درجه یک. صادرات نبات و زعفران به بیش از ۲۸ کشور جهان. Premium Persian saffron rock candy (Nabat), saffron threads, and traditional Iranian confectionery — wholesale, private label & OEM export.";
const HOME_KEYWORDS = "نبات, نبات زعفرانی, نبات چوبی, نبات شاخه ای, زعفران, زعفران ایرانی, شیرینی, شیرینی سنتی, آبنبات, شکرپنیر, نبات مشهد, صادرات نبات, صادرات زعفران, کارخانه نبات, سیگل, منبد, درسین, نبات اعلا, حلوا, نبات هدیه, nabat, saffron, Persian rock candy, Iranian saffron, saffron candy, rock sugar, Persian sweets, Iranian confectionery, halal sweets, نبات زعفراني, زعفران إيراني, حلويات إيرانية, سكر نبات, حلويات الزعفران";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { name: "keywords", content: HOME_KEYWORDS },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:url", content: "https://global-saffron-gate.lovable.app/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fa_IR" },
      { property: "og:locale:alternate", content: "ar_SA" },
      { property: "og:locale:alternate", content: "en_US" },
    ],
    links: [
      { rel: "canonical", href: "https://global-saffron-gate.lovable.app/" },
      { rel: "alternate", hrefLang: "fa", href: "https://global-saffron-gate.lovable.app/" },
      { rel: "alternate", hrefLang: "ar", href: "https://global-saffron-gate.lovable.app/" },
      { rel: "alternate", hrefLang: "en", href: "https://global-saffron-gate.lovable.app/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://global-saffron-gate.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Seagol Factory — کارخانه سیگل",
          alternateName: ["سیگل", "Seagol", "سيغول"],
          url: "https://global-saffron-gate.lovable.app/",
          logo: "https://global-saffron-gate.lovable.app/favicon.ico",
          description: HOME_DESC,
          brand: ["Seagol", "Manbod", "Dorsin"],
          address: { "@type": "PostalAddress", addressLocality: "Rafsanjan", addressCountry: "IR" },
          sameAs: [],
          knowsAbout: ["نبات زعفرانی", "زعفران ایرانی", "شیرینی سنتی", "Persian Rock Candy", "Saffron", "Nabat"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Seagol Factory",
          url: "https://global-saffron-gate.lovable.app/",
          inLanguage: ["fa-IR", "ar-SA", "en-US"],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <AboutStrip />
      <Brands />
      <Categories />
      <WhyUs />
      <Stats />
      <Process />
      <Certifications />
      <ExportMap />
      <Gallery />
      <VideoShowcase />
      <DownloadCenter />
      <Partners />
      <Testimonials />
      <InquiryForm />
      <ContactBlock />
    </PageShell>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Premium saffron nabat"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
      <div className="container-page relative py-24 md:py-36">
        <div className="max-w-3xl text-[color:var(--cream)]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">
            <Sparkles className="h-3 w-3" /> {t("hero_eyebrow")}
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05]">
            {t("hero_title")}
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg opacity-85">{t("hero_subtitle")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-saffron)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:brightness-110 transition">
              {t("cta_view_products")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </Link>
            <a href="#inquiry" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10 transition">
              {t("cta_export_inquiry")}
            </a>
            <a href="#downloads" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[color:var(--cream)]/85 hover:text-[color:var(--gold)] transition">
              <Download className="h-4 w-4" /> {t("cta_download_catalog")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, center }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--saffron-deep)]">{eyebrow}</div>
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground">{title}</h2>
    </div>
  );
}

/* ---------------- ABOUT STRIP ---------------- */
function AboutStrip() {
  const { t } = useI18n();
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={factoryImg} alt="Seagol factory" width={1600} height={1067} loading="lazy" className="rounded-3xl shadow-[var(--shadow-elegant)] object-cover w-full aspect-[4/3]" />
          <div className="surface-card absolute -bottom-6 -end-6 rtl:-start-6 rtl:end-auto p-5 max-w-xs">
            <div className="text-3xl font-display font-bold text-[color:var(--saffron-deep)]">+30</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{t("stats_years")}</div>
          </div>
        </div>
        <div>
          <SectionHeader eyebrow={t("about_eyebrow")} title={t("about_title")} />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("about_body")}</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { i: Award, l: t("why_quality") },
              { i: ShieldCheck, l: t("why_safety") },
              { i: Factory, l: t("why_modern") },
              { i: Globe2, l: t("why_export") },
            ].map(({ i: Icon, l }) => (
              <div key={l} className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[color:var(--saffron)]/15 text-[color:var(--saffron-deep)]"><Icon className="h-5 w-5" /></div>
                <span className="text-sm font-medium">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BRANDS ---------------- */
function Brands() {
  const { t } = useI18n();
  const brands = [
    { name: "Seagol", tag: "Premium · Luxury", icon: Crown, desc: t("brand_seagol_desc"), gradient: "linear-gradient(135deg,oklch(0.62 0.18 55),oklch(0.42 0.12 45))" },
    { name: "Manbod", tag: "Family · Retail", icon: Gift, desc: t("brand_manbod_desc"), gradient: "linear-gradient(135deg,oklch(0.68 0.13 195),oklch(0.38 0.14 265))" },
    { name: "Dorsin", tag: "Modern · OEM", icon: Package, desc: t("brand_dorsin_desc"), gradient: "linear-gradient(135deg,oklch(0.78 0.16 75),oklch(0.55 0.14 35))" },
  ];
  return (
    <section className="py-20 md:py-28 bg-pattern-persian">
      <div className="container-page">
        <SectionHeader eyebrow={t("brands_eyebrow")} title={t("brands_title")} center />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {brands.map((b) => (
            <div key={b.name} className="group surface-card overflow-hidden p-8 hover:-translate-y-1 transition-transform">
              <div className="h-32 -mx-8 -mt-8 mb-6 grid place-items-center text-primary-foreground" style={{ backgroundImage: b.gradient }}>
                <b.icon className="h-12 w-12" strokeWidth={1.5} />
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--saffron-deep)]">{b.tag}</div>
              <div className="mt-2 font-display text-3xl font-bold">{b.name}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              <Link to="/products" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--saffron-deep)] group-hover:gap-2 transition-all">
                {t("cta_learn_more")} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CATEGORIES ---------------- */
function Categories() {
  const { t } = useI18n();
  const cats = [
    { k: "cat_saffron_nabat" as const, img: heroImg },
    { k: "cat_crystal_nabat" as const, img: productsImg },
    { k: "cat_stick_nabat" as const, img: heroImg },
    { k: "cat_flavored_nabat" as const, img: saffronImg },
    { k: "cat_bulk" as const, img: factoryImg },
    { k: "cat_gift" as const, img: productsImg },
    { k: "cat_export" as const, img: factoryImg },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow={t("cats_eyebrow")} title={t("cats_title")} />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cats.map((c) => (
            <div key={c.k} className="group relative overflow-hidden rounded-2xl aspect-square">
              <img src={c.img} alt={t(c.k)} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] via-[color:var(--ink)]/30 to-transparent" />
              <div className="absolute bottom-4 start-4 end-4 text-[color:var(--cream)]">
                <div className="font-display text-lg font-bold">{t(c.k)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const { t } = useI18n();
  const items = [
    { i: Award, k: ["why_quality", "why_quality_d"] as const },
    { i: ShieldCheck, k: ["why_safety", "why_safety_d"] as const },
    { i: Factory, k: ["why_capacity", "why_capacity_d"] as const },
    { i: Beaker, k: ["why_modern", "why_modern_d"] as const },
    { i: Globe2, k: ["why_export", "why_export_d"] as const },
    { i: Truck, k: ["why_price", "why_price_d"] as const },
  ];
  return (
    <section className="py-20 md:py-28 bg-[color:var(--ink)] text-[color:var(--cream)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,oklch(0.78_0.16_75/0.7),transparent_55%)]" />
      <div className="container-page relative">
        <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{t("why_eyebrow")}</div>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold max-w-2xl">{t("why_title")}</h2>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ i: Icon, k }) => (
            <div key={k[0]} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <Icon className="h-7 w-7 text-[color:var(--gold)]" />
              <div className="mt-4 font-display text-xl font-bold">{t(k[0])}</div>
              <div className="mt-2 text-sm opacity-75">{t(k[1])}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1500;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

function Stats() {
  const { t } = useI18n();
  const data = [
    { v: 30, s: "+", k: "stats_years" as const },
    { v: 4500, s: "", k: "stats_capacity" as const },
    { v: 280, s: "+", k: "stats_employees" as const },
    { v: 28, s: "+", k: "stats_countries" as const },
    { v: 120, s: "+", k: "stats_products" as const },
  ];
  return (
    <section className="py-16 border-y border-border bg-card">
      <div className="container-page grid grid-cols-2 md:grid-cols-5 gap-8">
        {data.map((d) => (
          <div key={d.k} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
              <Counter to={d.v} suffix={d.s} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{t(d.k)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const { t } = useI18n();
  const steps = [
    { k: ["process_1", "process_1_d"] as const },
    { k: ["process_2", "process_2_d"] as const },
    { k: ["process_3", "process_3_d"] as const },
    { k: ["process_4", "process_4_d"] as const },
    { k: ["process_5", "process_5_d"] as const },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow={t("process_eyebrow")} title={t("process_title")} center />
        <ol className="mt-14 grid md:grid-cols-5 gap-4 relative">
          {steps.map((s, i) => (
            <li key={i} className="relative surface-card p-6">
              <div className="font-display text-5xl font-bold text-[color:var(--saffron)]/30">0{i + 1}</div>
              <div className="mt-2 font-display text-lg font-bold">{t(s.k[0])}</div>
              <div className="mt-2 text-sm text-muted-foreground">{t(s.k[1])}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- CERTIFICATIONS ---------------- */
function Certifications() {
  const { t } = useI18n();
  const certs = ["ISO 22000", "HACCP", "HALAL", "FDA", "GMP", "ISO 9001"];
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container-page">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader eyebrow={t("certs_eyebrow")} title={t("certs_title")} />
            <p className="mt-5 text-muted-foreground">{t("certs_body")}</p>
            <Link to="/certifications" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--saffron-deep)]">
              {t("cta_learn_more")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {certs.map((c) => (
              <div key={c} className="aspect-square grid place-items-center rounded-2xl border border-border bg-background text-center p-3">
                <div>
                  <Award className="h-6 w-6 mx-auto text-[color:var(--saffron-deep)]" />
                  <div className="mt-2 font-display font-bold text-sm">{c}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPORT MAP ---------------- */
function ExportMap() {
  const { t } = useI18n();
  const regions = [
    { k: "export_regions_me" as const, n: 12 },
    { k: "export_regions_eu" as const, n: 6 },
    { k: "export_regions_asia" as const, n: 5 },
    { k: "export_regions_am" as const, n: 3 },
    { k: "export_regions_af" as const, n: 2 },
  ];
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[image:var(--gradient-royal)] text-[color:var(--cream)]">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,white,transparent_60%)]" />
      <div className="container-page relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{t("export_eyebrow")}</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">{t("export_title")}</h2>
          <p className="mt-5 opacity-80">{t("export_body")}</p>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="aspect-[16/7] w-full grid place-items-center rounded-2xl bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.16_75/0.25),transparent_70%)] relative">
            <Globe2 className="h-32 w-32 text-[color:var(--gold)] opacity-40" strokeWidth={0.7} />
            <div className="absolute inset-0">
              {[
                { top: "32%", left: "52%" }, { top: "40%", left: "30%" },
                { top: "28%", left: "70%" }, { top: "55%", left: "80%" },
                { top: "60%", left: "25%" }, { top: "44%", left: "48%" },
                { top: "35%", left: "60%" }, { top: "48%", left: "15%" },
              ].map((p, i) => (
                <span key={i} className="absolute h-2.5 w-2.5 rounded-full bg-[color:var(--gold)] shadow-[0_0_20px_3px_oklch(0.85_0.13_88/0.7)] animate-pulse" style={p} />
              ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
            {regions.map((r) => (
              <div key={r.k} className="text-center rounded-xl border border-white/10 p-4">
                <div className="font-display text-2xl font-bold text-[color:var(--gold)]">{r.n}</div>
                <div className="text-xs mt-1 opacity-80">{t(r.k)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const { t } = useI18n();
  const imgs = [heroImg, factoryImg, productsImg, saffronImg, factoryImg, heroImg];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow={t("gallery_eyebrow")} title={t("gallery_title")} />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3">
          {imgs.map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <img src={src} alt="Factory" loading="lazy" className="h-full w-full object-cover aspect-square hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- VIDEO ---------------- */
function VideoShowcase() {
  const { t } = useI18n();
  const vids = [
    { k: "video_factory" as const, img: factoryImg },
    { k: "video_process" as const, img: heroImg },
    { k: "video_brand" as const, img: productsImg },
  ];
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container-page">
        <SectionHeader eyebrow={t("video_eyebrow")} title={t("video_title")} center />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {vids.map((v) => (
            <button key={v.k} className="group relative overflow-hidden rounded-2xl aspect-video text-start">
              <img src={v.img} alt={t(v.k)} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/90 to-transparent" />
              <PlayCircle className="absolute inset-0 m-auto h-16 w-16 text-[color:var(--cream)] group-hover:scale-110 transition-transform" strokeWidth={1} />
              <div className="absolute bottom-4 start-4 font-display text-lg font-bold text-[color:var(--cream)]">{t(v.k)}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOWNLOADS ---------------- */
function DownloadCenter() {
  const { t } = useI18n();
  const dls = [
    { k: "download_catalog" as const, size: "12 MB" },
    { k: "download_profile" as const, size: "6 MB" },
    { k: "download_brochure" as const, size: "8 MB" },
    { k: "download_certs" as const, size: "4 MB" },
  ];
  return (
    <section id="downloads" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow={t("download_eyebrow")} title={t("download_title")} />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dls.map((d) => (
            <a key={d.k} href="#" className="surface-card p-6 hover:-translate-y-1 transition-transform flex flex-col">
              <Download className="h-8 w-8 text-[color:var(--saffron-deep)]" />
              <div className="mt-4 font-display text-lg font-bold">{t(d.k)}</div>
              <div className="mt-1 text-xs text-muted-foreground">PDF · {d.size}</div>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--saffron-deep)]">Download <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" /></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PARTNERS ---------------- */
function Partners() {
  const { t } = useI18n();
  const partners = ["Carrefour", "Lulu", "Spinneys", "Metro", "Auchan", "Tesco", "Migros", "Sahakol"];
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container-page">
        <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("partners_title")}</div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {partners.map((p) => (
            <div key={p} className="font-display text-center text-xl font-semibold text-muted-foreground/60 hover:text-[color:var(--saffron-deep)] transition">{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const { t } = useI18n();
  const items = [
    { n: "Ahmed Al-Mansouri", r: "Importer, UAE", q: "Seagol has been our trusted nabat supplier for 6 years. Consistent premium quality and excellent export documentation." },
    { n: "Maria Schneider", r: "Distributor, Germany", q: "Their private label program transformed our specialty sweets line. Professional from quote to container delivery." },
    { n: "Hassan Karimov", r: "Retail Chain, Central Asia", q: "Authentic Persian flavor, beautiful packaging, and reliable monthly shipments. Highly recommended." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow={t("testimonials_eyebrow")} title={t("testimonials_title")} center />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.n} className="surface-card p-7">
              <Quote className="h-7 w-7 text-[color:var(--saffron)]" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">{i.q}</p>
              <div className="mt-5 flex gap-1 text-[color:var(--saffron)]">
                {Array.from({ length: 5 }).map((_, n) => <Star key={n} className="h-4 w-4 fill-current" />)}
              </div>
              <div className="mt-4">
                <div className="font-semibold">{i.n}</div>
                <div className="text-xs text-muted-foreground">{i.r}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INQUIRY ---------------- */
export function InquiryForm() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  return (
    <section id="inquiry" className="py-20 md:py-28 bg-[color:var(--ink)] text-[color:var(--cream)]">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{t("inquiry_eyebrow")}</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">{t("inquiry_title")}</h2>
          <p className="mt-5 opacity-80 max-w-md">{t("inquiry_subtitle")}</p>
          <ul className="mt-8 space-y-3 text-sm">
            {[t("export_services_pl"), t("export_services_oem"), t("export_services_log"), t("export_services_doc")].map((s) => (
              <li key={s} className="flex items-center gap-2"><Check className="h-4 w-4 text-[color:var(--gold)]" /> {s}</li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur grid sm:grid-cols-2 gap-4"
        >
          {[
            { k: "field_name", req: true },
            { k: "field_company", req: true },
            { k: "field_country", req: true },
            { k: "field_email", req: true, type: "email" },
            { k: "field_phone", req: false },
            { k: "field_product", req: false },
            { k: "field_quantity", req: false },
          ].map((f) => (
            <label key={f.k} className="block sm:col-span-1">
              <span className="block text-xs uppercase tracking-wider opacity-70 mb-1.5">{t(f.k as never)}</span>
              <input required={f.req} type={f.type ?? "text"} className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm outline-none focus:border-[color:var(--gold)] transition" />
            </label>
          ))}
          <label className="block sm:col-span-2">
            <span className="block text-xs uppercase tracking-wider opacity-70 mb-1.5">{t("field_message")}</span>
            <textarea rows={4} className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm outline-none focus:border-[color:var(--gold)] transition" />
          </label>
          <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[image:var(--gradient-saffron)] px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition">
            <Send className="h-4 w-4" /> {t("send_inquiry")}
          </button>
          {sent && <div className="sm:col-span-2 text-center text-sm text-[color:var(--gold)]">{t("thanks_msg")}</div>}
        </form>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function ContactBlock() {
  const { t } = useI18n();
  const items = [
    { i: MapPin, title: t("contact_shop"), l: t("contact_shop_address") },
    { i: Phone, title: t("contact_shop"), l: t("contact_shop_phone") },
    { i: MapPin, title: t("contact_factory"), l: t("contact_factory_address") },
    { i: Phone, title: t("contact_factory"), l: t("contact_factory_phone") },
    { i: Mail, title: t("contact_email"), l: t("contact_email") },
    { i: MessageCircle, title: "WhatsApp", l: t("contact_whatsapp") },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid md:grid-cols-2 gap-10 items-start">
        <div>
          <SectionHeader eyebrow={t("contact_eyebrow")} title={t("contact_title")} />
          <div className="mt-8 space-y-4">
            {items.map(({ i: Icon, title, l }) => (
              <div key={title + l} className="surface-card p-5 flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--saffron)]/15 text-[color:var(--saffron-deep)]"><Icon className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[color:var(--gold)] font-medium mb-0.5">{title}</div>
                  <div className="text-sm font-medium">{l}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-muted-foreground">{t("contact_hours")}</div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-[4/3] bg-card">
          <iframe
            title="Map"
            src="https://maps.google.com/maps?q=رفسنجان، سعادت‌آباد، خیابان شهید امیری، ایران&z=15&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
