var cognome = prompt("Scrivi il tuo cognome")
var arrayCognomi = [ "Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
arrayCognomi.push(cognome)
arrayCognomi.sort()
var outputCognomi= document.getElementById("check")
var outputIndice = document.getElementById("checkNumb")

i=0
while (i<arrayCognomi.length) {
    i++
    outputCognomi.innerHTML = arrayCognomi
}
outputIndice.innerHTML += parseInt(arrayCognomi.indexOf(cognome)) + parseInt(1) 