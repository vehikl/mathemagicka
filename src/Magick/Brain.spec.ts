import Brain from "./Brain";
import {Thought} from "./Thought";



describe('Brain', () => {

    it('taco brains', () => {
        const tmp : Thought = {
            content: [3]
        };

        expect(Brain.evaluate(tmp)).toBeTruthy();
    })
});