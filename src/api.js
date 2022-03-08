import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-app-feb2022.herokuapp.com/api",
});

export function fetchArticles() {
  return ncNewsApi.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
}
