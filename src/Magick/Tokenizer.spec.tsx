import Tokenizer from "./Tokenizer";

describe('Tokenizer', () => {

    it('prints maybe does stuff to console', () => {
        expect(Tokenizer.evaluate('what is this')).toBeTruthy();
    })
});