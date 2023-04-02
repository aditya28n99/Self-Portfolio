import React from 'react'
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';

function HiringForm() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_43dcufl', 'template_66pdykl', form.current, 'At5r9QyxKu1MAIlqB')
        .then((result) => {
            // console.log(result.text);
            alert("Thank You For Considering My Profile.");
            clearData();
        }, (error) => {
            console.log(error.text);
            alert("Sorry your mail is not processed due to Your Email is not valid.");
            clearData();
        });
};

function clearData() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("industry").value = "";
    document.getElementById("jobroll").value = "";
    document.getElementById("jd").value = "";
    document.getElementById("link").value = "";
}

    return (
        <>
            <Form ref={form} onSubmit={sendEmail}>
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Recruiter Name</Form.Label>
                        <Form.Control type="text" name='name' id='name' placeholder="Enter Your Name" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' id='email' placeholder="Enter Email" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Industry Name</Form.Label>
                        <Form.Control type='text' id='industry' name='industry' required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Job Roll & Responsibility</Form.Label>
                        <Form.Control type='text' name='jobroll' id='jobroll' required />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Job Description</Form.Label>
                    <textarea className="form-control" name='   ' id='jd' placeholder='Message' rows="4"></textarea>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Apply Link</Form.Label>
                    <Form.Control type='text' name='link' id='link' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default HiringForm;