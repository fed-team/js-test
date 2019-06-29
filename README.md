Pamiętajcie, że frontend to nie tylko szablony stron www, czy proste formularze. Frontend to czasami również manipulacja danymi pobranymi z serwera. W pliku users.js znajdziecie listę z użytkownikami, określonymi przez id (numer wpisu), name (imię i nazwisko użytkownika) oraz lastly (kiedy wpis został dodany).

Zadanie polega na przeformatowaniu listy za pomocą funkcji w taki sposób, aby otrzymać niezduplikowanych użytkowników. 

Metodę, która rozwiązuje nam zadanie należy umieścić w repozytorium w pliku users.js. Nazwa metody dowolna, lecz koniecznie w języku angielskim.

W wynikowej tablicy interesuje mnie: 
- tylko i wyłącznie pierwszy wpis użytkownika
- id zmniejszone o 1
- dodana nowa właściwość o nazwie "online", z wartością true lub false. True ma się pojawić w przypadku, gdy wpis użytkownika został dodany w przeciągu 30 dni od dnia obecnego. Z dokładnością do dnia, nie godziny.

# Druga część zadania:

Klient sobie zażyczył, żeby backendowcy zmienili datę w polu lately na
- today at 23:00
- yesterday at 10:05

w przypadku gdy wpis nastąpi w dzień pobrania danych z API lub w przeddzień.

Czy mógłbyś zmodyfikować kod, aby spełniał te warunki?
