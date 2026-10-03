"use client";

import { useState, type FormEvent } from "react";
import type { Dict } from "@/content/types";
import { HempLeafLine } from "./hemp";
import { Icon } from "./icons";

export function Newsletter({ t }: { t: Dict["newsletter"] }) {
  const [sent, setSent] = useState(false);

  // No mailing provider yet — the form only confirms locally in this preview.
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="bg-subtle">
      <div className="container-x pt-8 pb-20 lg:pb-[104px]">
        <div className="relative flex flex-col gap-8 overflow-hidden rounded-xl bg-sage-200 px-6 py-10 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-[60px] left-[520px] hidden w-[416px] text-sage-300 lg:block"
          >
            <HempLeafLine className="w-full" strokeWidth={1.2} />
          </div>
          <div className="relative flex max-w-[540px] flex-col gap-3">
            <h2 className="t-h3 text-ink">{t.title}</h2>
            <p className="text-ink-muted">{t.text}</p>
          </div>
          <form onSubmit={onSubmit} className="relative flex w-full max-w-[520px] flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <label className="flex h-[54px] flex-1 items-center gap-3 rounded-full border border-line-strong bg-card px-[22px] focus-within:border-sage-500">
                <Icon name="mail" size={20} className="shrink-0 text-sage-500" />
                <input
                  type="email"
                  required
                  name="email"
                  autoComplete="email"
                  placeholder={t.placeholder}
                  aria-label={t.placeholder}
                  className="w-full bg-transparent text-ink outline-none placeholder:text-ink-muted"
                />
              </label>
              <button type="submit" className="btn btn-primary">
                {t.button}
              </button>
            </div>
            <p aria-live="polite" className={`t-caption ${sent ? "font-semibold text-forest-700" : "text-ink-muted"}`}>
              {sent ? t.success : t.note}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
