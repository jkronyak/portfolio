
const SkillChip = ({skill, isSelected = true} : { skill: string, isSelected: boolean}) => { 


	return(
		<div>
			<span className={isSelected ? "selected-skill" : "unselected-skill"}>{skill}</span>
		</div>
	)
}

export default SkillChip;