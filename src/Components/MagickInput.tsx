import React, {FormEvent, useState} from "react";
import Calculator from "../Calculator";


function MagickInput() {
    const [answer, setAnswer] = useState()

    const [question, setQuestion] = useState('');

    function handleChange(event: FormEvent<HTMLInputElement>) {
        setQuestion(event.currentTarget.value);
    }

    function Execute(value: string) {
        setAnswer(Calculator.evaluate(value));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        setAnswer(Calculator.evaluate(question));
        event.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type={"text"} placeholder={"Enter Expression..."}/>
            <button onClick={() => Execute(question)}>Answer</button>
            <p>{answer}</p>
        </form>
    );
}




export default MagickInput;
