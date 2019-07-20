function societyName(friends) {
    let firstLetters=[];
    for(let i=0;i<friends.length;i++)
    {
        firstLetters[i]=friends[i][0];
    }
    firstLetters.sort();
    return firstLetters.join("");
}

test(societyName(['Adam', 'Sarah', 'Malcolm']), 'AMS')
test(societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey']), 'CJMPRR')
test(societyName(['Harry', 'Newt', 'Luna', 'Cho']), 'CHLN')
test(societyName(['Sherlock', 'Irene', 'John']), 'IJS')
test(societyName(['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj']), 'AHPRS')