import { Link } from 'react-router-dom'

export default function CtaBand({ title, sub, buttons }) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <h2>{title}</h2>
        {sub && <p>{sub}</p>}
        <div className="btns">
          {buttons.map(({ label, to, variant = 'btn-primary' }) => (
            <Link key={label} to={to} className={`btn ${variant}`}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
