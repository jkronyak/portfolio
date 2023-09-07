import './SkillsList.scss';

import SkillChip from "components/SkillChip";

const SkillsList = ({skills}: {skills: string[]}) => { 

	return(
		<div className='skill-list-div'>
		{
			skills.map((skill) => { 
				return (<SkillChip skill={skill} isSelected={false}/>)
			})
		}
		</div>
	);
};

export default SkillsList;