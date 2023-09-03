import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftNavigation = () => {

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState(null);

    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(console.error);
        if (categories) {
            setLoading(false);
        }
    }, [categories]);

    return (
        <div>
            <div className="text-start">
                <h5 className="mb-3">All Categories</h5>
                {
                    (loading) ?
                    <Button variant="primary" disabled>
                        <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        Loading...
                    </Button> :
                    <div className="ms-3">
                        {
                            categories.map(category => <p key={category.id}><Link className="text-decoration-none" to={`/categories/${category.id}`}>{category.name}</Link></p>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default LeftNavigation;