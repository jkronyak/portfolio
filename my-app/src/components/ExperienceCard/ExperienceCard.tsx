import { Experience } from '../../utils/types';

import "./ExperienceCard.scss";

const ExperienceCard = ({ experience }: {experience: Experience}) => { 
	return(
		<div className='experience-card-div'>
			<h2>{experience.title}</h2>
			<h3>{experience.employer}</h3>
			<hr/>
				<p>{experience.startDate} - {experience.endDate}</p>
				<p>{experience.location}</p>
			<hr/>
			<ul className='resp-list'>
			{
				experience.responsibilities.map((resp) => {
					return <li>{resp}</li>
				})
			}
			</ul>
		</div>
	);
}

export default ExperienceCard;