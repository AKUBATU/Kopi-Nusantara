import Container from './Container'

type Props = { eyebrow?: string; title: string; desc?: string; anchorId?: string }

export default function SectionHeader({ eyebrow, title, desc, anchorId }: Props) {
  return (
    <div className="mb-8 md:mb-10" id={anchorId}>
      <Container>
        {eyebrow ? <div className="badge w-fit">{eyebrow}</div> : null}
        <h2 className="section-title mt-3">{title}</h2>
        {desc ? <p className="muted mt-3 max-w-2xl leading-relaxed">{desc}</p> : null}
      </Container>
    </div>
  )
}
