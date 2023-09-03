import { useLoaderData, useParams } from "react-router-dom";


const Category = () => {

    const { id } = useParams();
    console.log(id);

    const categoryNews = useLoaderData();

    return (
        <div>
            <h3>Category Have {categoryNews.length} News</h3>
        </div>
    );
};

export default Category;