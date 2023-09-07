import './SkillChip.scss';

const SkillChip = ({skill, isSelected = false} : { skill: string, isSelected: boolean}) => { 


	return(
		<div className="chip-div">
			<span className={isSelected ? "selected-skill" : "unselected-skill"}>{skill}</span>
		</div>
	)
}

export default SkillChip;