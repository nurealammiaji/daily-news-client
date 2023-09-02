import { Button, Container, Form } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import { useContext } from "react";
import { AuthContext } from "../Providers/Providers";
import { Link } from "react-router-dom";


const Register = () => {

    const {register} = useContext(AuthContext);

    const registerHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if (password !== confirm ) {
            console.log("Password and Confirm Password must be same");
            return;
        }
        else if (password.length < 8) {
            console.log("Password must be 8 characters");
            return;
        }
        else if (!/(?=(.*[0-9]){2,})/.test(password)) {
            console.log("Please add at least one number");
        }
        else if (!/(?=(.*[a-z]){1,})/.test(password)) {
            console.log("Please add at least one lower case character");
        }
        else if (!/(?=(.*[A-Z]){1,})/.test(password)) {
            console.log("Please add at least one upper case character");
            return;
        }
        else if (!/(?=(.*[!@#$%^&*()\-__+.]){1,})/.test(password)) {
            console.log("Please add at least one special character");
            return;
        }
        else {
            register(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })

            form.reset();
        }
    }
    return (
        <div className="bg-light">
            <br /><br />
            <Navigation></Navigation>
            <br /><br /><br />
            <div className="w-50 mx-auto bg-white p-5 rounded-2">
                <h3 className="fw-bold">Register your account</h3>
                <hr className="my-5" />
                <div>
                    <Container>
                        <Form onSubmit={registerHandler} className="text-start">
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className="fs-5 mb-3 fw-medium">Email address</Form.Label>
                                <Form.Control className="bg-light" type="email" name="email" placeholder="Enter your email address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label className="fs-5 mb-3 fw-medium">Password</Form.Label>
                                <Form.Control className="bg-light" type="password" name="password" placeholder="Enter your password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label className="fs-5 mb-3 fw-medium">Confirm Password</Form.Label>
                                <Form.Control className="bg-light" type="password" name="confirm" placeholder="Re-Enter your password" />
                            </Form.Group>
                            <Button type="submit" className="w-100 mt-3 fs-5 fw-medium" variant="secondary">Register</Button>
                        </Form>
                    </Container>
                    <h6 className="mt-5">Already Have An Account ? <Link className="text-danger text-decoration-none" to="/login">Login</Link> </h6>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Register;