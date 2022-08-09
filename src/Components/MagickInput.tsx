import React, {FormEvent} from "react";
import {useState} from 'react';
import Calculator from "../Calculator";



function MagickInput() {
    const [answer, setAnswer] = useState()

    const [question, setQuestion] = useState('');

    const handleChange = (event: FormEvent<HTMLInputElement>)   => {
        setQuestion(event.currentTarget.value);

        console.log('value is:', event.currentTarget.value);
    };

    const Execute = (value: string) => {
        setAnswer(Calculator.evaluate(value));
    }

    return (
        <div>
            <input onChange={handleChange} type={"text"} placeholder={"Enter Expression..."}/>
            <input type={"button"} onClick={() => Execute(question)}/>
            <p>{answer}</p>
        </div>
    );
}




export default MagickInput;
