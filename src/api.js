import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-app-feb2022.herokuapp.com/api/",
});

export function fetchArticles() {
  return ncNewsApi.get("articles").then(({ data: { articles } }) => {
    return articles;
  });
}

export function fetchTopics() {
  return ncNewsApi.get("topics").then(({ data: { topics } }) => {
    return topics;
  });
}

export const fetchTopicBySlug = (topic_slug) => {
  return ncNewsApi
    .get(`articles?topic=${topic_slug}`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};
