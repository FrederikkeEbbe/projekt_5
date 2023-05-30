select_element = document.getElementById("kort-filter-stand");
let udbyder = ["Vælg Udbyder", "Clever", "Tesla", "OK", "Spirii", "E-On", "EVDK", "Ionity"];

for (let i = 0; i < udbyder.length; i++) {
    let opt = udbyder[i];
    if (i == 0)
        select_element.innerHTML += "<option value=\"" + opt + "\" selected>" + opt + "</option>";
    else
        select_element.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}

document.getElementById("kort-filter-stand").onchange = function () {
    if (document.getElementById("kort-filter-stand").value == 'Vælg Udbyder')
        function changeBorderColor() {
            let selectElements = document.getElementsByClassName("kort-select");
            for (let i = 0; i < selectElements.length; i++) {
                selectElements[i].style.borderColor = "red";
            }
        }

    let btn = document.getElementsByClassName("kort-btn")[0];
    btn.addEventListener("click", changeBorderColor);
}

