function societyName(friends) {
    friends.sort();
    let name = "";
    
    for(i=0;i<=friends.length-1;i++){
        name = `${name}${friends[i].charAt(0)}`;
    }
    return name.toUpperCase();
}

test(societyName(['Adam', 'Sarah', 'Malcolm']), 'AMS')
test(societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey']), 'CJMPRR')
test(societyName(['Harry', 'Newt', 'Luna', 'Cho']), 'CHLN')
test(societyName(['Sherlock', 'Irene', 'John']), 'IJS')
test(societyName(['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj']), 'AHPRS')