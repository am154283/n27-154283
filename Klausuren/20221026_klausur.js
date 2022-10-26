console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// 
// Datenschutz: 
//                  schutz vor missbräuchler Datenverarbeitung, auf informationelle Selbstbestimmung, persönlichkietsrechts bei der Datenverarbeitung der Privatsphäre
//                  Der Kern liegt hierbei in Machtungsgliechheit zwischen Organisationen und Einzelpersonen
//
//
// Datensicherhiet: 
//                      Teil der Informationsicherheit
//                      Ziel: Vertraulichkiet, Intergrität, Authentizität, Verfügbarkeit der Daten sicherstellen.
//
// 
// 
// 
// 
// 
// Aufgabe 2 a)
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// 
//
// Symmetrische Verschlüsselung:    Bei der symmetrischen Verschlüsselung wird derselbe Schlüssel zum Codieren, wie auch zum Decodieren verwendet
//                                  Symmetrische Verschlüsselung ist bei stets gleichbleibenden Adressaten sinnvoll 
// 
// 
//
// 
//
// Asymetrische Verschlüsselung:    Wenn sich eine Datei Asymmetrisch verschlüsslet dann muss ich dem Empfänger das Kennwort auf einem sicheren Weg mitteilen.
//                                  Dateien werden mit einem Passwort verschlüsselt und abgespeichert, es kann dann weitergeleitet werden jedoch hat der Empfänger nur zugriff dann wenn er das Passwort weiss     
//                                  
//
// 
// 
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// 
//                                  Asymmetrische Verschlüsselung bietet sich an, wenn sich Empfängerkreise häufig ändern
//                                  Symmetrisch ist genau das Gegegnteil, man merkt sich das PAsswort einmal und muss es danach nicht mehr ändern. Dies schützt vor unbefugtem Einblick von Fremden.
// 
// 
//
//
//
//
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
// 
//  Deklaration:    Für die Instanziierung angaben ergänzen mit this.
//
//
// Instanziierung:  Instanziierung ist einer Klasse (class Schule) eigenschaftswerte im folgenden hinzuzufügen.
//
//
// 
// Initialisierung:  Initialisierung ist. 
//
//
//
//
//
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!

class Schule {
    constructor(){
        this.Schüler
        this.Klasse
        this.Unterricht
        this.Leistungskurse
        this.Lehrer
        this.Fehlstunden
        this.Adresse
        this.Abschluss
    }
}

// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  
//
//
//
//
//

let schule = new Schule ()
schule.Schüler ="Pit Kiff"
schule.Klasse = "GW21A"
schule.Leistungskurse ="Mathe, BWL,"
schule.Lehrer ="Herr Frohmann"
schule.Fehlstunden= 10
schule.Adresse ="Josefstraße 10"
schule.Abschluss ="Wirtschaftsabitur"


// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 







// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
//
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 
// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 
// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"
// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 
// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"

console.log()
let punktePit = 30
let punkteGit = 33

if (punktePit < punkteGit){
    console.log("Git hat das bessere Zeugnis")
}else{
    console.log("Pit hat das bessere Zeugnis")
}
if (punktePit = punkteGit){
    console.log("Pit gleich Git")
}




