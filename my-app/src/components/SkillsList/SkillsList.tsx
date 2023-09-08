import './SkillsList.scss';

import SkillChip from "components/SkillChip";

const SkillsList = ({skills, selectedSkills, onSelect}: {skills: string[], selectedSkills: string[], onSelect: Function}) => { 

	return(
		<div className='skill-list-div'>
		{
			skills.map((skill) => { 
				return (<SkillChip key={skill} skill={skill} isSelected={selectedSkills.includes(skill)} onSelect={onSelect}/>)
			})
		}
		</div>
	);
};

export default SkillsList;