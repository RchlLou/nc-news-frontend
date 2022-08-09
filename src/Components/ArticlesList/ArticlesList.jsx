import { fetchArticles } from "../../api";
import CreatedAt from "../Utils/CreatedAt";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [query] = useSearchParams();
  const topic = query.get("topic");
  const navigate = useNavigate();

  // consult the backend and see what request it expects for ascending and descending order
  // create a state to represent how the articles are currently sorted
  // have button on front end flip that state between asc and desc
  // useEffect hook or function to use state and envoke the request

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic, sortBy, order).then((articleData) => {
      setArticles(articleData);
      setIsLoading(false);
    });
  }, [topic, sortBy, order]);

  function onClick(sortByParam) {
    // If sortBy state already equals sortBy parameter
    // Then switch order state
    // Else sort desc

    if (sortBy === sortByParam) {
      setOrder((currentOrder) => {
        return currentOrder === "desc" ? "asc" : "desc";
      });
    } else {
      setSortBy(sortByParam);
      setOrder("desc");
    }
  }

  // ⇧    ⇩
  return isLoading ? (
    <p>loading...</p>
  ) : (
    <div>
      <button
        onClick={() => {
          onClick("created_at");
        }}
      >
        sort by date
      </button>
      <button
        onClick={() => {
          onClick("votes");
        }}
      >
        sort by vote
      </button>

      {articles.map((article) => {
        return (
          <section
            className="article-card-style"
            key={article.article_id}
            onClick={() => navigate(`${article.article_id}`)}
          >
            {article.article_id}
            <p>{article.topic}</p>
            <p>{article.author}</p>
            <p>{article.title}</p>
            <CreatedAt date={article.created_at} />
            <p>{article.votes}</p>
          </section>
        );
      })}
    </div>
  );
}
