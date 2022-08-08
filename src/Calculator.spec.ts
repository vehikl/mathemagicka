import Calculator from "./Calculator";

describe('Calculator', () => {
    test.each([
        ['sqrt(3^2 + 4^2)', '5'],
        ['sqrt(-4)', '2i'],
        ['2 inch to cm', '5.08 cm'],
        ['cos(45 deg)', '0.7071067811865476'],
        ['3*2', '6'],
        ['i*i*i', '-i']
    ])('can evaluate (%s)', (expression, result) => {
        expect(Calculator.evaluate(expression)).toEqual(result);
    });

    it('Evaluates functions with specified levels of precision', () => {
        expect(Calculator.evaluate('cos(45 deg)', 1)).toEqual('0.7');
    })
});