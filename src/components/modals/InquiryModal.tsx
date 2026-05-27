"use client";

import { useEffect, useState } from "react";
import ModalShell from "./ModalShell";
import { SITE } from "@/data/content";
import { FaPaperPlane, FaCircleCheck } from "react-icons/fa6";

type Status = "idle" | "sending" | "done" | "error";

export default function InquiryModal({
  open,
  prefill,
  onClose,
}: {
  open: boolean;
  prefill: string;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // 検索欄から開いたときに相談内容を引き継ぐ
  useEffect(() => {
    if (open) {
      setMessage(prefill ? `「${prefill}」について相談したいです。\n` : "");
      setStatus("idle");
    }
  }, [open, prefill]);

  const submit = async () => {
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: SITE.web3formsKey,
          subject: `【CREATIVESITE】お問い合わせ: ${name}`,
          from_name: "CREATIVESITE お問い合わせフォーム",
          お名前: name,
          連絡先: contact,
          ご相談内容: message,
        }),
      });
      const data = await res.json();
      if (data.success) setStatus("done");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <ModalShell open={open} onClose={onClose} title="お問い合わせ">
      {status === "done" ? (
        <div className="py-8 text-center">
          <FaCircleCheck className="mx-auto mb-4 text-5xl text-teal" />
          <p className="font-display text-lg font-bold text-ink">
            送信しました。ありがとうございます！
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            追ってご連絡いたします。少々お待ちください。
          </p>
          <button onClick={onClose} className="btn-ghost mt-6">
            閉じる
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-ink-soft">
            ご相談内容をお書きください。完全予約制・夜間中心での対応となります。
          </p>

          <Field label="お名前">
            <input
              className={inputCls}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="山田 太郎"
            />
          </Field>

          <Field label="連絡先 (メール / 電話)">
            <input
              className={inputCls}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="you@example.com"
            />
          </Field>

          <Field label="ご相談内容">
            <textarea
              className={`${inputCls} min-h-[120px] resize-y`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="お困りごとや、やりたいことをお書きください。"
            />
          </Field>

          {status === "error" && (
            <p className="text-sm font-bold text-coral-dark">
              すべての項目を入力のうえ、もう一度お試しください。送信できない場合は
              {" "}
              {SITE.contactEmail} までご連絡ください。
            </p>
          )}

          <button
            onClick={submit}
            disabled={status === "sending"}
            className="btn-primary w-full"
          >
            {status === "sending" ? (
              "送信中..."
            ) : (
              <>
                <FaPaperPlane /> 送信する
              </>
            )}
          </button>
        </div>
      )}
    </ModalShell>
  );
}

const inputCls =
  "w-full rounded-2xl border border-mint-dark bg-white px-4 py-3 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/30";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold text-ink">{label}</span>
      {children}
    </label>
  );
}
