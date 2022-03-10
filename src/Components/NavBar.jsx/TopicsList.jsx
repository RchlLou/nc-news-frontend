import { fetchTopics }  from "../../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopicsList() {
    const [topics, setTopics] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchTopics().then((topics) => {
            setTopics(topics);
        })
    }, [])
   

    return (
        <div className="nav-topic-links">
           {topics.map((topic)=> {
              return (           
               <section className="individual-link" key={topic.slug}onClick={()=>navigate(`articles?topic=${topic.slug}`, {replace:true})}> 
               {topic.slug}
                </section>
              )
            })}
          </div>
    )
}