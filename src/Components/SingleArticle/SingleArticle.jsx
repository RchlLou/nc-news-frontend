import { fetchArticleByID }  from "../../api";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom"


export default function ArticlesById() {
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams;
  

    useEffect(() => {
        setIsLoading(true);
        fetchArticleByID(id).then((articleData) => {
            setArticle(articleData);
            setIsLoading(false);
        })
    }, [id])
   
    return isLoading 
    ?  (
        <p>loading...</p>
        )

    :   (
        <div>
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
          </div>
    )
}
