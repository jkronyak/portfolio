
import { experienceList } from 'utils/data';
import ExperienceCard from 'components/ExperienceCard';

import './Experience.scss';

const Experience = () => {
    return (
        <div className='experience-div'>
			<div className='experience-grid-div'>

			{
				experienceList.map((exp) => { 
					return <ExperienceCard experience={exp}/>
				})
			}
			</div>
        </div>
    )
}

export default Experience;