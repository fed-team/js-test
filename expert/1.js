const words = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly',
    'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make',
    'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 'so', 'summarize', 'summary',
    'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing'];

const cleave = str => {

    const arr = words;
    arr.sort((a, b) => {
        return b.length - a.length;
    });
    // console.log(arr);

    String.prototype.insertSpace = function (indexStart, indexStop) {
        const thirdPart = this.slice(indexStop, this.length);
        const firstPart = this.slice(0, indexStart);
        const secondPart = this.slice(indexStart, indexStop);
        
        return `${firstPart} ${secondPart} ${thirdPart}`;
    }
        let score = ``;
        let count = 0
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];

        let start = 0;
        let stop = el.length;

        // console.log(`weszlo w petle i | i: ${i} | start: ${start} | stop: ${stop} | el: ${el}` );

        for (let j = 0; j < str.length - el.length + 1; j++) {
            let piece = str.slice(start, stop)  

            // console.log(`\t piece: ${piece} | arr[i]: ${arr[i]} | j: ${j} | i: ${i}`);
            start++; stop++;

            if (piece == arr[i]) {
                score = str.insertSpace(j+count, j+piece.length+count);
                console.log(score);
                //console.log(`\t \t Find it! | piece: ${piece} | j: ${j} | j+: ${j+piece.length}`);
                count++
                
                // console.log(`i:${i} |j: ${j} |start: ${start} |stop: ${stop} | `);
                // start = stop-1;
                // stop += el.length-1;
                // console.log(`po zmianach | start: ${start} | stop ${stop} | `);
            }
        }
    }
    // console.log(str);
}

test(cleave('solongandthanksforallthefish'), 'so long and thanks for all the fish')
// test(cleave('solongandthanksforalllthefish'), "Cleaving stalled: Word not found")
// test(cleave('tosummarizethesummaryofthesummarypeopleareaproblem'), 'to summarize the summary of the summary people are a problem')
// test(cleave('timeisanillusionlunchtimedoublyso'), 'time is an illusion lunchtime doubly so')
// test(cleave('ilovedeadlinesilovethewhooshingnoisetheymakeastheygoby'), 'i love deadlines i love the whooshing noise they make as they go by')
// test(cleave('ilovedeadlinesilovethewheezingnoisetheymakeastheygoby'), "Cleaving stalled: Word not found")
// test(cleave('foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen'), 'for a moment nothing happened then after a second or so nothing continued to happen')