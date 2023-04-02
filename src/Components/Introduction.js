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
      <div className="border-bottom rounded-4 intro">
          <div className='border-bottom  rounded-5 intro-img'>
              <img src={selfie} alt="Self" id='self'/>
              <img src={selfiebg} alt="bg" id="selfbg" />
          </div>
          <div className='p-3 intro-text' >
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
      <Container className='col-white px-3 para'>
      <p>I am a graduate in mechanical engineering with distinction from Savitribai Phule Pune University. I'm passionate about new technologies, especially the Web! I completed the front-end with a deep understanding of HTML, CSS, and JavaScript; I also learned React and Bootstrap and have back-end programming knowledge with the core languages of Java, Node.js, and SQL. I did necessary web projects to gain an understanding of web development. and I believe I have the ability to turn business requirements into technical solutions. I am looking to start my career as an entry-level web developer with a reputed firm driven by technology.</p>
      </Container>
      </div>
    </Container>
  );
}
export default Introduction