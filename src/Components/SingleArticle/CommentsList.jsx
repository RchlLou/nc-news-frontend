import { fetchComments } from "../../api"
import { useEffect, useState } from "react";
import CreatedAt from "../Utils/CreatedAt";
import CommentForm from "./CommentForm";

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
  :    (
      <div>
        <CommentForm setComments={setComments}/>
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
