export default function SectionIntro({ title, description, centered = false }) {
  return (
    <div className={`section-intro${centered ? ' section-intro--centered' : ''}`}>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}
