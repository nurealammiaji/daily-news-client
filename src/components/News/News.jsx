

const News = ({news}) => {


    const {id, title, image_url} = news;

    return (
        <div>
            <div>
                <h6>{title}</h6>
                <img className="img-fluid" src={image_url} alt="" />
            </div>
        </div>
    );
};

export default News;