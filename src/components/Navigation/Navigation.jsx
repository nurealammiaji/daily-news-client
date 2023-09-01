import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const Navigation = () => {
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
                    <Nav>
                        <Nav.Link href="#">Profile</Nav.Link>
                        <Button>Login</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;