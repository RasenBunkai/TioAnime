import type { ReactNode } from "react"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-2">
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          {eyebrow}
        </p>
      )}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        {children && <div className="shrink-0">{children}</div>}
      </div>
    </div>
  )
}
