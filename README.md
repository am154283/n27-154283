# N27-Klausur-20230314

## Aufgabe 1

Beschreiben Sie so präzise wie möglich, was in den Zeilen der server.js geschieht. Die Zeilen können sich durch Ihre Programmierung natürlich verschieben.

### 1a, Zeile 355
* In Mysql werden fragen formuliert
* Das Befehl beginnt mit Select
* Anschließend wird die interessierte Spalte eingegeben
* Die Indexseite wird an den Browser gegeben
* Die Tabelle fragt die Daten ab, welche sich in der Datenbank befinden sobald Select gedrückt wird

^
### 1b, Zeile 380
* Die Iban wird automatisch erzeugt
* Die Iban wird einmalig zugewiesen
* Die Iban bekommt automatsich eine laenderkennung -DE
* Die Zahl 1111111 wird zugewiesen an eine Variable namens min
* Die zahl 9999999 wird zugeordnet an eine Variable namens max



### 1c, Zeilen 420 bis 423
* Die Funktion meineApp kontoAnlegen wird Abgearbeitet sobald das Button auf der Seite gedrückt wird



## Aufgabe 2

### 2a

Wenn in der Navigationsleiste der App auf das *i* geklickt wird (Tooltip zeigt "Über uns"), dann kommt es zu einem Fehler.

Wo liegt das Problem? Wie wird der Fehler korrigert? Bitte mit konkreter Angabe der Zeile!

* Die About *i* Seite kann nicht abgerufen werden
* Die Seite muss mit einem link verknüpft und instanziiert werden 
* Dies erfolgt in der server.js




### 2b

Wenn Sie auf den Button *Neues Konto anlegen* klicken, kommt es zur Fehlermeldung.

Wo liegt das Problem? Wie wird der Fehler korrigert? Bitte mit konkreter Angabe der Zeile!

* Es gibt einen Fehler in der Zeile 406 der server.js
* Es handelt sich um einen rechtschreibfehler (ibahn)
* (ibahn) ist nicht angelegt 
* sobald der richtige Begriff genannt wird der fehler aufgehoben und der Kunde gelangt auf die Seite

### 2c 

Wenn Sie in der Navigationsleiste auf auf das Personen-Symbol (Tooltip zeigt: "Mein Profil") klicken, dann kommt es zu einer fehlerhaften und unvollständigen Darstellung der Personendaten.

Wo liegen die Probleme? Wie werden die Fehler korrigert? Bitte mit konkreter Angabe der Zeile!

* in der profile.ejs ist keine Mail bekannt
* dort muss eine Mail adresse dem Kunden zugeteilt werden
* in der server.js in Zeile 250 befindet sich ein Rechtschreibfehler
* im programm steht die e-mail adresse als "Mail" allerdings steht in der server.js "eMail"

* um die Fehler zu beheben muss man in der profile.ejs die Mail ausgefüllt werden
* in der server.js muss es zu Mail umgenannt werden 




### 2d

In der Navigationsleiste zeigt das Tooltip hinter dem Telefon-Symbol "Über uns". Es muss aber "Support" heißen.

Wie wird der Fehler korrigert? Bitte mit konkreter Angabe der Zeile!
 
 * der fehler liegt in der support.ejs
 * Zeile 28
 * die Zeile muss wie folgt aussehen um den Fehler zu korriegieren:
    <i class="fa fa-phone-square fa-2x" aria-hidden="true" title="Support "></i>


### 2e

Wenn Sie auf das Telefonsymbol in der Navigationsleiste klicken, sehen Sie den Kundenberater Zimmermann. Er hat geheiratet und heißt nun Mustermann.

Wie werden die Personendaten korrigert? Bitte mit konkreter Angabe der Zeilen!

* es muss in der server.js geändert werden 
* in den Zeilen 145 und 147 (die mail adresse)
* um es zu korrigieren müssen die Zeilen wie folgt aussehen:
* 145 :     kundenberater.Nachname = "Mustermann"
* 147 :     kundenberater.Mail = "mustermann@n27.com"





## Aufgabe 3

### 3a

Nehmen Sie an, dass unsere Kundenberater in einer eigenen Tabelle namens *kundenberater* gespeichert werden sollen. Formulieren Sie den SQL-Befehl, mit dem Sie den Kundenberater Mustermann in die Tabelle kundenberater neu einfügen: 

INSERT 
        class Kundenberater{
            constructor()
            this.Idkundenberate
            this.Vorname
            this.Nachname
            this.Kundennummer
        }

## Aufgabe 4

Auf der Supportseite wird die Mail-Adresse des Kundenberaters angezeigt. Es soll nun so sein, dass sich bei Klick auf die Mail-Adresse das Mailprogramm öffnet.
Wie das programmiert werden muss sehen sie z.B. hier: https://www.freecodecamp.org/news/mailto-link-how-to-make-an-html-email-link-example-code/

Wie und wo (Angabe der Datei und der Zeile) muss Ihr Quelltext verändert werden, damit das funktioniert? Kopieren Sie die Zeile hier hinein:
<a href <mailto-link-how-to-make-an-html-email-link-example-code</a>

# Aufgabe 5

Bauen Sie eine neue Seite ein namens ueberweisen.ejs und passen Sie alles an.
Auf der Seite soll der Kunde ausschließlich von einem eigenen Konten Geld an eine beliebige andere IBAN überweisen können.
Bauen Sie ein entsprechendes Formular auf die Seite
Passen Sie die Index-Seite entsprechend an.
Erstellen Sie die app.get(...)

Wenn auf dem Konto kein Geld ist, soll der Button deaktiviert sein. Dazu einige Hilfen:

Der HTML-Quellext mit einem dekativierten Button sieht so aus:

<button class="login" formaction="/kontoAnlegen" disabled>Neues Konto anlegen</button>

Allerdings darf das Wort disabled nur einscheinen, wenn der Konstostand null ist. Also müssen Sie mit dem Ausdruck <%=Disabled%> arbeiten. 
In der server.js muss dann natürlich beim Rendern 

Disabled: disabled,

ausprogrammiert werden. Mit if & else müssen Sie nun versuchen der Variablen disabled den Wert "disabled" oder einfach nur "" zuzuweisen.


Viel Erfolg!




