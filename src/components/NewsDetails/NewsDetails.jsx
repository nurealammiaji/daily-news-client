import { Button, Container } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsDetails = ({ newsDetails }) => {

    const { image_url, title, details, category_id } = newsDetails;

    return (
        <div className="border rounded-2 p-3">
            <div>
                <img className="img-fluid" src={image_url} alt="" />
            </div>
            <Container className="text-start">
                <h5 className="my-3">{title}</h5>
                <p>{details}</p>
                <Link to={`/categories/${category_id}`}><Button className="rounded-0" variant="danger"><FaArrowLeft className="me-1"/> All News of this category</Button></Link>
            </Container>
        </div>
    );
};

export default NewsDetails;