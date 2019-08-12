import React from 'react';
import '../App.css';

const Course = (props) => {
    return (
    <div>
        <h3> {props.partName} </h3>
        <h4> {props.partDate} </h4>

      <ul>
        {props.partContents.map(x => <li> {x} </li>)}
        </ul>
        <p>{props.partNimi}  {props.partKokonimi} </p>
        <p>{props.partSähkö} {props.partKokoSähkö} </p>
        <p>{props.partLinked} {props.partKokoLinked} </p>
    </div>
  )
}
export default Course;