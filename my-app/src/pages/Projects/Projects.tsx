import { projectList } from "../../utils/projectData";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import './Projects.scss';

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
			{
				projectList.map((proj) => {
					return <ProjectCard project={proj}></ProjectCard>
				})
			}
        </div>
    )
}

export default Projects;