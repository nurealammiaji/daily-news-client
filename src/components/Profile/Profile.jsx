import { Button, Container, Form } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";

const Profile = () => {
    return (
        <div className="bg-light">
            <br /><br />
            <Navigation></Navigation>
            <br /><br /><br />
            <div style={{maxWidth: 500}} className="mx-auto bg-white p-5 rounded-2">
                <h3 className="fw-bold">User Profile</h3>
                <hr className="my-5" />
                <div>
                    <Container>
                        <Form className="text-start">
                            <Form.Group className="mb-3" controlId="formGroupName">
                                <Form.Label className="fs-5 mb-3 fw-medium">Name</Form.Label>
                                <Form.Control className="bg-light" type="email" name="name" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className="fs-5 mb-3 fw-medium">Email</Form.Label>
                                <Form.Control className="bg-light" type="email" name="email" placeholder="Your Email" disabled />
                            </Form.Group>
                            <Button type="submit" className="w-100 mt-3 fs-5 fw-medium" variant="secondary">Update</Button>
                        </Form>
                    </Container>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Profile;