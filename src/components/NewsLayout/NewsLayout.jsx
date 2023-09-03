import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import RightNavigation from "../RightNavigation/RightNavigation";
import Header from "../Header/Header";
import NewsDetails from "../NewsDetails/NewsDetails";
import { useLoaderData } from "react-router-dom";

const NewsLayout = () => {

    const newsDetails = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col md={9}>
                        <NewsDetails newsDetails={newsDetails}></NewsDetails>
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