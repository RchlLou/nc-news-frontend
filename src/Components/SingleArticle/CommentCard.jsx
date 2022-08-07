import CreatedAt from "../Utils/CreatedAt";

export default function CommentCard({
  comment,
  articleComments,
  setArticleComments,
}) {
  function onClick() {
    // optimistically remove the comment from comment list
    for (let i = 0; i < articleComments.length; i++) {
      if (articleComments[i].comment_id === comment.comment_id) {
        setArticleComments((currentArticleComments) => {
          return currentArticleComments.splice(i, 1);
        });
      }
    }

    // call the api to delete the comment
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
      <button onClick={onClick}>Delete</button>
    </section>
  );
}
