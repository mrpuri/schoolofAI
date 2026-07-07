import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className="wrap nav-in">
        <NavLink className="logo" to="/">
          <span className="logo-mark">AI</span> India School Of AI
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/schools">For Schools</NavLink>
          <NavLink to="/universities">For Universities</NavLink>
          <NavLink to="/how-to-ai">How to AI</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <Link to="/#programs" className="nav-sub">Student Programs</Link>
          <NavLink to="/contact" className="nav-cta">
            Partner With Us
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
