// Klausur 
// Wenn eine Aufgabe nicht funktioniert, dann bitte auskommentieren: /*  */
console.log("Aufgabe 1")
// Bei der Landtagswahl ergeben sich vereinfacht folgende Prozentpunkte für die Parteien:
let prozentpunkteSPD = 47
let prozentpunkteCDU = 53
// Vergleichen Sie die Ergebnisse mit if/else.
// Geben Sie im Terminal in einem Antwortsatz an, welche Partei die Wahl gewonnen hat.
// Wenn die Werte sich ändern, muss ihr Antwortsatz sich automatisch anpassen.
// Hier Ihre Lösung:


if (prozentpunkteCDU > prozentpunkteSPD){
    console.log("CDU hat die Wahl gewonnen")
}else{
    console.log("SPD hat die Wahl gewonnen")
}


console.log("Aufgabe 2")
// Bei einem großen Unternehmen stehen 900.000 € Ausgaben Einnahmen von 1.000.000 € gegenüber.
// Prüfen Sie mit if/else, ob das Unternehmen Gewinn oder Verlust gemacht hat.
// Arbeiten Sie mit Variablen, die mit den genannten Werten initialisiert werden.
// Geben Sie Ihre Lösung im Terminal aus: 

let einkommenUnternehmen1 = 1.000000
let ausgabenUnternehmen2 = 900.000

if(ausgabenUnternehmen2 < einkommenUnternehmen1){
    console.log("Das Unternhemen hat einen Verlust")
}else{
    console.log("Das Unternehmen hat einen Gewinn in höhe von 100.000 Euro")
}

console.log("Aufgabe 3")
// In einem Handytest sollen Handys miteinander verglichen werden.
// a) Erstellen Sie die Klassendefinition mit mindestens 4 relevanten Eigenschaften:
class GerätApple{
    constructor(){
        this.DisplayDisplay
        this.Akkukapazität
        this.Preis
        this.Qulität
    }
}
class GerätSamsung{
    constructor()
    this.Display
    this.Akkukapazität
    this.Preis
    this.Qulität
// b) Instanzieren Sie zwei Objekte ("Samsung" und "Apple") der von Ihnen erstellten Klasse:


    
// c) Initialisieren Sie beide Objekte mit geeigneten Eigenschaftswerten:
let GerätApple = "Apple" 
let GerätSamsung = "Samsung"  

if(GerätApple === GerätSamsung){
    console.log("GerätApple und GerätSamsung sind gleich.")   
}else{
    console.log("GerätApple und GerätSamsung sind nicht gleich.")
}
// d) Vergleichen Sie mit if/else eine der relevanten Eigenschaften und geben Sie
//    im Terminal aus, ob Samsung oder Apple besser ist im Hinblick auf diese Eigenschaft:
let Gerät1 = "Apple"
let Gerät2 = "Samsung"

if(Gerät1 = Gerät2){
    console.log("Apple ist besser")
}else{
    console.log("Samsung ist besser")
}

console.log("Aufgabe 4")
// Änderung Sie für Ihre ganze Banking-App das Farbschema, indem Sie 
// den grünen Bereich oben und den grünen Bereich unten 
// in eine andere, ansprechende Farbe ändern, 
// so dass die weiße Schrift weiterhin gut lesbar bleibt.
console.log("Aufgabe 5")
// In Ihrer Banking-App soll der Kunde die Kosten für einen Kredit berechnen können.
// Die Formel für die monatliche Zinsbelastung lautet: 
// Zinsen pro Monat = (Kreditbetrag x Zinssatz) ÷ (100 x 12)
// Formulieren Sie auf Papier den "Issue" und dazu 10 sinnvolle Tasks