# Javascript – Övningar 11-18

## Övning 11 – Inmatning och validering av formulär
Välj någon av övningarna (hemsidorna) för HTML och CSS, musik eller recept. Gör
färdigt så att den data man matar in visas på sidan när man submittar formuläret. Du ska
också validera det man matar in genom att t ex kolla antal tecken.
Se kodexempel:
javascript-dag2/event/event-handler
javascript-dag2/event/event-listener
javascript-dag2/event/form
## Övning 12 – Utveckla ”Pizzabeställningen” ## Övning 5 från Dag1
Gör en drop-down-meny där man får välja på några pizzor. Du kan titta på exemplet
javascript-dag2-event/form hur man hämtar värden värden från en select, selectedIndex
i Javascript. Du behöver dock skriva om det något då det i det exemplet är kopplat direkt
till ett event på select-menyn men nu är det ett event på en submit av formuläret som
ska komma åt värdet (Lite lurigt att förklara men ni märker vad jag menar när ni skriver
koden). Nu blir det t ex:
let getPizzaChoice = elPizzaChoice.options[elPizzaChoice.selectedIndex].value;
Ta bort textfältet där man anger pris. Gör istället om koden så att man har en if-sats som
bestämmer pris för den pizza man har valt i drop-down-menyn.
Har kvar delen med 10 % rabatt för en beställning över 150 kr.
## Övning 13 – Utveckla ”Konvertera Celisus till Fahrenheit” Övning 7 från Dag 1
Gör om så att användaren kan välja om det ska omvandlas till Celsius eller Fahrenheit
(gör valet i en drop-down-meny, samma som i ## Övning 12 för Pizzabeställningen).
fahrenheit = celsius _ 9 / 5 + 32
celsius = (fahrenheit - 32) _ 5 / 9
Lägg omvandlingen till celsius respektive fahrenheit i varsin funktion i koden.
## Övning 14 – En enkel Att-göra-lista
Titta på exemplet från Dag 2 array-names.
Du ska nu göra en enkel Att-göra-lista där man får mata in en ”post” i listan i ett textfält i
ett formulär.
Det ska också finnas en knapp som visar att-göra-listan när man trycker på den dvs visa
innehållet i en array.
Så långt finns det exempel i array-names-exemplet.
Nu ska du lägga till några funktioner för att påverka/ändra innehållet i arrayen. Titta på
exemplet javascript-exempel-array från Dag 1 för kodexempel (hur man använder
inbyggda metoder för arrayer i Javascript).
* Gör en knapp som kan visa en sorterad att-göra-lista sort(). Gör en egen funktion för
det.
* Gör ett nytt formulär på html-sidan där man får mata in vilken ”post” man vill
uppdatera. Det ska finnas ett textfält att skriva in det gamla namnet på ”posten” och ett
till textfält för att skriva in ett nytt namn. Gör en egen funktion för det i javascript och
koppla en addEventListener till det nya formuläret.
Använd (t ex) let pos = todos.indexOf(’Handla’) och därefter todos[pos] = ”Värdet
från textfältet med det nya namnet på posten i att-göra-listan”.
Fördjupning: Gör en knapp där man får slumpa fram en ”post” i att-göra-listan. Använd
Math.random för att kunna slumpa fram vilket index i arrayen som ska visas samt
length() för att se hur stor arrayen är så att du kan hitta/räkna ut slutvärdet när du ska
göra slumptalet.
Exempel på Math.random finns i exemplet object/math-object för Dag 2. length() för en
array kan du läsa om på https://www.w3schools.com/jsref/jsref_length_array.asp.
let randomNum = Math.floor((Math.random() \* 10)); Slumpar mellan 0 och 10, byt ut 10.
## Övning 15 – Objekt
Skapa ett objekt för en person med egenskaper för namn, adress, telefon, vilket år man
är född. Objektet ska ha en funktion som räknar ut hur gammal man är.
Se kodexempel: javascript-dag2/object/object-literal.html
## Övning 16 – Multipla objekt
Skapa ”multipla” objekt med en konstruktor för en bil. Du skapar sedan två objekt för
två olika bilmodeller.
Låt användaren mata in hastighet och årsmodell för de båda bilmodellerna.
Objektet ska ha en funktion som räknar ut hur gammal bilen är.
Se kodexempel: javascript-dag2/object/ multiple-objects.html
Javascript Dag 3 – JSON och Fetch (Övning 17 – 18)
## Övning 17 - JSON och Fetch
Välj ut någon av hemsidorna (Skiv- eller recept-hemsidan) i Övningarna för HTML och
CSS. Gör en egen JSON-fil som du använder genom Fetch som visar t ex skivor eller
recept som t ex topp-fem-lista.
## Övning 18 – Local Storage
Välj ut någon av hemsidorna (Skiv- eller recept-hemsidan) i Övningarna för HTML och
CSS.
Du ska låta den som går in på hemsidan spara sitt namn/användarnamn genom att
skriva in det i ett formulär/textfält och spara det i en variabel i Local storage. Visa det
sedan på någon av html-sidorna.
Låt användaren välja i en drop-down-meny t ex favorit-ingrediens eller favorit-musikstil
som då sparas i en variabel i Local storage som du visar på någon av html-sidorna.
Utveckla: Tänk ut hur du skulle kunna använda det som användaren fått spara i Local
storage. T ex skriv ett litet program som visar ett tips på en skiva utifrån vilken musikstil
man har valt alternativt visa en maträtt baserat på den ingrediens man har valt.
