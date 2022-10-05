
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
// TODO: anrop till globala objekt (console) borde kapslas in av en gemensam funktion för att minska // risken för sidoeffekter
// console.log('häääy');
// console.log('hääääääy på daaj');
// console.log(enFunktion(4, 7));
// console.log("Häj då! Vi ses imorgon!");
// console.log("Det gör vi :D")
// console.log(dubblera(4));


// Innan vi ger oss in i att göra koden mer begriplig så gör vi den lite mer obegriplig. Funktionell 
// programmering är svårt, men det har sina fördelar.

// Eftersom javascripts array-funktion används i så pass många lösningar så tittar vi lite närmare på 
// hur den typen av funktioner är uppbyggda.


 // Här kan vi undersöka om 'u' existerar i något övergripande scope. En funktion ger oss också ett isolerat scope att arbeta i. 
 // Scope är svårt. Fastna inte där, i alla fall inte just nu.
// function U(u = 2) {

//     this.u = Number(u)
//     this.double = () => this.u * 2
//     this.val = () => this.u

//     return this
// }
// console.log(U(2).double())


// Anledningen till att någon skulle vilja skriva kod som ser ut såhär är att de funktioner som skrivs // är enkla att testa, och ger förutsägbara fel.
// Dock blir det rörigt fort om man inte är helt säker på vad man håller på med.

function Radie(r = 0) {
    this.r = Number(r)
    this.d = 0
    this.a = 0
    this.val = 0

    this.diameter = () => {
        this.d = this.r * 2
        this.val = this.d
        return this
    }
    this.area = () => {
        let pi = Math.PI
        this.a = (this.r * 2) * pi
        this.val = a
        return this
    }
    
    this.to = (callback) => {
        callback(this.val)
        return this
    }
    return this
}
let radie = Radie(4)
radie.area().to(console.log).diameter().to(console.log)
