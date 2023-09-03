import { Link } from "react-router-dom";


const CategoryNewsCard = ({ news }) => {

    const { _id, author, title, image_url, details } = news;

    return (
        <div>
            <div className="border rounded-2">
                <div className="d-flex align-items-center bg-light rounded-top-2">
                    <div className="px-3">
                        <img style={{ height: 50 }} className="img-fluid rounded-circle" src={author?.img} alt="" />
                    </div>
                    <div className="mt-3">
                        <p>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div className="p-3">
                    <h6>{title}</h6>
                    <img className="img-fluid" src={image_url} alt="" />
                    <p className="mt-2">
                        {
                            (details.length < 255) ? <>{details}</> : <>{details.slice(0, 255)}... <Link to={`/news/${_id}`}>Read More</Link> </>
                        }
                    </p>
                </div>
            </div>
            <br />
        </div>
    );
};

export default CategoryNewsCard;