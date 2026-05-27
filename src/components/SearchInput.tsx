"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaMagnifyingGlass, FaArrowRight } from "react-icons/fa6";
import { SEARCH_SUGGESTIONS } from "@/data/content";
import { useModal } from "@/components/modals/ModalProvider";

export default function SearchInput() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const { openInquiry } = useModal();

  // 外側クリックで候補を閉じる
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Phase 1: 検索は「相談内容」としてお問い合わせモーダルへ引き継ぐダミー動作
  const go = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setFocused(false);
    openInquiry(q);
  };

  return (
    <div ref={wrapRef} className="relative mx-auto w-full max-w-xl">
      <div className="flex items-center gap-2 rounded-full border-2 border-mint-dark bg-white px-5 py-3 shadow-soft transition focus-within:border-teal">
        <FaMagnifyingGlass className="shrink-0 text-ink-faint" />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={(e) => e.key === "Enter" && go(value)}
          placeholder="お困りごとを入力してみてください"
          className="w-full bg-transparent text-ink outline-none placeholder:text-ink-faint"
          aria-label="お困りごと検索"
        />
        <button
          onClick={() => go(value)}
          aria-label="相談する"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-coral text-white transition hover:bg-coral-dark"
        >
          <FaArrowRight className="text-sm" />
        </button>
      </div>

      <AnimatePresence>
        {focused && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-3xl border border-mint-dark bg-white p-2 shadow-card"
          >
            <p className="px-4 py-2 text-xs font-bold text-ink-faint">
              よく相談される話題
            </p>
            {SEARCH_SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => go(s)}
                className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-ink transition hover:bg-mint-light"
              >
                <FaMagnifyingGlass className="text-sm text-ink-faint" />
                <span className="flex-1">{s}</span>
                <FaArrowRight className="text-xs text-teal opacity-0 transition group-hover:opacity-100" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
