import React from 'react';
import './App.css';
import '.'
import MagickInput from "./Components/MagickInput";
import Calculator from "./Calculator";

function evaluate(input: string) {
    return Calculator.evaluate(input);
}

function App() {

    return (
        <div className="App">
            <span>mathemagicka</span>

            <MagickInput />
        </div>
    );
}

export default App;
