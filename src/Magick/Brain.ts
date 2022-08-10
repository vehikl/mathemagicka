import Calculator from "./Calculator";

export default class Brain {
    static evaluate(input: string) {
        let output = {};

        try {
            output = Calculator.evaluate(input)
        }
        catch (e) {
            output = 'ERROR ERROR';
        }
        finally{
            return output;
        }

    }
}
