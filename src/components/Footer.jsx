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
              Practical, honest AI education in Jalandhar, Punjab. Career programs for graduates and
              creative AI learning for school students.
            </p>
          </div>
          <div>
            <h4>Programs</h4>
            <Link to="/">AI Career Program</Link>
            <Link to="/">Young AI Innovators</Link>
            <Link to="/jalandhar">School Partnerships</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:hello@indiaschoolofai.in">hello@indiaschoolofai.in</a>
            <a href="tel:+91XXXXXXXXXX">+91-XXXXX-XXXXX</a>
            <Link to="/jalandhar">Jalandhar, Punjab, India</Link>
          </div>
        </div>
        <div className="foot-bottom">
          © 2026 India School Of AI · Jalandhar, Punjab &nbsp;·&nbsp; *Industry statistics from
          public 2026 reports on India's AI workforce.
        </div>
      </div>
    </footer>
  )
}
