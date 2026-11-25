import { ArrowUpRight, LayoutList, GraduationCap, Check, Square } from 'lucide-react'
import { projects } from '@/lib/portfolio'
import { EditableLink } from './portfolio'

function ProjectVisual({index}:{index:number}) {
  return <div className="projectVisual" aria-hidden="true"><div className="window"><div className="windowTop"><i/><i/><i/></div><div className="windowBody">{index ? <><strong><GraduationCap/> MyERP</strong><small>STUDENT WORKSPACE</small>{['Student profiles','Attendance management','Examination marks'].map((x,i)=><div className="previewRow" key={x}><span>0{i+1}</span>{x}</div>)}</> : <><strong><LayoutList/> TaskPilot</strong><small>PROJECT CHECKLIST</small>{['Outline the idea','Organize tasks','Review progress'].map((x,i)=><div className="previewRow" key={x}>{i===0?<Check size={12}/>:<Square size={12}/>} {x}</div>)}</>}</div></div></div>
}
export function Projects() {
  return <section id="projects" className="section"><div className="eyebrow">03 / PORTFOLIO</div><h2>Selected Work<span>.</span></h2><div className="projects">{projects.map((p,i)=><article className="project" key={p.title}>{p.image?<img src={p.image} alt={`${p.title} project preview`}/>:<ProjectVisual index={i}/>}<div className="projectInfo"><small>PROJECT 0{i+1} / {p.category.toUpperCase()}</small><h3>{p.title}</h3><p>{p.description}</p>{p.technologies.length>0&&<div className="tags">{p.technologies.map(t=><span key={t}>{t}</span>)}</div>}<div className="projectLinks"><EditableLink label="GitHub" href={p.github}>GitHub <ArrowUpRight size={13}/></EditableLink><EditableLink label="Live Demo" href={p.demo}>Live Demo <ArrowUpRight size={13}/></EditableLink></div></div></article>)}</div></section>
}
