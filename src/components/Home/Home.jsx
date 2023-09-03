import { useEffect, useState } from "react";
import News from "../News/News";
import { Button, Spinner } from "react-bootstrap";


const Home = () => {

    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/news')
        .then(res => res.json())
        .then(data => setNews(data))
        .catch(error => console.error(error));
        if (news) {
            setLoading(false);
        }
    }, [news])

    return (
        <div>
            <div className="text-start">
                <h5 className="mb-3">Daily News Home</h5>
                { (loading) ?
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
                    <div>
                        {
                            news.map(news => <News key={news.id} news={news}></News>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Home;