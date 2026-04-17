export function LogoStrip() {
  const items = [
    'CALIFORNIA BAR ASSOCIATION',
    'PAID INTAKE MODEL',
    'LLC FORMATION',
    'S-CORP STRATEGY',
    'TRADEMARK PROTECTION',
    'CONTRACT ADVISORY',
    'CREATOR COUNSEL',
    'STARTUP STRUCTURING',
    'TAX OPTIMIZATION',
    'ENTITY STRUCTURING',
  ]
  const doubled = [...items, ...items]

  return (
    <div className="bg-ivory border-y border-steel/20 py-3 overflow-hidden">
      <div className="animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-[12px] font-mono uppercase tracking-[0.25em] text-mist mx-8 whitespace-nowrap"
          >
            {item}
            <span className="ml-8 text-steel">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
