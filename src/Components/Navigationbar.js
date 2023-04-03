import '../Styles/Navigationbar.css';
// import react from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import web from '../Images/web-logo.png'
import pdf from '../Images/adityawakale208@Cv&CL.pdf';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';



function Navigationbar() {



    return (
        <>
            <Container>
                <Navbar expand="lg" variant="dark">
                    <Container fluid>
                        <Navbar.Brand><img
                            alt="Logo"
                            src={web}
                            width="100"
                            height="100"
                            className="d-inline-block align-top logo"
                        /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link><Link to="/" className='col-white pages hov-gray'>Home</Link></Nav.Link>
                                <Nav.Link><Link to="/about" className='col-white pages hov-gray'>About</Link></Nav.Link>
                                <Nav.Link><Link to="/contact" className='col-white pages hov-gray'>Contact</Link></Nav.Link>
                                <Nav.Link><Link to="/" className='col-white pages hov-gray ' onClick={() => {
                                        window.location.href = '#project-heading';
                                    }} >Projects</Link> </Nav.Link>
                                <NavDropdown title="More" className='text-white pages hov-gray' id="collasible-nav-dropdown">
                                    <NavDropdown.Item><Link href={pdf} target='_blank' className='col-black'>Download Cv</Link></NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/" className='col-black'>Certificates</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Link to="/" className='col-black'>Activity</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <SocialIcons />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </>
    );
};
export default Navigationbar;