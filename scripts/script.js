//Hamburger menu function
function hamburger(){
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if(menu.style.display === "block" && logo.style.display === "none"){
        menu.style.display = "none";
        logo.style.display = "block";
    }else{
        menu.style.display = "block";
        logo.style.display = "none";
    }
}
