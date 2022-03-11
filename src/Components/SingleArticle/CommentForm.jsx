import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../api";
import { UserContext } from "../../UserContext";

export default function CommentForm() {
const [input, setInput] = useState("");

const { article_id } = useParams();

const { user } = useContext(UserContext);


    const onSubmit = (event) => {
        event.preventDefault()
        postComment(user.username, article_id, input)
    }

    const onChange = (event) => {
      setInput(event.target.value)
    }

return (
    <form onSubmit={onSubmit}>
        <input onChange={onChange} value={input}/>
        <button>Post</button>
    </form>
    )
}
