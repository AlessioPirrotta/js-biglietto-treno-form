
const euroKm = 0.21
const buttonSend = document.getElementById("btn")
const biglietto = document.getElementById("bgl")
const buttonDelete = document.getElementById("btnd")
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
 document.getElementById("nm").innerHTML = valueNome
})

buttonSend.addEventListener("click",
function(){
    cambioDisplay( "w-100 d-flex flex-column align-items-center d-block" )
})

function cambioDisplay(display){
    return biglietto.className = display
}


buttonDelete.addEventListener("click", 
function(){
    document.location.reload()
})














