
var gamecontainer = document.getElementById("game-container");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var title   =  document.getElementById("title");
var description=document.getElementById("description");
var image;




    button2.style.display = "none";
    button3.style.display = "none";
    button1.innerHTML = "start";
    inventoryItem.style.display="none";

function start() {  

    
    button1.onclick = function() {
    startup();
    }  
    
    button2.onclick = function() {
    doorzoeken();
    }

    button3.onclick = function() {
    naarbinnen();
    }

    }

function dead() {
    button3.onclick = function() {
    startup();
    }
    button2.style.display = "none";
    button3.style.display = "none";




}




function startup() {
    description.innerHTML = "je moet een meerderen keuzes maken door op de buttons te drukken die op het beeld tevoorschijn komen";
    image=document.createElement("img");
    gamecontainer.appendChild(image);
    image.src="img/house.jpg";
    title.innerHTML="voor het huis";
    description.innerHTML = "Je rijdt door het bos richting je huis je merkt dat je benzine bijna op is je rijd door maar omdat moe ben rij je perongeluk tegen een boom aan je kijkt om je heen en ziet een huis";
    button2.style.display = "inline";
    button3.style.display = "inline";
    button1.innerHTML =  "doorlopen";
    button2.innerHTML = "doorzoeken";
    button3.innerHTML = "naarbinnen";
  
    console.log("Voor het huis")
    button1.onclick = function(){
    doorloop();
    }  
}

function doorloop() {
    description.innerHTML = "je probeert door te lopen maar je komt steeds uit op dezelfde plek je moet wel naarbinnen nu"
    button1.style.display = "none"

}



function doorzoeken() {
    title.innerHTML = "in het huis"
    description.innerHTML = "je kijkt in de achterbak van je auto en vind een zaklamp je gaat daarna in het huis je komt uit bij twee deuren een naar links en een naar rechts"
    image.src="img/house.jpg";
    button1.onclick = function(){
    startup();
    }  
  button2.onclick = function(){
    right();
    }  

}


function naarbinnen() {
    title.innerHTML = "in het huis"
    description.innerHTML = "je loopt richting het huis je opent de deur en ziet twee deuren eentje naar links en een naar rechts"
    image.src="img/house.jpg";
  button3.onclick = function(){
    left();
    }  

}