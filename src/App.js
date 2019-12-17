import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './components/Course';
import CourseInfo from './components/CourseInfo';
import images from './components/ImageData.js';
import ImagesInfo from './components/ImagesInfo.js';
import Skills from './components/Skills.js';
// import ToggleButton from '.components/ToggleButton.js';


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

const initialField=["HTML","PHP"];


const App = () => {
  //state 
  const [skills,setSkills] =useState(initialField);
  const [newSkill, setNewSkill] =useState("");
  const [myImages,setMyImages] = useState(images);


const handleChange = event => {
  setNewSkill(event.target.value);
}
const handleSubmit = event => {
  event.preventDefault();
  let tempSkills = skills.concat(newSkill);
  setSkills(tempSkills);
  setNewSkill("");
}
  return  (

/* Tehtävä 1 nappi
<h1>Tehtävä 1</h1> 
 <Course show={show[0]} nameField="nimi: " emailField="email: " linkField="Sivut: "/>
 <ToggleButton show={show[0]} clickHandler={handleClick} buttonNumber={0} />
*/

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hämmentävää!</h1>
        <Course partName={coursePart} partDate={courseDate} partContents={courseContents} partNimi={courseNimi} partSähkö={courseSähkö} partLinked={courseLinked} partKokonimi={courseKokonimi} partKokoSähkö={courseKokoSähkö} partKokoLinked={courseKokoLinked} />
        <CourseInfo course={courses} />
        
		<Skills newSkill={newSkill}
				skills={skills}
				changeHandler={e => handleChange(e)}
				submitHandler={e => handleSubmit(e)}/>
		
		<ImagesInfo images={myImages} updateImages={setMyImages} />

        
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