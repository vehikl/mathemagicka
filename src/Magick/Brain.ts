import Calculator from "./Calculator";

export default class Brain {
    static evaluate(input: string | string[]) {
        let output: string | string[] = '';

        if (typeof(input) == 'string') {
            console.log('single string check')
            output = Calculator.evaluate(input)
            console.log(output)

        }

        //set of tools to apply to Thought & Question

        //set each in output

        return output;
    }
}
