import { NavLink } from 'react-router-dom'

type Item = { to: string; label: string }

export function SectionNav({ items, label }: { items: readonly Item[]; label: string }) {
  return (
    <nav className="section-nav" aria-label={label}>
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end
          className={({ isActive }) =>
            isActive ? 'section-nav-link is-active' : 'section-nav-link'
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
