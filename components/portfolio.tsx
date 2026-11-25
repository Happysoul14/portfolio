'use client'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { contact } from '@/lib/portfolio'

const pages = ['About', 'Skills', 'Projects', 'Interests']
export function Wordmark() {
  return <a className="brand" href="#home" aria-label="Vinay, home"><svg viewBox="0 0 32 28" width="29" height="26" fill="currentColor" aria-hidden="true"><path d="M0 2h7l9 17-4 8zM10 2h6l5 9-4 7zM23 2h9L18 27h-5z"/></svg>VINAY<span>.</span></a>
}
export function Header() {
  const [open, setOpen] = useState(false)
  return <header><div className="wrap bar"><Wordmark/><nav id="section-nav" aria-label="Sections" className={open ? 'opened' : ''} onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);document.getElementById('menu-toggle')?.focus()}}}>{pages.map(p=><a key={p} onClick={()=>setOpen(false)} href={'#'+p.toLowerCase()}>{p}</a>)}</nav><div className="navActions"><a className="talk" href="#contact" onClick={()=>setOpen(false)}>Let&apos;s Talk <ArrowUpRight size={14}/></a><button className="menu" id="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-controls="section-nav" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div></header>
}
export function CursorArtwork() {
  const reduced = useReducedMotion()
  return <figure className="art"><div className="artBoard"><div className="rail"><span>FIG. 01</span><span className="railLine"/>OBJECT STUDY</div><motion.div className="sculpture" animate={reduced?{}:{y:[0,-4,0]}} transition={{duration:7,repeat:Infinity,ease:'easeInOut'}}><Image priority src="/cursor.webp" width={900} height={900} sizes="(max-width: 700px) 88vw, 40vw" alt="A sculptural brushed-metal cursor with a lime-green edge"/></motion.div><span className="registration r1"/><span className="registration r2"/><span className="registration r3"/><span className="registration r4"/></div><figcaption><span>↳</span> CURSOR STUDY <i>/</i> INTERFACE OBJECT</figcaption></figure>
}
export function EditableLink({href,children,label}:{href:string,children:React.ReactNode,label:string}) {
  return href ? <a href={href} target="_blank" rel="noreferrer">{children}</a> : <span className="unlinked" role="link" aria-disabled="true" aria-label={`${label} — link not configured`} title={`${label} URL not yet provided`}>{children}</span>
}
export function SocialLinks() {
  return <div className="social"><EditableLink href={contact.github} label="GitHub"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.55.1.75-.24.75-.54v-2.1c-3.1.68-3.75-1.32-3.75-1.32-.51-1.27-1.24-1.61-1.24-1.61-1.01-.7.08-.68.08-.68 1.12.08 1.7 1.14 1.7 1.14.99 1.69 2.6 1.2 3.24.92.1-.72.38-1.2.69-1.47-2.47-.28-5.07-1.24-5.07-5.49 0-1.21.44-2.2 1.15-2.97-.11-.28-.5-1.41.11-2.93 0 0 .94-.3 3.05 1.14a10.8 10.8 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.52.23 2.65.11 2.93.72.77 1.15 1.76 1.15 2.97 0 4.26-2.6 5.2-5.08 5.48.4.35.76 1.02.76 2.06v3.07c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z"/></svg>GitHub <ArrowUpRight size={12}/></EditableLink><i/><EditableLink href={contact.linkedin} label="LinkedIn"><b className="inIcon">in</b>LinkedIn <ArrowUpRight size={12}/></EditableLink></div>
}
