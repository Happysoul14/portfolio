import { Analytics } from '@vercel/analytics/next'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import './portfolio.css'
export const metadata: Metadata = {title:'Vinay — Full-Stack Developer & Data Science Enthusiast',description:'Explore Vinay’s web development projects, technical skills, and interests in data science and creative problem-solving.',icons:{icon:'/vinay.svg'}}
export const viewport:Viewport={colorScheme:'dark',themeColor:'#0B0B0D'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`dark ${GeistSans.variable}`}><body className="antialiased">{children}{process.env.NODE_ENV==='production'&&<Analytics/>}</body></html>}
