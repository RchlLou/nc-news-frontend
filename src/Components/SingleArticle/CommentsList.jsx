import { fetchComments } from "../../api"
import { useEffect, useState } from "react";
import CreatedAt from "../Utils/CreatedAt";

export default function CommentsList({ article_id }) {
const [comments, setComments] = useState([]);
const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchComments(article_id).then((commentsData) => {
            setComments(commentsData);
            setIsLoading(false);
        })
    }, [article_id])

return  isLoading 
  ?   (
    <p>loading...</p>
      ) 
  :   (
      <div>
         {comments.map((comment)=> {
            return (           
             <section className="comment-card-style" key={comment.comment_id}> 
              <p>{comment.topic}</p> 
              <p>{comment.author}</p>
              {CreatedAt(comment.created_at)}
              <p>{comment.votes}</p>
              <p>COMMENT:<br/>
                {comment.body}</p> 
            </section>
          )
        })}
      </div>
    )
}

// author: "jessjelly"
// body: "Eaque fugiat est veniam ex praesentium et saepe molestias non. Est dolore et sint consequuntur."
// comment_id: 48
// created_at: "2020-03-08T20:02:00.000Z"
// votes: 12