const grabCity = str => {
    const reg = /\[[a-zA-Z ]+\]/gmi;

    str = str.match(reg);

    str = str.toString();

    console.log(`${typeof str} | ${str}`);

}

test(grabCity("[Last Day!] Beer Festival [Munich]"), "Munich")
test(grabCity("Cheese Factory Tour [Portland]"), "Portland")
test(grabCity("[Duration: 7 hours] Tour of the Maritimes [Prince Edward Island]"), "Prince Edward Island")
test(grabCity("[5 Stars] Traditional Gondola Experience [Venice]"), "Venice")
test(grabCity("[Last Minute Deal][$1039] Machu Picchu 3 Day Trip [Machu Picchu]"), "Machu Picchu")
test(grabCity("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]"), "Kyoto")