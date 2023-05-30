
/* fra tidligere brugt JS
const hovedContain = document.getElementById('reg-hoved');
const sydContain = document.getElementById('reg-syd');
const midtContain = document.getElementById('reg-midt');
const nordContain = document.getElementById('reg-nord');
const zeaContain = document.getElementById('reg-zea');
*/








//tekst til kort - html oncklick - css display
let visTxt = function(el){
  const txtContain = document.getElementById(el);
  if(txtContain.style.display != 'block') {
    txtContain.style.display = 'block';
  }
  else{
    txtContain.style.display = 'none';
  }
}

// fill til kort - click - css
let paths = document.getElementsByTagName('path')

for(let i=0; i<paths.length; i++){
    paths[i].addEventListener('click',toggleKort)
}

function toggleKort() {
    this.classList.toggle('kort-clicked')
}

//tak fordi i så med :)


















/*
for loop note
udtryk 1 udføres (en gang) før afviklingen af ​​kodeblokken.

Udtryk 2 definerer betingelsen for udførelse af kodeblokken.

Udtryk 3 udføres (hver gang), efter at kodeblokken er blevet eksekveret.
*/
