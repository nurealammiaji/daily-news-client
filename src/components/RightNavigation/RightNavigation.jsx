import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const RightNavigation = () => {

    return (
        <div>
            <div>
                <h5 className="text-start mb-3">Login</h5>
                <Button className="w-100" variant="outline-primary"><FaGoogle/> Login with Google</Button>
                <br />
                <Button className="w-100 mt-2" variant="outline-secondary"><FaGithub/> Login with Github</Button>
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
        </div>
    );
};

export default RightNavigation;