import React, {FormEvent, useState} from "react";
import Brain from "../Magick/Brain";


function Inputtor() {
    const [answer, setAnswer] = useState('')

    const [question, setQuestion] = useState('');

    function handleChange(event: FormEvent<HTMLInputElement>) {
        setQuestion(event.currentTarget.value);
    }

    function answerQuestion() {
        setAnswer(Brain.evaluate(question).toString());
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        setAnswer(Brain.evaluate(question).toString());
        event.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type={"text"} placeholder={"Enter Expression..."}/>
            <button onClick={answerQuestion}>Answer</button>
            <p>{answer}</p>
        </form>
    );
}




export default Inputtor;
