import axios from "axios";
import HandleCustomErrors from "./Components/HandleCustomErrors";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-app-feb2022.herokuapp.com/api/",
});

export function fetchArticles(topic) {
  return ncNewsApi
    .get("articles", { params: { topic } })
    .then(({ data: { articles } }) => {
      return articles;
    });
}

export function fetchTopics() {
  return ncNewsApi.get("topics").then(({ data: { topics } }) => {
    return topics;
  });
}

export const fetchArticleByID = (id) => {
  return ncNewsApi.get(`articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
};

export const fetchComments = (id) => {
  return ncNewsApi
    .get(`articles/${id}/comments`)
    .then(({ data: { articleComments } }) => {
      return articleComments;
    });
};

export const postComment = (username, article_id, body) => {
  return ncNewsApi.post(`articles/${article_id}/comments`, {
    username: username,
    body: body,
  });
  // .then((response) => {
  //   console.log(response);
  // });
  // .catch(function ({ response }) {
  //   if (response) {
  //     return <HandleCustomErrors />;
  //     setError(response.data.msg);
  //   }
  // });
};
