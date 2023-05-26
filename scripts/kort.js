//Kort const id
const hovedContain = document.getElementById('reg-hoved');
const sydContain = document.getElementById('reg-syd');
const midtContain = document.getElementById('reg-midt');
const nordContain = document.getElementById('reg-nord');
const zeaContain = document.getElementById('reg-zea');

let isClicked = true;

//sjælland
let visZea = function(){
  if(isClicked) {
    zeaContain.style.display = 'block';
    isClicked = false;
  }
  else{
    zeaContain.style.display = 'none';
    isClicked = true;
  }
}

//hovedstaden
let visHoved = function(){
  if(isClicked) {
    hovedContain.style.display = 'block';
    isClicked = false;
  
  }
  else{
    hovedContain.style.display = 'none';
    isClicked = true;
  }
}

//syd
let visSyd = function(){
  if(isClicked) {
    sydContain.style.display = 'block';
    isClicked = false;
  }
  else{
    sydContain.style.display = 'none';
    isClicked = true;
  }
}

//midt
let visMidt = function(){
  if(isClicked) {
    midtContain.style.display = 'block';
    isClicked = false;
  }
  else{
    midtContain.style.display = 'none';
    isClicked = true;
  }
}

//nord
let visNord = function(){
  if(isClicked) {
    nordContain.style.display = 'block';
    isClicked = false;
  }
  else{
    nordContain.style.display = 'none';
    isClicked = true;
  }
}


// først henter jeg path elementerne fra HTML (dom) 
let paths = document.getElementsByTagName('path')

//nu kan jeg lave et loop og tilføje en eventlistener til hver enkelt path
//den bruger min 'click' event og kører funktionen toggleClass

for(let i=0; i<paths.length; i++){
    paths[i].addEventListener('click', toggleKort)
}

//nu kan man i min 'toggleKort' funktion toggle 'kort-clicked' classen. En slags tænd og sluk
function toggleKort() {
    this.classList.toggle('kort-clicked')
}

/*
for loop note
udtryk 1 udføres (en gang) før afviklingen af ​​kodeblokken.

Udtryk 2 definerer betingelsen for udførelse af kodeblokken.

Udtryk 3 udføres (hver gang), efter at kodeblokken er blevet eksekveret.
*/
