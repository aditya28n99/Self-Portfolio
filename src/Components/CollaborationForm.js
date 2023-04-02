import React from 'react'
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';

function CollaborationForm() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_43dcufl', 'template_okyy8e9', form.current, 'At5r9QyxKu1MAIlqB')
            .then((result) => {
                // console.log(result.text);
                alert("Thanks for Your responce");
                clearData();
            }, (error) => {
                console.log(error.text);
                alert("Sorry your mail is not processed due to your Email is not valid");
                clearData();
            });
    };

    function clearData() {
        document.getElementById("first_name").value = "";
        document.getElementById("last_name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("about_message").value = "";
        document.getElementById("message").value = "";
    }
 
    // SecureToken: "6af72825-e6c2-4015-b18c-b27db7989bd4",
    // function sendEmail(event){

    //     event.preventDefault();

    //     Email.send({
    //         Username: "asw.webhosting@gmail.com",
    //         Password: "43436A0382F6C2167A7401924A9CEEB836CD",
    //         Host: "smtp.elasticemail.com",
    //         port: "2525",
    //         To : 'adityawakale.jobs@gmail.com',
    //         From : "adityas2028@gmail.com",
    //         Subject : "This is the subject",
    //         Body : "And this is the body 43dcufl"
    //     }).then(
    //         console.log("Hii")
    //     );
    // }

    return (
        <>
            {/* <div className='border col-white w-50 m-auto p-2'>
                    <h6>Thanks for your responce</h6>
            </div> */}
            <Form ref={form} onSubmit={sendEmail}>
                <Row className="mb-3 mt-5">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name='first_name' id='first_name' placeholder="Enter Your First Name" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name='last_name' id='last_name' placeholder="Enter Your Last Name" required />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' name='email' id='email' placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type='phone' name='phone' id='phone' placeholder="Enter Phone" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type='text' name='subject' id='subject' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>More about You</Form.Label>
                    <textarea className="form-control" name='about_message' id='about_message' placeholder='Message' rows="2"></textarea>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>message</Form.Label>
                    <textarea className="form-control" name='message' id='message' placeholder='Message' rows="4"></textarea>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default CollaborationForm