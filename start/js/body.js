//Globales
var body_clsPage = document.getElementsByClassName("page"); // each page starts with a single h2 elementv
var body_tagH2 = document.getElementsByTagName("h2");
var body_tagH4 = document.getElementsByTagName("h4");
var body_tagH6 = document.getElementsByTagName("h6");
var body_tagH4H6 = [];
var body_tagH4H6visible = [];

// Wondow Load Event:v
window.onload = function () {
    //<obsolete>
    var event = new CustomEvent("body_WindowOnLoad");
    document.dispatchEvent(event);
    //</obsolete>

    
    //sidebar_main();
    //collapse_main();
    datahandler_main();

}

// Wondow Load Event Listener:
document.addEventListener("body_WindowOnLoad", body_main);


function body_main() {
    // var H4s = document.getElementsByTagName("h4");  // alt
    var divs_content = document.getElementsByClassName("content");
    for (i = 0; i < divs_content.length; i++) {

        if (divs_content[i].firstElementChild.tagName == "H6") {
            var nextH6 = divs_content[i].firstElementChild;
            nextH6.style.marginTop = "0em";
        }
    }
    GetH4H6();
}

//++++++++++++++++++++++++++++++++
//HTML content structure:
//
//<div class="page">
//  <h4>...</h4>
//  <div class="content">
//      <h6>---</h6>
//      <h6>---</h6>
//      <h6>---</h6>
//  </div>
//</div>
//++++++++++++++++++++++++++++++++
function GetH4H6() {
    //for each <div class="page">
    for (i = 0; i < body_clsPage.length; i++) {
        //for each child in "page"
        for (j = 0; j < body_clsPage[i].childNodes.length; j++) {
            // <h4>...</h4>:
            if (body_clsPage[i].childNodes[j].tagName == "H4") {
                body_tagH4H6.push(body_clsPage[i].childNodes[j]);
                //  <div class="content">:
                if (body_clsPage[i].childNodes[j+2].tagName == "DIV") {
                    if (body_clsPage[i].childNodes[j + 2].classList.contains("content")) {
                        //for each child in "content"
                        for (k = 0; k<body_clsPage[i].childNodes[j + 2].childNodes.length;k++) {
                            //<h6>---</h6>:
                            if (body_clsPage[i].childNodes[j + 2].childNodes[k].tagName == "H6") {
                                body_tagH4H6.push(body_clsPage[i].childNodes[j + 2].childNodes[k])
                            }
                        }
                        j = j + 2; // since the content element is always at j+2 position, the next possible h4 element is at j+3
                                    // es darf nichts zwischen   <h4>...</h4> und <div class="content"> stehen, auch kein Kommentar
                    }
                }
            }
        }
    }
}



//Interface Functions
//(provide information which <h4> elements are currently active)
function CollapseToDDCL () {
    DDCLSelectedatBeginning=[];
    for (ix =0;ix<body_tagH4H6.length;ix++) {
        if (body_tagH4H6[ix].classList.contains("mohi-h4-active")) {
            DDCLSelectedatBeginning.push(1);
            for (iy = ix;iy<body_tagH4H6.length; iy++) {
                if(body_tagH4H6[iy].tagName == "H6") {
                    DDCLSelectedatBeginning.push(1);
                    ix = ix+1;
                }
            }
            
        }
        else {
            DDCLSelectedatBeginning.push(0);   
        }
    }

}


function DDCLPlus_ScrolltoSelection() {
    var ele2 = document.getElementsByClassName("mohi-selected")[0];
    ele2.scrollIntoView();
    window.scrollBy(0, -80);
}