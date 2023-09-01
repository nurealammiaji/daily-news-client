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
                    <Col md={3}>
                        <LeftNavigation></LeftNavigation>
                    </Col>
                    <Col md={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col md={3}>
                        <RightNavigation></RightNavigation>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Common;