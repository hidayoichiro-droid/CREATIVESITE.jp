"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import Logo from "./Logo";
import { useModal } from "@/components/modals/ModalProvider";

const NAV = [
  { label: "事業内容", href: "/services" },
  { label: "事例", href: "/cases" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { openInquiry, openAbout } = useModal();

  return (
    <header className="sticky top-0 z-40 border-b border-mint-dark/40 bg-cream/80 backdrop-blur-md">
      <div className="container-c flex h-16 items-center justify-between">
        <Logo />

        {/* デスクトップナビ */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-full px-4 py-2 font-display font-bold text-ink-soft transition hover:bg-mint hover:text-teal-dark"
            >
              {n.label}
            </Link>
          ))}
          <button
            onClick={openAbout}
            className="rounded-full px-4 py-2 font-display font-bold text-ink-soft transition hover:bg-mint hover:text-teal-dark"
          >
            概要
          </button>
          <button onClick={() => openInquiry()} className="btn-primary ml-2 px-5 py-2.5">
            お問い合わせ
          </button>
        </nav>

        {/* モバイル: ハンバーガー */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl bg-white text-ink shadow-soft md:hidden"
          aria-label="メニュー"
          aria-expanded={open}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* モバイル折り畳みメニュー */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="overflow-hidden border-t border-mint-dark/40 bg-cream md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container-c flex flex-col gap-1 py-4">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 font-display font-bold text-ink transition hover:bg-mint"
                >
                  {n.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  openAbout();
                }}
                className="rounded-2xl px-4 py-3 text-left font-display font-bold text-ink transition hover:bg-mint"
              >
                概要
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  openInquiry();
                }}
                className="btn-primary mt-2 w-full"
              >
                お問い合わせ
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
