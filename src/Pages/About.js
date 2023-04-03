
import '../Styles/About.css';
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Scrollbtn from "../Components/Scrollbtn";
import passport from "../Images/Passport.jpg"

function About() {

    return (<>
        <Container>
            <div class="imgbox">
                <img src={passport} alt="self" />
            </div>
            <h1 id="about_heading">''Hello There..</h1>
            <div class="about_data">
                <p className='col-white fs-5'>
                    &emsp;&emsp;&emsp;<b>M</b>y name is Aditya Sunil Wakale, I'm 23 years old and I reside
                    at Parbhani Maharashtra.
                    I have completed primary studies through Gurudev Samantbhadra vidya mandir
                    Ellora residential school.
                    After that, I graduated with Distinction in Mechanical
                    Engineering from Savitribai Phule Pune University.<br/>
                    &emsp;That Four years in the engineering has not only taught me the basics of mechanical studies but also has given me the ability of reasoning things. It given me the ability to think beyond the established facts. and that's why I sharpened towards a technology. more over I am
                    getting explore the IT fields and getting passionate especially about the web! <br/>
                    &emsp;To get a greater understanding of the technological aspects Currently, I am doing a Full Stack Web Development Course from EDYODA Software training institute Bengaluru. It helped me learn about the type of roles and responsibilities and the work ethics that need to be followed.
                    I also have taken up courses such as Complete web developer Course 2.0 with Infosys Springboard as well as TCS iON Career Edge - Young Professionals. that taught me valuable skills.<br/> 
                    &emsp;In my skillset, my favorite technologies are <strong>Git, React, Bootstrap JavaScript and core java.</strong> currently, I am learning about Node, Expressjs, MongoDB, and In the future, I plan to complete (Spring Boot, AWS and Java Backend Development ) for better understanding about the field of web development. I have mastered in following technologies.
                    <hr/>
                    &emsp;&emsp;Languages:-  Html, Css, JavaScript, SQL, and Core Java. <br/>
                    &emsp;&emsp;Frameworks:- React, BootStrap, MySql.
                    <hr/>
                    I decided to create my own blog to write about my future projects and share my technical
                    experiences.
                    My first goal with this is to keep a track of how I build all my projects and share it with
                    people.
                    And if this can help somebody, I will be very glad about this!
                    <br/>
                    &emsp;Talking about my family there are four members including me. My father is in the private
                    sector and
                    my mother is a housewife.
                    I have an elder sister and she is working as a Medical officer at Symbiosis Hospital Pune. <br/>
                    Apart from this, I love to do Sketching, and got many prizes in it since childhood. I got an
                    "A" Grade certificate for the Elementry grade examination.
                    And I also love to play Chess, video games, and some outdoor games like volleyball and tennis. <br/>
                    &emsp;I am a truly hard-working person and a keen learner. I will continue pushing myself on
                    this track to
                    become a best full-stack developer.
                    That's all about me, thank you for reading this patiently, your feedback and suggestions will be really
                    appreciated.
                </p>
            </div>
        </Container>
        <Footer />
        <Scrollbtn />
    </>
    );
};
export default About;