const cleave = str => {
    const words = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly',
        'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make',
        'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 'so', 'summarize', 'summary',
        'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing'];

    const arr = words;
    arr.sort((a, b) => b.length - a.length);
    
    let count = '';
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        const sliceStr = str.slice(0, el.length);
        if(sliceStr === el){
            count = `${count} ${sliceStr}`;
            str = str.substr(el.length);
            i = 0;
        }else if(str.length === 0){
            return count.substr(1)
        }
    }
    return "Cleaving stalled: Word not found";
}

test(cleave('solongandthanksforallthefish'), 'so long and thanks for all the fish')
test(cleave('solongandthanksforalllthefish'), "Cleaving stalled: Word not found")
test(cleave('tosummarizethesummaryofthesummarypeopleareaproblem'), 'to summarize the summary of the summary people are a problem')
test(cleave('timeisanillusionlunchtimedoublyso'), 'time is an illusion lunchtime doubly so')
test(cleave('ilovedeadlinesilovethewhooshingnoisetheymakeastheygoby'), 'i love deadlines i love the whooshing noise they make as they go by')
test(cleave('ilovedeadlinesilovethewheezingnoisetheymakeastheygoby'), "Cleaving stalled: Word not found")
test(cleave('foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen'), 'for a moment nothing happened then after a second or so nothing continued to happen')
//for a moment nothing happened then after a second or so nothing continued to happen