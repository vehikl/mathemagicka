import natural from "natural";

// A janky ass classifier


const classifier = new natural.LogisticRegressionClassifier();

classifier.addDocument('2 + 2', 'math');
classifier.addDocument('7*3 + 2', 'math');
classifier.addDocument('(2 + 4) + 2', 'math');
classifier.addDocument('2*2 + ( 2 / 3)', 'math');
classifier.addDocument('2 + 8', 'math');
classifier.addDocument('sin(45deg)', 'math');
classifier.addDocument('3i - 2', 'math');
classifier.addDocument('7*3', 'math');

classifier.addDocument('Carbon', 'chemistry');
classifier.addDocument('Hydrogen Peroxide', 'chemistry');
classifier.addDocument('Hydrofluoric Acid', 'chemistry');
classifier.addDocument('Boron', 'chemistry');
classifier.addDocument('Molecular Weight of Oxygen', 'chemistry');
classifier.addDocument('density of Al', 'chemistry');
classifier.addDocument('Nitrogen', 'chemistry');

classifier.train();

export default class Classifier {
    static evaluate(input: string) {
    let result = classifier.classify(input);
        console.log(input);
        console.log(classifier.getClassifications(result));
        return result;
    }
}