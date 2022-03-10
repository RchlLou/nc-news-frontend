import { fetchArticles, fetchTopicBySlug }  from "../../api";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";


export default function ArticlesFilter() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { topic_slug : topicSlug } = useParams();
    
      useEffect(() => {
        setIsLoading(true);

        // let articleData;
        // async function data(topicSlug) {
        //   if (topicSlug === undefined) {
        //     return articleData = await fetchArticles()
        //   } else {
        //    return articleData = await fetchTopicBySlug(topicSlug)
        //   }
        // }
        //  data(topicSlug)

            setArticles(articleData);
            setIsLoading(false);
    }, [articles])
   
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
