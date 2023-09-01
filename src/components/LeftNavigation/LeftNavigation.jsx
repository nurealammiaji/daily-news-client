import { useEffect, useState } from "react";

const LeftNavigation = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(console.error);
    }, []);

    return (
        <div>
            <div className="text-start">
                <h5 className="mb-3">All Categories</h5>
                <div className="ms-3">
                    {
                        categories.map(category => <p key={category.id}><a className="text-decoration-none" href={category.id}>{category.name}</a></p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftNavigation;