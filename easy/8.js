function societyName(friends) {

    return friends.sort().reduce((acc, el) => acc + el.charAt(0), '');
}

test(societyName(['Adam', 'Sarah', 'Malcolm']), 'AMS')
test(societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey']), 'CJMPRR')
test(societyName(['Harry', 'Newt', 'Luna', 'Cho']), 'CHLN')
test(societyName(['Sherlock', 'Irene', 'John']), 'IJS')
test(societyName(['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj']), 'AHPRS')