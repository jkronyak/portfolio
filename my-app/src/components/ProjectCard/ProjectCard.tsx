import { Project } from "../../utils/projectData";

import SkillsList from '../SkillsList/SkillsList';

import './ProjectCard.scss'

const ProjectCard = ({ project }: { project: Project}) => { 
	return(
		<div className='card-div'>
			<h2>{project.title}</h2>
			<hr/>
			<a href={project.url}>{project.url}</a>
			<hr/>
			<p>{project.description}</p>
			<SkillsList skills={project.skills}/>
		</div>
	)
}

export default ProjectCard;