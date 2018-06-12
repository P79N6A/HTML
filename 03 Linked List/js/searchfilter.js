function mySearchfilter() {
    //Var
    var mains = document.getElementsByClassName("main");
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();

    //Loop through all main divs:
    for (j = 0; j < mains.length; j++) {

        //Loop through all list items
        var a_list = mains[j].getElementsByTagName("a");
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

        //Loop through all table row items
        var tr_list = mains[j].getElementsByTagName("tr");
        for (i = 0; i < tr_list.length; i++) {
            tr = tr_list[i];
            if (tr) {
                if (tr.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr.style.display = "";
                } else {
                    tr.style.display = "none";
                }
            }
        }
    }


};