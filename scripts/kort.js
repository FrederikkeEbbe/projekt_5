//Kort const id
const hovedContain = document.getElementById('reg-hoved');
const sydContain = document.getElementById('reg-syd');
const midtContain = document.getElementById('reg-midt');
const nordContain = document.getElementById('reg-nord');
const zeaContain = document.getElementById('reg-zea');

let isClicked = true;


let visTxt = function(el){
  console.log(el)
  const txtContain = document.getElementById(el);
  if(txtContain.style.display != 'block') {
    txtContain.style.display = 'block';
  }
  else{
    txtContain.style.display = 'none';
  }
}

// først henter jeg path elementerne fra HTML (dom) 
let paths = document.getElementsByTagName('path')

//nu kan jeg lave et loop og tilføje en eventlistener til hver enkelt path
//den bruger min 'click' event og kører funktionen toggleClass

for(let i=0; i<paths.length; i++){
    paths[i].addEventListener('click',toggleKort)
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
