const wurstIsBetter = str => {

    const arr = ['Kielbasa', 'Chorizo', 'Moronga', 'Salami', 'Sausage', 'Andouille', 'Naem', 'Merguez', 'Gurka', 'Snorkers', 'Pepperoni'];
    
    for (let i = 0; i < arr.length; i++) {
        let reg = new RegExp(arr[i], "gmi");
        str = str.replace(reg, "Wurst");
    }
    
    return str;
}

test(wurstIsBetter("Sausage fests are like salami fests"), "Wurst fests are like Wurst fests")
test(wurstIsBetter("Add the kielbasa and the reserved potatoes and stir through"), "Add the Wurst and the reserved potatoes and stir through")
test(wurstIsBetter("Salami sandwiches, salami and cheese, salami on crackers— I couldn't get enough of the salty, spicy sausage"), "Wurst sandwiches, Wurst and cheese, Wurst on crackers— I couldn't get enough of the salty, spicy Wurst")
test(wurstIsBetter("sich die Wurst vom Brot nehmen lassen"), "sich die Wurst vom Brot nehmen lassen")
test(wurstIsBetter("Bratwurst and Rostbratwurst is a sausage made from finely minced pork and beef and usually grilled and served with sweet German mustard and a piece of bread or hard roll. It can be sliced and made into Currywurst by slathering it in a catchup-curry sauce."), "Bratwurst and Rostbratwurst is a Wurst made from finely minced pork and beef and usually grilled and served with sweet German mustard and a piece of bread or hard roll. It can be sliced and made into Currywurst by slathering it in a catchup-curry sauce.")
test(wurstIsBetter("Il n’arrête pas de faire l’andouille"), "Il n’arrête pas de faire l’Wurst")
test(wurstIsBetter("Naem is a common way of preserving pork meat in several Southeast Asian countries, including Thailand, Laos, Cambodia and Vietnam"), "Wurst is a common way of preserving pork meat in several Southeast Asian countries, including Thailand, Laos, Cambodia and Vietnam")
test(wurstIsBetter("The chipper group over at Orangatang recently dropped another wheel sensation; the Moronga"), "The chipper group over at Orangatang recently dropped another wheel sensation; the Wurst")