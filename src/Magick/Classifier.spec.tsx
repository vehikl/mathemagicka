import Classifier from "./Classifier";

describe('Classifier', () => {
    // test.each([
    //     ['I', '5'],
    //     ['Love', '5'],
    //     ['Cakes', '5'],
    // ])('can evaluate (%s)', (expression, result) => {
    //     expect(Classifier.evaluate()).toEqual(result);
    // });

    it('prints maybe does stuff to console', () => {
        expect(Classifier.evaluate()).toBeTruthy();
    })
});