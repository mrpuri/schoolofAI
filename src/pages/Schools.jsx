import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { SchoolsArt } from '../components/Illustrations.jsx'

export default function Schools() {
  return (
    <>
      <PageMeta
        title="For Schools — AI Campus-in-a-Box | India School Of AI"
        description="CBSE has made AI compulsory from Class 3 (2026-27); Punjab has put AI in every government school. We provide the lab, curriculum, platform and certified teachers — AI Campus-in-a-Box for your school."
      />

      {/* 1. Hero */}
      <header className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <span className="kicker">For Schools</span>
            <h1>AI is now compulsory. Teaching it well is optional — unless you partner with us.</h1>
            <p>
              CBSE has made AI &amp; Computational Thinking compulsory from Class 3 starting 2026-27.
              Punjab has put AI in every government school. Most schools have no trained teachers, no
              lab, and no depth behind the checkbox. We fix all three.
            </p>
          </div>
          <div className="page-hero-art" aria-hidden="true">
            <SchoolsArt />
          </div>
        </div>
      </header>

      {/* 2. The offering */}
      <section id="offering">
        <div className="wrap">
          <span className="kicker">The Offering</span>
          <h2>AI Campus-in-a-Box</h2>
          <p className="sub">
            Everything a school needs to deliver the AI mandate properly — as one accountable
            partnership, not four vendors.
          </p>
          <div className="pillars" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
            <div className="pillar">
              <div className="ico" style={{ background: '#e3ebff' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2456e6" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M8 21h8M12 18v3" />
                </svg>
              </div>
              <h3>Lab &amp; Infrastructure</h3>
              <p>
                AI/coding lab design and setup on your premises — hardware specification included,
                sized to your student strength and budget.
              </p>
            </div>
            <div className="pillar">
              <div className="ico" style={{ background: '#fff1de' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e07f1a" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13z" />
                  <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-2.5" />
                </svg>
              </div>
              <h3>Curriculum &amp; Platform</h3>
              <p>
                Mandate-aligned (CBSE/PSEB), grade-wise Class 3–12 curriculum delivered on our
                adaptive learning platform — in English, Hindi and Punjabi.
              </p>
            </div>
            <div className="pillar">
              <div className="ico" style={{ background: '#dff5ea' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#18a05e" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
                </svg>
              </div>
              <h3>Teachers</h3>
              <p>
                Our certified instructors on your campus — or your own teachers trained and
                certified by our Teacher Academy. Either way, no untrained substitutions.
              </p>
            </div>
            <div className="pillar">
              <div className="ico" style={{ background: '#e3ebff' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2456e6" strokeWidth="2">
                  <path d="M4 19h16M6 16l4-6 3 3 5-8" />
                </svg>
              </div>
              <h3>Outcomes &amp; Showcase</h3>
              <p>
                Student portfolios, quarterly parent showcases, and inter-school AI olympiad entry
                — visible proof of learning, every term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engagement models */}
      <section className="curr" id="models">
        <div className="wrap">
          <span className="kicker" style={{ color: '#ffd9a3' }}>Engagement Models</span>
          <h2>Three ways to partner</h2>
          <p className="sub">Pricing shared on request, sized to your school. All tiers renew annually — we only win if it works.</p>
          <div className="tiers">
            <div className="tier">
              <h3>Starter</h3>
              <div className="tier-price">Pricing on request</div>
              <ul className="feat">
                <li>Teacher training &amp; certification</li>
                <li>Grade-wise curriculum license (Class 3–12)</li>
                <li>Board-alignment support (CBSE/PSEB)</li>
              </ul>
            </div>
            <div className="tier featured">
              <span className="tier-badge">Most chosen</span>
              <h3>Standard</h3>
              <div className="tier-price">Pricing on request</div>
              <ul className="feat">
                <li>Everything in Starter</li>
                <li>Full AI lab setup on your premises</li>
                <li>Adaptive learning platform for all students</li>
                <li>Trained teachers — ours or yours, certified</li>
              </ul>
            </div>
            <div className="tier">
              <h3>Flagship Partner</h3>
              <div className="tier-price">Pricing on request</div>
              <ul className="feat">
                <li>Everything in Standard</li>
                <li>Co-branded "AI base school" status</li>
                <li>Inter-school AI olympiad hosting</li>
                <li>Priority access to new curriculum releases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why us over lab vendors */}
      <section>
        <div className="wrap prose">
          <span className="kicker">Why Schools Choose Us</span>
          <h2>Lab vendors drop hardware and leave. We stay accountable.</h2>
          <p>
            The market is filling with vendors who will sell your school twenty computers, a
            robotics kit, and a ribbon-cutting ceremony. What happens in that room for the next
            three years is your problem.
          </p>
          <p>
            We run a working AI-native campus ourselves in Jalandhar. We certify the teachers who
            stand in your classrooms. And our contracts are renewal-based, tied to learning
            outcomes — so we are only successful when your students actually learn. That is the
            difference between buying a lab and running one.
          </p>
        </div>
      </section>

      {/* 5. Teacher Academy strip */}
      <div className="strip">
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <b style={{ fontSize: 24 }}>India needs 10 million AI-trained teachers.</b>
            <span style={{ fontSize: 16, marginTop: 6 }}>We certify yours — teacher-training-only engagements welcome.</span>
          </div>
          <Link to="/contact" className="btn btn-primary">Ask About Teacher Training</Link>
        </div>
      </div>

      {/* 6. Process timeline */}
      <section id="process">
        <div className="wrap">
          <span className="kicker">The Process</span>
          <h2>From first call to running classrooms</h2>
          <div className="timeline">
            <div className="step">
              <b>1</b>
              <h3>Campus audit</h3>
              <p>We visit, assess your infrastructure, teachers and timetable.</p>
            </div>
            <div className="step">
              <b>2</b>
              <h3>Proposal</h3>
              <p>A tier recommendation with scope, timeline and pricing.</p>
            </div>
            <div className="step">
              <b>3</b>
              <h3>Setup</h3>
              <p>Lab build-out and platform onboarding in 4–6 weeks.</p>
            </div>
            <div className="step">
              <b>4</b>
              <h3>Launch</h3>
              <p>Classes begin; your teachers complete certification.</p>
            </div>
            <div className="step">
              <b>5</b>
              <h3>Ongoing delivery</h3>
              <p>Continuous delivery, showcases, and an annual outcomes review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. School FAQ */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="kicker">School FAQ</span>
          <h2 style={{ marginBottom: 28 }}>What principals ask us</h2>
          <details open>
            <summary>Which boards do you align with?</summary>
            <p>
              CBSE and PSEB are fully covered, including the 2026-27 compulsory AI requirement for
              Classes 3–8. ICSE schools: our curriculum maps cleanly onto the ICSE computing
              framework — we'll show you the mapping during the audit.
            </p>
          </details>
          <details>
            <summary>What happens to our existing computer teachers?</summary>
            <p>
              They get better. Existing computer teachers are the best candidates for our Teacher
              Academy certification — they keep their roles and gain an AI teaching credential,
              rather than being displaced.
            </p>
          </details>
          <details>
            <summary>Is there a minimum school size?</summary>
            <p>
              The Starter tier (training + curriculum) works for any size. Full lab setups make
              economic sense from roughly 300 students upward — the campus audit will give you a
              straight answer either way.
            </p>
          </details>
          <details>
            <summary>Can CSR or government funding cover this?</summary>
            <p>
              Often, yes. Tinkering-lab and digital-education grants, plus corporate CSR programs,
              regularly fund exactly this kind of infrastructure. We assist with the application
              paperwork as part of the proposal stage.
            </p>
          </details>
        </div>
      </section>

      {/* 8. CTA + lead form */}
      <section className="enroll" id="proposal">
        <div className="wrap split">
          <div>
            <span className="kicker" style={{ color: '#ffd9a3' }}>Next Step</span>
            <h2>Request a school partnership proposal</h2>
            <p style={{ color: '#b9c4e2', fontSize: 17, marginBottom: 24 }}>
              Tell us about your school and we'll come back with a campus-audit slot and a tailored
              proposal. No obligation — and the best way to evaluate us is to visit the flagship
              first.
            </p>
            <ul className="feat" style={{ color: '#e6ebf8' }}>
              <li>Campus audit and proposal are free</li>
              <li>Setup in 4–6 weeks once agreed</li>
              <li>Renewal-based contracts — accountability built in</li>
            </ul>
          </div>
          <LeadForm
            title="School partnership enquiry"
            note="Fill this in and we'll reach out within 24 hours."
            variant="school"
            defaultAudience="School Leader"
            submitLabel="Request a Proposal"
          />
        </div>
      </section>
    </>
  )
}
