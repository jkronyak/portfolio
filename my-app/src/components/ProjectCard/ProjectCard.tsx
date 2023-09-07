import { Project } from "../../utils/projectData";

import SkillsList from "components/SkillsList";

import './ProjectCard.scss'

const ProjectCard = ({ project, selectedSkills }: { project: Project, selectedSkills: string[]}) => { 
	return(
		<div className='card-div'>
			<h2>{project.title}</h2>
			<hr/>
			<a href={project.url}>{project.url}</a>
			<hr/>
			<p>{project.description}</p>
			<SkillsList skills={project.skills} selectedSkills={selectedSkills}/>
		</div>
	)
}

export default ProjectCard;