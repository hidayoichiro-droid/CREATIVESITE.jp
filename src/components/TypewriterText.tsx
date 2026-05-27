"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({
  phrases,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1600,
  className = "",
}: {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;
    const current = phrases[index % phrases.length];

    // 入力完了 → 一拍おいて削除へ
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    // 削除完了 → 次のフレーズへ
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="caret h-[1em]" aria-hidden="true" />
    </span>
  );
}
