import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta.jsx'
import { GuideArt } from '../components/Illustrations.jsx'

const GLOSSARY = [
  ['Artificial Intelligence (AI)', 'Software that can do tasks which normally need human thinking — recognising faces, answering questions, spotting patterns. (Hindi: कृत्रिम बुद्धिमत्ता · Punjabi: ਬਣਾਵਟੀ ਬੁੱਧੀ)'],
  ['Machine Learning (ML)', "Teaching a computer by showing it examples instead of writing rules. Show it 10,000 photos of mangoes and it learns what a mango looks like."],
  ['Model', 'The "brain" that comes out of machine learning — a program that has learned from data and can now make predictions.'],
  ['Training', 'The process of a model learning from examples. Like practice (अभ्यास / ਅਭਿਆਸ) before an exam.'],
  ['Data', 'The examples a model learns from — text, photos, numbers, sound. More good data usually means a better model.'],
  ['Algorithm', 'A step-by-step recipe a computer follows. Every model is built on one.'],
  ['Generative AI', 'AI that creates new things — essays, images, code, music — instead of only recognising existing ones. ChatGPT is the famous example.'],
  ['LLM (Large Language Model)', 'A very large model trained on huge amounts of text so it can read and write language. The engine behind chatbots.'],
  ['Prompt', 'The instruction you type to an AI. Writing clear prompts is a real skill — like asking a good question in class.'],
  ['Chatbot', 'A program you talk to in normal language. Some are simple scripts; modern ones run on LLMs.'],
  ['Computer Vision', 'AI that understands images and video — reading number plates, checking crops, spotting defects on a production line.'],
  ['Neural Network', 'A model design loosely inspired by the brain — layers of simple units that together learn complicated patterns.'],
  ['Hallucination', 'When an AI confidently gives a wrong answer. Important to know: AI output must be checked, not blindly trusted.'],
  ['AI Ethics', 'The rules and judgement for using AI responsibly — fairness, privacy, honesty about what is AI-made. (Part of every good curriculum, including Punjab\'s.)'],
  ['Automation', 'Using machines or software to do repetitive work. AI extends this from muscle-work to some kinds of brain-work.'],
]

const MYTHS = [
  ['“AI will take all the jobs.”', 'AI changes jobs more than it deletes them. India expects 32% growth in AI hiring in 2026 — the risk is being untrained, not being replaced.'],
  ['“You need IIT to work in AI.”', '1 in 5 AI learners in India now comes from a tier-2 city. Portfolios beat pedigrees — what you have built matters more than where you studied.'],
  ['“A 2-week certificate is enough.”', 'A real foundation takes months of building, not a weekend of watching. Anyone selling shortcuts is selling paper.'],
  ['“AI education = expensive laptops.”', 'A mid-range computer and an internet connection are enough to learn seriously. What is scarce is a good teacher and a real curriculum — not hardware.'],
]

