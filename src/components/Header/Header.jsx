import logo from "../../assets/logo.png";
import moment from 'moment';
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <div>
            <div>
                <img className="w-50" src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div>
                <Navigation></Navigation>
            </div>
        </div>
    );
};

export default Header;