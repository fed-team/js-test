function societyName(friends) {
  let name = "";
  friends.sort().forEach(el => (name = name + el[0]));
  return name;
}

test(societyName(["Adam", "Sarah", "Malcolm"]), "AMS");
test(
  societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]),
  "CJMPRR"
);
test(societyName(["Harry", "Newt", "Luna", "Cho"]), "CHLN");
test(societyName(["Sherlock", "Irene", "John"]), "IJS");
test(societyName(["Sheldon", "Amy", "Penny", "Howard", "Raj"]), "AHPRS");
