'use client'
import { useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contact } from '@/lib/portfolio'

export function ContactForm() {
  const [notice,setNotice] = useState('')
  function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = `${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`
    const url = `mailto:${contact.email}?subject=${encodeURIComponent('Portfolio enquiry from '+data.get('name'))}&body=${encodeURIComponent(body)}`
    setNotice(contact.email ? 'Continue in your email app to send your message.' : 'Add the recipient in your email app before sending. No message has been sent here.')
    window.location.href = url
  }
  return <form className="contactForm" onSubmit={submit}><div className="formRow"><label>Name<input required name="name" autoComplete="name" maxLength={100} placeholder="Your name"/></label><label>Email<input required type="email" name="email" autoComplete="email" maxLength={254} placeholder="you@example.com"/></label></div><label>Message<textarea required rows={4} name="message" maxLength={2500} placeholder="What would you like to build?"/></label><Button size="lg" type="submit">Send Message <ArrowUpRight data-icon="inline-end"/></Button><p role="status">{notice || (contact.email ? 'Opens a draft in your email app.' : 'Opens an email draft. Recipient address has not been added yet.')}</p></form>
}
