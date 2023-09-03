import { useParams } from "react-router-dom";


const Category = () => {

    const { id } = useParams();

    return (
        <div>
            <h3>Category: {id}</h3>
        </div>
    );
};

export default Category;