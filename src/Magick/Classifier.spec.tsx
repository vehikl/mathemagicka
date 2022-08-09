import Classifier from "./Classifier";

describe('Classifier', () => {
    test.each([
        ['7*2', 'math'],
        ['Sulfur', 'chemistry'],
        ['radium', 'chemistry'],
        ['cos(3pi)', 'math'],
    ])('can evaluate (%s)', (expression, result) => {
        expect(Classifier.evaluate(expression)).toEqual(result);
    });

    it('prints maybe does stuff to console', () => {
        expect(Classifier.evaluate('what')).toBeTruthy();
    })
});