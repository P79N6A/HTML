// ##############################################################################################################
// #                                                                                                            #
// # classes:                                                                                                   #
// # "mohi-": Auto generated classes (by js), are indicated via prefix "mohi-".                                 #
// # "page": Must be set to all Page-divs, inside the main DOM Element                                          #
// # "sidear-1"/"sidebar-2": Must be set to the Sidebar-div                                                     #
// #                                                                                                            #
// ##############################################################################################################

// ############################################################################################################
// Main
// ############################################################################################################

//Parameters
var pmSidebar_Color = "blue";

//On Page Load
var divs_main = document.getElementsByClassName("page");
window.onload = function () {
    divs_main[0].className = divs_main[0].className + " mohi-active";
    ShowActiveOnly();
    CreateLeftSidebar();
}
var sidebarDivs = document.getElementsByClassName("mohi-sidebar-item");
for (i = 0; i < sidebarDivs.length; i++) {
    sidebarDivs[i].addEventListener("click", sidebarClick);
}


//Page Events: Click on Sidebar Item
function sidebarClick(div_clicked) {
    MoveActiveClass(div_clicked);
    ShowActiveOnly();
}


// ############################################################################################################
// Used Functions
// ############################################################################################################

//Move class="mohi-active" to 1) mohi-sidebar-item clicked AND page div
function MoveActiveClass(div_clicked) {
    document.getElementsByClassName("mohi-sidebar-item mohi-active")[0].className = document.getElementsByClassName("mohi-sidebar-item mohi-active")[0].className.replace(/\bmohi-active\b/g, "");
    div_clicked.currentTarget.className = div_clicked.currentTarget.className + " mohi-active";
    document.getElementsByClassName("page mohi-active")[0].className = document.getElementsByClassName("page mohi-active")[0].className.replace(/\bmohi-active\b/g, "");
    for (i = 0; i < divs_main.length; i++) {
        if (divs_main[i].innerHTML.indexOf("<h2>" + div_clicked.currentTarget.innerHTML + "</h2>") !== -1) {
            divs_main[i].className = divs_main[i].className + " mohi-active";
        }
    }

}

//Auto Generate Left Sidebar from all h2 Headers
function CreateLeftSidebar() {
    var divs_h2 = document.getElementsByTagName("h2");
    var div_sidebar = document.getElementsByClassName("sidebar-1")[0]
    if (document.getElementsByClassName("sidebar-2").length == 1) {
        var div_sidebar = document.getElementsByClassName("sidebar-2")[0]
    }

    //create sidebar items
    for (i = 0; i < divs_h2.length; i++) {
        var a = document.createElement("a");

        a.setAttribute("href", "#");
        a.setAttribute("class", "mohi-sidebar-item " + pmSidebar_Color);
        if (i == 0) { a.setAttribute("class", "mohi-sidebar-item mohi-active " + pmSidebar_Color) };
        a.innerHTML = divs_h2[i].innerHTML;
        a.addEventListener("click", sidebarClick);
        div_sidebar.appendChild(a);
    }
}

//Hide all content except class="mohi-active" on page load
function ShowActiveOnly() {

    for (i = 0; i < divs_main.length; i++) {
        divs_main[i].style.display = "none";
        if (divs_main[i].classList.contains("mohi-active")) { divs_main[i].style.display = "block"; }
    }

}
