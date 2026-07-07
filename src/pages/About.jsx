import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta.jsx'
import Flywheel from '../components/Flywheel.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { AboutArt } from '../components/Illustrations.jsx'

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us — The Operating System for AI-Native Education | India School Of AI"
        description="We're building the operating system for AI-native education in India — starting from Jalandhar, Punjab, where India's AI mandate lands first. Flagship campus, school and university partnerships, Teacher Academy."
      />

      {/* 1. Hero */}
      <header className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <span className="kicker">About Us</span>
            <h1>We're building the operating system for AI-native education in India.</h1>
            <p>Starting from Jalandhar, Punjab — where India's AI mandate lands first.</p>
          </div>
          <div className="page-hero-art" aria-hidden="true">
            <AboutArt />
          </div>
        </div>
      </header>

      {/* 2. The thesis */}
      <section id="thesis">
        <div className="wrap prose">
          <span className="kicker">The Thesis</span>
          <h2>The proof exists. The infrastructure doesn't.</h2>
          <p>
            China made AI education state infrastructure: mandatory K-12 AI curriculum and a
            national network of designated AI base schools. The United States proved the AI-native
            school model — campuses where AI tutors compress academics into hours and free the rest
            of the day for building. And China's Squirrel AI proved that physical AI-learning
            centres scale as a network, thousands of them, in cities most tech companies never
            visit.
          </p>
          <p>
            Now India has issued its own mandate: AI compulsory in CBSE schools from 2026-27,
            50,000 new tinkering labs funded, roughly ten million teachers to be trained. The
            opportunity is identical — and almost nobody is building the delivery infrastructure
            for tier-2 and tier-3 India, in its own languages.
          </p>
          <p>We are. Starting in Jalandhar.</p>
        </div>
      </section>

      {/* 3. The model */}
      <section className="curr" id="model">
        <div className="wrap">
          <span className="kicker" style={{ color: '#ffd9a3' }}>The Model</span>
          <h2>Prove. Scale. Sustain.</h2>
          <Flywheel />
          <div className="flywheel-notes">
            <div>
              <h3 style={{ color: '#ffd9a3' }}>1 · Flagship (prove)</h3>
              <p style={{ color: '#aab7da' }}>
                The Jalandhar campus is our working proof: AI-native classrooms, real students,
                published outcomes. Everything we sell, we run ourselves first.
              </p>
            </div>
            <div>
              <h3 style={{ color: '#ffd9a3' }}>2 · Partnerships (scale)</h3>
              <p style={{ color: '#aab7da' }}>
                Schools license AI Campus-in-a-Box; colleges host a Centre for Applied AI. One
                campus becomes a network without us building every building.
              </p>
            </div>
            <div>
              <h3 style={{ color: '#ffd9a3' }}>3 · Teacher Academy (moat)</h3>
              <p style={{ color: '#aab7da' }}>
                Certified teachers and credentials sustain the network — and every certified
                teacher makes the next partnership easier to launch and harder to replace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Founder */}
      <section id="founder">
        <div className="wrap split">
          <div aria-hidden="true" style={{ maxWidth: 380 }}>
            <svg viewBox="0 0 380 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Founder photo placeholder">
              <rect width="380" height="420" rx="20" fill="#e9effb" />
              <circle cx="190" cy="160" r="70" fill="#c6d2ee" />
              <path d="M70 420 Q70 300 190 300 Q310 300 310 420 Z" fill="#c6d2ee" />
              <text x="190" y="400" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#5b6478">Founder photo</text>
            </svg>
          </div>
          <div>
            <span className="kicker">Founder</span>
            <h2>Why Jalandhar</h2>
            <p className="sub" style={{ marginBottom: 18 }}>
              [Founder name] — [3–4 line bio to be supplied: background, what they built before,
              why education, why now.]
            </p>
            <div className="prose">
              <p style={{ fontStyle: 'italic', color: 'var(--muted)' }}>
                "I could have started this in Gurgaon or Bengaluru, where it would have been easier
                and mattered less. Jalandhar is where the mandate meets the gap: a city full of
                ambitious families who were sold Canada as the only upgrade, at the exact moment
                India made AI education compulsory and nobody showed up to deliver it. The
                classroom of 2030 shouldn't launch in a metro. It should launch here."
              </p>
              <p style={{ fontSize: 14, color: 'var(--muted)' }}>— [Founder name], Founder, India School Of AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Roadmap */}
      <section style={{ paddingTop: 0 }} id="roadmap">
        <div className="wrap">
          <span className="kicker">Our Roadmap</span>
          <h2>Where this goes</h2>
          <p className="sub">A roadmap, not a list of achievements — we publish outcomes as they happen.</p>
          <div className="miles">
            <div className="mile">
              <b>2026</b>
              <p>Flagship campus opens in Jalandhar · founding batches of the AI Career Program and Young AI Innovators.</p>
            </div>
            <div className="mile">
              <b>2027</b>
              <p>First 5 partner schools running AI Campus-in-a-Box · Teacher Academy launches certification.</p>
            </div>
            <div className="mile">
              <b>2028</b>
              <p>Punjab-wide partner network · first inter-school AI olympiad hosted from Jalandhar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CtaBand
        title="Talk to the founder"
        sub="Partnership proposals, campus visits, press — or investment. Investors and institutional partners: write to founder@amplificable.com."
        buttons={[
          { label: 'Contact Us', to: '/contact' },
          { label: 'Visit the Flagship', to: '/contact', variant: 'btn-ghost' },
        ]}
      />
    </>
  )
}
