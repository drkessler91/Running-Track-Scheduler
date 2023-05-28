 import React, {useEffect, useState} from "react";
 import axios from 'axios';
 import WeekDays  from './Days';
 

 const InstructorList = () =>{
    const [instructorNames, setInstructorsNames] = useState([]);
    const [selectedInstructor, setSelectedInstructor] = useState(null);
    const [showFullSchedule, setShowFullSchedule] = useState(false);
 

    useEffect (() => {

        axios.get('http://localhost:8000/getInstructors')
        .then(response => {
            setInstructorsNames(response.data);

        })
        .catch(error =>{
            console.error('Error fetching instructors:', error);
        });
 }, []);

 const handlePersonalSchedule = (instructor) => {
    setSelectedInstructor(instructor);
    setShowFullSchedule(!showFullSchedule);
 
 };

 
//  const handleShowFullSchedule = (instructorNames) => {
//     setSelectedInstructor(instructorNames);
//     setShowFullSchedule(showFullSchedule); 
//  };



return(
    <div>
        <h2>Instructor List 
        </h2>
        
        <ul className="instructor-list">
            {instructorNames.map(instructor => (
            <li key = {instructor._id} className="instructor-item">
                {instructor.name}
                <button  className="instructor-btn" onClick={() =>
                    handlePersonalSchedule(instructor.name) } >1 tap for full schedule, 2 taps for personal schedule
                </button>
            </li>
            ))}

        </ul>

        {selectedInstructor && (
        <div>
          <h2 className="schedule-heading">Schedule for {selectedInstructor}</h2>
          <div className='Week'>
            <WeekDays selectedInstructor={selectedInstructor} showFullSchedule={showFullSchedule} />
          </div>
        </div>
      )}
    </div>
);

};



export default InstructorList;
