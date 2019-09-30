const words = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly', 'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make', 'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 'so', 'summarize', 'summary', 'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing']

const cleave = str => {

    const insertSpace = (index, str) => {
        const firstPart = str.slice(0, index);
        const secondPart = str.slice(index, str.length);

        return `${firstPart}${str}${secondPart}`;
    }

    for (let i = 0; i < words.length; i++) {
        const el = words[i];
        const index = str.indexOf(el);
        if ( index > -1) {

            str = insertSpace(index, str);
            console.log(str);
        }
    }

}

test(cleave('solongandthanksforallthefish'), 'so long and thanks for all the fish')
test(cleave('solongandthanksforalllthefish'), "Cleaving stalled: Word not found")
test(cleave('tosummarizethesummaryofthesummarypeopleareaproblem'), 'to summarize the summary of the summary people are a problem')
test(cleave('timeisanillusionlunchtimedoublyso'), 'time is an illusion lunchtime doubly so')
test(cleave('ilovedeadlinesilovethewhooshingnoisetheymakeastheygoby'), 'i love deadlines i love the whooshing noise they make as they go by')
test(cleave('ilovedeadlinesilovethewheezingnoisetheymakeastheygoby'), "Cleaving stalled: Word not found")
test(cleave('foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen'), 'for a moment nothing happened then after a second or so nothing continued to happen')