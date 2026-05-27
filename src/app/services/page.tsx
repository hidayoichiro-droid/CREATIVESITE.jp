import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICES, DELIVERY, SITE } from "@/data/content";

export const metadata: Metadata = {
  title: "事業内容",
  description: `${SITE.name}の提供サービス一覧。業務の自動化、AI活用、PC移行、ネットワーク改善、セキュリティ、オーダーメイド開発まで。`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-mint-light/60 py-16 sm:py-20">
        <div className="container-c text-center">
          <Reveal>
            <span className="chip mb-4">SERVICES</span>
            <h1 className="font-display text-4xl font-black text-ink sm:text-5xl">事業内容</h1>
            <p className="mx-auto mt-4 max-w-xl text-ink-soft">
              「便利そう」で終わらせず、業務に馴染むまで伴走します。下記以外のご相談も歓迎です。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-c grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="card flex h-full gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-coral/10 text-2xl text-coral">
                  <ServiceIcon name={s.icon} />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-ink">{s.title}</h2>
                  <p className="mt-0.5 text-sm font-bold text-teal-dark">{s.summary}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 対応スタイル */}
      <section className="section pt-0">
        <div className="container-c">
          <Reveal>
            <div className="rounded-[2rem] border border-mint-dark/50 bg-white p-8 shadow-soft sm:p-10">
              <h2 className="mb-6 text-center font-display text-2xl font-black text-ink">
                対応スタイル
              </h2>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {DELIVERY.map((d) => (
                  <div key={d.label} className="text-center">
                    <p className="text-xs font-bold text-ink-faint">{d.label}</p>
                    <p className="mt-1 font-display text-base font-bold text-teal-dark">{d.main}</p>
                    <p className="text-xs text-ink-soft">{d.sub}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-ink-faint">
                ※ 訪問対応は開始予定です。当面はオンラインで対応できる案件が中心となります。
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-10 text-center">
            <CtaButton>このサービスについて相談する</CtaButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
