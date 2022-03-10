import React from "react";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../api";
import { UserContext } from "../../UserContext";
import { useForm } from "react-hook-form"

export default function CommentForm() {
    const {register, handleSubmit, setError, formState: { errors } } = useForm();
    const { user } = useContext(UserContext);
    const [input, setInput] = useState("");
    const { article_id } = useParams();


    const onSubmit = (data, event) => {
        event.preventDefault()
        console.log(data)
        postComment(user.username, article_id, input);
    }

    const { onChange, ...rest } = register("username")
   
     onChange = (event) => {
      setInput(event.target.value)
    }

    const onError = (errors, event) => {
        console.log(errors, event)
    }

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input  onChange={(e) => {
          setError("username", {
            type: "manual",
            message: "Dont Forget Your Username Should Be Cool!",
          });
          onChange(e);
        }}
        {...rest} value={input}/>

         {errors.username && <p>{errors.username.message}</p>}

        <button type="button"
        onClick={() => {
          setError("test", { type: "focus" }, { shouldFocus: true });
        }}>Post Set Error Focus</button>
        <input type="submit" />

    </form>
    )
}
