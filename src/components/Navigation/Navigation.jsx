import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/Providers';

const Navigation = () => {

    const { user, logout } = useContext(AuthContext);

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className="p-2 text-decoration-none text-secondary" to="/">Home</Link>
                            <Link className="p-2 text-decoration-none text-secondary" to="/about">About</Link>
                            <Link className="p-2 text-decoration-none text-secondary" to="/career">Career</Link>
                        </Nav>
                        <Nav className=''>
                            <Link className='p-2 text-secondary text-decoration-none' to="/profile">{(user) ? user.email || user.displayName : <FaUserCircle className='fs-4'/>}</Link>
                            {(user) ? <Button onClick={logout} variant='secondary' className='rounded-0'>Logout</Button> : <Link to="/login"><Button variant='secondary' className='rounded-0'>Login</Button></Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;