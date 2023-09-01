import { useEffect, useState } from "react";
import News from "../News/News";


const Home = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/news')
        .then(res => res.json())
        .then(data => setNews(data))
        .catch(error => console.error(error));
    })
    return (
        <div>
            <div>
                <h5>Daily News Home</h5>
                <div>
                    {
                        news.map(news => <News key={news.id} news={news}></News>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;