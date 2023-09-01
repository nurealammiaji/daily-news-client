

const News = ({news}) => {


    const {id, author, title, image_url, details} = news;

    return (
        <div>
            <div className="border p-2 rounded-2">
                <div className="d-flex align-items-center">
                    <img className="img-fluid w-25 rounded-circle" src={author.img} alt="" />
                    <div>
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                    </div>
                </div>
                <h6>{title}</h6>
                <img className="img-fluid" src={image_url} alt="" />
                <p className="mt-2">{details}</p>
            </div>
            <br />
        </div>
    );
};

export default News;