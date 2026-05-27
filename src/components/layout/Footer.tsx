"use client";

import Link from "next/link";
import Logo from "./Logo";
import { SITE, DELIVERY } from "@/data/content";
import { useModal } from "@/components/modals/ModalProvider";

export default function Footer() {
  const { openInquiry, openAbout } = useModal();

  return (
    <footer className="mt-10 border-t border-mint-dark/40 bg-mint-light/60">
      <div className="container-c grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            {SITE.tagline}
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-display text-sm font-bold text-ink">サイト</h4>
          <ul className="space-y-2 text-sm text-ink-soft">
            <li><Link href="/" className="hover:text-teal-dark">トップ</Link></li>
            <li><Link href="/services" className="hover:text-teal-dark">事業内容</Link></li>
            <li><Link href="/cases" className="hover:text-teal-dark">事例</Link></li>
            <li>
              <button onClick={openAbout} className="hover:text-teal-dark">概要</button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-sm font-bold text-ink">対応について</h4>
          <ul className="space-y-2 text-sm text-ink-soft">
            {DELIVERY.map((d) => (
              <li key={d.label}>
                <span className="text-ink-faint">{d.label}：</span>
                {d.main}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-sm font-bold text-ink">ご相談</h4>
          <p className="mb-3 text-sm text-ink-soft">
            お困りごとは、お気軽にどうぞ。
          </p>
          <button onClick={() => openInquiry()} className="btn-primary">
            お問い合わせ
          </button>
          <a
            href="/CREATIVESITE_brochure.pdf"
            download
            className="mt-3 block text-sm font-bold text-teal-dark underline-offset-2 hover:underline"
          >
            会社案内（PDF）をダウンロード
          </a>
        </div>
      </div>

      <div className="border-t border-mint-dark/40 py-5">
        <p className="container-c text-center text-xs text-ink-faint">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