export default function HowToAI() {
  return (
    <>
      <PageMeta
        title="How to AI — A Straight-Talking Guide | India School Of AI"
        description="How to learn AI in Jalandhar and Punjab — a plain-language guide for students, parents, teachers and principals. AI course roadmaps, CBSE 2026 AI curriculum, AI lab setup for schools, AI teacher training."
      />

      {/* 1. Hero */}
      <header className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <span className="kicker">How to AI</span>
            <h1>A straight-talking guide for students, parents, teachers and principals</h1>
            <p>No jargon, no hype, in the language of Punjab. This is how we think about teaching AI — read it even if you never enrol with us.</p>
          </div>
          <div className="page-hero-art" aria-hidden="true">
            <GuideArt />
          </div>
        </div>
      </header>

      {/* 2. Choose your path */}
      <section id="paths">
        <div className="wrap">
          <span className="kicker">Choose Your Path</span>
          <h2>Where are you starting from?</h2>
          <div className="paths">
            <div className="path">
              <h3><span>🎓</span>I'm a student (16+)</h3>
              <p>
                <b>The realistic roadmap:</b> Python → data analysis → machine learning →
                generative AI → a portfolio of things you built. Done seriously, that is 6–12
                months of consistent work — not a fortnight.
              </p>
              <p>
                <b>What jobs actually exist:</b> data analyst, ML engineer, AI application
                developer, prompt/AI-ops roles — locally, remotely, and in the metros. India's AI
                hiring is projected to grow 32% in 2026.
              </p>
              <p>
                <b>What to ignore:</b> certificate mills promising jobs in 14 days. Employers open
                your portfolio, not your certificate folder.
              </p>
            </div>
            <div className="path">
              <h3><span>👪</span>I'm a parent</h3>
              <p>
                <b>What AI education means for Class 3–12:</b> not screen addiction — computational
                thinking, logic, and building things. Punjab's new curriculum covers AI concepts,
                coding basics and safe, ethical use, grade by grade.
              </p>
              <p>
                <b>Screen-time vs building-time:</b> the difference is whether the child consumes
                or creates. Two hours making a chatbot is not the same as two hours of reels.
              </p>
              <p>
                <b>Questions to ask any institute (including us):</b> Who teaches, and what have
                they built? What will my child make this term? Can I see a showcase? What exactly
                does the fee include?
              </p>
            </div>
            <div className="path">
              <h3><span>🧑‍🏫</span>I'm a teacher</h3>
              <p>
                <b>Becoming AI-certified:</b> structured training on AI concepts, classroom tools
                and the new curriculum — our Teacher Academy runs certification for exactly this.
              </p>
              <p>
                <b>What NISHTHA/board training covers:</b> orientation and awareness. Where it
                stops: hands-on depth, project teaching, and keeping pace as tools change yearly.
              </p>
              <p>
                <b>The career upside:</b> India needs roughly 10 million AI-trained teachers.
                Being early makes you the most valuable teacher in your school, not the most
                threatened.
              </p>
            </div>
            <div className="path">
              <h3><span>🏫</span>I'm a principal / dean</h3>
              <p>
                <b>The 2026-27 compliance checklist:</b> mandate-aligned curriculum for Classes
                3–8 (CBSE) · trained teachers on record · working lab access · assessment and
                showcase evidence.
              </p>
              <p>
                <b>What a real AI lab needs beyond computers:</b> a curriculum with grade-wise
                progression, certified humans in the room, and someone accountable for outcomes
                after the ribbon is cut.
              </p>
              <p>
                <b>Build vs partner:</b> build if you have the teachers and the time to keep
                content current; partner if you want it running well this academic year.{' '}
                <Link to="/schools" style={{ color: 'var(--blue)', fontWeight: 700 }}>See how we partner →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Myth vs reality */}
      <section className="curr" id="myths">
        <div className="wrap">
          <span className="kicker" style={{ color: '#ffd9a3' }}>Myth vs Reality</span>
          <h2>Four things people get wrong about AI</h2>
          <div className="myths">
            {MYTHS.map(([myth, real]) => (
              <div className="myth" key={myth}>
                <div className="m-myth">✗ {myth}</div>
                <div className="m-real"><b>Reality:</b> {real}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Glossary */}
      <section id="glossary">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="kicker">Plain-Language Glossary</span>
          <h2 style={{ marginBottom: 28 }}>15 AI terms, explained simply</h2>
          {GLOSSARY.map(([term, def]) => (
            <details key={term}>
              <summary>{term}</summary>
              <p>{def}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 5. Soft CTA */}
      <section className="cta-band">
        <div className="wrap">
          <h2>Want this taught properly?</h2>
          <p>To your child, your students, or your teachers — that's what we do.</p>
          <div className="btns">
            <Link to="/schools" className="btn btn-primary">For Schools</Link>
            <Link to="/universities" className="btn btn-ghost">For Universities</Link>
            <Link to="/#programs" className="btn btn-ghost">For Students &amp; Parents</Link>
          </div>
        </div>
      </section>
    </>
  )
}
