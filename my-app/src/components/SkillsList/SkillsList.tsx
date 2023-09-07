import './SkillsList.scss';

import SkillChip from "components/SkillChip";

const SkillsList = ({skills, selectedSkills}: {skills: string[], selectedSkills: string[]}) => { 

	return(
		<div className='skill-list-div'>
		{
			skills.map((skill) => { 
				return (<SkillChip key={skill} skill={skill} isSelected={selectedSkills.includes(skill)} onSelect={null}/>)
			})
		}
		</div>
	);
};

export default SkillsList;