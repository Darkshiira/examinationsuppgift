# Individuell uppgift
Detta är vår examinerande uppgift i kursen Javascript. Instruktioner till uppgiften vi fått följer längst ned på sidan!

## Problemställning:
Jag har i min examinerande uppgift valt att bygga en hemsida där användaren kan anmäla sig(till REST APIn) till att söka efter en grupp i vår klass. Därefter kan de söka reda på vilken grupp de hamnar i efter personlighetsfärg. Sist kan användaren ta reda på mer information om de i klassen, eller söka efter en klasskamrat som har ett specifikt intresse.

### Problemställningens anledning:
Jag har valt att lösa detta problem för att på ett visuellt sett kunna sortera data efter specifika parametrar.

 Detta är något som är viktigt att kunna som webbutvecklare, då flera företag använder sig av data med olika parametrar, som ska kunna sorteras ut, användas vidare samt visualiseras på ett tydligt sätt. T.ex. i olika webbforum, användarsidor eller varför inte dating-sidor?

 Mitt program, med dess funktioner, kan därför användas till att plocka ut information från JSON-filer och enkelt lägga ut dem på en hemsida genom att endast arbeta i DOM-en. 

## Användning av programmet:
Ladda ned repot till VS Code. Kör npm install och sedan öppna servern med npm start, och klicka därefter in på länken Hannas sida. Där kan du skriva in din information i ett forms, för att lägga till dina uppgifter till servern.
Längre ned kan du söka efter personlighetsfärg, samt söka efter deltagare utifrån första namn eller färdigheter/hobbies.

### Användning av Javascript-koden:

Koden består av ett gäng variabler som registrerar forms eller dess värden. Därefter följer ett antal funktioner som är kopplade till addEventListeners. Dessa utförs vid de olika submits av forms.

Den första funktionen, addAPerson, går att användas för att spara information från en användare, i form av JSON, till en server.

De två nästföljande funktionerna, fetchingPersonality och fetchingOwnUserPersonalityType går att användas för att hämta JSON-filers objekt, och printa ut dem i form av en lista. Endast en div behövs i HTML objektet för att kunna lägga listan i. fetchingOwnUserPersonalityType ändrar också färgen på resultatets bakgrund utifrån de fyra personlighetsfärger som är representerade. Dessa färger går självklart att utöka, ändras eller tas bort.

Nästa två funktioner, fetchingUsers och fetchingOwnUser, går att användas för att printa ut information som finns på en användare från servers. I detta fall behövs en div i HTML för att kunna printa ut resultatet, där display är satt till flex. Detta för snygghetens skull, då "resultatsboxarna" hamnar snyggt bredvid varann när de printas.
 I detta fall har jag för enkelhetens skull valt att manipulera dess utseende utifrån innerHTML, men detta skulle kunna gå att ordnas säkrare med mer CSS och HTML inkopplad. 

De två senare funktionerna, findASkill och findOwnSkill, går att användas utifall användaren sparar information i en sträng med fler ord. Där splitas strängen vid varje blanksteg till en array, som sedan går att använda för att söka efter enstaka ord. Därefter plockas strängen ihop igen, med join, så att själva användaren går att sökas upp igen utifrån sökresultatet. Sist går det alltså att printa ut användarens information i en resultsruta. Likt tidigare behövs endast en div i HTML och flex i CSS för att de ska bli prydligt satta bredvid varann.

Den sista funktionen är jag inte stolt över, den är endast till för att använda sig av att submitta formen, och då varken Kevin(en av mina lärare) eller jag lyckades förstå varför min addEventListener inte fungerade, valde vi att sätta en funktion på den.

Resterande kod är diverse addEventListener för varje submit av ett form, där funktionerna kallas och utförs.

### Användningsområde

