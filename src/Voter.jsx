import { patchArticleVotes } from "./api";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./UserContext"


export default function Voter({ numVotes }) {
    const { user } = useContext(UserContext);
    const [votes, setVotes] = useState(0);
    const { article_id } = useParams();

    
  console.log(numVotes);
       
            
    

    return (
        <section>
              <p>VOTES: {numVotes + votes}</p>
            <button onClick={() => {  patchArticleVotes(article_id, 1).then((res) => { console.log(res)}); setVotes((currentVote) => { return currentVote + 1}) }}> ♥ </button>
        </section>
    )
}

// function voteCrement() {
    //   let count = 0;
    //   count += 1;
    //   setVote(1);
    // }
  