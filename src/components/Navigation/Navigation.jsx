import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
        <nav className="d-flex align-items-center justify-content-center">
            <Link className="m-3" to="/">Home</Link>
            <Link className="m-3" to="/About">About</Link>
            <Link className="m-3" to="/career">Career</Link>
        </nav>
    );
};

export default Navigation;