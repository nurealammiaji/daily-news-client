import logo from "../../assets/logo.png";
import moment from 'moment';
import Navigation from "../Navigation/Navigation";
import Marquee from "react-fast-marquee";
import { Button } from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <div>
                <img className="img-fluid" src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className="d-flex p-3 bg-light">
                <Button variant="danger" className="me-3 rounded-0">Latest</Button>
                <Marquee pauseOnHover={true} className="text-danger">
                I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <br />
            <div>
                <Navigation></Navigation>
            </div>
            <br />
        </div>
    );
};

export default Header;