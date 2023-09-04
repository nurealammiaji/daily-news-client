import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import HomeNewsCard from "../HomeNewsCard/HomeNewsCard.jsx";

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState(null);

    useEffect(() => {
        fetch('https://daily-news-server-nurealammiaji.vercel.app/news')
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
                            news.map(news => <HomeNewsCard key={news._id} news={news}></HomeNewsCard>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Home;