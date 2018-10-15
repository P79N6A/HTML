// ##############################################################################################################
// #                                                                                                            
// # Collapses content based on "active" <h4> element in HTMl                                      
// #                                                                                                            
// ##############################################################################################################



// Event triggered by sidebar.js on page load
document.addEventListener("body_WindowOnLoad", collapse);


function collapse() {

    
    

    // set mohi-h4-active to active content
    for (i = 1; i < body_tagH4.length; i++) {
        if (body_tagH4[i].className.indexOf("active") !== -1) {
            // body_tagH4[i].className = divs_main[i].className + " mohi-h4-active";
            body_tagH4[i].classList.add("mohi-h4-active");
            body_tagH4[i].nextElementSibling.style.maxHeight = body_tagH4[i].nextElementSibling.scrollHeight + "px";
        }
    }

    // alle h4 Elemente bekommen das attribut mohi-h4-active
    for (i = 0; i < body_tagH4.length; i++) {
        // if displayed, any click on he content area will close it
        body_tagH4[i].nextElementSibling.addEventListener("dblclick", function () {
            this.style.maxHeight = null;  
            this.previousElementSibling.classList.toggle("mohi-h4-active");
            // CollapseInputToDDCL();
            })  

        // body_tagH4[i].classList.add("mohi-h4-active");
        body_tagH4[i].addEventListener("dblclick", function () {
            this.classList.toggle("mohi-h4-active");
            var content = this.nextElementSibling;
            content.style.maxHeight = null;
            if (this.classList.contains("mohi-h4-active")) {
                content.style.maxHeight = content.scrollHeight + "px"; 
            }
            // CollapseInputToDDCL();
        });
    }
}