function changeStuffOnMyWebsite() {
  document.body.style.color = "red"
  document.body.style.fontSize = 100 + "px"

  // Kannst du die Schriftgrösse für h1 und p separat ändern?
  // Tipp: nutze document.querySelector()
  // Experimentiere mit weiteren HTML-Elementen und CSS-Eigenschaften
}

setTimeout(changeStuffOnMyWebsite, 1000)

/*
 setTimeout löst eine Callback-Funktion nach einer bestimmten Zeitspanne aus.
 Ähnlich funktioniert setInterval: Dies ruft eine Callback-Funktion immer wieder auf.
 Versuche, mit setInterval immer wieder neue Änderungen herbeizuführen.

 Mit diesem Prinzip kannst du eine Website um viele «Spezialeffekten» erweitern.
 Interessant ist dies z.B. in Kombination mit der CSS-Eigenschaft «transition».

*/