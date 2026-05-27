"use client";

import { useModal } from "@/components/modals/ModalProvider";

export default function CtaButton({
  kind = "inquiry",
  prefill,
  className = "btn-primary",
  children,
}: {
  kind?: "inquiry" | "about";
  prefill?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { openInquiry, openAbout } = useModal();
  return (
    <button
      onClick={() => (kind === "about" ? openAbout() : openInquiry(prefill))}
      className={className}
    >
      {children}
    </button>
  );
}
