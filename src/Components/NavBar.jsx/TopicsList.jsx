import { fetchTopics }  from "../../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TopicsList() {
    const [topics, setTopics] = useState([]);
    
    useEffect(() => {
        fetchTopics().then((topics) => {
            setTopics(topics);
        })
    }, [])

    return (
        <div className="nav-topic-links">
           {topics.map((topic)=> {
                 
              return (           
               <section className="individual-link" key={topic.slug}> 
               <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
                </section>
              )
            })}
          </div>
    )
}