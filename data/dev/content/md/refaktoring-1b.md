# Labbövning, refaktoring lösning 1a: Objektorienterad programmering

När vi lämnade koden såg den ut såhär: 
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
// TODO: anrop till globala objekt (console) borde kapslas in av en gemensam funktion för att minska risken för sidoeffekter
console.log('häääy');
console.log('hääääääy på daaj');
console.log(enFunktion(4, 7));
console.log("Häj då! Vi ses imorgon!");
console.log("Det gör vi :D")
console.log(dubblera(4));
```


```js
 // Här kan vi undersöka om 'u' existerar i något övergripande scope. Scope är svårt. Fastna inte där, i alla fall inte just nu.
function U(u = 2) {
     
    this.u = Number(u)
    this.double = () => return this.u * 2
    this.val = () => return this.u
}
```

