import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta.jsx'
import Flywheel from '../components/Flywheel.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Home() {
  return (
    <>
      <PageMeta
        title="India School Of AI — The Operating System for AI-Native Education"
        description="India School Of AI is Punjab's first AI-native campus in Jalandhar — where students learn with AI tutors, not just about AI — and the partner that brings the same infrastructure to schools and colleges."
      />

      {/* 1. Hero */}
      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <span className="badge">
              <span className="dot"></span> India School Of AI · the operating system for AI-native education
            </span>
            <h1>
              The classroom of 2030. <em>Open in Jalandhar today.</em>
            </h1>
            <p>
              India School Of AI is Punjab's first AI-native campus — where students learn{' '}
              <i>with</i> AI tutors, not just <i>about</i> AI — and the partner that brings the
              same infrastructure to your school or college. We don't just teach AI. Our
              classrooms run on it.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                Partner With Us
              </Link>
              <a href="#programs" className="btn btn-ghost">
                Explore Student Programs
              </a>
            </div>
            <div className="hero-stats">
              <div className="hstat">
                <b>1st</b>
                <span>AI-native campus in Punjab</span>
              </div>
              <div className="hstat">
                <b>3</b>
                <span>Languages of instruction</span>
              </div>
              <div className="hstat">
                <b>100%</b>
                <span>Hands-on, project-based</span>
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

      {/* 2. The moment (stat strip) */}
      <div className="strip">
        <div className="wrap">
          <div className="strip-grid">
            <div>
              <b>2026-27</b>
              <span>AI compulsory in CBSE Classes 3–8</span>
            </div>
            <div>
              <b>Next month</b>
              <span>AI in every Punjab govt school</span>
            </div>
            <div>
              <b>10M</b>
              <span>teachers need AI training</span>
            </div>
            <div>
              <b>50,000</b>
              <span>new tinkering labs funded by GoI</span>
            </div>
          </div>
          <p style={{ textAlign: 'center', color: '#a9b6d8', fontSize: 14.5, marginTop: 22 }}>
            The mandate has arrived. The infrastructure hasn't. That's what we build.
          </p>
        </div>
      </div>

      {/* 3. Three doors */}
      <section id="audiences">
        <div className="wrap">
          <span className="kicker">Who are you here for?</span>
          <h2>Three doors. Pick yours.</h2>
          <div className="doors">
            <div className="door saffron">
              <h3>For Schools</h3>
              <p>
                AI Campus-in-a-Box — lab, curriculum, and teachers, run on our platform. Meet the
                2026-27 mandate properly, not on paper.
              </p>
              <Link to="/schools" className="btn btn-blue">
                Explore School Partnerships
              </Link>
            </div>
            <div className="door">
              <h3>For Universities</h3>
              <p>
                A Centre for Applied AI on your campus — industry-grade AI education badged with
                your institution.
              </p>
              <Link to="/universities" className="btn btn-blue">
                Explore University Partnerships
              </Link>
            </div>
            <div className="door green">
              <h3>For Students &amp; Parents</h3>
              <p>
                Learn at the flagship — the 6-month AI Career Program for graduates and Young AI
                Innovators weekend batches for school students.
              </p>
              <a href="#programs" className="btn btn-blue">
                See Student Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Flagship */}
      <section className="curr" id="flagship">
        <div className="wrap split">
          <div>
            <span className="kicker" style={{ color: '#ffd9a3' }}>The Flagship</span>
            <h2>What "AI-native" actually means</h2>
            <p className="sub" style={{ marginBottom: 18 }}>
              Our Jalandhar campus is not a computer institute with a new signboard. It is a
              working model of the classroom of 2030:
            </p>
            <ul className="feat" style={{ color: '#e6ebf8' }}>
              <li>Adaptive AI-tutor learning paced to each student, with human coaches on the floor</li>
              <li>Project studios — every module ends with something you built, not a certificate</li>
              <li>Portfolio outcomes: working models, apps and dashboards you can show</li>
              <li>Instruction in English, Hindi and Punjabi</li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 8 }}>
              Book a Campus Visit
            </Link>
          </div>
          <div aria-hidden="true">
            <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI-native classroom illustration">
              <rect x="0" y="0" width="480" height="340" rx="20" fill="rgba(255,255,255,.05)" />
              <rect x="60" y="70" width="360" height="180" rx="10" fill="#101d45" />
              <rect x="80" y="90" width="150" height="14" rx="7" fill="#2456e6" />
              <rect x="80" y="116" width="220" height="10" rx="5" fill="#39508f" />
              <rect x="80" y="136" width="180" height="10" rx="5" fill="#39508f" />
              <rect x="80" y="166" width="90" height="60" rx="8" fill="#ff9933" />
              <rect x="185" y="166" width="90" height="60" rx="8" fill="#5b83f0" />
              <rect x="290" y="166" width="90" height="60" rx="8" fill="#18a05e" />
              <rect x="210" y="250" width="60" height="16" fill="#8fa3d6" />
              <rect x="150" y="266" width="180" height="12" rx="6" fill="#8fa3d6" />
              <circle cx="410" cy="60" r="26" fill="#ff9933" />
              <text x="399" y="67" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#fff">AI</text>
            </svg>
          </div>
        </div>
      </section>

      {/* 5. Student programs */}
      <section id="programs">
        <div className="wrap">
          <span className="kicker">Student Programs · Flagship Campus</span>
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

      {/* Student FAQ (compact) */}
      <section id="faq" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="kicker">Student FAQ</span>
          <h2 style={{ marginBottom: 28 }}>Common questions</h2>
          <details>
            <summary>I have no coding background. Can I join the AI Career Program?</summary>
            <p>
              Yes. The program starts from absolute basics — Module 1 assumes zero programming
              knowledge. What matters is 10–12 hours of committed effort per week.
            </p>
          </details>
          <details>
            <summary>Do you guarantee placement?</summary>
            <p>
              No one can honestly guarantee a job, and we won't pretend to. What we do provide:
              portfolio-grade projects, structured interview preparation, and active placement
              assistance through local, remote and metro hiring pipelines — with a transparent
              placement report published for every cohort.
            </p>
          </details>
          <details>
            <summary>I was planning to go abroad but plans changed. Is this for me?</summary>
            <p>
              Many of our applicants are in exactly this position. The AI Career Program is
              designed as a serious domestic alternative — building skills that are in demand
              across India and globally, at a fraction of a study-abroad budget.
            </p>
          </details>
          <details>
            <summary>What's the batch size and language of teaching?</summary>
            <p>
              Maximum 20 students per batch. Instruction is in a natural mix of English, Hindi and
              Punjabi — concepts explained the way you understand best, with materials in English.
            </p>
          </details>
          <details>
            <summary>How does the early bird discount work?</summary>
            <p>
              The first 40 enrolments across our founding batches get the discounted fee, locked in
              for their full program. Submit the form or call us to reserve — a reservation holds
              your discount for 7 days.
            </p>
          </details>
          <details>
            <summary>Where is the campus?</summary>
            <p>
              Our campus is in central Jalandhar (address announced to registered applicants;
              campus visits available during counselling). Weekday and weekend batches are offered.
            </p>
          </details>
        </div>
      </section>

      {/* 6. How the model works */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="kicker">How the model works</span>
          <h2>One campus becomes a network</h2>
          <p className="sub">
            The flagship proves it. Schools and colleges license it. The Teacher Academy certifies
            and sustains it.
          </p>
          <Flywheel />
        </div>
      </section>

      {/* 7. CTA band */}
      <CtaBand
        title="See it before you believe it."
        sub="Visit the flagship in Jalandhar, or invite us to your campus."
        buttons={[
          { label: 'Partner With Us', to: '/contact' },
          { label: 'Book a Campus Visit', to: '/contact', variant: 'btn-ghost' },
        ]}
      />
    </>
  )
}
