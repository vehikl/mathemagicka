import {all, create} from 'mathjs'

const config = {}
const math = create(all, config);


export default class Calculator {
    static evaluate(mathExpression: string, precision: number | null = null) {
        let resultNode = math.evaluate(mathExpression);

        if (precision) {
            resultNode = math.format(resultNode, precision);
        }

        return resultNode.toString();
    }
}
