import { ArrowUpRight, ArrowDown, ArrowUp, CodeXml, Terminal, Database, Wrench, Telescope, Globe, ChartNoAxesCombined, BookOpen, Braces } from 'lucide-react'
import { Header, CursorArtwork, SocialLinks, Wordmark } from '@/components/portfolio'
import { Projects } from '@/components/projects'
import { ContactForm } from '@/components/contact-form'

const skills = [[CodeXml,'Frontend',['HTML','CSS','JavaScript','React']],[Terminal,'Backend',['Python','PHP','Node.js']],[Database,'Database',['MySQL']],[Wrench,'Tools',['Git','GitHub']],[Telescope,'Interests',['Data Science','Web Development']]] as const
const interests = [[Globe,'Building Web Applications'],[ChartNoAxesCombined,'Exploring Data Science'],[BookOpen,'Learning New Technologies'],[Braces,'Solving Programming Problems']] as const
export default function Page() {
  return <><a className="skip" href="#content">Skip to content</a><Header/><main id="content" className="wrap">
    <section id="home" className="hero"><div className="intro"><p className="eyebrow"><i/> HELLO, I&apos;M VINAY</p><h1>Turning Ideas<br/>Into Digital<br/>Experiences<span>.</span></h1><p className="role">Full-Stack Developer <b>|</b> Data Science Enthusiast</p><p className="summary">I&apos;m passionate about technology, web development and data science. I enjoy learning, experimenting and building digital solutions that solve real problems.</p><div className="actions"><a className="btn primary" href="#projects">Explore My Work <ArrowUpRight/></a><a className="btn" href="#contact">Get In Touch <ArrowUpRight/></a></div><SocialLinks/></div><CursorArtwork/></section>
    <div className="folioStrip"><span>PORTFOLIO <b>/</b> {new Date().getFullYear()}</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={13}/></a></div>
    <section id="about" className="section split"><div><div className="eyebrow">01 / ABOUT ME</div><h2>Beyond The Code<span>.</span></h2></div><div className="bio"><p>I&apos;m Vinay. What draws me to software development is the chance to turn a question into something useful.</p><p>I like exploring new technologies, experimenting with data, and finding creative ways to solve problems. Each project gives me something new to learn.</p></div></section>
    <section id="skills" className="section"><div className="eyebrow">02 / TOOLKIT</div><h2>Skills & Technologies<span>.</span></h2><div className="skillGrid">{skills.map(([Icon,title,list])=><article className="skill" key={title}><Icon size={21}/><h3>{title}</h3><div className="tags">{list.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></section>
    <Projects/>
    <section id="interests" className="section split"><div><div className="eyebrow">04 / INTERESTS</div><h2>What I Enjoy<span>.</span></h2></div><ul className="interestList">{interests.map(([Icon,label])=><li key={label}><Icon size={19}/>{label}</li>)}</ul></section>
    <section id="contact" className="section split"><div><div className="eyebrow">05 / CONTACT</div><h2>Let&apos;s Create Something Meaningful<span>.</span></h2><SocialLinks/></div><ContactForm/></section>
  </main><footer className="wrap"><Wordmark/><p>Curiosity drives innovation. Code brings it to life.</p><span>© {new Date().getFullYear()} Vinay</span><a href="#home" aria-label="Back to top"><ArrowUp size={16}/></a></footer></>
}
