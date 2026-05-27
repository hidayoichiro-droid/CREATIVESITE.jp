"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import InquiryModal from "./InquiryModal";
import AboutModal from "./AboutModal";

type ModalKind = "inquiry" | "about" | null;

type ModalContextValue = {
  /** お問い合わせモーダルを開く。検索欄からの引き継ぎ文言を渡せる。 */
  openInquiry: (prefill?: string) => void;
  /** 概要(About)モーダルを開く。 */
  openAbout: () => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal は ModalProvider の内側で使ってください");
  return ctx;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ModalKind>(null);
  const [prefill, setPrefill] = useState("");

  const openInquiry = useCallback((text?: string) => {
    setPrefill(text ?? "");
    setActive("inquiry");
  }, []);
  const openAbout = useCallback(() => setActive("about"), []);
  const close = useCallback(() => setActive(null), []);

  // 背面スクロール抑制 + Escで閉じる
  useEffect(() => {
    if (active) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close]);

  return (
    <ModalContext.Provider value={{ openInquiry, openAbout, close }}>
      {children}
      <InquiryModal open={active === "inquiry"} prefill={prefill} onClose={close} />
      <AboutModal open={active === "about"} onClose={close} />
    </ModalContext.Provider>
  );
}
