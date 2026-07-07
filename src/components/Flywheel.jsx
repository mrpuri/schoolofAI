export default function Flywheel() {
  return (
    <div className="flywheel-wrap" aria-hidden="true">
      <svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flywheel: flagship proves, partners license, teacher academy sustains">
        <defs>
          <marker id="fw-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="#5b83f0" />
          </marker>
        </defs>
        {/* connectors */}
        <g stroke="#5b83f0" strokeWidth="2.5" fill="none" markerEnd="url(#fw-arrow)">
          <path d="M235 150 H 275" />
          <path d="M495 150 H 535" />
          <path d="M640 205 Q 640 265 380 265 Q 120 265 120 205" />
        </g>
        {/* step 1 */}
        <g>
          <rect x="15" y="95" width="220" height="110" rx="16" fill="#101d45" stroke="#39508f" strokeWidth="1.5" />
          <circle cx="55" cy="135" r="16" fill="#ff9933" />
          <text x="49" y="141" fontFamily="Arial" fontSize="15" fontWeight="bold" fill="#20160a">1</text>
          <text x="85" y="132" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#ffffff">Flagship</text>
          <text x="40" y="168" fontFamily="Arial" fontSize="13" fill="#aab7da">Jalandhar campus proves</text>
          <text x="40" y="186" fontFamily="Arial" fontSize="13" fill="#aab7da">the AI-native model</text>
        </g>
        {/* step 2 */}
        <g>
          <rect x="275" y="95" width="220" height="110" rx="16" fill="#101d45" stroke="#39508f" strokeWidth="1.5" />
          <circle cx="315" cy="135" r="16" fill="#2456e6" />
          <text x="310" y="141" fontFamily="Arial" fontSize="15" fontWeight="bold" fill="#ffffff">2</text>
          <text x="345" y="132" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#ffffff">Partnerships</text>
          <text x="300" y="168" fontFamily="Arial" fontSize="13" fill="#aab7da">Schools &amp; colleges license</text>
          <text x="300" y="186" fontFamily="Arial" fontSize="13" fill="#aab7da">the infrastructure</text>
        </g>
        {/* step 3 */}
        <g>
          <rect x="535" y="95" width="220" height="110" rx="16" fill="#101d45" stroke="#39508f" strokeWidth="1.5" />
          <circle cx="575" cy="135" r="16" fill="#18a05e" />
          <text x="570" y="141" fontFamily="Arial" fontSize="15" fontWeight="bold" fill="#ffffff">3</text>
          <text x="605" y="132" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#ffffff">Teacher Academy</text>
          <text x="560" y="168" fontFamily="Arial" fontSize="13" fill="#aab7da">Certifies &amp; sustains the</text>
          <text x="560" y="186" fontFamily="Arial" fontSize="13" fill="#aab7da">network at scale</text>
        </g>
      </svg>
    </div>
  )
}
