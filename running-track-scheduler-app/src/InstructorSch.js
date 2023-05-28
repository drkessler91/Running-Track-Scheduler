 import React, {useEffect, useState} from "react";
 import axios from 'axios';

 
 const ScheduleInstructors = () =>{
    const [sortedInstructors, setSortedInstructors] = useState([]);
   

    useEffect (() => {
        console.log("req from instructorSch");
        axios.get('http://localhost:8000/getInstructors')
        .then(response => {
            const data = response.data;
            const sortedInstructors = scheduleInstructors(data);
            setSortedInstructors(sortedInstructors);
            console.log(sortedInstructors);
        })
        .catch(error =>{
            console.error('Error fetching instructors:', error);
        });
 }, []);

 const scheduleInstructors = (data) =>{
    const sortedInstructors = new Array(16).map(() => new Array(7)); //make this dynamic, lessons per day per instructor
    let k = 0;
             
    for(let i = 0; i < sortedInstructors.length; i++){
        for(let j = 0; j < sortedInstructors[i].length; j++){
            while (k < 3){
                sortedInstructors[i][j] = data[k].name;
                k++;
                console.log(sortedInstructors[i][j]);
            }
            k=0;
        } 
    }
};



return(
    <table>
        <tbody>
                {sortedInstructors.map((row, rowIndex) => (
                    <tr key = {rowIndex}>
                        {sortedInstructors.map((instructor, colIndex) => (
                            <td key = {colIndex}>
                                {instructor}
                            </td>
                        ))}
                    </tr>
                ))}
        </tbody>
    </table>
);

};



//export default ScheduleInstructors;
