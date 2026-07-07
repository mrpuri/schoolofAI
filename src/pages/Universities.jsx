import { PageMeta } from '../components/PageMeta.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { UniversitiesArt } from '../components/Illustrations.jsx'

export default function Universities() {
  return (
    <>
      <PageMeta
        title="For Universities — Centre for Applied AI | India School Of AI"
        description="Set up a Centre for Applied AI on your campus — industry-grade AI education run by India School Of AI, badged with your institution. Faculty development, placement pipelines, credit-linked programs."
      />

      {/* 1. Hero */}
      <header className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <span className="kicker">For Universities &amp; Colleges</span>
            <h1>Your students chose you over Canada. Give them a reason to be glad they did.</h1>
            <p>
              Set up a Centre for Applied AI on your campus — industry-grade AI education, run by
              India School Of AI, badged with your institution.
            </p>
          </div>
          <div className="page-hero-art" aria-hidden="true">
            <UniversitiesArt />
          </div>
        </div>
      </header>

      {/* 2. The offering */}
      <section id="centre">
        <div className="wrap">
          <span className="kicker">The Offering</span>
          <h2>Centre for Applied AI</h2>
          <p className="sub">What your institution gets, end to end:</p>
          <div className="pillars" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
            <div className="pillar">
              <div className="ico" style={{ background: '#e3ebff' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2456e6" strokeWidth="2">
                  <path d="M12 2 3 7l9 5 9-5-9-5zM3 12l9 5 9-5M3 17l9 5 9-5" />
                </svg>
              </div>
              <h3>AI Career Program, on campus</h3>
              <p>
                Our 6-month program delivered at your institution — credit-linked or as an add-on
                certification alongside the degree.
              </p>
            </div>
            <div className="pillar">
              <div className="ico" style={{ background: '#fff1de' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e07f1a" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
                </svg>
              </div>
              <h3>Faculty development (FDP)</h3>
              <p>
                Your professors certified on modern AI tooling — so the capability stays on your
                campus, not just in our program.
              </p>
            </div>
            <div className="pillar">
              <div className="ico" style={{ background: '#dff5ea' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#18a05e" strokeWidth="2">
                  <path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10.5c-.7.6-1 1.5-1 2.5H9c0-1-.3-1.9-1-2.5A6 6 0 0 1 12 3z" />
                </svg>
              </div>
              <h3>Projects &amp; research cell</h3>
              <p>
                Final-year project mentorship plus an AI research and innovation cell that gives
                ambitious students somewhere to go.
              </p>
            </div>
            <div className="pillar">
              <div className="ico" style={{ background: '#e3ebff' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2456e6" strokeWidth="2">
                  <path d="M4 19h16M6 16l4-6 3 3 5-8" />
                </svg>
              </div>
              <h3>Placement pipeline</h3>
              <p>
                Access to our local, remote and metro hiring pipelines — with a transparent
                per-cohort outcomes report. No inflated placement claims, ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why this matters */}
      <section className="curr">
        <div className="wrap prose" style={{ color: '#e6ebf8' }}>
          <span className="kicker" style={{ color: '#ffd9a3' }}>Why This Matters</span>
          <h2>The post-study-abroad moment is yours to win</h2>
          <p style={{ color: '#c7d1ec' }}>
            Punjab's study-abroad boom has cooled, and a generation of fee-paying students is
            choosing to stay — if staying is worth it. A Centre for Applied AI is admissions
            differentiation you can put on a hoarding: industry-grade AI education inside your
            campus, not a bus ride to a metro.
          </p>
          <p style={{ color: '#c7d1ec' }}>
            It also compounds institutionally: NEP 2020 and NAAC innovation criteria reward exactly
            this kind of industry-embedded, outcomes-reported program — and retention improves when
            your most ambitious students no longer need to leave for Bengaluru or Brampton to learn
            something real.
          </p>
        </div>
      </section>

      {/* 4. Commercial model */}
      <section>
        <div className="wrap">
          <span className="kicker">Commercial Model</span>
          <h2>Start with a pilot. Scale on evidence.</h2>
          <div className="pillars" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            <div className="pillar">
              <h3>Revenue share</h3>
              <p>We run the Centre; revenue is shared. Numbers on request, sized to your student strength.</p>
            </div>
            <div className="pillar">
              <h3>Fixed license</h3>
              <p>A flat annual license for the program, platform and faculty development. Numbers on request.</p>
            </div>
            <div className="pillar" style={{ border: '2px solid var(--saffron)' }}>
              <h3>Pilot batch</h3>
              <p>
                One semester, one department, measurable outcomes — then decide whether to scale.
                The lowest-risk way to start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA + lead form */}
      <section className="enroll" id="call">
        <div className="wrap split">
          <div>
            <span className="kicker" style={{ color: '#ffd9a3' }}>Next Step</span>
            <h2>Book an exploratory call for your campus</h2>
            <p style={{ color: '#b9c4e2', fontSize: 17, marginBottom: 24 }}>
              A 30-minute conversation with the founder about your institution, your students, and
              whether a Centre for Applied AI makes sense — starting with a pilot batch if it does.
            </p>
            <ul className="feat" style={{ color: '#e6ebf8' }}>
              <li>Pilot option: one semester, one department</li>
              <li>Transparent per-cohort outcomes reporting</li>
              <li>Credit-linked or certification add-on formats</li>
            </ul>
          </div>
          <LeadForm
            title="University partnership enquiry"
            note="Fill this in and we'll reach out within 24 hours."
            variant="university"
            defaultAudience="University / College"
            submitLabel="Book an Exploratory Call"
          />
        </div>
      </section>
    </>
  )
}
