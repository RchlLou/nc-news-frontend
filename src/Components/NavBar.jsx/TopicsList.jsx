import { fetchTopics }  from "../../api";
import { useEffect, useState } from "react";
import {  Link } from "react-router-dom";

export default function TopicsList() {
    const [topics, setTopics] = useState([]);
    // const navigate = useNavigate();
    
    useEffect(() => {
        fetchTopics().then((topics) => {
            setTopics(topics);
        })
    }, [])
   
    return (
        <div className="nav-topic-links">
           {topics.map((topic)=> {
              return (    
                  <section key={topic.slug}>
                <Link to={`articles?topic=${topic.slug}`}>{topic.slug}</Link>  
                </section> 
            //    <section className="individual-link" key={topic.slug}onClick={()=>navigate(`articles?topic=${topic.slug}`, {replace:true})}> 
            //    {topic.slug}
                // </section>
              )
            })}
          </div>
    )
}