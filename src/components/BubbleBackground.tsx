"use client";

import { useEffect, useRef } from "react";

type Bubble = {
  x: number;
  y: number;
  r: number;
  vy: number;
  drift: number;
  phase: number;
  color: string;
};

const COLORS = [
  "rgba(255,107,94,0.18)", // coral
  "rgba(43,182,168,0.16)", // teal
  "rgba(255,196,77,0.18)", // sun
  "rgba(163,226,210,0.30)", // mint
];

export default function BubbleBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let bubbles: Bubble[] = [];
    let w = 0;
    let h = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      w = parent ? parent.clientWidth : window.innerWidth;
      h = parent ? parent.clientHeight : window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      const count = Math.max(10, Math.min(26, Math.floor(w / 60)));
      bubbles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 14 + Math.random() * 46,
        vy: 0.15 + Math.random() * 0.4,
        drift: 0.4 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const b of bubbles) {
        b.y -= b.vy;
        b.phase += 0.01;
        const x = b.x + Math.sin(b.phase) * b.drift * 10;
        if (b.y + b.r < 0) {
          b.y = h + b.r;
          b.x = Math.random() * w;
        }
        ctx.beginPath();
        ctx.arc(x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    seed();
    if (reduce) {
      // 動かさず1フレームだけ描画
      ctx.clearRect(0, 0, w, h);
      for (const b of bubbles) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
      }
    } else {
      draw();
    }

    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
    />
  );
}
