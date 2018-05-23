
//Insert List Items
for (j = 0;j<table.length;j++) {
    var doc_main = document.getElementsByTagName("main")[0];
    var doc_h6 = document.createElement("H6");
    var doc_line = document.createElement("div");
    var doc_br = document.createElement("br");

    doc_h6.innerHTML = table[j].divID;
    doc_h6.setAttribute("class", "mohi-h6");
    doc_line.setAttribute("class", "mohi-line");

    doc_main.appendChild(doc_h6);
    doc_main.appendChild(doc_line);
    doc_main.appendChild(doc_br);
   
    for (i = 0; i < table[j].Rows.length ; i++) {
    
        var doc_p= document.createElement("p");
        doc_p.innerHTML=table[j].Rows[i].text;
        doc_main.appendChild(doc_p);
    }
    
}