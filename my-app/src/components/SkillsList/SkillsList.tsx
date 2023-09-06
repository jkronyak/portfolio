
const SkillsList = ({skills}: {skills: string[]}) => { 

	return(
		<div>
		{
			skills.map((skill) => { 
				return (<button>{skill}</button>)
			})
		}
		</div>
	);
};

export default SkillsList;