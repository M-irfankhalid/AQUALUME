import { IconInfoCircle } from "@tabler/icons-react";

/**
 * The disclaimer that keeps this demo honest.
 *
 * Required anywhere the page talks about giving money or time — the plan for
 * this build makes it mandatory next to every donation CTA, not just in the
 * footer. `tone="raised"` lifts it onto white for use on the tinted bands;
 * the default sits flush on the page.
 */
export default function DemoNotice({
  tone = "flat",
  className = "",
}: {
  tone?: "flat" | "raised";
  className?: string;
}) {
  const toneClasses =
    tone === "raised" ? "bg-white shadow-soft" : "bg-surface-2";

  return (
    <p
      className={`inline-flex max-w-2xl items-start gap-3 rounded-2xl px-5 py-4 text-xs leading-relaxed text-muted ${toneClasses} ${className}`}
    >
      <IconInfoCircle size={16} className="mt-0.5 shrink-0 text-primary" />
      <span>
        <strong className="font-semibold text-foreground">Demo site.</strong> Aqualume
        Foundation is a fictional organisation built for a portfolio. It is not a
        registered charity and it cannot accept money &mdash; donations on this page go
        directly to real, independent organisations on their own websites.
      </span>
    </p>
  );
}
