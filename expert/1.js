const words = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly', 'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make', 'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 'so', 'summarize', 'summary', 'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing']

const cleave = str => {
    let possibleWords = [], fixedStr = ``, prototypeOfWord = ``;
    for (let i = 0; i < str.length; i++) {
        prototypeOfWord += str[i];
        if (words.includes(prototypeOfWord)) {
            possibleWords.push(prototypeOfWord);
            for (let x = i + 1; x < i + 10; x++) {
                prototypeOfWord += str[x];
                if (words.includes(prototypeOfWord)) possibleWords.push(prototypeOfWord);
            }
            fixedStr += `${possibleWords[possibleWords.length-1]}`;
            prototypeOfWord = "";
            possibleWords = [];
        }
    }
    return fixedStr.trim();
}

test(cleave('solongandthanksforallthefish'), 'so long and thanks for all the fish')
test(cleave('solongandthanksforalllthefish'), "Cleaving stalled: Word not found")
test(cleave('tosummarizethesummaryofthesummarypeopleareaproblem'), 'to summarize the summary of the summary people are a problem')
test(cleave('timeisanillusionlunchtimedoublyso'), 'time is an illusion lunchtime doubly so')
test(cleave('ilovedeadlinesilovethewhooshingnoisetheymakeastheygoby'), 'i love deadlines i love the whooshing noise they make as they go by')
test(cleave('ilovedeadlinesilovethewheezingnoisetheymakeastheygoby'), "Cleaving stalled: Word not found")
test(cleave('foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen'), 'for a moment nothing happened then after a second or so nothing continued to happen')