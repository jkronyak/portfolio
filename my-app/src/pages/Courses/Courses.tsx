import CourseTable from 'components/CourseTable';

import { courseList } from 'utils/data';

import './Courses.scss';

const Courses = () => { 
    return (
        <div className='courses-div'>
            <CourseTable courses={courseList.reverse()}/>
        </div>
    )
}

export default Courses;