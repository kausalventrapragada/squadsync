import Link from "next/link";
import { Button } from "@/components/ui/button";

type Project = { id:string; title:string; description:string; tags:string[]; roles:string[]; members:string; match:string };
export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <div className="project-top"><span className="project-kicker">PROJECT</span><strong>{project.match} MATCH</strong></div>
    <h3>{project.title}</h3><p>{project.description}</p>
    <div className="tag-row">{project.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>
    <div className="project-divider" />
    <div className="project-meta"><div><span>Looking for</span><strong>{project.roles.join(" · ")}</strong></div><div><span>Squad</span><strong>{project.members}</strong></div></div>
    <Button href={`/app/ideas/${project.id}`} variant="secondary" className="button-full">View project</Button>
  </article>
}
