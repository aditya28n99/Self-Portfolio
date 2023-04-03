import React from 'react'
import '../Styles/Education.css';
import { Container } from 'react-bootstrap';
import graduateImg from '../Images/favpng_student.png';
import onlineStudy from '../Images/OnlineStudypng.png'

function Education() {

  return (
    
    <Container>
        <div className="project-title-heading" >EDUCATION</div>
        <div className='border-top border-bottom rounded-4 col-white justify-center d-flex mt-2 flex-wrap'>
            <div className='x-details mt-4 mx-auto'>
                <h4>SSC | Gurudev Samantbhadra vidya mandir Ellora, Aurangabad</h4>
                <p>Science</p>
                <p>74.80%</p>
                <hr/>
                <h4>HSC | Mahatma Phule Jr. College, Ahemadpur</h4>
                <p>Science</p>
                <p>60.15%</p>
                <hr/>
                <h4>BE | late sau. K.B. Jain college of Engoneering Chandwad.</h4>
                <p>Mechanical Engineering</p>
                <p>7.79 CGPA (Overall 78%)</p>
                <hr/>
            </div>
            <div className='x-campus m-auto'>
                <img src={graduateImg} alt='x-campus'/>
            </div>
       
            <div className='x-campus m-auto '>
                <img src={onlineStudy} alt='x-campus'/>
            </div>
            <div className='x-details mt-4 mx-auto'>
            <h4>MERN Stack | Full Stack Web
Development Course from EDYODA. </h4>
                <p>Software training
institute Bengaluru.</p>
                <hr/>
            <h4>Basics of Web | Basics of Web developement 2.0 with Infosys Springboard. </h4>
                <p>Infosys Springboard.</p>
                <hr/>
            <h4>career | TCS iON Career Edge - Young Professionals.</h4>
                <p>TCS iON</p>
                <hr/>
            </div>
        </div>
    </Container>
  )
}

export default Education