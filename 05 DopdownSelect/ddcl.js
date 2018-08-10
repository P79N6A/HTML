// ##############################################################################################################
// #                                                                                                            #
// # Creates a Drop Down Check List                                                                                                  #
// # Position is fixed                             #          #
// #                                                                                                            #
// ##############################################################################################################

var DDCLItems = new Array;
//Input Interface:
var DDCLItems = ["Apple", "Orange Orange Orange Orange Orange", "Grs", "Berry", "Mango", "Banana", "Tomato"];

//Output Interface:
var DDCLItemsChecked = new Array;

//Set Position:
var TOP = "4em";
var RIGHT = "5em";

//Set Width:
var WID1 = "14em";
var WID2 = "12.3em" // = WID1-1.7em


var checkList = document.getElementsByClassName('ddcl')[0];
var anchor = checkList.getElementsByClassName('ddcl-anchor')[0];
var items = checkList.getElementsByClassName('ddcl-items')[0];


window.onload = function () {
    main_DDCL();
}

function main_DDCL() {

    InitDDCL();

    CoreDDCL();

}

function InitDDCL() {
    // Set Position
    checkList.style.right = RIGHT;
    checkList.style.top = TOP;
    //Set Width
    anchor.style.width = WID2;
    items.style.width = WID1;

    //Set DOM Attributes
    items.innerHTML = "";
    items.multiple = true;
    for (i = 0; i < DDCLItems.length; i++) {
        var ul = document.createElement("ul");
        var li = document.createElement("li");

        ul.innerHTML = '<ul class="items"></ul>';
        li.onclick = function (evt) { CheckAndUncheck(evt); };
        li.innerHTML = DDCLItems[i];
        li.style.background = "white"; //muss je lement gemacht werden damit CheckAndUncheck() auf Basis der Backgrounds erkannt wird
        items.appendChild(li);
    }
}

function CoreDDCL() {

    anchor.onclick = function (evt) {
        if (items.classList.contains('visible')) {
            items.classList.remove('visible');
            items.style.display = "none";
        }

        else {
            items.classList.add('visible');
            items.style.display = "block";
        }
    }

    items.onblur = function (evt) {
        items.classList.remove('visible');
    }
}

function GetDDCLChecked() {
    DDCLItemsChecked = [];
    for (i = 0; i < DDCLItems.length; i++) {
        if (items.getElementsByTagName("li")[i].style.background != "white") {
            DDCLItemsChecked.push(DDCLItems[i]);
        }
    }
}

function CheckAndUncheck(evt) {

    if (evt.target.style.background == "white") {
        evt.target.style.background = "#007bff";
        evt.target.style.color = "#fff";
        DDCLItemsChecked.push(evt.target.innerText);
    }
    else {
        evt.target.style.background = "white";
        evt.target.style.color = "";
        DDCLItemsChecked.splice(DDCLItemsChecked.indexOf(evt.target.innerText),1);
    }

}