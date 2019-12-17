import React from 'react';
import '../App.css';

const Skill = ({ skill }) => {
    return (
        <li className="skillItem">{skill}</li>
    )
}

const InputSkill = ({ newSkill, changeHandler, submitHandler }) => {
    //console.log (newSkill);
    return (
        <form onSubmit={submitHandler}>
        <input
            type="text"
            value={newSkill}
            className="skillbox"
            onChange={changeHandler}
            placeholder="kirjoita mitä olet oppinut">
            </input>
        </form>
    )
}

const Skills = ({skills, newSkill, changeHandler, submitHandler}) => {
    return ( 
        <div className="part">
        <h1>Olen oppinut seuraavia asioita:</h1>
        <div className="skillsContainer">
        <InputSkill changeHandler={changeHandler} newSkill={newSkill} submitHandler={submitHandler}/>
        <ul className="skills">
                {skills.map(s => <Skill skill={s} key={skills.indexOf(s)} />)}
        </ul>
        
        </div>
    </div>
    )
}
export default Skills;