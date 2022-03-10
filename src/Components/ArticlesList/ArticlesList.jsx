import { fetchArticles }  from "../../api";
import { useEffect, useState} from "react";


export default function ArticlesList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

      useEffect(() => {
        setIsLoading(true);
        fetchArticles().then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        })
    }, [])
   
    return isLoading 
    ?  (
        <p>loading...</p>
        )

    :   (
        <div>
           {articles.map((article)=> {
              //   setArticles(event.target.value)
              // onClick={event => console.log(hello) }
              return (           
               <section className="article-card-style" key={article.article_id} onClick={((event) => console.log(event.target.value))}> 
                <p>{article.id}</p> 
                  <p>{article.topic}</p> 
                  <p>{article.author}</p>
                  <p>{article.title}</p>
                  <p>{article.comment_count}</p>
                  <p>{article.votes}</p>
                </section>
              )
            })}
          </div>
    )
}
