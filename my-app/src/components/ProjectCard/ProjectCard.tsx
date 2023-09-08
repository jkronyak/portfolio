import { Project } from "../../utils/types";

import SkillsList from "components/SkillsList";

import './ProjectCard.scss'

const ProjectCard = ({ project, selectedSkills, onSelect }: { project: Project, selectedSkills: string[], onSelect: Function}) => { 
	return(
		<div className='project-card-div'>
			<h2>{project.title}</h2>
			<hr/>
			<a href={project.url}>{project.url}</a>
			<hr/>
			<p>{project.description}</p>
			<SkillsList skills={project.skills} selectedSkills={selectedSkills} onSelect={onSelect}/>
		</div>
	)
}

export default ProjectCard;