import Brain from "./Brain";



describe('Brain', () => {

    it('taco brains', () => {

        expect(Brain.evaluate('2+3')).toBeTruthy();
    })
});