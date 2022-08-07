import CreatedAt from "../Utils/CreatedAt";
import { deleteComment } from "../../api";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

export default function CommentCard({
  comment,
  articleComments,
  setArticleComments,
}) {
  const { user } = useContext(UserContext);

  function onClick() {
    // optimistically remove the comment from comment list
    setArticleComments((currentArticleComments) => {
      return currentArticleComments.filter(
        (currentComment) => currentComment.comment_id !== comment.comment_id
      );
    });
    // call the api to delete the comment
    deleteComment(comment.comment_id);
  }

  return (
    <section className="comment-card-style">
      <p>{comment.topic}</p>
      <p>{comment.author}</p>
      <CreatedAt date={comment.created_at} />
      <p>{comment.votes}</p>
      <p>
        COMMENT:
        <br />
        {comment.body}
      </p>
      {comment.author === user.username ? (
        <button onClick={onClick}>Delete</button>
      ) : null}
    </section>
  );
}
