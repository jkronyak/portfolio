import { Project } from "../utils/projectData";

import '../ProjectCard.css'

const ProjectCard = ({ project }: { project: Project}) => { 
	return(
		<div className='card-div'>
			<h2>{project.title}</h2>
			<hr/>
			<p>{project.url}</p>
			<hr/>
			<p>{project.description}</p>
			{
				project.skills.map((skill) => { 
					return <p>{skill}</p>
				})
			}
		</div>
	)
}

export default ProjectCard;