import { partners } from "@/lib/products";

export function Ticker() {
  const names = partners.map((p) => p.name.toUpperCase());
  const items = [...names, ...names, ...names, ...names];
  return (
    <div className="hairline-t hairline-b bg-ink-2/50 overflow-hidden py-6">
      <div className="ticker-track flex items-center gap-16 whitespace-nowrap w-max">
        {items.map((b, i) => (
          <div key={`${b}-${i}`} className="flex items-center gap-16">
            <span className="display-md text-bone/80 hover:text-ember transition-colors">
              {b}
            </span>
            <span className="text-ember text-4xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
