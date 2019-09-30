const words = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly',
    'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make',
    'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second','so', 'summarize', 'summary',
    'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing'];

const cleave = str => {

    //const count = words.length;

    String.prototype.insertSpace = function (index) {
        const firstPart = this.slice(0, index);
        const secondPart = this.slice(index, this.length);
        return `${firstPart} ${secondPart}`;
    }

    let stop = str.length;

    for (let i = str.length-1; i >= 0; i--) {

        let start = i;

        for (let j = words.length-1; j >= 0; j--) {
            let sliceText = str.slice(start, stop);
            if (sliceText == words[j]) {


                


                str = str.insertSpace(i);
                stop = start;
                start = i - 1;
                break;
            }
        }
    }

    console.log(str);
}

test(cleave('solongandthanksforallthefish'), 'so long and thanks for all the fish')
test(cleave('solongandthanksforalllthefish'), "Cleaving stalled: Word not found")
test(cleave('tosummarizethesummaryofthesummarypeopleareaproblem'), 'to summarize the summary of the summary people are a problem')
test(cleave('timeisanillusionlunchtimedoublyso'), 'time is an illusion lunchtime doubly so')
test(cleave('ilovedeadlinesilovethewhooshingnoisetheymakeastheygoby'), 'i love deadlines i love the whooshing noise they make as they go by')
test(cleave('ilovedeadlinesilovethewheezingnoisetheymakeastheygoby'), "Cleaving stalled: Word not found")
test(cleave('foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen'), 'for a moment nothing happened then after a second or so nothing continued to happen')