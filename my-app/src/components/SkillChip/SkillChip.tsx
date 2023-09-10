import './SkillChip.scss';


const SkillChip = ({skill, isSelected = false, onSelect } : { skill: string, isSelected: boolean, onSelect: Function}) => { 
	return(
		<div className={`chip-div ${isSelected ? "selected-skill" : ""}`} onClick={() => onSelect(skill)}>
			<span>{skill}</span>
		</div>
	)
}

export default SkillChip;