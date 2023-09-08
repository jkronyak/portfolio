import { useState } from 'react';

import { projectList } from "../../utils/data";
import ProjectCard from "components/ProjectCard";
import SkillBar from "components/SkillBar";

import './Projects.scss';

const Projects = () => {

	const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
	
	const handleSkillSelect = (skill: string) => { 
		let idx = selectedSkills.indexOf(skill);
		if(idx > -1) {
			console.log("already selected");
			setSelectedSkills(selectedSkills.filter((sk) => sk !== skill));
		} else {
			setSelectedSkills([...selectedSkills, skill]);

		}
	}

    return (
		<div className='projects-div'>
			<SkillBar onSelect={handleSkillSelect} selectedSkills={selectedSkills}/>
			<div className='projects-grid-div'>
				{
					projectList.map((proj) => {
						return <ProjectCard key={proj.title} project={proj} selectedSkills={selectedSkills} onSelect={handleSkillSelect}/>
					})
				}
			</div>
		</div>
    )
}

export default Projects;