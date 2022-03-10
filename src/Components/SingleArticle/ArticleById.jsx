import { fetchArticleByID }  from "../../api";
import CommentsList from "./CommentsList"
import CommentForm from "./CommentForm";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom"


export default function ArticleById() {
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams();
  

    useEffect(() => {
        setIsLoading(true);
        fetchArticleByID(article_id).then((articleData) => {
            setArticle(articleData);
            setIsLoading(false);
        })
    }, [article_id])

   
    return isLoading 
    ?  (
        <p>loading...</p>
        )

    :   (
        <div>         
               <section className="article-card-style" key={article.article_id}> 
                  <p>{article.topic}</p> 
                  <p>{article.author}</p>
                  <p>{article.title}</p>
                  <p>{article.comment_count}</p>
                  <p>{article.votes}</p>
                </section>
                <CommentForm/>
                    <CommentsList article_id={article_id}/>
          </div>
    )
}