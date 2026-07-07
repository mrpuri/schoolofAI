import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="logo" to="/" style={{ marginBottom: 14 }}>
              <span className="logo-mark">AI</span> India School Of AI
            </Link>
            <p style={{ maxWidth: 340 }}>
              The operating system for AI-native education. We don't just teach AI — our
              classrooms run on it.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link to="/schools">For Schools</Link>
            <Link to="/universities">For Universities</Link>
            <Link to="/how-to-ai">How to AI</Link>
            <Link to="/about">About Us</Link>
            <Link to="/#programs">Student Programs</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:founder@amplificable.com">founder@amplificable.com</a>
            <a href="tel:+91XXXXXXXXXX">+91-XXXXX-XXXXX</a>
            <Link to="/contact">Jalandhar, Punjab, India</Link>
          </div>
        </div>
        <div className="foot-bottom">
          © 2026 India School Of AI &nbsp;·&nbsp; Flagship campus: Jalandhar · Partnerships across
          Punjab
        </div>
      </div>
    </footer>
  )
}
