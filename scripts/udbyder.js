select_element = document.getElementById("kort-filter-stand");
let udbyder = ["Vælg Udbyder", "Clever", "Tesla", "OK", "Spirii", "E-On", "EVDK", "Ionity"];

for (let i = 0; i < udbyder.length; i++) {
    let opt = udbyder[i];
    if (i == 0)
        select_element.innerHTML += "<option value=\"" + opt + "\" selected>" + opt + "</option>";
    else
        select_element.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}

