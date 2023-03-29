# Klausur am 26.10.2022

1. Fragen zur Datenschutz und / oder Datensicherheit
2. If und else, auch verschachtelt (ifUndElse.js)
3. Für ein Objekt müssen relevante Eigenschaften gefunden werden. Deklaration, Instanziierung und Initialisierung müssen durchgeführt werden. -> let Kunde/ class Kunde (server.js)
4. In der N27-.App muss eine neue Seite nach Aufgabe hinzugefügt werden. Die Seite muss durch Klick auf das vorgegebene Symbol geöffnet werden. Auf der Seite soll ein Wert aus der App angezeigt werden.
ZB: meineApp.get('/about',(browserAnfrage, serverAntwort, next) => {              

    // Wenn der Anmelde-Cookie gesetzt ist, wird der Nutzer zur
    // About-Seite gelenkt.

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        
        // Die About-Seite wird an den Browser gegeben:

        serverAntwort.render('about.ejs',{})
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            Meldung: ""
        })
    }         
})
  
