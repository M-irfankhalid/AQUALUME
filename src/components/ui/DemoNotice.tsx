import { IconInfoCircle } from "@tabler/icons-react";

/**
 * The disclaimer that keeps this demo honest.
 *
 * Required anywhere the page talks about giving money or time — the plan for
 * this build makes it mandatory next to every donation CTA, not just in the
 * footer. The site is entirely dark, so both tones sit on deep surfaces;
 * `tone="dark"` is the louder treatment for use over the caustic bands.
 */
export default function DemoNotice({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const toneClasses =
    tone === "dark"
      ? "border-primary/30 bg-surface-2 text-muted"
      : "border-border bg-surface-2/70 text-muted";

  const iconClasses = tone === "dark" ? "text-primary-light" : "text-primary";

  return (
    <p
      className={`inline-flex max-w-2xl items-start gap-2.5 rounded-xl border px-4 py-3.5 text-xs leading-relaxed ${toneClasses} ${className}`}
    >
      <IconInfoCircle size={15} className={`mt-0.5 shrink-0 ${iconClasses}`} />
      <span>
        <strong className="font-semibold">Demo site.</strong> Aqualume Foundation is a
        fictional organisation built for a portfolio. It is not a registered charity and
        it cannot accept money &mdash; donations on this page go directly to real,
        independent organisations on their own websites.
      </span>
    </p>
  );
}
