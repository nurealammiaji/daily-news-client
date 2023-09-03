import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import RightNavigation from "../RightNavigation/RightNavigation";
import Header from "../Header/Header";

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col md={9}>

                    </Col>
                    <Col md={3}>
                        <RightNavigation></RightNavigation>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLayout;