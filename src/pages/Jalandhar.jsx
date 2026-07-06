import { Link } from 'react-router-dom'

export default function Jalandhar() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="kicker">Jalandhar Campus</span>
          <h1>Punjab's home for practical AI education</h1>
          <p>
            Our campus in central Jalandhar runs both the AI Career Program and Young AI
            Innovators weekend batches, plus AI lab partnerships for local schools — all built
            around Punjab's new AI curriculum.
          </p>
        </div>
      </header>

      <section className="curr" id="curriculum">
        <div className="wrap">
          <span className="kicker" style={{ color: '#ffd9a3' }}>Curriculum Snapshot</span>
          <h2>What you'll actually learn</h2>
          <p className="sub">Practical, current, and updated every cohort as the AI landscape moves.</p>
          <div className="tracks">
            <div className="track">
              <h3>AI Career Program — 6 months</h3>
              <div className="mod"><b>M1</b><span>Python programming &amp; problem solving from zero</span></div>
              <div className="mod"><b>M2</b><span>Data analysis, SQL &amp; visualization</span></div>
              <div className="mod"><b>M3</b><span>Machine learning: models, evaluation, real datasets</span></div>
              <div className="mod"><b>M4</b><span>Deep learning &amp; computer vision fundamentals</span></div>
              <div className="mod"><b>M5</b><span>Generative AI: LLMs, prompt engineering, AI agents &amp; APIs</span></div>
              <div className="mod"><b>M6</b><span>Capstone project + interview &amp; placement sprint</span></div>
            </div>
            <div className="track">
              <h3>Young AI Innovators — ongoing weekends</h3>
              <div className="mod"><b>L1</b><span>Logic &amp; creativity with Scratch and block coding</span></div>
              <div className="mod"><b>L2</b><span>First steps in Python — games &amp; art with code</span></div>
              <div className="mod"><b>L3</b><span>How AI works: train your own simple models</span></div>
              <div className="mod"><b>L4</b><span>Chatbots, image AI &amp; smart-device projects</span></div>
              <div className="mod"><b>L5</b><span>Robotics &amp; sensors (Builder level)</span></div>
              <div className="mod"><b>L6</b><span>AI safety, ethics &amp; being smart online</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="schools">
        <div className="wrap split">
          <div>
            <span className="kicker">For Schools</span>
            <h2>Partner with us for your AI lab</h2>
            <p className="sub" style={{ marginBottom: 18 }}>
              Punjab has made AI part of the core school curriculum. We help schools deliver it
              well — AI lab setup, a ready-to-teach curriculum, and hands-on training for your
              teachers.
            </p>
            <ul className="feat">
              <li>Turnkey AI &amp; coding lab design for your campus</li>
              <li>Teacher training &amp; certification workshops</li>
              <li>Curriculum aligned with PSEB / CBSE computer science</li>
              <li>Inter-school AI project competitions &amp; showcases</li>
            </ul>
            <Link to="/contact" className="btn btn-blue" style={{ marginTop: 8 }}>
              Request a School Partnership Call
            </Link>
          </div>
          <div aria-hidden="true">
            <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="School AI lab illustration">
              <rect x="0" y="0" width="480" height="340" rx="20" fill="#e9effb" />
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

      <section id="faq" style={{ background: 'var(--bg)' }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="kicker">FAQ</span>
          <h2 style={{ marginBottom: 28 }}>Common questions</h2>
          <details open>
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
              The first 40 enrolments across our founding batches get the discounted fee shown
              above, locked in for their full program. Submit the form or call us to reserve — a
              reservation holds your discount for 7 days.
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
    </>
  )
}
