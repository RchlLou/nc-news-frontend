import { fetchArticles }  from "../../api";
import { useEffect, useState} from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import CreatedAt from "../Utils/CreatedAt";


export default function ArticlesList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [ query ] = useSearchParams();
    const topic = query.get("topic")
    const navigate = useNavigate();
    

      useEffect(() => {
        setIsLoading(true);
        fetchArticles(topic).then((articleData) => {
            setArticles(articleData);
            setIsLoading(false);
        })
    }, [topic])
   
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
               <section className="article-card-style" key={article.article_id} onClick={() => navigate(`${article.article_id}`)}> 
               {article.article_id}
                  <p>{article.topic}</p> 
                  <p>{article.author}</p>
                  <p>{article.title}</p>
                  {CreatedAt(article.comment_count)}
                  <p>{article.votes}</p>
                </section>
              )
            })}
          </div>
    )
}
