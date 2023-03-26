import React from 'react'
import '../Styles/Introduction.css'
import Container from "react-bootstrap/esm/Container";
// import self from "../Images/mirror_selfie.png";
import Typed from 'react-typed';
import selfie from "../Images/mirror_selfie.png";
import selfiebg from "../Images/pngwing2.png";

function Introduction() {
  return (
    <Container className=' container-box'>
      <div className="border-bottom rounded-4 py-5 intro">
          <div className='border-bottom  rounded-5 intro-img'>
              <img src={selfie} alt="Image" id='self'/>
              <img src={selfiebg} id="selfbg" />
          </div>
          <div className=' p-5 intro-text' >
            <h1 className='my-2 title'>I'am Aditya Wakale</h1>
            <Typed
              className='typed-text'
              strings={[
                'Mechanical Engineer',
                'Frontend Developer',
                'Backend Developer',
                'Web Designer']}
              typeSpeed={50}
              backSpeed={30}
              loop >     
            </Typed>   
          </div>
      <Container className='col-white px-5 para'>
      <p>Recently graduated in Mechanical Engineering with distinction from Savitribai Phule Pune university. I'm passionate about new technologies and especially the web!, have relevant programming knowledge and the ability to turn business requirements into technical solutions. Looking to start my career as an entry-level Software developer with a reputed firm driven by MERN technology.</p>
      </Container>
      </div>
    </Container>
  );
}
export default Introduction