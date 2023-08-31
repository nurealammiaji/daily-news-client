import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import RightNavigation from "../RightNavigation/RightNavigation";
import { Outlet } from "react-router-dom";

const Common = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={3} className="border">
                        <LeftNavigation></LeftNavigation>
                    </Col>
                    <Col md={6} className="border">
                        <Outlet></Outlet>
                    </Col>
                    <Col md={3} className="border">
                        <RightNavigation></RightNavigation>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Common;