import './SkillBar.scss';
import { skillList } from 'utils/projectData';
import SkillChip from 'components/SkillChip';

const SkillBar = ({ onSelect, selectedSkills }: { onSelect: Function, selectedSkills: string[] }) => {
	return(
		<div className='skill-bar-container'>
			<p>Skills:</p>
			<div className='skill-bar-div'>
				{
					skillList.map((skill) => { 
						return <SkillChip key={skill} skill={skill} isSelected={selectedSkills.includes(skill)} onSelect={onSelect}/>
					})
				}
			</div>
		</div>
	)
}
export default SkillBar;