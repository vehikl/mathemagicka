import Tokenizer from "./Tokenizer";

describe('Tokenizer', () => {

    it('evaluates a basic token', () => {
        expect(Tokenizer.evaluate('what is this')).toEqual(['what', 'is', 'this']);
    })
});