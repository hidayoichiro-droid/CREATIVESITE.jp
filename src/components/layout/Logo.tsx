import Link from "next/link";

/**
 * 暫定テキストロゴ。
 * ロゴ画像を受領したら、この中身を <Image src="/logo.svg" .../> に差し替えてください。
 * (差し替え手順は README の「ロゴ・favicon・OGPの差し替え」を参照)
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label="CREATIVESITE ホーム"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-coral font-display text-lg font-black text-white shadow-pop transition-transform group-hover:-rotate-6">
        C
      </span>
      <span className="font-display text-xl font-black tracking-tight text-ink">
        CREATIVE<span className="text-teal">SITE</span>
      </span>
    </Link>
  );
}
