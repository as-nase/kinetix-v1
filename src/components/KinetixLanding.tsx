import { useEffect, useState } from "react"
import { ArrowDown, ArrowRight, Check, ChevronDown, Minus, Plus, ShoppingBag, Zap, ShieldCheck, Truck, Menu, X } from "lucide-react"
import SafeImage from "@/components/SafeImage"
import { MotionItem, MotionReveal } from "@/components/MotionReveal"
import KinetixReviews from "@/components/KinetixReviews"
import KinetixMarketingDrawer from "@/components/KinetixMarketingDrawer"

const gallery = [
  { src: "/assets/pulse-pro-hero.webp", alt: "Kinetix Pulse Pro on a considered home desk", label: "Pulse Pro" },
  { src: "/assets/pulse-pro-stealth-black.webp", alt: "Pulse Pro in Stealth Black", label: "Stealth Black" },
  { src: "/assets/pulse-pro-cyber-gray.webp", alt: "Pulse Pro in Cyber Gray", label: "Cyber Gray" },
  { src: "/assets/pulse-pro-side-profile.webp", alt: "Pulse Pro side profile fitted to an ergonomic chair", label: "Side profile" },
  { src: "/assets/pulse-pro-heat-detail.webp", alt: "Close detail of the cushion's warming surface", label: "Heat detail" },
  { src: "/assets/pulse-pro-percussion-detail.webp", alt: "Close detail of the contoured percussion cushion", label: "Percussion detail" },
  { src: "/assets/pulse-pro-lumbar-curve.webp", alt: "Pulse Pro's ergonomic lumbar curve", label: "Lumbar curve" },
]
const features = [
  { title: "Heat Therapy", copy: "Warmth that makes a long work session feel less rigid. A desk-side comfort cue, ready when you want a pause.", image: "/assets/pulse-pro-heat-detail.webp", alt: "Warm light across Pulse Pro cushion fabric", number: "01" },
  { title: "Percussion Nodes", copy: "A targeted pulse when you need a desk-side reset. Choose a moment that fits your own rhythm.", image: "/assets/pulse-pro-percussion-detail.webp", alt: "Sculpted percussion detail on Pulse Pro", number: "02" },
  { title: "Ergonomic Lumbar Curve", copy: "Support shaped for a more considered sitting posture, built to sit naturally in your chair setup.", image: "/assets/pulse-pro-lumbar-curve.webp", alt: "Contoured lumbar profile of Pulse Pro", number: "03" },
]
const accessories = [
  { name: "LumaBar Ultra", description: "Monitor light bar", price: "$89", image: "/assets/lumabar-ultra.webp" },
  { name: "AeroWrist Mag", description: "Magnetic ergonomic wrist rest", price: "$39", image: "/assets/aerowrist-mag.webp" },
  { name: "ZenDesk Mat", description: "Felt & vegan leather desk pad", price: "$59", image: "/assets/zendesk-mat.webp" },
  { name: "ThermoMug Smart", description: "Temperature-controlled mug", price: "$119", image: "/assets/thermomug-smart.webp" },
]
const faqs = [
  { title: "Specs", text: "Owner-editable placeholder: add confirmed dimensions, power details, control modes, materials, and included items before publishing." },
  { title: "Shipping", text: "Owner-editable placeholder: add current delivery regions, processing time, shipping fees, and return instructions." },
  { title: "Warranty", text: "Owner-editable placeholder: add the confirmed coverage period, what is covered, and how customers can request support." },
]

