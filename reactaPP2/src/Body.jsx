
import React from "react"
export default function Body(props) {
  const isUser = props.user? props.user: " ___!";
    return (
        <section>
            <h1>Welcome back, {isUser}</h1>
        </section>
    )
}
