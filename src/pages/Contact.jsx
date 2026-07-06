import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="kicker">Get In Touch</span>
          <h1>Reserve your early bird seat</h1>
          <p>
            Fill in the form below or reach out directly — our counsellor will get back to you
            within 24 hours.
          </p>
        </div>
      </header>

      <section className="enroll" id="enroll">
        <div className="wrap split">
          <div>
            <span className="kicker" style={{ color: '#ffd9a3' }}>Registrations Open</span>
            <h2>Founding batches. Early bird pricing.</h2>
            <p style={{ color: '#b9c4e2', fontSize: 17, marginBottom: 24 }}>
              Be part of our first cohorts in Jalandhar and lock in the lowest fees we will ever
              offer. Early bird discount applies to the first 40 enrolments across programs. Free
              counselling session and campus visit for every applicant — no obligation.
            </p>
            <ul className="feat" style={{ color: '#e6ebf8' }}>
              <li>AI Career Program: <b>₹49,999</b> (regular ₹65,000)</li>
              <li>Young AI Innovators: <b>₹2,499/month</b> (regular ₹3,499)</li>
              <li>Free trial class for school students</li>
              <li>Flexible EMI options available</li>
            </ul>
            <p style={{ color: '#8fa0c9', fontSize: 14.5, marginTop: 18 }}>
              Prefer to talk? Call/WhatsApp us at{' '}
              <b style={{ color: '#fff' }}>+91-XXXXX-XXXXX</b> or email{' '}
              <b style={{ color: '#fff' }}>hello@indiaschoolofai.in</b>
            </p>
          </div>
          <div className="form-card">
            <h3>Reserve your early bird seat</h3>
            <p className="fnote">Fill this in and our counsellor will reach out within 24 hours.</p>
            <form onSubmit={handleSubmit}>
              <div className="fgrid">
                <div>
                  <label htmlFor="f-name">Full name *</label>
                  <input id="f-name" required placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="f-phone">Phone / WhatsApp *</label>
                  <input id="f-phone" required type="tel" placeholder="+91" />
                </div>
                <div className="full">
                  <label htmlFor="f-email">Email</label>
                  <input id="f-email" type="email" placeholder="you@example.com" />
                </div>
                <div className="full">
                  <label htmlFor="f-prog">I'm interested in *</label>
                  <select id="f-prog" required defaultValue="">
                    <option value="" disabled>Select a program…</option>
                    <option>AI Career Program (6 months)</option>
                    <option>Young AI Innovators — Grades 5–8</option>
                    <option>Young AI Innovators — Grades 9–12</option>
                    <option>School Partnership / AI Lab</option>
                  </select>
                </div>
                <div className="full">
                  <label htmlFor="f-msg">Anything you'd like to ask?</label>
                  <textarea id="f-msg" rows="3" placeholder="Optional"></textarea>
                </div>
              </div>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: 18 }} type="submit" disabled={submitted}>
                Claim Early Bird Discount
              </button>
              {submitted && (
                <div className="form-msg">
                  ✅ Thank you! Your early bird request is noted. Our counsellor will contact you
                  within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
