import Brain from "./Brain";
import {Thought} from "./Thought";



describe('Brain', () => {

    it('taco brains', () => {
        const tmp : Thought = {
            content: ['taco1', 'taco2']
        };

        expect(Brain.evaluate(tmp)).toBeTruthy();
    })
});