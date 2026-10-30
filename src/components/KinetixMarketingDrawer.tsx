import { useState } from "react"
import { Check, Copy, Megaphone, X } from "lucide-react"

type Campaign = { title: string; body: string }
const instagram: Campaign[] = [
  { title: "Facebook / Instagram 1", body: "Hook: Desk days hit hard?\nBody: Meet Kinetix Pulse Pro: heat, percussion, and lumbar support in one desk cushion.\nCTA: Shop Pulse Pro." },
  { title: "Facebook / Instagram 2", body: "Hook: Upgrade your seat break.\nBody: Bring a little recovery into long work sessions for $149.\nCTA: Explore KINETIX." },
  { title: "Facebook / Instagram 3", body: "Hook: One cushion. Three ways to reset.\nBody: Heat Therapy, Percussion Nodes, Ergonomic Lumbar Curve.\nCTA: Get yours." },
]
const tiktok = ["My desk setup was missing this", "A between-meeting reset, right at my chair", "Three things I noticed about Pulse Pro."]
const google = ["Shop Kinetix Pulse Pro", "Desk Cushion With Heat", "Percussion Desk Cushion", "Ergonomic Lumbar Support", "Pulse Pro Cushion | $149"]

export default function KinetixMarketingDrawer() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState("Meta ads")
  const [copied, setCopied] = useState("")
  const tabs = ["Meta ads", "TikTok hooks", "Google headlines"]

  async function copyText(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(label)
      window.setTimeout(() => setCopied(""), 1800)
    } catch {
      setCopied("Select and copy the text manually")
      window.setTimeout(() => setCopied(""), 2200)
    }
  }

  return <>
    <button className="kin-owner-tab" onClick={() => setOpen(true)}><Megaphone size={16} /> Owner marketing</button>
    {open && <div className="kin-drawer-scrim" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false) }}>
      <aside className="kin-drawer" role="dialog" aria-modal="true" aria-labelledby="marketing-title"><div className="kin-drawer-head"><div><p className="kin-kicker">Store owner workspace</p><h2 id="marketing-title">Ad copy & marketing</h2></div><button className="kin-icon-button" aria-label="Close marketing drawer" onClick={() => setOpen(false)}><X size={20} /></button></div>
        <p className="kin-drawer-intro">Ready-to-use campaign assets for Kinetix Pulse Pro. Copy a card to use it in your campaign.</p>
        <div className="kin-drawer-tabs" role="tablist">{tabs.map((item) => <button key={item} role="tab" aria-selected={tab === item} className={tab === item ? "active" : ""} onClick={() => setTab(item)}>{item}</button>)}</div>
        <div className="kin-copy-list">{tab === "Meta ads" && instagram.map((campaign) => <article className="kin-copy-card" key={campaign.title}><div className="kin-copy-card-head"><h3>{campaign.title}</h3><button className="kin-copy-button" onClick={() => copyText(campaign.body, campaign.title)}>{copied === campaign.title ? <Check size={15} /> : <Copy size={15} />}{copied === campaign.title ? "Copied" : "Copy"}</button></div><p>{campaign.body}</p></article>)}
          {tab === "TikTok hooks" && tiktok.map((hook, index) => <article className="kin-copy-card compact" key={hook}><div className="kin-copy-card-head"><h3>UGC hook 0{index + 1}</h3><button className="kin-copy-button" onClick={() => copyText(hook, hook)}>{copied === hook ? <Check size={15} /> : <Copy size={15} />}{copied === hook ? "Copied" : "Copy"}</button></div><p>“{hook}”</p></article>)}
          {tab === "Google headlines" && google.map((headline) => <article className="kin-copy-card compact" key={headline}><div className="kin-copy-card-head"><h3>Search headline</h3><button className="kin-copy-button" onClick={() => copyText(headline, headline)}>{copied === headline ? <Check size={15} /> : <Copy size={15} />}{copied === headline ? "Copied" : "Copy"}</button></div><p>{headline}</p></article>)}</div>
        {copied === "Select and copy the text manually" && <p className="kin-copy-status" role="status">Clipboard access is unavailable. Select and copy the text manually.</p>}
      </aside>
    </div>}
  </>
}
