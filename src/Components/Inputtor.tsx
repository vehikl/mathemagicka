import React, {FormEvent, useState} from "react";
import Calculator from "../Magick/Calculator";


function Inputtor() {
    const [answer, setAnswer] = useState()

    const [question, setQuestion] = useState('');

    function handleChange(event: FormEvent<HTMLInputElement>) {
        setQuestion(event.currentTarget.value);
    }

    function answerQuestion() {
        setAnswer(Calculator.evaluate(question));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        setAnswer(Calculator.evaluate(question));
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
