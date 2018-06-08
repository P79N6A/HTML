
(function() {
    //Var
    var mains = document.getElementsByClassName("main");

    for (j = 0; j < mains.length; j++) {

        //Var
        var d = document.createElement("div");
        var h = document.createElement("h6");
        var current = document.getElementById(mains[j].id);

        //Manipulate
        d.setAttribute("class", "mohi-line");
        h.innerHTML = current.id;

        //Append
        current.appendChild(h);
        current.appendChild(d);

        //For each antry
        for (i = 0; i < var_data[current.id].length; i++) {

            //Var
            var a = document.createElement("a");
            var b = document.createElement("br");

            //Manipulate
            a.setAttribute("href", var_data[current.id][i].url);
            if (var_data[current.id][i].text == null) {
                a.innerHTML = var_data[current.id][i].url;
            }
            if (var_data[current.id][i].text != null) {
                a.innerHTML = var_data[current.id][i].text;
            }


            //Append
            current.appendChild(a);
            current.appendChild(b);
        };
    }
})();

