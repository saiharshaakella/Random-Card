import {useState,useEffect} from 'react';

function Main(){

    const [articles,setArticles] = useState([]);
    const [search,setSearch]=useState("")

    useEffect(()=>{

        let url="https://newsapi.org/v2/everything?q=microsoft&apiKey=92987873f3764162af460b6a73b31d5e"

        fetch(url)
        .then((response) => response.json())
        .then((news )=> {
            console.log(news.articles)
            setArticles(news.articles);
        })
    },[])

    function readValue(value){
        setSearch(value);
    }

    function searchNews(){
        let url=`https://newsapi.org/v2/everything?q=${search}&apiKey=92987873f3764162af460b6a73b31d5e`

        fetch(url)
        .then((response) => response.json())
        .then((news )=> {
            console.log(news.articles)
            setArticles(news.articles);
        })
    }

    return(
        <div className="container">
            <div className="padd">
                <div className="filter">
                    <input type="search" onChange={(event)=>{readValue(event.target.value)}} placeholder="Enter a topic for Search" />
                    <button className="btn" onClick={searchNews}>SEARCH FOR NEWS</button>
                </div>
                
                <h1>WEB NEWS</h1>

                {
                    articles.length===0?(<h2>No Data Found</h2>):

                    articles.map((article,index) => (
                        <div key={index} className="article">
                            <div className="padd-article">
                                <div className='news-img'>
                                    <img src={article.urlToImage} />
                                </div>
                                <div className="news-detail">
                                    <h2>{article.title}</h2>
                                    <p>{article.author}</p>
                                    <p>{article.description}</p>
                                    <p>
                                        <a href={article.url} target="blank">
                                            <button className="btn">Read full Article</button>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Main;
