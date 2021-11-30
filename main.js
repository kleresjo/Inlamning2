// SELECTOR ELEMENTS
const select = document.querySelector(".valj");
const description = document.querySelector(".Des");
const number = document.querySelector(".Val");
const inkomst = document.querySelector(".inkomst");
const uttext = document.querySelector (".uttext");
const balansDiv = document.querySelector (".balans");


// DEF VARIABLES
const inkomstLista= [];
const kostnadLista= [];

// EVENT LISTENER
document.querySelector("button")
.addEventListener("click", countBudget)


// FUNCTION
function countBudget(e) {
    e.preventDefault();


 if(select.value=="+") {

     inkomstLista.push(number.value);
     inkomst.innerHTML   += `<li> ${description.value}  ${number.value} </li>` 
     number.value= "";
     description.value= "";
} 

 else if(select.value =="-") {

     kostnadLista.push(number.value);
     uttext.innerHTML += `<li> ${description.value}  ${number.value} </li>`
     number.value= "";
     description.value= "";
}
 // Väljer man ingen av ovanstående option så kommer de fram en ruta istället.
else {
    alert ("Välj inkomst eller utgift!");
} 

// LOOP
// För att räkna ut totala saldot/vinsten
var costSum= 0;
    for( var i= 0; i<kostnadLista.length; i++) {
        costSum += Number(kostnadLista[i]);
    }

    var incomeSum=0;
    for( var i= 0; i<inkomstLista.length; i++) { 
        incomeSum += Number(inkomstLista[i]);
    }
    
    // Skriver ut rätt tal på rätt plats, sista räknar ut summan av inkomst och utgift
   uttext.textContent = costSum;
   inkomst.textContent = incomeSum;
   balansDiv.textContent = incomeSum -costSum; 

}
// ANIMATION 
let bild = document.querySelector("img");
let angle = Math.PI / 2;
function animate(time, lastTime) {
if (lastTime != null) {
angle += (time - lastTime) * 0.001;
}
bild.style.top = (Math.sin(angle) * 20) + "px"; // bestämmer höjden som bilden rör sig på
bild.style.left = (Math.cos(angle) * 200) + "px"; // bestämmer längden bilden rör sig på
requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);
