import { fetchCommentsByArticleID } from "../../api"
import { useEffect, useState } from "react";

export default function CommentsList({ article_id }) {
const [comments, setComments] = useState([]);

    useEffect(() => {
        // setIsLoading(true);
        fetchCommentsByArticleID(article_id).then((commentsData) => {
            setComments(commentsData);
        })
    }, [])

return    (
    <div>
       {comments.map((comment)=> {
          return (           
           <section className="comment-card-style" key={comment.comment_id}> 
           {comment.comment_id}
              <p>{comment.topic}</p> 
              <p>{comment.author}</p>
              <p>{comment.title}</p>
              <p>{comment.comment_count}</p>
              <p>{comment.votes}</p>
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