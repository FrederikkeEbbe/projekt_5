//Kort const id
const hovedContain = document.querySelector('#reg-hoved');
const sydContain = document.querySelector('#reg-syd');
const midtContain = document.querySelector('#reg-midt');
const nordContain = document.querySelector('#reg-nord');
const zeaContain = document.querySelector('#reg-zea');

let isClicked = true;
/*
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
*/
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
/*
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
*/

