import { fetchComments } from "../../api";
import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";

export default function CommentsList({ article_id }) {
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchComments(article_id).then((commentsData) => {
      setArticleComments(commentsData);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p>loading...</p>
  ) : (
    <div>
      <CommentForm setArticleComments={setArticleComments} />
      {articleComments.map((comment) => {
        return (
          <CommentCard
            comment={comment}
            articleComments={articleComments}
            setArticleComments={setArticleComments}
            key={comment.comment_id}
          />
        );
      })}
    </div>
  );
}
