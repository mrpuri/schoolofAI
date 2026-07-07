import { useState } from 'react'

// Create a form at https://formspree.io (recipient: founder@amplificable.com)
// and replace YOUR_FORM_ID below.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const AUDIENCES = [
  'School Leader',
  'University / College',
  'Student',
  'Parent',
  'Teacher',
  'Investor',
]

export default function LeadForm({
  title = 'Get in touch',
  note = "Fill this in and you'll hear from us within 24 hours.",
  variant = 'general', // 'general' | 'school' | 'university'
  defaultAudience = '',
  submitLabel = 'Send Message',
}) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="form-card">
      <h3>{title}</h3>
      <p className="fnote">{note}</p>
      <form onSubmit={handleSubmit}>
        <div className="fgrid">
          <div>
            <label htmlFor="lf-name">Full name *</label>
            <input id="lf-name" name="name" required placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="lf-phone">Phone / WhatsApp *</label>
            <input id="lf-phone" name="phone" required type="tel" placeholder="+91" />
          </div>
          <div className="full">
            <label htmlFor="lf-email">Email *</label>
            <input id="lf-email" name="email" required type="email" placeholder="you@example.com" />
          </div>
          <div className="full">
            <label htmlFor="lf-audience">I am a… *</label>
            <select id="lf-audience" name="audience" required defaultValue={defaultAudience}>
              <option value="" disabled>Select one…</option>
              {AUDIENCES.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </div>

          {variant === 'school' && (
            <>
              <div>
                <label htmlFor="lf-role">Your role *</label>
                <input id="lf-role" name="role" required placeholder="Principal, Director, Owner…" />
              </div>
              <div>
                <label htmlFor="lf-org">School name *</label>
                <input id="lf-org" name="school" required placeholder="School name" />
              </div>
              <div>
                <label htmlFor="lf-city">City *</label>
                <input id="lf-city" name="city" required placeholder="City" />
              </div>
              <div>
                <label htmlFor="lf-strength">Student strength</label>
                <input id="lf-strength" name="student_strength" placeholder="e.g. 800" />
              </div>
            </>
          )}

          {variant === 'university' && (
            <>
              <div>
                <label htmlFor="lf-role">Designation *</label>
                <input id="lf-role" name="designation" required placeholder="Dean, Director, Chairman…" />
              </div>
              <div>
                <label htmlFor="lf-org">Institution *</label>
                <input id="lf-org" name="institution" required placeholder="Institution name" />
              </div>
              <div>
                <label htmlFor="lf-city">City *</label>
                <input id="lf-city" name="city" required placeholder="City" />
              </div>
              <div>
                <label htmlFor="lf-strength">Approx. student strength</label>
                <input id="lf-strength" name="student_strength" placeholder="e.g. 3,000" />
              </div>
            </>
          )}

          <div className="full">
            <label htmlFor="lf-msg">Message</label>
            <textarea id="lf-msg" name="message" rows="3" placeholder="Optional"></textarea>
          </div>
        </div>
        <button
          className="btn btn-primary"
          style={{ width: '100%', marginTop: 18 }}
          type="submit"
          disabled={status === 'sending' || status === 'sent'}
        >
          {status === 'sending' ? 'Sending…' : submitLabel}
        </button>
        {status === 'sent' && (
          <div className="form-msg">✅ Thank you — you'll hear from us within 24 hours.</div>
        )}
        {status === 'error' && (
          <div className="form-msg" style={{ background: '#fdeaea', color: '#a03030' }}>
            Something went wrong. Please email us directly at founder@amplificable.com.
          </div>
        )}
      </form>
    </div>
  )
}
