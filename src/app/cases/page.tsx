import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CASES, SITE } from "@/data/content";
import { FaArrowRight } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "事例",
  description: `${SITE.name}が手がけた制作・開発の事例一覧。`,
};

export default function CasesPage() {
  return (
    <>
      <section className="bg-mint-light/60 py-16 sm:py-20">
        <div className="container-c text-center">
          <Reveal>
            <span className="chip mb-4">CASES</span>
            <h1 className="font-display text-4xl font-black text-ink sm:text-5xl">事例</h1>
            <p className="mx-auto mt-4 max-w-xl text-ink-soft">
              実際に作った「しくみ」の一部をご紹介します。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-c grid gap-6 md:grid-cols-2">
          {CASES.map((c, i) => {
            const inner = (
              <div className="card h-full transition hover:-translate-y-1 hover:shadow-card">
                <span className="chip">{c.tag}</span>
                <h2 className="mt-4 font-display text-xl font-bold text-ink">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.summary}</p>
                {c.hasDetail ? (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-teal-dark">
                    詳しく見る <FaArrowRight className="text-xs" />
                  </span>
                ) : (
                  <span className="mt-4 inline-block text-xs text-ink-faint">
                    詳細ページは準備中です
                  </span>
                )}
              </div>
            );
            return (
              <Reveal key={c.slug} delay={i * 0.07}>
                {c.hasDetail ? <Link href={`/cases/${c.slug}`}>{inner}</Link> : inner}
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
