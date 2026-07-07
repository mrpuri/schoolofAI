import { PageMeta } from '../components/PageMeta.jsx'
import LeadForm from '../components/LeadForm.jsx'

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Contact Us | India School Of AI — Jalandhar"
        description="Talk to India School Of AI — partnership proposals, campus visits, admissions, teacher training, or investment. Flagship campus in Jalandhar, Punjab."
      />

      {/* 1. Hero */}
      <header className="page-hero">
        <div className="wrap">
          <span className="kicker">Contact Us</span>
          <h1>Let's talk.</h1>
          <p>
            Partnership proposals · campus visits · admissions · teacher training · investment —
            one form, and the right person replies.
          </p>
        </div>
      </header>

      {/* 2. Lead form */}
      <section className="enroll" id="form">
        <div className="wrap split">
          <div>
            <span className="kicker" style={{ color: '#ffd9a3' }}>Write To Us</span>
            <h2>You'll hear back within 24 hours</h2>
            <p style={{ color: '#b9c4e2', fontSize: 17, marginBottom: 24 }}>
              Whether you run a school, lead a college, teach, invest, or are choosing a program
              for yourself or your child — tell us who you are and what you need.
            </p>
            <ul className="feat" style={{ color: '#e6ebf8' }}>
              <li>School &amp; university partnership proposals</li>
              <li>Student admissions &amp; free trial classes</li>
              <li>Teacher Academy certification enquiries</li>
              <li>Investor &amp; institutional conversations</li>
            </ul>
          </div>
          <LeadForm
            title="Send us a message"
            note="Fill this in and you'll hear from us within 24 hours."
            submitLabel="Send Message"
          />
        </div>
      </section>

      {/* 3. Direct contact */}
      <section id="direct">
        <div className="wrap">
          <span className="kicker">Reach Us Directly</span>
          <h2>Prefer email or a call?</h2>
          <div className="contact-blocks">
            <div className="cblock">
              <div className="ico" style={{ background: '#e3ebff' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2456e6" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
              </div>
              <h3>Email</h3>
              <a href="mailto:founder@amplificable.com">founder@amplificable.com</a>
            </div>
            <div className="cblock">
              <div className="ico" style={{ background: '#dff5ea' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#18a05e" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3>Phone / WhatsApp</h3>
              <a href="tel:+91XXXXXXXXXX">+91-XXXXX-XXXXX</a>
            </div>
            <div className="cblock">
              <div className="ico" style={{ background: '#fff1de' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e07f1a" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>Campus</h3>
              <p>Jalandhar, Punjab</p>
              <p style={{ fontSize: 13.5 }}>Campus address shared with confirmed visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Campus visit CTA */}
      <section className="cta-band">
        <div className="wrap">
          <h2>The best pitch is a walk through the flagship.</h2>
          <p>Book a visit — see the AI-native classroom running before you decide anything.</p>
          <div className="btns">
            <a href="#form" className="btn btn-primary">Book a Visit</a>
          </div>
        </div>
      </section>
    </>
  )
}
