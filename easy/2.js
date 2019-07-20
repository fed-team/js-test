function sayHelloBye(name, num) {
    if (num == 1) {
        return `Hello ${name.charAt(0).toUpperCase()+name.slice(1)}`;
    } else if (num == 0) {
        return `Bye ${name.charAt(0).toUpperCase()+name.slice(1)}`;
    }
}

test(sayHelloBye('jose', 1), "Hello Jose")
test(sayHelloBye('barry', 1), "Hello Barry")
test(sayHelloBye('jon', 0), "Bye Jon")
test(sayHelloBye('khloy', 1), "Hello Khloy")
test(sayHelloBye('sara', 0), "Bye Sara")
test(sayHelloBye('Jon', 0), "Bye Jon")
test(sayHelloBye('Matt', 1), "Hello Matt")