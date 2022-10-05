# Javascript – Övningar 1-10
För övningarna med inmatning skapa en html-sida med formulär och Javascript i en
egen fil.
Utgå
från javascript-exempel-form.html och js/javascript-exempel-form.js som finns i
mappen javascript-exempel för de Övningar som behöver ha formulär. Döp om
funktionen samt variabler i js-filen till passande namn för varje övning.
Javascript Dag 1 (övning 1 till 10)
## Övning 1 (Variabler, console.log)
Gör ett enkelt script där du sparar namn, adress och telefonnummer i var sin variabel.
Skriv sedan ut värdet för variablerna i console.log. Använd webbläsarens ”Konsol och
dev tools” för att komma åt console.log.
Gör en ny html-fil som heter javascript-ovn-1.html med tillhörande javascript-ovn-1.js
som ligger i en egen katalog js.
## Övning 2 (Variabler, operatorer, console.log)
Gör ett enkelt script där du sparar två tal i var sin variabel. Skapa sedan en variabel som
sparar summan för de två talen. Därefter skapar du en variabel för additionen av de två
talen samt en variabel för produkten av de två talen.
Skriv sedan ut värdet för variablerna i console.log. Använd webbläsarens ”Konsol och
dev tools” för att komma åt console.log.
Gör en ny html-fil som heter javascript-ovn-2.html med tillhörande javascript-ovn-2.js
som ligger i en egen katalog js.
## Övning 3 (Variabler, operatorer)
Gör en enkel kassaapparat. Man skall kunna fylla i hur många av en viss vara kunden
köper och hur mycket de kostar per styck. Det totala priset skall skrivas ut.
Gör ett formulär med två textfält för antal och pris enligt ovan. Gör ett element på htmlsidan där det totala priset skrivs ut.
Använd javascript-exempel-form.html och js/javascript-exempel-form.js att utgå ifrån.
Spara om det till javascript-ovn-3.html och js/javascript-ovn-3.js.
## Övning 4 (Variabler, if-satser, Date Object)
Skriv en hälsning till användaren beroende på vilken tid det är på dygnet. T ex. ”God
förmiddag Jerry”, ”God middag Jerry”.
Gör ett formulär med ett textfält där användaren skriver in sitt namn. Gör ett element på
html-sidan där namnet tillsammans med hälsningen skrivs ut.
Fördjupning: Skriv också en hälsning med vilken årstid det är (kolla vilka metoder som
finns för Date Object för att lösa det).
Använd Date Object.
https://www.w3schools.com/js/js_dates.asp
https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Date
Använd javascript-exempel-form.html och js/javascript-exempel-form.js att utgå ifrån.
Spara om det till javascript-ovn-4.html och js/javascript-ovn-4.js.
(Titta på exemplet: javascript-exempel-datum)
## Övning 5 – Pizzabeställning (variabler, operatorer, if-satser)
Låt användaren mata in i ett formulär för en beställning av pizzor:

1. Välj pizza.
2. Pris för en pizza.
3. Antal pizzor.
Räkna ut priset och skriver ut beställningen i ett element på html-sidan.
Om man har gjort en beställning på över 150 kr ska man få 10 % rabatt på priset. Även
det skrivs ut på html-sidan.
Använd javascript-exempel-form.html och js/javascript-exempel-form.js att utgå ifrån.
Spara om det till javascript-ovn-5.html och js/javascript-ovn-5.js.
## Övning 6 – Vilket väder är det? (variabler, operatorer, if-satser)
Låt användaren svara på frågorna i ett formulär. Skriv ut meddelandet i ett element på
html-sidan.
* Hur är vädret idag, regnar det? (ja eller nej)
* Är det kallt? (ja eller nej)
Om det är kallt och regnar (regn == ’ja’ && kallt == ’ja’) visas meddelandet ”Det regnar
och är kallt idag!”
```js
    let kallt, regn
    if (regn == 'ja' && kallt == 'ja') {}
```
Om det regnar men inte är kallt visas meddelandet ”Det regnar men är varmt idag!”
Om det inte regnar men är kallt visas meddelandet ”Det är torrt men kallt idag!”
Om det inte regnar eller är kallt visas meddelandet ”Det är varmt och soligt idag!”.
Använd javascript-exempel-form.html och js/javascript-exempel-form.js att utgå ifrån.
Spara om det till javascript-ovn-6.html och js/javascript-ovn-6.js.
## Övning 7 – Konvertera Celisus till Fahrenheit (variabler, operatorer)
Man ska kunna konvertera Celsius till Fahrenheit. Gör ett formulär samt ett element att
skriva till på html-sidan.
celsius = (fahrenheit - 32) \* 5 / 9
Använd javascript-exempel-form.html och js/javascript-exempel-form.js att utgå ifrån.
Spara om det till javascript-ovn-7.html och js/javascript-ovn-7.js.
## Övning 8 (For-loop, scope, console.log)
Gör ett enkelt script där du har en variabel som bestämmer hur många gånger en loop
ska köras. Skapa en variabel som ska innehålla en text som skapas i loopen.
Gör en loop som körs så många gånger som variabeln. Fyll variabeln för texten i loopen
med meddelandet ”Nu körs loopen nr 1” etc.
Skriv ut meddelandet i console.log i loopen.
Deklarera variablerna med let. Skriv ut console.log före loopen, (i loopen) och efter
loopen med variablerna för att se vilket värde de har beroende på var man befinner sig i
scriptet.
Spara som javascript-ovn-8.html och js/javascript-ovn-8.js.
## Övning 9 (For-loop, scope)
Gör om programmet ovan så att du använder ett formulär istället där man får mata in en
text och vilket antal som loopen ska köras.
Använd javascript-exempel-form.html och js/javascript-exempel-form.js att utgå ifrån.
Spara om det till javascript-ovn-9.html och js/javascript-ovn-9.js.
## Övning 10 (Arrayer, console.log)
Skapa ett script med en array som innehåller namn på filmer. Låt arrayen få två värden
när den deklareras.
Gör en funktion (showMovies) som loopar genom arrayen som du kan återanvända i
scriptet för att kolla vad arrayen har för innehåll.
Du ska använda metoder som finns i Javascript för att påverka arrayen.
* Lägg till en ny film i arrayen. push()
Visa arrayens innehåll med showMovies().
Ta bort det sista elementet i arrayen. pop()
Visa arrayens innehåll med showMovies().
* Byt namn på första elementet i arrayen. T ex movies[0] = ’Den långa färden’
Visa arrayens innehåll med showMovies().
* Lägg till en ny film i arrayen. push()
Visa arrayens innehåll med showMovies().
* Leta upp index för en film du har i din array. indexOf()
* Ta bort det elementet på det indexet i din array dvs den filmen du har letat upp.
Splice()
Visa arrayens innehåll med showMovies().
* Sortera arrayen. sort()
Visa arrayens innehåll med showMovies().
Spara som javascript-ovn-10.html och js/javascript-ovn-10.js.
(Titta på exemplet: javascript-exempel-array)
Javascript Dag 2 (övning 11 till 16)
