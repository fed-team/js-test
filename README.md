Pamiętajcie, że frontend to nie tylko szablony stron www, czy proste formularze. Frontend to czasami również manipulacja danymi pobranymi z serwera. W pliku users.js znajdziecie listę z pracownikami, określonymi przez id (numer wpisu), name (imię i nazwisko pracownika) oraz lastly (kiedy wpis został dodany).

Zadanie polega na przeformatowaniu listy za pomocą funkcji w taki sposób, aby otrzymać niezduplikowanych pracowników. 

Plik z metodą, która rozwiązuje nam zadanie należy zapisać w repozytorium (output.js). Nazwa metody dowolna, lecz koniecznie w języku angielskim.

W wynikowej tablicy interesuje mnie: 
- tylko i wyłącznie pierwszy wpis użytkownika
- id zmniejszone o 1
- dodana nowa właściwość o nazwie "online", z wartością true lub false. True ma się pojawić w przypadku, gdy wpis użytkownika został dodany w przeciągu 3 dni od dnia obecnego.