export default function KinetixLanding() {
  const [color, setColor] = useState("Stealth Black")
  const [quantity, setQuantity] = useState(1)
  const [bundle, setBundle] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [openFaq, setOpenFaq] = useState("Specs")
  const [scrolled, setScrolled] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [cartMessage, setCartMessage] = useState("")
  const effectiveQuantity = bundle ? Math.max(2, quantity) : quantity
  const currentTotal = effectiveQuantity * 149 * (bundle ? 0.85 : 1)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  useEffect(() => {
    if (!bundle) setQuantity((current) => Math.max(1, current))
    else setQuantity((current) => Math.max(2, current))
  }, [bundle])

  function addToCart() {
    setCartCount((count) => count + effectiveQuantity)
    setCartTotal((total) => total + currentTotal)
    setCartMessage(`${effectiveQuantity} Pulse Pro cushion${effectiveQuantity > 1 ? "s" : ""} added to your local cart · $${currentTotal.toFixed(2)}`)
    window.setTimeout(() => setCartMessage(""), 3200)
  }

  return <div className="kinetix-page">
    <header className={`kin-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="kin-header-inner"><a className="kin-wordmark" href="#top" aria-label="KINETIX home"><span className="kin-mark"><Zap size={17} fill="currentColor" /></span>KINETIX</a>
        <nav className={mobileNav ? "kin-nav mobile-open" : "kin-nav"} aria-label="Main navigation"><a href="#benefits" onClick={() => setMobileNav(false)}>Benefits</a><a href="#how-it-works" onClick={() => setMobileNav(false)}>How It Works</a><a href="#reviews" onClick={() => setMobileNav(false)}>Reviews</a><a href="#buy-now" onClick={() => setMobileNav(false)}>Buy Now</a></nav>
        <div className="kin-header-actions"><span className="kin-cart-count"><ShoppingBag size={15} /> {cartCount}</span><a className="kin-header-cta" href="#buy-now">Shop Pulse Pro <ArrowRight size={14} /></a><button className="kin-mobile-toggle" aria-label={mobileNav ? "Close menu" : "Open menu"} onClick={() => setMobileNav(!mobileNav)}>{mobileNav ? <X /> : <Menu />}</button></div>
      </div>
    </header>

    <main id="top">
      <section id="buy-now" className="kin-hero kin-container">
        <MotionReveal delay={0} className="kin-hero-copy"><MotionItem><p className="kin-kicker"><span className="kin-live-dot" /> KINETIX / PULSE PRO</p></MotionItem><MotionItem><h1>Feel better through<br /><span>the long desk day.</span></h1></MotionItem><MotionItem><p className="kin-hero-deck">Desk-day recovery, built into your seat. Heat, percussion, and a considered lumbar curve—together in one cushion.</p></MotionItem><MotionItem><div className="kin-hero-links"><a className="kin-button kin-button-primary" href="#buy-card">Get Pulse Pro <ArrowRight size={17} /></a><a className="kin-text-link" href="#benefits">Explore the details <ArrowDown size={15} /></a></div></MotionItem></MotionReveal>
        <div className="kin-buy-layout">
          <MotionReveal className="kin-gallery-wrap"><MotionItem><div className="kin-main-image"><SafeImage src={gallery[activeImage].src} alt={gallery[activeImage].alt} /><span className="kin-image-label">01 / 07&nbsp;&nbsp; {gallery[activeImage].label}</span><span className="kin-gallery-orbit" aria-hidden="true" /></div></MotionItem><MotionItem><div className="kin-thumbnails" role="group" aria-label="Product image gallery">{gallery.map((image, index) => <button key={image.src} className={`kin-thumb ${activeImage === index ? "selected" : ""}`} onClick={() => setActiveImage(index)} aria-label={`Show ${image.label}`} aria-pressed={activeImage === index}><SafeImage src={image.src} alt="" /></button>)}</div></MotionItem></MotionReveal>
          <MotionReveal className="kin-buy-box-wrap"><MotionItem><div className="kin-buy-box" id="buy-card"><div className="kin-buy-overline">KINETIX PULSE PRO <span>IN STOCK</span></div><h2>Desk-day recovery,<br />built into your seat.</h2><p className="kin-buy-desc">Heated, percussion massage posture-correcting desk cushion.</p><div className="kin-price-line"><strong>$149</strong><span>USD</span><span className="kin-pay-note">One-time purchase</span></div>
            <div className="kin-buy-rule" /><label className="kin-option-label">Color <span>{color}</span></label><div className="kin-color-options"><button className={`kin-color-choice ${color === "Stealth Black" ? "selected" : ""}`} onClick={() => { setColor("Stealth Black"); setActiveImage(1) }}><i className="swatch black" /> Stealth Black</button><button className={`kin-color-choice ${color === "Cyber Gray" ? "selected" : ""}`} onClick={() => { setColor("Cyber Gray"); setActiveImage(2) }}><i className="swatch gray" /> Cyber Gray</button></div>
            <div className="kin-buy-controls"><div className="kin-quantity"><button aria-label="Decrease quantity" onClick={() => { setQuantity((q) => Math.max(bundle ? 2 : 1, q - 1)) }}><Minus size={15} /></button><span>{effectiveQuantity}</span><button aria-label="Increase quantity" onClick={() => setQuantity((q) => q + 1)}><Plus size={15} /></button></div><button className="kin-button kin-button-primary kin-add-button" onClick={addToCart}>Add to Cart <ArrowRight size={17} /></button></div>
            <button className={`kin-bundle-toggle ${bundle ? "selected" : ""}`} onClick={() => setBundle(!bundle)} aria-pressed={bundle}><span className="kin-check-box">{bundle && <Check size={14} />}</span><span><strong>Buy 2 & Save 15%</strong><small>Two cushions for $253.30 before shipping or tax</small></span><span className="kin-save-badge">SAVE 15%</span></button>
            <div className="kin-assurance"><span><ShieldCheck size={14} /> Details below</span><span><Truck size={14} /> Shipping info</span></div>
            <div className="kin-accordions">{faqs.map(({ title, text }) => <div className="kin-accordion" key={title}><button aria-expanded={openFaq === title} onClick={() => setOpenFaq(openFaq === title ? "" : title)}><span>{title === "Specs" ? <ShieldCheck size={15} /> : title === "Shipping" ? <Truck size={15} /> : <Check size={15} />}{title}</span><ChevronDown className={openFaq === title ? "turned" : ""} size={16} /></button>{openFaq === title && <p>{text}</p>}</div>)}</div>
          </div></MotionItem></MotionReveal>
        </div>
        <div className="kin-hero-footline"><span>01 — Recovery, in reach</span><span>Designed for desk days & focused play</span><span>Scroll to explore ↓</span></div>
      </section>

      <section id="benefits" className="kin-section kin-band"><div className="kin-container"><MotionReveal><MotionItem><div className="kin-section-intro"><div><p className="kin-kicker">Three ways to reset</p><h2>Support your desk-day rhythm.</h2></div><p>Purposeful comfort cues, built for the pauses and long stretches that make up real workdays.</p></div></MotionItem></MotionReveal><div className="kin-benefit-grid">{features.map((feature) => <MotionReveal key={feature.number}><MotionItem><article className="kin-benefit-card"><div className="kin-benefit-image"><SafeImage src={feature.image} alt={feature.alt} /><span>{feature.number}</span></div><div className="kin-benefit-copy"><h3>{feature.title}</h3><p>{feature.copy}</p></div></article></MotionItem></MotionReveal>)}</div></div></section>

      <section id="how-it-works" className="kin-section"><div className="kin-container"><MotionReveal><MotionItem><div className="kin-section-intro kin-routine-intro"><div><p className="kin-kicker">A reset that fits</p><h2>Right where your day happens.</h2></div><p>From a packed calendar to a focused match, Pulse Pro belongs in the flow—not in the way.</p></div></MotionItem></MotionReveal>
        <div className="kin-routine-grid"><MotionReveal><MotionItem><article className="kin-routine-feature"><div className="kin-routine-photo"><SafeImage src="/assets/remote-work-reset.webp" alt="Remote worker pausing at a bright, thoughtfully arranged home desk with Pulse Pro" /><span className="kin-photo-caption">01 / BETWEEN MEETINGS</span></div><div className="kin-routine-text"><span className="kin-step">01</span><h3>Set it against your chair.</h3><p>Make Pulse Pro part of the setup you already use. No new routine required—just a considered place to sit.</p></div></article></MotionItem></MotionReveal>
          <div className="kin-routine-side"><MotionReveal><MotionItem><article className="kin-routine-step"><div><span className="kin-step">02</span><h3>Choose the feel for your break.</h3><p>Pick a warmth or percussion moment that suits the pause you have.</p></div><div className="kin-step-rule" /></article></MotionItem></MotionReveal><MotionReveal><MotionItem><article className="kin-routine-play"><div className="kin-routine-photo"><SafeImage src="/assets/gaming-desk-reset.webp" alt="Gamer taking a seated pause at a refined dark desk setup with Pulse Pro" /><span className="kin-photo-caption">02 / BETWEEN ROUNDS</span></div><div className="kin-routine-text"><span className="kin-step">03</span><h3>Return ready for the next stretch.</h3><p>A comfort-forward pause, right at your desk.</p></div></article></MotionItem></MotionReveal></div>
        </div><div className="kin-routine-bottom"><span>REMOTE WORK</span><span>FOCUSED PLAY</span><span>BETWEEN-MEETING MOMENTS</span><span>YOUR OWN PACE</span></div>
      </div></section>

      <section className="kin-section kin-bundle-section"><div className="kin-container"><MotionReveal><MotionItem><div className="kin-bundle-layout"><div className="kin-bundle-image"><SafeImage src="/assets/two-pulse-pro-bundle.webp" alt="Two Kinetix Pulse Pro cushions arranged as a pair for separate desk setups" /><span className="kin-bundle-corner">A SET FOR<br />BOTH SPACES</span></div><div className="kin-bundle-content"><p className="kin-kicker">The two-setup offer</p><h2>One for your workspace.<br /><span>One for your other setup.</span></h2><p>Make both desk days feel considered. Choose the bundle and the purchase box updates to two cushions with the 15% saving applied.</p><div className="kin-bundle-price"><span>2 × Pulse Pro</span><strong>$253.30</strong><small>after 15% discount · before shipping or tax</small></div><button className={`kin-button ${bundle ? "kin-button-secondary" : "kin-button-primary"}`} onClick={() => { setBundle(!bundle); document.getElementById("buy-card")?.scrollIntoView({ behavior: "smooth", block: "center" }) }}>{bundle ? "Bundle selected" : "Select the bundle"} <ArrowRight size={17} /></button><div className="kin-bundle-foot"><Check size={15} /> Quantity and local cart total update in the purchase box.</div></div></div></MotionItem></MotionReveal></div></section>

      <KinetixReviews />

      <section className="kin-section kin-accessories"><div className="kin-container"><MotionReveal><MotionItem><div className="kin-section-intro"><div><p className="kin-kicker">Complete your desk setup</p><h2>Small upgrades. A better flow.</h2></div><p>Build around Pulse Pro with four focused accessories from KINETIX.</p></div></MotionItem></MotionReveal><div className="kin-accessory-grid">{accessories.map((item, index) => <MotionReveal key={item.name}><MotionItem><article className="kin-accessory-card"><div className="kin-accessory-image"><SafeImage src={item.image} alt={`${item.name}, ${item.description.toLowerCase()}`} /><span>0{index + 1}</span></div><div className="kin-accessory-info"><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>{item.price}</strong></div><a href="#buy-now" className="kin-accessory-link">Explore setup <ArrowRight size={14} /></a></article></MotionItem></MotionReveal>)}</div></div></section>

      <section className="kin-final-cta"><div className="kin-container"><MotionReveal><MotionItem><div className="kin-final-grid"><div className="kin-final-image"><SafeImage src="/assets/pulse-pro-side-profile.webp" alt="Kinetix Pulse Pro fitted to an ergonomic desk chair" /></div><div className="kin-final-copy"><p className="kin-kicker">Make room for a reset</p><h2>Make your desk<br />work for you.</h2><p>Kinetix Pulse Pro — $149. Choose your color, build your setup, and add it to your cart.</p><a href="#buy-now" className="kin-button kin-button-primary">Choose Pulse Pro <ArrowRight size={17} /></a><small>Heat · Percussion · Lumbar curve</small></div></div></MotionItem></MotionReveal></div></section>
    </main>

    <footer className="kin-footer"><div className="kin-container"><div className="kin-footer-main"><a className="kin-wordmark" href="#top"><span className="kin-mark"><Zap size={17} fill="currentColor" /></span>KINETIX</a><p>Recovery gear for the hours you spend at your desk.</p><div className="kin-footer-links"><a href="#buy-card">Shipping</a><a href="#buy-card">Warranty</a><a href="mailto:support@[your-domain].com">Support</a><KinetixMarketingDrawer /></div></div><div className="kin-footer-bottom"><span>© 2026 KINETIX. Make your desk work for you.</span><span>Support: support@[your-domain].com</span></div></div></footer>

    {scrolled && <div className="kin-sticky-buy"><div className="kin-sticky-product"><SafeImage src={color === "Stealth Black" ? "/assets/pulse-pro-stealth-black.webp" : "/assets/pulse-pro-cyber-gray.webp"} alt={`${color} Pulse Pro`} /><div><strong>Kinetix Pulse Pro</strong><span>{color} · {effectiveQuantity} {effectiveQuantity === 1 ? "cushion" : "cushions"}</span></div></div><div className="kin-sticky-total"><small>{bundle ? "Bundle price" : "Your total"}</small><strong>${currentTotal.toFixed(2)}</strong></div><button className="kin-button kin-button-primary" onClick={addToCart}>Add to Cart <ArrowRight size={16} /></button></div>}
    {cartMessage && <div className="kin-cart-toast" role="status"><span className="kin-toast-check"><Check size={16} /></span><div><strong>Added to your local cart</strong><p>{cartMessage}</p></div><span className="kin-toast-total">Cart · ${cartTotal.toFixed(2)}</span></div>}
  </div>
}
