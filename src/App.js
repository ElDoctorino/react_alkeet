import React from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './components/Course';
import CourseInfo from './components/CourseInfo';

const coursePart = "React, alkeet osa1";
const courseDate = "12.8.2019";
const courseContents = ["create_react_app", "gitbash","JSX","DOM","Propsit","Mappi","Hämmentävää tavaraa"];
// Harjoitus 1
const courseNimi ="Nimi:";
const courseSähkö ="Sähköposti:";
const courseLinked ="LinkedIN:";
const courseKokonimi ="Ville Aaltonen";
const courseKokoSähkö="ville.a.2000@live.fi";
const courseKokoLinked="Ei ole";
//Harjoitus 2
const course1 = {course: "Javascript", teacher: "Tiina Partanen", class: "2074"};
const course2 = {course:"Java", teacher: "Eerikki Maula", class: "2069"};
const courses = [course1, course2];

//

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hämmentävää!</h1>
        <Course partName={coursePart} partDate={courseDate} partContents={courseContents} partNimi={courseNimi} partSähkö={courseSähkö} partLinked={courseLinked} partKokonimi={courseKokonimi} partKokoSähkö={courseKokoSähkö} partKokoLinked={courseKokoLinked} />
        <CourseInfo course={courses} />
        <a
          className="App-link"
          href="https://otredu.github.io/react/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkki otreduun
        </a>
      </header>
    </div>
  );
}

export default App;