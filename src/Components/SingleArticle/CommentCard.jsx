import CreatedAt from "../Utils/CreatedAt";

export default function CommentCard({
  comment,
  articleComments,
  setArticleComments,
}) {
  function onClick() {
    // optimistically remove the comment from comment list
    setArticleComments((currentArticleComments) => {
      // insert logic here!!
      return currentArticleComments.filter(
        (currentComment) => currentComment.comment_id !== comment.comment_id
      );
    });
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
