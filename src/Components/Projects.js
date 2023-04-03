import React, { useState } from 'react';
import '../Styles/Projects.css';
import { Container } from 'react-bootstrap';
import Cards from './Cards';
import Button from 'react-bootstrap/Button';
import ProjectAPI from '../ProjectAPI';

function Projects() {

    const [projectCard, setProjectCard] = useState(ProjectAPI);


    function webs(filterdata) {
        setProjectCard(ProjectAPI.filter(eachData => eachData.typeofcard.includes(filterdata)));
    }

    return (
        <>
            <Container>
                <div id='project-heading' className="project-title-heading">PROJECTS</div>
                <div className="project_title m-3" >
                    <div>
                        <Button className='buttons' variant="secondary" size="sm" onClick={() => webs("basic")}>Basic projects</Button>{' '}
                        <Button className='buttons' variant="secondary" size="sm" onClick={() => webs("responsive")}>Mobile Responsive</Button>{' '}
                        <Button className='buttons' variant="secondary" size="sm" onClick={() => webs("react")}>React, Bootstrap Projects</Button>{' '}
                        <Button className='buttons ' variant="secondary" size="sm" onClick={() => webs("")} >All</Button>
                    </div>
                </div>
                <div className="project_box border-top rounded-5">
                    {projectCard.map((card, i) => (
                        <Cards key={i} name={card.name} typeofcard={card.typeofcard} img={card.img} description={card.description} link={card.link} repo={card.repo} />
                    ))
                    }
                </div>
            </Container>
        </>
    );
}
export default Projects