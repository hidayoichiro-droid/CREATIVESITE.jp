import Link from "next/link";
import BubbleBackground from "@/components/BubbleBackground";
import TypewriterText from "@/components/TypewriterText";
import SearchInput from "@/components/SearchInput";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import ServiceIcon from "@/components/ServiceIcon";
import { SITE, SERVICES, CASES, TYPEWRITER_PHRASES, DELIVERY } from "@/data/content";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      {/* ───── ヒーロー ───── */}
      <section className="relative overflow-hidden">
        <BubbleBackground />
        <div className="container-c flex min-h-[78vh] flex-col items-center justify-center py-20 text-center">
          <span className="chip mb-6 animate-fade-up">京都発・IT / 業務改善パートナー</span>
          <h1 className="max-w-3xl font-display text-4xl font-black leading-tight text-ink sm:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-5 min-h-[1.6em] font-display text-lg text-teal-dark sm:text-2xl">
            <TypewriterText phrases={TYPEWRITER_PHRASES} />
          </p>
          <p className="mt-6 max-w-xl text-ink-soft">{SITE.description}</p>

          <div className="mt-9 w-full">
            <SearchInput />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <CtaButton>無料で相談してみる</CtaButton>
            <Link href="/services" className="btn-ghost">
              できることを見る
            </Link>
          </div>
        </div>
      </section>

      {/* ───── 事業プレビュー ───── */}
      <section className="section">
        <div className="container-c">
          <Reveal>
            <div className="mb-12 text-center">
              <h2 className="font-display text-3xl font-black text-ink sm:text-4xl">
                できること
              </h2>
              <p className="mt-3 text-ink-soft">
                小さな手間から、AIを使った自動化まで。
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="card h-full hover:-translate-y-1">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-mint text-xl text-teal-dark">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm font-bold text-coral">{s.summary}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link href="/services" className="btn-ghost">
              事業内容の詳細へ <FaArrowRight className="text-sm" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───── 対応スタイル帯 ───── */}
      <section className="bg-teal py-12">
        <div className="container-c grid grid-cols-2 gap-6 text-center text-white lg:grid-cols-4">
          {DELIVERY.map((d, i) => (
            <Reveal key={d.label} delay={i * 0.05}>
              <p className="text-xs font-bold uppercase tracking-wide text-mint">{d.label}</p>
              <p className="mt-1 font-display text-lg font-bold">{d.main}</p>
              <p className="text-xs text-mint-light">{d.sub}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───── 事例プレビュー ───── */}
      <section className="section">
        <div className="container-c">
          <Reveal>
            <div className="mb-12 text-center">
              <h2 className="font-display text-3xl font-black text-ink sm:text-4xl">事例</h2>
              <p className="mt-3 text-ink-soft">実際に作った「しくみ」の一部です。</p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {CASES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <CaseCard {...c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 最終CTA ───── */}
      <section className="section">
        <div className="container-c">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-coral px-8 py-16 text-center text-white shadow-card">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-coral-light/40" />
              <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-coral-dark/30" />
              <h2 className="relative font-display text-3xl font-black sm:text-4xl">
                その「困った」、一緒に解きませんか？
              </h2>
              <p className="relative mx-auto mt-4 max-w-md text-white/90">
                オンライン中心・完全予約制。まずはお気軽にご相談ください。
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                <CtaButton className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-display font-bold text-coral transition hover:-translate-y-0.5">
                  お問い合わせ
                </CtaButton>
                <CtaButton
                  kind="about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-6 py-3 font-display font-bold text-white transition hover:bg-white/10"
                >
                  CREATIVESITEについて
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function CaseCard({
  slug,
  title,
  tag,
  summary,
  hasDetail,
}: (typeof CASES)[number]) {
  const inner = (
    <div className="card h-full transition hover:-translate-y-1 hover:shadow-card">
      <span className="chip">{tag}</span>
      <h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{summary}</p>
      {hasDetail && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-teal-dark">
          詳しく見る <FaArrowRight className="text-xs" />
        </span>
      )}
    </div>
  );
  return hasDetail ? <Link href={`/cases/${slug}`}>{inner}</Link> : inner;
}
