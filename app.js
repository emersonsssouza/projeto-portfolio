function clickMenu() {
    var listMobile = document.getElementById("menu-list");
    if (listMobile.style.display == "block") {
        listMobile.style.display = "none";
    } else {
        listMobile.style.display = "block";
    }
    console.log("Ativou o menu")
}
