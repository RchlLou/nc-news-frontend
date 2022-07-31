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

export const fetchComments = (id) => {
  return ncNewsApi
    .get(`articles/${id}/comments`)
    .then(({ data: { articleComments } }) => {
      return articleComments;
    });
};

export const postComment = (username, article_id, body) => {
  return ncNewsApi
    .post(`articles/${article_id}/comments`, { username: username, body: body })
    .catch(function ({
      response: {
        data: { msg },
        status,
      },
    }) {
      if (msg) {
        alert(
          `Status ${status}: Comment not posted because ${msg}. Please try again.`
        );
      }
    });
};

export const patchArticleVotes = (id, voteNum) => {
  return ncNewsApi
    .patch(`articles/${id}`, { inc_votes: `${voteNum}` })
    .then((result) => {
      return result.data.updatedArticle;
    })
    .catch(function ({
      response: {
        data: { msg },
        status,
      },
    }) {
      if (msg) {
        alert(
          `Status ${status}: Vote not updated because ${msg}. Please try again.`
        );
      }
    });
};
