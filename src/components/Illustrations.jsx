// Minimal line-art spot illustrations for page heroes.
// Shared style: thin #5b83f0 strokes on the navy hero, saffron/green accents, soft glow.

const stroke = { fill: 'none', stroke: '#5b83f0', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

function Glow({ cx, cy, r, id }) {
  return (
    <>
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#5b83f0" stopOpacity=".35" />
          <stop offset="1" stopColor="#5b83f0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill={`url(#${id})`} />
    </>
  )
}

export function SchoolsArt() {
  return (
    <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="School with AI lab illustration">
      <Glow cx="210" cy="160" r="150" id="sg" />
      {/* building */}
      <g {...stroke}>
        <rect x="90" y="140" width="200" height="110" rx="6" />
        <path d="M80 140 L190 80 L300 140" />
        <rect x="170" y="190" width="40" height="60" />
        <rect x="112" y="160" width="30" height="26" rx="3" />
        <rect x="238" y="160" width="30" height="26" rx="3" />
        <path d="M60 250 H 340" strokeOpacity=".5" />
      </g>
      {/* flag */}
      <g>
        <path d="M190 80 V 46" {...stroke} />
        <path d="M190 46 h34 l-8 9 8 9 h-34 z" fill="#ff9933" />
      </g>
      {/* AI chip floating */}
      <g>
        <rect x="298" y="66" width="58" height="58" rx="12" fill="none" stroke="#ff9933" strokeWidth="2" />
        <text x="327" y="103" textAnchor="middle" fontFamily="Arial" fontSize="22" fontWeight="bold" fill="#ff9933">AI</text>
        <g {...stroke} strokeOpacity=".7">
          <path d="M298 95 H 272 V 128" />
          <path d="M327 124 V 148 H 300" />
        </g>
        <circle cx="272" cy="132" r="4" fill="#ffffff" />
        <circle cx="296" cy="148" r="4" fill="#18a05e" />
      </g>
    </svg>
  )
}

export function UniversitiesArt() {
  return (
    <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="University with growth curve illustration">
      <Glow cx="210" cy="160" r="150" id="ug" />
      {/* columned building */}
      <g {...stroke}>
        <path d="M100 130 L210 78 L320 130" />
        <path d="M112 130 H 308" />
        <path d="M128 148 V 232 M170 148 V 232 M212 148 V 232 M254 148 V 232 M296 148 V 232" />
        <path d="M112 148 H 308" strokeOpacity=".6" />
        <path d="M96 244 H 324" />
      </g>
      {/* graduation cap */}
      <g>
        <path d="M178 58 L210 44 L242 58 L210 72 Z" fill="#ff9933" />
        <path d="M232 63 V 84" stroke="#ff9933" strokeWidth="2" fill="none" />
        <circle cx="232" cy="88" r="3.5" fill="#ff9933" />
      </g>
      {/* growth curve */}
      <g>
        <path d="M116 300 L180 272 L244 284 L340 236" {...stroke} stroke="#18a05e" strokeOpacity=".9" />
        <circle cx="180" cy="272" r="4" fill="#18a05e" />
        <circle cx="244" cy="284" r="4" fill="#18a05e" />
        <circle cx="340" cy="236" r="5" fill="#ffffff" />
      </g>
    </svg>
  )
}

export function GuideArt() {
  return (
    <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Signpost with learning paths illustration">
      <Glow cx="210" cy="160" r="150" id="gg" />
      {/* post */}
      <path d="M210 70 V 280" {...stroke} />
      <path d="M170 280 H 250" {...stroke} />
      {/* sign boards */}
      <g>
        <path d="M210 92 h108 l16 14 -16 14 h-108 z" fill="#ff9933" />
        <text x="228" y="111" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#20160a">STUDENT</text>
        <path d="M210 148 h-98 l-16 14 16 14 h98 z" fill="none" stroke="#5b83f0" strokeWidth="2" />
        <text x="122" y="167" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#9db3ea">PARENT</text>
        <path d="M210 204 h88 l16 14 -16 14 h-88 z" fill="none" stroke="#18a05e" strokeWidth="2" />
        <text x="226" y="223" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#7fe0ae">TEACHER</text>
      </g>
      {/* stars */}
      <g fill="#ffffff">
        <circle cx="120" cy="72" r="3" />
        <circle cx="322" cy="196" r="3" />
        <circle cx="96" cy="230" r="3" />
      </g>
    </svg>
  )
}

export function AboutArt() {
  return (
    <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Network spreading from one location illustration">
      <Glow cx="210" cy="150" r="150" id="ag" />
      {/* network */}
      <g {...stroke} strokeOpacity=".55">
        <path d="M210 148 L110 92 M210 148 L316 84 M210 148 L94 210 M210 148 L330 196 M210 148 L166 268 M210 148 L282 262" />
        <path d="M110 92 L94 210 M316 84 L330 196" strokeOpacity=".3" />
      </g>
      <g>
        <circle cx="110" cy="92" r="7" fill="none" stroke="#5b83f0" strokeWidth="2" />
        <circle cx="316" cy="84" r="7" fill="none" stroke="#5b83f0" strokeWidth="2" />
        <circle cx="94" cy="210" r="7" fill="none" stroke="#18a05e" strokeWidth="2" />
        <circle cx="330" cy="196" r="7" fill="none" stroke="#18a05e" strokeWidth="2" />
        <circle cx="166" cy="268" r="7" fill="none" stroke="#5b83f0" strokeWidth="2" />
        <circle cx="282" cy="262" r="7" fill="none" stroke="#5b83f0" strokeWidth="2" />
      </g>
      {/* central pin = flagship */}
      <g>
        <path d="M210 100 c-22 0 -38 16 -38 36 c0 26 38 58 38 58 s38 -32 38 -58 c0 -20 -16 -36 -38 -36z" fill="#ff9933" />
        <circle cx="210" cy="138" r="13" fill="#0b1533" />
        <text x="210" y="143" textAnchor="middle" fontFamily="Arial" fontSize="11" fontWeight="bold" fill="#ffffff">AI</text>
      </g>
    </svg>
  )
}

export function ContactArt() {
  return (
    <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conversation illustration">
      <Glow cx="210" cy="160" r="150" id="cg" />
      {/* incoming bubble */}
      <g>
        <rect x="76" y="84" width="180" height="76" rx="18" {...stroke} />
        <path d="M108 160 L100 184 L134 160" {...stroke} />
        <circle cx="130" cy="122" r="5" fill="#5b83f0" />
        <circle cx="166" cy="122" r="5" fill="#5b83f0" />
        <circle cx="202" cy="122" r="5" fill="#5b83f0" />
      </g>
      {/* reply bubble */}
      <g>
        <rect x="184" y="188" width="164" height="66" rx="16" fill="#ff9933" />
        <path d="M316 254 L326 276 L292 254" fill="#ff9933" />
        <path d="M210 214 h112 M210 232 h74" stroke="#20160a" strokeWidth="4" strokeLinecap="round" />
      </g>
      {/* spark */}
      <g stroke="#18a05e" strokeWidth="2" strokeLinecap="round">
        <path d="M312 66 v20 M302 76 h20" />
      </g>
    </svg>
  )
}
