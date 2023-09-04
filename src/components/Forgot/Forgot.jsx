import { Button, Container, Form } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import { useContext } from "react";
import { AuthContext } from "../Providers/Providers";

const Forgot = () => {

    const { forgotPassword } = useContext(AuthContext);

    const forgotPasswordHandler = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;

        forgotPassword(email)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })

        form.reset();
    }

    return (
        <div className="bg-light">
            <br /><br />
            <Navigation></Navigation>
            <br /><br /><br />
            <div style={{ maxWidth: 500 }} className="mx-auto bg-white p-5 rounded-2">
                <h3 className="fw-bold">Reset your password</h3>
                <hr className="my-5" />
                <div>
                    <Container>
                        <Form onSubmit={forgotPasswordHandler} className="text-start">
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className="fs-5 mb-3 fw-medium">Email address</Form.Label>
                                <Form.Control className="bg-light" type="email" name="email" placeholder="Enter your email address" />
                            </Form.Group>
                            <Button type="submit" className="w-100 mt-3 fs-5 fw-medium" variant="secondary">Send Reset Email</Button>
                        </Form>
                    </Container>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Forgot;