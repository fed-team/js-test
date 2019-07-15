function societyName(friends) {
<<<<<<< HEAD
    friends.sort();
    let name = "";
    
    for(i=0;i<=friends.length-1;i++){
        name = `${name}${friends[i].charAt(0)}`;
    }
    return name.toUpperCase();
=======
	
>>>>>>> 8c0b4c51e337aae063d1a5e0ad57107227c19f45
}

test(societyName(['Adam', 'Sarah', 'Malcolm']), 'AMS')
test(societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey']), 'CJMPRR')
test(societyName(['Harry', 'Newt', 'Luna', 'Cho']), 'CHLN')
test(societyName(['Sherlock', 'Irene', 'John']), 'IJS')
test(societyName(['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj']), 'AHPRS')