"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import type { ReactNode } from "react";

export default function ModalShell({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          aria-label={title}
        >
          {/* 背景 */}
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
          />
          {/* 本体 */}
          <motion.div
            className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-cream p-6 shadow-card sm:rounded-3xl sm:p-8"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
                {title}
              </h2>
              <button
                onClick={onClose}
                aria-label="閉じる"
                className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink-soft transition hover:bg-coral hover:text-white"
              >
                <FaXmark />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
