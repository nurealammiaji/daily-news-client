import { Navigate, useLoaderData, useParams } from "react-router-dom";
import CategoryNewsCard from "../CategoryNewsCard/CategoryNewsCard";

const Category = () => {

    const { id } = useParams();
    console.log(id);

    const categoryNews = useLoaderData();

    return (
        <div>
            {
                (categoryNews.length > 0) ?
                categoryNews.map(news => (news._id !== 0) ? <CategoryNewsCard key={news._id} news={news}></CategoryNewsCard> : <Navigate key={news._id} to="/" replace={true}></Navigate>) : <div><h4>No News Found</h4></div>
            }
        </div>
    );
};

export default Category;