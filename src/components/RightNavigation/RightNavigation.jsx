import { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AuthContext } from "../Providers/Providers";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightNavigation = () => {

    const { googleLogin, githubLogin } = useContext(AuthContext);

    const googleLoginHandler = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const githubLoginHandler = () => {
        githubLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div>
                <h5 className="text-start mb-3">Login</h5>
                <Button onClick={googleLoginHandler} className="w-100" variant="outline-primary"><FaGoogle/> Login with Google</Button>
                <br />
                <Button onClick={githubLoginHandler} className="w-100 mt-2" variant="outline-secondary"><FaGithub/> Login with Github</Button>
            </div>
            <br />
            <div className="text-start">
                <h5>Find us on</h5>
                <ListGroup className="mt-3">
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <br />
            <div className="bg-light rounded-2 p-3">
                <div>
                    <h5 className="text-start fw-medium">Q-Zone</h5>
                </div>
                <div>
                    <img className="img-fluid" src={qZone1} alt="" />
                </div>
                <div>
                    <img className="img-fluid" src={qZone2} alt="" />
                </div>
                <div>
                    <img className="img-fluid" src={qZone3} alt="" />
                </div>
            </div>
            <br />
        </div>
    );
};

export default RightNavigation;