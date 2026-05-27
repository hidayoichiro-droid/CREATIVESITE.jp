"use client";

import ModalShell from "./ModalShell";
import { SITE, FOUNDER } from "@/data/content";
import { FaLocationDot } from "react-icons/fa6";
import { useModal } from "./ModalProvider";

export default function AboutModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { openInquiry } = useModal();

  return (
    <ModalShell open={open} onClose={onClose} title={`${SITE.name} について`}>
      <div className="space-y-6">
        {/* 事業説明 */}
        <section>
          <h3 className="mb-2 font-display text-base font-bold text-teal-dark">
            事業について
          </h3>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            {SITE.description}
          </p>
          <p className="mt-3 font-display text-lg font-bold text-coral">
            {SITE.tagline}
          </p>
        </section>

        <hr className="border-mint-dark/50" />

        {/* 創業者紹介 */}
        <section>
          <h3 className="mb-3 font-display text-base font-bold text-teal-dark">
            代表について
          </h3>
          <div className="mb-3 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-coral font-display text-xl font-black text-white">
              {FOUNDER.name.charAt(0)}
            </div>
            <div>
              <p className="font-display font-bold text-ink">{FOUNDER.name}</p>
              <p className="flex items-center gap-1 text-xs text-ink-faint">
                <FaLocationDot className="text-coral" /> {FOUNDER.role}・{FOUNDER.location}
              </p>
            </div>
          </div>
          <div className="space-y-2.5">
            {FOUNDER.bio.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </section>

        <button
          onClick={() => {
            onClose();
            openInquiry();
          }}
          className="btn-primary w-full"
        >
          相談してみる
        </button>
      </div>
    </ModalShell>
  );
}
