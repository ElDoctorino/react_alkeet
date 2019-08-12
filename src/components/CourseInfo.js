import React from 'react';
import '../App.css';

const Row = (props) => {
    return (
        <tr>
            <td>{props.course.course} </td>
            <td>{props.course.teacher} </td>
            <td>{props.course.class} </td>
        </tr>  
        )

}
const CourseInfo = (props) => {
    return (
        <table>
            <Row course = {props.course[0]} />
            <Row course = {props.course[1]} />
        </table>    
        )

}
export default CourseInfo;