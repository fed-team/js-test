function sayHelloBye (name, num) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return (num ===1) ? `Hello ${name}` : `Bye ${name}`;	
}

test(sayHelloBye('jose', 1), "Hello Jose")
test(sayHelloBye('barry', 1), "Hello Barry")
test(sayHelloBye('jon', 0), "Bye Jon")
test(sayHelloBye('khloy', 1), "Hello Khloy")
test(sayHelloBye('sara', 0), "Bye Sara")
test(sayHelloBye('Jon', 0), "Bye Jon")
test(sayHelloBye('Matt', 1), "Hello Matt")