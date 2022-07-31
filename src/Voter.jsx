import { patchArticleVotes } from "./api";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Voter({ numVotes }) {
  const { article_id } = useParams();
  const [userVote, setUserVote] = useState(0);
  const [upVoteButtonDisabled, setUpVoteButtonDisabled] = useState(false);
  const [downVoteButtonDisabled, setDownVoteButtonDisabled] = useState(false);

  function onClick(vote) {
    setUserVote((currentUserVote) => {
      return currentUserVote + vote;
    });

    setUpVoteButtonDisabled(userVote + vote === 1);
    setDownVoteButtonDisabled(userVote + vote === -1);

    patchArticleVotes(article_id, vote);
  }

  return (
    <section>
      <p>VOTES: {numVotes + userVote}</p>
      <button
        disabled={upVoteButtonDisabled}
        onClick={() => {
          onClick(1);
        }}
      >
        ♥
      </button>
      <button
        disabled={downVoteButtonDisabled}
        onClick={() => {
          onClick(-1);
        }}
      >
        -♥
      </button>
    </section>
  );
}
