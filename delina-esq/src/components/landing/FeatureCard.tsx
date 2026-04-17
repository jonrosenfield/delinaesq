interface FeatureCardProps {
  title: string
  body: string
}

export function FeatureCard({ title, body }: FeatureCardProps) {
  return (
    <div
      className="bg-white border border-steel/20 p-8"
      style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
    >
      <h3 className="font-sans font-medium text-ink text-[1.35rem] leading-tight mb-3">
        {title}
      </h3>
      <p className="font-sans text-[16px] text-ink/55 leading-relaxed">{body}</p>
    </div>
  )
}
