import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { AIORC_CASE, SITE } from "@/data/content";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";

export const metadata: Metadata = {
  title: AIORC_CASE.title,
  description: `${SITE.name}の事例: ${AIORC_CASE.lead}`,
};

export default function AiorcCasePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-teal/30 blur-2xl" />
        <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-coral/30 blur-2xl" />
        <div className="container-c relative">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm text-mint hover:text-white"
          >
            <FaArrowLeft className="text-xs" /> 事例一覧へ
          </Link>
          <Reveal>
            <span className="chip mt-6">Chrome拡張 / OCR / 自動化</span>
            <h1 className="mt-4 max-w-2xl font-display text-3xl font-black leading-tight sm:text-5xl">
              {AIORC_CASE.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-mint-light">{AIORC_CASE.lead}</p>
          </Reveal>
        </div>
      </section>

      {/* 数値 */}
      <section className="border-b border-mint-dark/40 bg-white py-10">
        <div className="container-c grid grid-cols-3 gap-4 text-center">
          {AIORC_CASE.results.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.06}>
              <p className="font-display text-2xl font-black text-coral sm:text-3xl">
                {r.value}
              </p>
              <p className="mt-1 text-xs text-ink-faint sm:text-sm">{r.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-c grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="mb-4 font-display text-2xl font-black text-ink">課題</h2>
              {AIORC_CASE.problem.map((p, i) => (
                <p key={i} className="mb-3 leading-relaxed text-ink-soft">{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="mb-4 font-display text-2xl font-black text-teal-dark">解決</h2>
              {AIORC_CASE.solution.map((p, i) => (
                <p key={i} className="mb-3 leading-relaxed text-ink-soft">{p}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="container-c mt-6">
          <Reveal>
            <div className="rounded-3xl bg-mint-light/70 p-8">
              <h3 className="mb-4 font-display text-lg font-bold text-ink">使用技術</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {AIORC_CASE.tech.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-ink-soft">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal text-xs text-white">
                      <FaCheck />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="container-c mt-12 text-center">
          <h2 className="font-display text-2xl font-black text-ink">
            似たような自動化、ご相談ください
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            「この作業、自動にできない？」——そんな小さなきっかけから始まります。
          </p>
          <div className="mt-6">
            <CtaButton prefill="業務の自動化について相談したいです">
              自動化を相談する
            </CtaButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
