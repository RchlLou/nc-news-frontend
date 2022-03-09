import { fetchTopicBySlug } from '../api';
import { useState, useEffect } from 'react'
import {useParams} from "react-router-dom";

export default function SingleTopic () {
  const [topic, setTopic] = useState([]);
  const { topic_slug } = useParams();

  useEffect(() => {
    fetchTopicBySlug(topic_slug).then((topicData) => {
      setTopic(topicData);
    });
  }, [topic_slug]);

  return  (
      <div>
        {topic.map((article)=> {
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
