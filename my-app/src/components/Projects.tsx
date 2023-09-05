import { Project, projectList } from "../utils/projectData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className='projects-div'>
			{
				projectList.map((proj) => {
					return <ProjectCard project={proj}></ProjectCard>
				})
			}
			{
				projectList.map((proj) => {
					return <ProjectCard project={proj}></ProjectCard>
				})
			}
        </div>
    )
}

export default Projects;