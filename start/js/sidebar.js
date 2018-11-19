// ##############################################################################################################
// #                                                                                                            #
// # html classes:                                                                                                   #
// # "mohi-": Auto generated classes (by js), are indicated via prefix "mohi-".                                 #
// # "page": Must be set to all Page-divs, inside the main DOM Element                                          #
// # "auto-sidebar": Must be set to the Sidebar-div                                                     #
// # "active": if a div of class "page" has also the "active class, the div is initially set active"            #
// #                                                                                                            #
// ##############################################################################################################

// ############################################################################################################
// Main
// ############################################################################################################

//Parameters
var pmSidebar_Color = "blue";
var div_sidebar = document.getElementsByClassName("auto-sidebar")[0];
var div_sidebar_items; // is defined in CreateLeftSidebar()
var active_div_page = 0;

//On Window Load:
function sidebar_main() {
    Set_mohi_active();
    CreateLeftSidebar();
    ShowOnlyActivePage();
}

//Page Event: Click on Sidebar Item
function sidebarClick(div_clicked) {
    Move_mohi_active(div_clicked);
    ShowOnlyActivePage();
}


// Used Functions ##############################################################################################

function Set_mohi_active() {
    //Init:First Page element is active (default)
    body_clsPage[0].classList.add("mohi-active");
    for (i = 1; i < body_clsPage.length; i++) {
        if (body_clsPage[i].classList.contains("active"))  {
            body_clsPage[0].classList.remove("mohi-active");
            body_clsPage[i].classList.add("mohi-active");
            active_div_page = i;
        }
    }
}

//Create sidebar items for all h2 elelmets
function CreateLeftSidebar() {
    for (i = 0; i < body_tagH2.length; i++) {
        var a = document.createElement("a");

        a.setAttribute("href", "#");
        a.classList.add("mohi-sidebar-item", pmSidebar_Color);
        if (i == active_div_page) { a.classList.add("mohi-active"); };
        a.addEventListener("click", sidebarClick);       
        // Add two spaces at the beginning of each h2 header (will also apply to "a"-Element)
        body_tagH2[i].innerHTML = "&nbsp&nbsp" + body_tagH2[i].innerHTML;
        a.innerHTML = body_tagH2[i].innerHTML;
        //append
        div_sidebar.appendChild(a);
    }
    div_sidebar_items = document.getElementsByClassName("mohi-sidebar-item");
}

//Move class="mohi-active" to 1) mohi-sidebar-item clicked AND page div
function Move_mohi_active(div_clicked) {

    // move "mohi-active" from active sidebar item to that one just clicked
    document.getElementsByClassName("mohi-sidebar-item mohi-active")[0].classList.remove("mohi-active");  // div_sidebar_items.getElelemt... does not work with Chrome
    div_clicked.currentTarget.classList.add("mohi-active");

    // move "mohi-active" from active page to the targeted page
    document.getElementsByClassName("page mohi-active")[0].classList.remove("mohi-active");
    for (i = 0; i < body_clsPage.length; i++) {
        if (body_clsPage[i].innerHTML.indexOf(div_clicked.currentTarget.innerHTML + "</h2>") !== -1) {  
            body_clsPage[i].classList.add("mohi-active");
        }
    }
}

//Hide all content except class="mohi-active" on page load
function ShowOnlyActivePage() {
    for (i = 0; i < body_clsPage.length; i++) {
        body_clsPage[i].style.display = "none";
        if (body_clsPage[i].classList.contains("mohi-active")) { body_clsPage[i].style.display = "block"; }
    }
}
