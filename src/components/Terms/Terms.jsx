import { Button, Container, Form } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";


const Terms = () => {
    return (
        <div className="bg-light">
            <br /><br />
            <Navigation></Navigation>
            <br /><br /><br />
            <div className="w-50 mx-auto bg-white p-5 rounded-2">
                <h3 className="fw-bold">Terms & Conditions</h3>
                <hr className="my-5" />
                <div>
                    <Container>
                        <div className="text-start">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum architecto aperiam aspernatur velit cumque autem dignissimos error explicabo minus quia! Magnam vel, nobis accusantium dolor facere saepe. Accusamus facere quas natus, obcaecati deserunt repellendus sunt? Deserunt eos id veritatis nemo amet dicta necessitatibus dolores, cupiditate minima, beatae porro sint iusto sunt dolore molestiae at vitae perferendis sit laborum? Quia repudiandae recusandae quos magnam cum quisquam consectetur officiis culpa maiores nam quis corrupti, reiciendis cupiditate! Repellat, minima. Minima obcaecati, deleniti modi porro commodi iusto assumenda cumque culpa eos laboriosam, laborum earum voluptatum quas necessitatibus sint, magni fuga? Corrupti facere suscipit impedit!</p>
                        </div>
                    </Container>
                    <h6 className="mt-5">Go Back to <Link className="text-danger text-decoration-none" to="/register">Register</Link> </h6>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Terms;