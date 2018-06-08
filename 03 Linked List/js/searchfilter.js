function mySearchfilter() {
    //Var
    var mains = document.getElementsByClassName("main");
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();

    //Loop through all main divs:
    for (j = 0; j < mains.length; j++) {
        var a_list = mains[j].getElementsByTagName("a");
        //Loop through all list items
        for (i = 0; i < a_list.length; i++) {
            a = a_list[i];
            if (a) {
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    a.style.display = "";
                } else {
                    a.style.display = "none";
                }
            }
        }
    }


};