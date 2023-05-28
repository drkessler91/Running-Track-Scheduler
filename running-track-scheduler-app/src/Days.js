 import React, {useEffect, useState} from "react";
 import axios from 'axios';


const WeekDays = ({ selectedInstructor, showFullSchedule  }) => {
    const [dayNames, setDays] = useState([]);
    const [lessonsPerDay, setLessonsPerDay] = useState([]);
    const [sortedInstructors, setSortedInstructors] = useState([]);
    const hours = Array.from({ length: 16 }, (_, i) => i + 6);
  
    useEffect(() => {
      axios
        .get('http://localhost:8000/getInstructors')
        .then(response => {
          const data = response.data;
          const instructors = data.map(item => item.name);
          const numInstructors = instructors.length;

          const lessons = Array(16).fill().map(() => Array(7))

          let instructorIndex = 0;

          for (let j = 0; j < 7; j++) {
            for (let i = 0; i < 16; i++) {
              lessons[i][j] = instructors[instructorIndex];
              instructorIndex = (instructorIndex + 1) % numInstructors;
            }
          }

          setSortedInstructors(lessons);
        })
        .catch(error => {
          console.error('Error fetching instructors:', error);
        });
    }, []);
  
    useEffect(() => {
      axios
        .get('http://localhost:8000/getDays')
        .then(response => {
          const data = response.data;
          const extDayNames = data.map(item => item.name);
          const extLessonsDay = data.map(item => item.numOfLessons);
  
          setDays(extDayNames);
          setLessonsPerDay(extLessonsDay);
        })
        .catch(error => {
          console.error('Error fetching days:', error);
        });
    }, []);
  
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Day / Hour of Lesson</td>
              {dayNames.map((day, index) => (
                <th key={index + 1}>{day}</th>
              ))}
            </tr>
            <tr>
              <td>Number of lessons</td>
              {lessonsPerDay.map((lessons, index) => (
                <td key={index + 1}>{lessons}</td>
              ))}
            </tr>
            {hours.map((hour, hourIndex) => (
            <tr key={hourIndex + 1}>
              <td>{hour}:00</td>
              {dayNames.map((day, dayIndex) => (
                <td key={dayIndex + 1}>
                  {showFullSchedule || (selectedInstructor && sortedInstructors[hourIndex][dayIndex] === selectedInstructor)
                    ? sortedInstructors[hourIndex][dayIndex]
                    : null}
                </td>
              ))}
            </tr>
          ))}
          </tbody>

        </table>
      </div>
    );
  };
   

export default WeekDays;
