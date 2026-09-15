import type { ReactNode } from "react";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col pt-[calc(4.5rem+6px)]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="dark-luxury relative overflow-hidden text-[color:var(--cream)]">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.16_75/0.6),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 gold-rule" aria-hidden="true" />
      <div className="container-page relative py-20 md:py-28 luxury-reveal">
        <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{eyebrow}</div>
        <h1 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-4xl">{title}</h1>
        <div className="title-flourish mt-5 rtl:ml-auto rtl:mr-0" aria-hidden="true" />
        <p className="mt-5 max-w-2xl text-base md:text-lg opacity-80">{lead}</p>
      </div>
    </section>
  );
}
