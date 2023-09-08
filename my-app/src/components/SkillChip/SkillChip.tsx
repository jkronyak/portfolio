import './SkillChip.scss';


const SkillChip = ({skill, isSelected = false, onSelect } : { skill: string, isSelected: boolean, onSelect: Function | null}) => { 
	return(
		<div className={`chip-div ${isSelected ? "selected-skill" : ""}`} onClick={() => onSelect ? onSelect(skill) : null} onPointerEnter={() => onSelect ? onSelect(skill) : null}>
			<span>{skill}</span>
		</div>
	)
}

export default SkillChip;