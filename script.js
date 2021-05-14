//constante waardes, aan te passen om de code te testen
const age = 26;
const firstName = "Bram";
const totalAmount = 101;

// Laat gebruikers weten of zij in aanmerking komen voor korting als zij tussen de 18 en 25 jaar oud zijn.
if (age >= 18 && age <= 25) {

    console.log("Je krijgt 50% korting!")

} else if (age > 25) {

    console.log("Welkom binnen!")

} else {    

    console.log("Helaas ben je nog niet oud genoeg om naar binnen te gaan. Wanneer je 18 bent, ben je van harte welkom.")

}

// Biedt elke gebruiker die Bram of Sarah heet een gratis biertje aan ter ere van het 50 jarig bestaan.
if (firstName == "Bram" || firstName == "Sarah") {

    console.log("Onze kroeg bestaat vandaag 50 jaar! Daarom krijgt iedereen die Sarah of Bram heet vandaag een gratis biertje!")

} else {

    console.log("Wat leuk dat je op onze 50ste verjaardaag aanwezig bent!")
}

// Biedt gebruikers een cadeautje aan op basis van het uitgegeven bedrag aan drankjes. 
if (totalAmount >= 25 && totalAmount < 50) {

    console.log("Omdat je zojuist meer dan 25 euro aan drankjes hebt uitgegeven krijg je van ons een gratis portie (vega)bitterballen! Eet smakelijk. Ook nog zin in een portie nachos? Bestel je voor meer dan 50 euro dan krijg je die ook van ons!")

} else if (totalAmount >= 50 && totalAmount < 100) {

    console.log("Yes, je hebt meer dan 50 euro aan drankjes uitgegeven daarom krijg je van ons deze een gratis portie nachos aangeboden! Eet smakelijk en dankjewel voor de gezelligheid. Ga je door voor de fles champagne? Bij een bedrag van 100 euro krijg je die van ons ;-)")

} else if (totalAmount >= 100) {

    console.log("Gefeliciteerd! Bij deze ontvang je een gratis fles champagne van het huis! Fijn dat jij het zo naar je zin hebt hier.")

} else {

    console.log("Wil jij in aanmerking komen voor een gratis portie (vega)bitterballen, bestel dan minimaal voor 25 euro aan drankjes en je krijgt het van ons!")

}