Koden går att återanvändas för olika fetchning av JSON-filer för att sedan printas ut. Funktionen findASkill eller findOwnSkill går även att användas för att söka efter enstaka ord i en flerords-sträng.
T.ex. om du söker nyckelord i en lång mening:
```
var searchWord = "Katt";
var longSentence = "Det var en gång en katt som var ute på promenad . Han gillar att lapa mjölk ."
Array = [];

Array.push(longSentence.(toLowerCase().split(" "));
if (Array.includes(searcWord.toLowerCase()))
{let reassembledSentence = Array.join(" "); 
console.log(reassembledSentence);}
```
I detta fall får du tillbaka hela meningen och vet att ordet Katt fanns representerad i denna. Detta kan vara användbart när man loopar igenom flera användare som skrivit långa meningar.


## Instruktioner som gavs för uppgiften:
### Steg 1
Gör en fork av det här repot och skapa ett eget, med ett eget namn.
Klona det till valfri katalog på din egen dator. Gå in i mappen och kör följande kommandon från terminalen.
(glöm inte att stå i rätt mapp)
```
    npm install
    npm run init
    npm start
```

### Steg 2
Surfa till http://localhost:3000 och se om du får ut en lista med användare i konsollen
Pröva http://localhost:3000/api och kontrollera de olika endpointsen. Testa att hämta både .md filer och användare.

### Steg 3 lämna in .jsonfilen som skapats i inlämningsmappen i studentportalen
När ditt lokala repo fungerar är grupp uppgiften godkänd (för dig personligen, alla i gruppen ska lämna in sin egen fil).

### Steg 4
Uppgiften är att lösa problem med kod, samt dokumentera både problem och lösning.
Det problem som jag vill att alla börjar med är att använda den data som finns för att hitta lämpliga grupper att samarbeta i, ställa frågor till eller granska kod.

### Steg 5
https://github.com/orgs/GitWebb22/frontend-1_data
Här finns ett repo där ni kan dela er personliga information, så att andra kan använda er som testpersoner. Byt inte namn på några filer så borde det inte uppstå några konflikter.

### Steg 6
Vidare instruktioner kommer...

Skriva innehåll anpassad till en annan utvecklare, vilket problem är det du löser?

## Betygskriterier:
How the individual assignment will be graded.
The assignment is divided into three parts, Godkänd (G) requires that
you meet the basic requirements for each part. To get Väl Godkänd (VG),
at least two of three parts needs to meet the advanced requirement.
1. Definition of the problem.
You are free to use text, images, video, or whatever else medium you
find suiting to accomplish a clearly defined problem. English and
Swedish are both acceptable.
Basic requirements


1.1. A description of the problem you are trying to solve, in your
own words. (what does the program do)


1.2 The reason you are solving this particular problem. (why does
your program exist)


Advanced requirements


1.3 Describe who would benefit from the solution, and in what
context (when) it is relevant.


2. Solving the problem
This is the part where you write code. Solve the problem you defined in
part 1 and show a working example of the code running (either on
index.html or a page linked from index.html)

Basic requirements


2.1 Code that executes roughly as the student intended.

2.2 Code primarily built with variables and functions that have
meaningful names.

2.3 Code that is readable, and contains comments that describe what
each part do

Advanced requirements

2.4 The code is written with a clear understanding of what the
DOM is, how it can be manipulated with javascript.

2.5 The code is consistent, meaning that similar tasks uses
programming-concepts the same way. (programming concepts include
variables, datatypes, functions, scope, context, objects, etc).

3. Technical documentation the solution.
Describe how another developer can apply your solution to their own
code. Write in a way that is meaningful and practical to someone who is
trying to solve the same problem you have solved.

Basic requirements

3.1 A short summary that describe your solution in a sentence or
two.

3.2 A step by step guide to using the code you have written.

3.3 All technical documentation should fit into README.md.

Advanced requirements

3.3 Describe more than one way of reusing your solution.

3.4 Make your code as easy as possible to reuse by someone else.
Show by example how you have taken into account who else might
want to solve your particular problem, as well as when and why.
