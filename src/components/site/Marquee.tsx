const words = [
  "Community-led",
  "Monitored",
  "Repaired",
  "Locally owned",
  "Published openly",
  "Still running",
];

/**
 * A slow band of the things the work is judged on.
 *
 * Separated from the sections either side by a tonal step rather than a rule,
 * and masked at the edges so items dissolve instead of being clipped. That
 * `.edge-fade` mask is the borderless idiom for a band like this.
 *
 * Exactly two copies of the list, translated -50%. The spacing between items is
 * per-item padding rather than a flex gap, because a parent gap contributes one
 * extra space that stops the loop landing seamlessly.
 */
export default function Marquee() {
  const renderSet = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((word) => (
        <li key={word} className="flex items-center px-8 sm:px-12">
          <span className="display whitespace-nowrap text-[clamp(1.4rem,3.2vw,2.6rem)] text-faint">
            {word}
          </span>
          <span aria-hidden className="ml-8 text-primary sm:ml-12">
            &#9679;
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-surface py-12">
      <div className="edge-fade overflow-hidden">
        <div className="flex w-max animate-marquee">
          {renderSet(false)}
          {renderSet(true)}
        </div>
      </div>
    </div>
  );
}
