import { patchArticleVotes } from "./api";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Voter({ numVotes }) {
  const [votes, setVotes] = useState(0);
  const { article_id } = useParams();

  const [userVote, setUserVote] = useState(0);

  function onClick(vote) {
    // Check if incoming vote is legal, ie not voted twice in a row
    // If legal, adjust userVote accordingly
    //  Enable or disable <3 / -<3

    if (vote === userVote) {
      console.log("illegal");
      return;
    }
    setVotes((currentVotes) => {
      return currentVotes + vote;
    });

    setUserVote((currentUserVote) => {
      return currentUserVote + vote;
    });
  }

  function patchVotes(articleId, countNum) {
    setVotes((currentVote) => {
      return currentVote + countNum;
    });
    patchArticleVotes(article_id, countNum);
  }

  return (
    <section>
      <p>VOTES: {numVotes + votes}</p>
      <button
        onClick={() => {
          onClick(1);
        }}
      >
        ♥
      </button>
      <button
        onClick={() => {
          onClick(-1);
        }}
      >
        -♥
      </button>
    </section>
  );
}
