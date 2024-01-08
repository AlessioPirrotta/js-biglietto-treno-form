
const euroKm = 0.21
const buttonSend = document.getElementById("btn")

buttonSend.addEventListener("click", 
function(){
    let valueNome = document.getElementById("nomeCognome").value
    console.log("nome:", valueNome )
    let valueEta = document.getElementById("eta").value
    console.log("Età:", valueEta )
    let valueKm = document.getElementById("km").value
    console.log("km:", valueKm )
    let prezzoBiglietto = euroKm * valueKm
    
if(valueEta < 18){
     prezzoBiglietto = (prezzoBiglietto -(prezzoBiglietto * 0.2))
 }
 else if (valueEta > 65){
     prezzoBiglietto = (prezzoBiglietto -(prezzoBiglietto * 0.4))
 }
 console.log("prezzo biglietto", prezzoBiglietto)

 document.getElementById("spa").innerHTML = "€ "+ prezzoBiglietto.toFixed(2)

})










