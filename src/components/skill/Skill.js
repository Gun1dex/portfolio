import React, { Component } from 'react';
import './Skill.css';
import angular from "../../assets/images/angular-logo.webp"
import react from "../../assets/images/react-logo.webp"
import vuejs from "../../assets/images/vuejs-logo.webp"
import html from "../../assets/images/html-logo.webp"
import javascript from "../../assets/images/javascript-logo.webp"
import css from "../../assets/images/css-logo.webp"

const webSkills = [
  {
    name: 'Frameworks',
    list: [
      {
        img: angular,
        text: 'Angular',
        alt: 'Angular logo'
      },
      {
        img: react,
        text: 'React',
        alt: 'React logo'
      },
      {
        img: vuejs,
        text: 'VueJs',
        alt: 'VueJs logo'
      },
    ]
  },
  {
    name: 'Langages',
    list: [
      {
        img: html,
        text: 'HTML',
        alt: 'HTML logo'
      },
      {
        img: css,
        text: 'CSS',
        alt: 'CSS logo'
      },
      {
        img: javascript,
        text: 'JavaScript',
        alt: 'JavaScript logo'
      },
    ]
  }
]

class Skill extends Component {
  render() {
    return (
      <div className="Skill">
        <span className='section-title'>Développement Web</span>
        {webSkills.map((webSkill, i) =>
          <div key={i} className='webSkill'>
            <span>{webSkill.name}</span>
            <div className='webSkill-list'>
              {webSkill.list.map((skill, i) =>
                <div key={i} className='skill-item'>
                  <img alt={skill.alt} src={skill.img}></img>
                  <span>{skill.text}</span>
                </div>
              )}
            </div>
            <div></div>
          </div>
        )}
      </div>
    );
  }
}

export default Skill;
