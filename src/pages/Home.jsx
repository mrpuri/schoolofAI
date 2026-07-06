import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <span className="badge">
              <span className="dot"></span> Admissions open · Jalandhar, Punjab
            </span>
            <h1>
              Build your future in AI — <em>right here in Jalandhar</em>
            </h1>
            <p>
              India School Of AI is Punjab's practical, project-first AI institute. Career-track
              programs for graduates and job seekers, and weekend AI &amp; coding programs for
              school students. Learn in English, Hindi or Punjabi.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                Get Early Bird Discount
              </Link>
              <a href="#programs" className="btn btn-ghost">
                Explore Programs
              </a>
            </div>
            <div className="hero-stats">
              <div className="hstat">
                <b>2</b>
                <span>Flagship programs</span>
              </div>
              <div className="hstat">
                <b>100%</b>
                <span>Hands-on, project-based</span>
              </div>
              <div className="hstat">
                <b>3</b>
                <span>Languages of instruction</span>
              </div>
            </div>
          </div>
          <div aria-hidden="true">
            <svg viewBox="0 0 460 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abstract neural network illustration">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ff9933" />
                  <stop offset="1" stopColor="#2456e6" />
                </linearGradient>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="#5b83f0" stopOpacity=".55" />
                  <stop offset="1" stopColor="#5b83f0" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="230" cy="200" r="190" fill="url(#glow)" />
              <g stroke="#5b83f0" strokeOpacity=".45" strokeWidth="1.5">
                <line x1="80" y1="90" x2="230" y2="60" />
                <line x1="80" y1="90" x2="160" y2="200" />
                <line x1="230" y1="60" x2="300" y2="150" />
                <line x1="230" y1="60" x2="160" y2="200" />
                <line x1="160" y1="200" x2="300" y2="150" />
                <line x1="160" y1="200" x2="120" y2="310" />
                <line x1="300" y1="150" x2="390" y2="110" />
                <line x1="300" y1="150" x2="340" y2="260" />
                <line x1="120" y1="310" x2="250" y2="330" />
                <line x1="250" y1="330" x2="340" y2="260" />
                <line x1="340" y1="260" x2="390" y2="110" />
                <line x1="160" y1="200" x2="250" y2="330" />
              </g>
              <g>
                <circle cx="80" cy="90" r="14" fill="#ff9933" />
                <circle cx="230" cy="60" r="18" fill="#ffffff" />
                <circle cx="390" cy="110" r="12" fill="#ff9933" />
                <circle cx="160" cy="200" r="22" fill="url(#g1)" />
                <circle cx="300" cy="150" r="16" fill="#ffffff" />
                <circle cx="120" cy="310" r="13" fill="#ffffff" />
                <circle cx="250" cy="330" r="17" fill="#ff9933" />
                <circle cx="340" cy="260" r="20" fill="url(#g1)" />
              </g>
              <g fontFamily="monospace" fontSize="13" fill="#9db3ea">
                <text x="60" y="42">import future</text>
                <text x="300" y="356">model.fit(you)</text>
              </g>
            </svg>
          </div>
        </div>
      </header>

      <div className="strip">
        <div className="wrap strip-grid">
          <div>
            <b>32%</b>
            <span>projected growth in AI hiring in India (2026)*</span>
          </div>
          <div>
            <b>~3.8 lakh</b>
            <span>AI job openings expected in India in 2026*</span>
          </div>
          <div>
            <b>1 in 5</b>
            <span>AI learners now come from tier-2 cities*</span>
          </div>
          <div>
            <b>2026</b>
            <span>AI made core curriculum in Punjab schools</span>
          </div>
        </div>
      </div>

      <section id="programs">
        <div className="wrap">
          <span className="kicker">Our Programs</span>
          <h2>Two tracks. One mission: real AI skills.</h2>
          <p className="sub">
            No shortcuts, no certificate-mill promises. Small batches, live projects, and mentors
            who actually build with AI.
          </p>

          <div className="cards">
            <div className="card">
              <div className="card-art">
                <svg viewBox="0 0 600 210" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Career program illustration">
                  <rect width="600" height="210" fill="#101d45" />
                  <g stroke="#2456e6" strokeOpacity=".6">
                    <line x1="60" y1="170" x2="180" y2="120" />
                    <line x1="180" y1="120" x2="300" y2="140" />
                    <line x1="300" y1="140" x2="420" y2="70" />
                    <line x1="420" y1="70" x2="540" y2="40" />
                  </g>
                  <g>
                    <circle cx="60" cy="170" r="8" fill="#5b83f0" />
                    <circle cx="180" cy="120" r="8" fill="#5b83f0" />
                    <circle cx="300" cy="140" r="8" fill="#5b83f0" />
                    <circle cx="420" cy="70" r="8" fill="#ff9933" />
                    <circle cx="540" cy="40" r="10" fill="#ff9933" />
                  </g>
                  <text x="40" y="52" fontFamily="monospace" fontSize="16" fill="#7d93cf">
                    &gt; career.upgrade( )
                  </text>
                  <text x="440" y="190" fontFamily="monospace" fontSize="13" fill="#4d639f">
                    ↑ your growth curve
                  </text>
                </svg>
              </div>
              <div className="card-body">
                <span className="tag tag-blue">Phase 1 · Now Enrolling</span>
                <h3>AI Career Program</h3>
                <p>
                  A 6-month, job-oriented program for college students, fresh graduates, and anyone
                  rethinking the study-abroad route. Go from fundamentals to a portfolio of real AI
                  projects.
                </p>
                <ul className="feat">
                  <li>Python, data analysis, machine learning &amp; generative AI</li>
                  <li>8+ real industry projects for your portfolio</li>
                  <li>Interview prep, resume &amp; LinkedIn building</li>
                  <li>Placement assistance: local, remote &amp; metro pipelines</li>
                  <li>Weekday &amp; weekend batches · in-person at Jalandhar campus</li>
                </ul>
                <div className="price-row">
                  <span className="price">₹49,999</span>
                  <span className="price-cut">₹65,000</span>
                  <span className="price-note">Early Bird — first 40 seats</span>
                </div>
                <Link to="/contact" className="btn btn-blue">
                  Reserve My Seat
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="card-art">
                <svg viewBox="0 0 600 210" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Kids program illustration">
                  <rect width="600" height="210" fill="#0e7a46" />
                  <rect width="600" height="210" fill="url(#kgrad)" />
                  <defs>
                    <linearGradient id="kgrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#18a05e" />
                      <stop offset="1" stopColor="#0b6e57" />
                    </linearGradient>
                  </defs>
                  <g fill="#ffffff" fillOpacity=".92">
                    <rect x="70" y="60" width="120" height="90" rx="12" />
                    <circle cx="105" cy="95" r="9" fill="#18a05e" />
                    <circle cx="155" cy="95" r="9" fill="#18a05e" />
                    <rect x="100" y="120" width="60" height="8" rx="4" fill="#18a05e" />
                    <rect x="120" y="34" width="20" height="26" rx="6" />
                  </g>
                  <g fontFamily="monospace" fontSize="15" fill="#d9ffe9">
                    <text x="240" y="80">if curious == True:</text>
                    <text x="266" y="106">learn("AI")</text>
                    <text x="266" y="132">build("robots")</text>
                    <text x="240" y="168">🚀 → future_ready</text>
                  </g>
                </svg>
              </div>
              <div className="card-body">
                <span className="tag tag-green">Phase 2 · Now Enrolling</span>
                <h3>Young AI Innovators (Grades 5–12)</h3>
                <p>
                  Weekend batches where school students learn coding, AI concepts and robotics by
                  building — games, chatbots, and science-fair-ready projects. Aligned with Punjab's
                  new school AI curriculum.
                </p>
                <ul className="feat">
                  <li>Age-appropriate levels: Explorer (5–8) &amp; Builder (9–12)</li>
                  <li>Scratch → Python → AI tools &amp; safe, ethical use</li>
                  <li>A new project built every month</li>
                  <li>Quarterly parent showcase &amp; progress report</li>
                  <li>Saturday–Sunday batches · 2 hrs per session</li>
                </ul>
                <div className="price-row">
                  <span className="price">
                    ₹2,499<span style={{ fontSize: 15, fontWeight: 600, color: 'var(--muted)' }}>/month</span>
                  </span>
                  <span className="price-cut">₹3,499</span>
                  <span className="price-note">Early Bird — founding batch</span>
                </div>
                <Link to="/contact" className="btn btn-blue">
                  Book a Free Trial Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="kicker">Why India School Of AI</span>
          <h2>Built different from certificate shops</h2>
          <div className="pillars">
            <div className="pillar">
              <div className="ico" style={{ background: '#e3ebff' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2456e6" strokeWidth="2">
                  <path d="M4 19h16M6 16l4-6 3 3 5-8" />
                </svg>
              </div>
              <h3>Outcome-first, honestly</h3>
              <p>
                We prepare you for real hiring — local IT roles, remote AI work, and metro
                placements. No fake "100% placement" promises; a transparent placement report every
                cohort instead.
              </p>
            </div>
            <div className="pillar">
              <div className="ico" style={{ background: '#fff1de' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e07f1a" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
                </svg>
              </div>
              <h3>Mentors who build</h3>
              <p>
                Learn from practitioners and visiting industry mentors — not slide-readers. Small
                batches mean your doubts get answered the same day, in English, Hindi or Punjabi.
              </p>
            </div>
            <div className="pillar">
              <div className="ico" style={{ background: '#dff5ea' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#18a05e" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M8 21h8M12 18v3" />
                </svg>
              </div>
              <h3>Learn by shipping</h3>
              <p>
                Every module ends with a project you can show — a working model, an app, a
                dashboard. Your portfolio, not just a certificate, is what gets you hired.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
