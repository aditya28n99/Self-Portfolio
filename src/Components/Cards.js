import React from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../Styles/Cards.css';

function Cards(props) {
    return (
        <div className={props.hideCard}>
        <Card  className='card'>
            <a href={props.link} rel='noreferrer' target="_blank">
            <Card.Img variant="top" src={props.img} className='card-img' />
            </a>
            <Card.Body className='p-0 pt-3'>
                <Card.Title id='card_title' >{props.name}</Card.Title>
                <Card.Text id='card_text'>
                    {props.description}  
                </Card.Text >
                <Button variant="success"> <a className='col-white hov-yellow' href={props.link} rel='noreferrer' target="_blank">Go to the Web!</a></Button>
                <Button variant="success"className='mx-2'> <a className='col-white hov-yellow' href={props.repo} rel='noreferrer' target="_blank">Source Code</a></Button>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Cards