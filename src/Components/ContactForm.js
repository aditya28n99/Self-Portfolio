import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CollaborationForm from './CollaborationForm';
import HiringForm from './HiringForm';
import SocialIcons from './SocialIcons'
import { Link } from 'react-router-dom';
// import {ImMail4} from 'react-icons/im';



function ContactForm() {

    const [myForm, setMyForm] = useState(<HiringForm/>)

    function collabe(){
        let e = document.getElementById("selects").value;
        if(e==="Hiring"){
            setMyForm(<HiringForm/>);
            console.log("Hiring form selected");
        }else if(e==="Collaboration"){
            setMyForm(<CollaborationForm/>);
            console.log("Collaboration form selected");
        }
        else{
            setMyForm(<HiringForm/>);
            console.log("Default form selected");
        }  
    }

    return (
        <>
        <Container>
            <div className='contact-bg'>
                <h1>Lets Chat.</h1>
                <h1>Tell me about your projects.</h1>
                <p className='col-white my-4'>Let's create Somthing Togather.. I enjoy working with dedicated creatives.</p>

                <h6 className='col-white'>You can also find me on <Link to='mailto:adityawakale208@gmail.com' className='mx-2 col-yellow'>{' '}adityawakale208@gmail.com</Link></h6>
                
                <SocialIcons/>
            </div>
            <div className='col-white form-bg'>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Contacting for</Form.Label>
                            <Form.Select id='selects' onChange={()=> collabe()} defaultValue="Hiring">
                                <option value={"Hiring"} selected>Hiring</option>
                                <option value={"Collaboration"} >Working with me..</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                </Form>
                {myForm}
            </div>  
        </Container>
        <Footer/>
        </>
    )
}

export default ContactForm;