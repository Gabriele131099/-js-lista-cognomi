function check() {
    var cognome = document.getElementById("cognome").value;
    cognome = cognome[0].toUpperCase() + cognome.slice(1); 
    
    var arrayCognomi = [ "Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
    arrayCognomi.push(cognome)
    arrayCognomi.sort()
    var outputCognomi= document.getElementById("check")
    var outputIndice = document.getElementById("checkNumb")
   
        outputCognomi.innerHTML =arrayCognomi 
    outputIndice.innerHTML += parseInt(arrayCognomi.indexOf(cognome)) + parseInt(1) 
 };


 