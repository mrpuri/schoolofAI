import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className="wrap nav-in">
        <NavLink className="logo" to="/">
          <span className="logo-mark">AI</span> India School Of AI
        </NavLink>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/jalandhar">Jalandhar Campus</NavLink>
          <NavLink to="/contact" className="nav-cta">
            Enroll Now
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
