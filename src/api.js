import axios from "axios";

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

export const fetchCommentsByArticleID = (id) => {
  return ncNewsApi
    .get(`articles/${id}/comments`)
    .then(({ data: { articleComments } }) => {
      return articleComments;
    });
};

export const postComment = (username, article_id, body) => {
  console.log(username);
  console.log(article_id);
  console.log(body);
  return ncNewsApi
    .post(`articles/${article_id}/comments`, { username: username, body: body })
    .then((response) => {
      console.log(response.body);
    })
    .catch((error) => {
      console.log(error.body);
    });
};
