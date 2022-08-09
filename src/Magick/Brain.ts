import {Thought} from "./Thought";

//brain takes thought and produces idea


export default class Brain {
    static evaluate(input: Thought) {
        console.log(input);
        return input;
    }
}
