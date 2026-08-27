import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.label}>
            {item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
            {index < items.length - 1 ? (
              <span className="material-symbols-outlined" aria-hidden="true">
                chevron_right
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
