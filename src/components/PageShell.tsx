import type { ReactNode } from "react";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--ink)] text-[color:var(--cream)]">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.16_75/0.6),transparent_60%)]" />
      <div className="container-page relative py-20 md:py-28">
        <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{eyebrow}</div>
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold max-w-3xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg opacity-80">{lead}</p>
      </div>
    </section>
  );
}
