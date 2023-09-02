

const News = ({news}) => {


    const {id, author, title, image_url, details} = news;

    return (
        <div>
            <div className="border rounded-2">
                <div className="d-flex align-items-center bg-light">
                    <div className="w-25">
                        <img className="img-fluid p-4 rounded-circle" src={author.img} alt="" />
                    </div>
                    <div className="mt-3">
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="p-3">
                    <h6>{title}</h6>
                    <img className="img-fluid" src={image_url} alt="" />
                    <p className="mt-2">{details}</p>
                </div>
            </div>
            <br />
        </div>
    );
};

export default News;