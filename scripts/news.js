function foldOut() {
let dots = document.getElementById("dots");
let moreText = document.getElementById("more");
let btnText = document.getElementById("nyBtn");

if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "Åben";
  moreText.style.display = "none";
} else {
  dots.style.display = "none";
  btnText.innerHTML = "Luk";
  moreText.style.display = "inline";
}
}

let coll = document.getElementsByClassName("ny-collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}