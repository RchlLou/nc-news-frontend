import { fetchArticles }  from "../api";
import { useEffect, useState} from "react";



export default function ArticlesList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // console.dir(useParams());
    // const { topic_slug : topicSlug} = useParams();
   
  // console.log(Object.values())

      useEffect(() => {
        setIsLoading(true);
        fetchArticles(undefined).then((articles) => {
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
                 
              return (           
               <section className="article-card-style" key={article.article_id}> 
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
