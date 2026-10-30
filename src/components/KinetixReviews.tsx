import { useMemo, useState } from "react"
import { Check, X, Star, PenLine } from "lucide-react"
import { MotionItem, MotionReveal } from "@/components/MotionReveal"

type SampleReview = { name: string; quote: string; filter: string; pros: string[]; cons: string[] }
const sampleQuotes: SampleReview[] = [
  { name: "Alex", quote: "The heat is a welcome reset between long blocks of work.", filter: "Heat", pros: ["Comfort", "Easy desk routine"], cons: ["Sample note"] },
  { name: "Jordan", quote: "It fits naturally into my desk setup without adding another big device.", filter: "Desk Setup", pros: ["Compact feel", "Desk setup"], cons: ["Sample note"] },
  { name: "Sam", quote: "I like having the support and percussion options in one cushion.", filter: "Comfort", pros: ["Support feel", "Percussion option"], cons: ["Sample note"] },
]
const filters = ["All", "Comfort", "Heat", "Desk Setup"]

export default function KinetixReviews() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const visible = useMemo(() => activeFilter === "All" ? sampleQuotes : sampleQuotes.filter((review) => review.filter === activeFilter), [activeFilter])

  function submitReview(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!rating || !name.trim() || text.trim().length < 12) {
      setError("Choose a rating, add your name, and write at least 12 characters.")
      return
    }
    setError("")
    setSubmitted(true)
  }

  return <section id="reviews" className="kin-section kin-band">
    <div className="kin-container">
      <MotionReveal>
        <div className="kin-review-head">
          <MotionItem><div><p className="kin-kicker">Desk-side perspective</p><h2>Built for the long stretch.</h2><p className="kin-subhead">A snapshot of the kind of desk-day reset Pulse Pro is made for.</p></div></MotionItem>
          <MotionItem><div className="kin-rating-panel"><div className="kin-rating-number">4.9<span>/5</span></div><div aria-label="4.9 out of 5 stars" className="kin-stars">★★★★★</div><p>412 reviews</p><div className="kin-rating-track"><span style={{ width: "98%" }} /></div><small>Supplied product rating summary</small></div></MotionItem>
        </div>
      </MotionReveal>
      <div className="kin-review-toolbar"><div className="kin-filter-row" role="group" aria-label="Filter sample reviews">{filters.map((filter) => <button key={filter} className={`kin-filter ${activeFilter === filter ? "active" : ""}`} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><button className="kin-button kin-button-secondary" onClick={() => { setIsOpen(true); setSubmitted(false); setError("") }}><PenLine size={16} /> Write a Review</button></div>
      <p className="kin-sample-note">Sample review content and badges shown for layout preview.</p>
      <div className="kin-reviews-grid">{visible.map((review) => <article className="kin-review-card" key={review.name}>
        <div className="kin-review-top"><div><div className="kin-stars small">★★★★★</div><h3>{review.name}</h3></div><span className="kin-verified"><Check size={12} /> Verified Buyer</span></div>
        <p className="kin-review-quote">“{review.quote}”</p>
        <div className="kin-tags"><span className="kin-tag-label">Pros</span>{review.pros.map((pro) => <span className="kin-tag" key={pro}>{pro}</span>)}</div>
        <div className="kin-tags"><span className="kin-tag-label">Cons · sample</span>{review.cons.map((con) => <span className="kin-tag muted" key={con}>{con}</span>)}</div>
      </article>)}</div>
    </div>
    {isOpen && <div className="kin-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false) }}>
      <div className="kin-modal" role="dialog" aria-modal="true" aria-labelledby="review-modal-title"><button className="kin-modal-close" aria-label="Close review form" onClick={() => setIsOpen(false)}><X size={19} /></button>
        {submitted ? <div className="kin-success-state"><div className="kin-success-icon"><Check /></div><p className="kin-kicker">Local session confirmation</p><h2 id="review-modal-title">Thanks, {name.trim()}.</h2><p>Your review is shown as a local preview only; it has not been sent or saved.</p><button className="kin-button kin-button-primary" onClick={() => setIsOpen(false)}>Done</button></div> : <form onSubmit={submitReview}>
          <p className="kin-kicker">Your desk-day notes</p><h2 id="review-modal-title">Write a review</h2><label className="kin-form-label">Your rating</label><div className="kin-rating-picker" role="radiogroup" aria-label="Choose a rating">{[1,2,3,4,5].map((value) => <button type="button" key={value} aria-label={`${value} stars`} aria-checked={rating === value} role="radio" className={rating >= value ? "selected" : ""} onClick={() => setRating(value)}><Star size={24} fill={rating >= value ? "currentColor" : "none"} /></button>)}</div>
          <label className="kin-form-label" htmlFor="review-name">Name</label><input id="review-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
          <label className="kin-form-label" htmlFor="review-body">Review</label><textarea id="review-body" value={text} onChange={(event) => setText(event.target.value)} placeholder="What stood out in your setup?" rows={4} />
          {error && <p className="kin-form-error" role="alert">{error}</p>}<button className="kin-button kin-button-primary kin-full" type="submit">Preview review</button><p className="kin-form-footnote">This demo keeps your entry in this page session only.</p>
        </form>}
      </div>
    </div>}
  </section>
}
