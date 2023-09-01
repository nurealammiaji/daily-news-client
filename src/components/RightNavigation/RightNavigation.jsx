import { Button } from "react-bootstrap";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const RightNavigation = () => {
    return (
        <div>
            <div>
                <p>Login</p>
                <Button className="w-100" variant="outline-primary"><FaGoogle/> Login with Google</Button>
                <br />
                <Button className="w-100 mt-2" variant="outline-secondary"><FaGithub/> Login with Github</Button>
            </div>
        </div>
    );
};

export default RightNavigation;