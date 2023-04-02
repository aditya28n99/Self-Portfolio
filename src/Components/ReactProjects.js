import React from 'react'
import { useState } from 'react'
import svpReact from '../Images/Project Images/web-SVP.png';
import Cards from './Cards';

function ReactProjects() {

    const [reactWebs] = useState([
        {
            img: svpReact,
            name: "Shree Vidya Pratishtan School Pune",
            text: "Developed the front-end with React. enhanced mobile responsiveness and user experience with CSS3 and performed various animations and styling. Users were able to share their feedback and contact information. Build an app with the React Router DOM to allow nested routing. Hosted app with GitHub on render.com",
            link: "https://svp-with-react-by-aditya.onrender.com",
            repo:"https://github.com/aditya28n99/svp-react.git"
        }
    ])
  return (
    <>
        <div className="project_title m-3" id="pt">REACT-PROJECTS</div>
            <div className="project_box border-top rounded-5">
                {reactWebs.map((card, i) => (
                    <Cards key={i} name={card.name} img={card.img} text={card.text} link={card.link} repo={card.repo} />
                    ))}
            </div>
    </>
  )
}

export default ReactProjects;