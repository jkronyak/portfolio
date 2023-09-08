import { Course } from '../../utils/types';

import './CourseTable.scss';

const CourseTable = ({ courses }: { courses: Course[]}) => {
	return (
		<div className='course-table-div'>
			<table>
				<tr>
					<th>Code</th>
					<th>Course Title</th>
				</tr>
				{
					courses.map((course) => { 
						return(
							<tr>
								<td>{course.code}</td>
								<td className='title-cell'>{course.title}</td>
							</tr>
						)
					})
				}
			</table>
		</div>
	)
};

export default CourseTable;