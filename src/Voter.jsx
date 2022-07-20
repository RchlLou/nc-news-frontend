// import { patchArticleVotes } from "./api";
// import { useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import { UserContext } from "./UserContext"

// export default function Voter({ numVotes }) {
//     const { user } = useContext(UserContext);
//     const [votes, setVotes] = useState(0);
//     const { article_id } = useParams();

//   async function patchVotes (articleId, countNum) {
//       // let count = 0;
//       //   count++
//       //   if (count)

//     patchArticleVotes(article_id, voteCrement).then((res) => { console.log(res)});
//     setVotes((currentVote) => { return currentVote + 1})

//   }

//     return (
//         <section>
//               <p>VOTES: {numVotes + votes}</p>
//             <button onClick={() => { patchVotes(article_id, 1) }}> ♥ </button>
//         </section>
//     )
// }

// function voteCrement() {
//   let count = 0;
//   count += 1;
//   setVote(1);
// }
