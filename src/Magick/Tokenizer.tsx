import natural from "natural";

const tokenizer = new natural.WordTokenizer();

export default class Tokenizer {
    static evaluate(input: string) {
        let result = tokenizer.tokenize(input);

        console.log("in: " +  input+ "out: " + result);
        return result;
    }
}