import { Form, Button, Container } from "react-bootstrap";
import Navigation from "../Navigation/Navigation.jsx";
import { useContext } from "react";
import { AuthContext } from "../Providers/Providers";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const {login} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || "/";
    console.log(from);

    const loginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (password.length < 8) {
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
            login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })

            form.reset();
            navigate(from, {replace: true})
        }
    }

    return (
        <div className="bg-light">
            <br /><br />
            <Navigation></Navigation>
            <br /><br /><br />
            <div className="w-50 mx-auto bg-white p-5 rounded-2">
                <h3 className="fw-bold">Login your account</h3>
                <hr className="my-5" />
                <div>
                    <Container>
                        <Form onSubmit={loginHandler} className="text-start">
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className="fs-5 mb-3 fw-medium">Email address</Form.Label>
                                <Form.Control className="bg-light" type="email" name="email" placeholder="Enter your email address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label className="fs-5 mb-3 fw-medium">Password</Form.Label>
                                <Form.Control className="bg-light" type="password" name="password" placeholder="Enter your password" />
                            </Form.Group>
                            <Button type="submit" className="w-100 mt-3 fs-5 fw-medium" variant="secondary">Login</Button>
                        </Form>
                    </Container>
                    <div className="mt-5 d-flex justify-content-between">
                        <small>Need Account? <Link className="text-danger text-decoration-none" to="/register">Register</Link> </small>
                        <small>Forgot password? <Link className="text-danger text-decoration-none" to="/forgot">Reset</Link> </small>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Login;