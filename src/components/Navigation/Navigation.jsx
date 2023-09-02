import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/Providers';

const Navigation = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/career">Career</Nav.Link>
                    </Nav>
                    <Nav className=''>
                        <Nav.Link href="#">{(user) ? user.email : <FaUserCircle className='fs-4'/>}</Nav.Link>
                        {(user) ? <Button variant='secondary' className='rounded-0'>Logout</Button> : <Link to="/login"><Button variant='secondary' className='rounded-0'>Login</Button></Link>}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;