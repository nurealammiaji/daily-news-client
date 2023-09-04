import logo from "../../assets/logo.png";
import moment from 'moment';
import Navigation from "../Navigation/Navigation";
import Marquee from "react-fast-marquee";
import { Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Providers";
import { Link } from "react-router-dom";

const Header = () => {

    const { news } = useContext(AuthContext);

    return (
        <div>
            <div>
                <img className="img-fluid" src={logo} alt="" />
                <p className="text-secondary text fs-5">Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className="d-flex p-3 bg-light">
                <Button variant="danger" className="me-3 rounded-0">Latest</Button>
                <Marquee pauseOnHover={true} className="text-danger">
                    {
                        (news.length > 0) ? news.map(n => <div className="px-5" key={n._id}><Link className="text-decoration-none text-danger" to={`/news/${n._id}`}>{n.title}</Link></div>) : 'Loading ...'
                    }
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