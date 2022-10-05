# Labbövning, refaktoring

Att refaktorera betyder att man skriver om kod som redan fungerar. Till skillnad från buggrättning, som innebär att man felsöker koden och rättar till misstag eller oförutsedda sidoeffekter, så är refaktorering ett proaktivt arbete. Syftet är att koden ska vara läsbar och felsäker så att den är lätt att förstå när man kommer tillbaka till den.

En av grupperna erbjöd generöst sin kod från gruppuppgift 1 som exempel. Syftet med övningen är att visa hur vi ska tänka när vi skriver kod för att lösa problem eller uppgifter.

```js
//This is a very important project

console.log('häääy');
console.log('hääääääy på daaj');

function enFunktion(x, y) {
    u = x + y;
    u+=2;
    return u;
};

console.log(enFunktion(4, 7));

console.log("Häj då! Vi ses imorgon!");

console.log("Det gör vi :D")

console.log(dubblera(4));

function dubblera(x) {
    x = x * 2;
    return x;
}
```
Koden innehåller bland annat exempel på 
* Variabler
* Funktioner 
* Objekt
* Kommentarer

Än så länge verkar den inte fylla någon uppenbar funktion. Men så är det ofta när man ser kod för första gången. Vi börjar med att formatera koden så att den blir lättare att läsa. Definitioner överst (variabler, sedan funktioner), sedan anrop.

```js
// This is a very important project

// TODO: Ge funktioner och variabler namn som beskriver vad de är till för.
function enFunktion(x, y) {
    u = x + y;
    u+=2; // TODO: deklarera u utanför funktionen om den ska vara global.
    return u;
};
// TODO: Ge funktioner och variabler namn som beskriver vad de är till för.
function dubblera(x) {
    x = x * 2;
    return x;
}
// TODO: anrop till ett och samma globala objekt (console) borde kapslas in av en gemensam funktion för att minska risken för sidoeffekter
console.log('häääy');
console.log('hääääääy på daaj');
console.log(enFunktion(4, 7));
console.log("Häj då! Vi ses imorgon!");
console.log("Det gör vi :D")
console.log(dubblera(4));
```

Det mest uppenbara problemet vi ser här är namngivningen. För att förstå vad kod gör så behöver vi namn på funktioner och variabler som har betydelse. 

'x', 'y' och 'u' sägers os ingenting. Så innan vi fortsätter så ger vi koden ett syfte. 'u' saknar deklaration, så vi börjar med det. När en variabel används på det sättet så kan man lätt dra slutsatsen att den är (eller har antagits vara) global, som exempelvis console. Så vi arbetar enligt den principen och flyttar ut den till sin egen funktion, där vi lätt kan avgöra om u existerar eller inte.

```js
function U(u = 2) {
    this.u = u
    return this.u
}
```

