import { SentimentAnalyzer, PorterStemmer } from "natural";

const analyzer = new SentimentAnalyzer("English", PorterStemmer, "afinn");
const result = analyzer.getSentiment(["I", "love", "cakes"]);

export default class Classifier {
    static evaluate() {
    console.log(result); // 0.66
        return result;
    }
}