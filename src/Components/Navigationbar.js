import '../Styles/Navigationbar.css';
// import react from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import web from '../Images/tech_logo_bg.png'
import { Link } from 'react-router-dom';


function Navigationbar() {

    return (
        <>
            <Container>
                <Navbar  expand="lg" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="#"> <img
                            alt=""
                            src={web}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                        />{' '}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link><Link to="/" className='col-white'>Home</Link></Nav.Link>
                                <Nav.Link><Link to="/about" className='col-white'>About</Link></Nav.Link>
                                <Nav.Link><Link to="/contact" className='col-white'>Contact</Link></Nav.Link>
                                <Nav.Link><Link to="/" className='col-white'>Download Cv</Link></Nav.Link>
                                <NavDropdown  title="More"  className='text-white'id="collasible-nav-dropdown">
                                    <NavDropdown.Item><Link to="/" className='col-black'>Projects</Link></NavDropdown.Item>
                                    <NavDropdown.Item>
                                    <Link to="/" className='col-black'>Certificates</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                    <Link to="/" className='col-black'>Activity</Link>
                                        
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </>
    );
};
export default Navigationbar;