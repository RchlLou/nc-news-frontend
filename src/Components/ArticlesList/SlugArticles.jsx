import { fetchTopicBySlug } from '../../api';
import { useState, useEffect } from 'react'
import {useParams} from "react-router-dom";

export default function SingleTopic () {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_slug : topicSlug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchTopicBySlug(topicSlug).then((topicData) => {
      setArticles(topicData);
      setIsLoading(false);
    });
  }, [topicSlug]);

  return isLoading 
  ?  (
    <p>loading...</p>
    )

  :  (
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
};
